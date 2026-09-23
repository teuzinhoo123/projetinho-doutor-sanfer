/* ===================== STORAGE HELPERS ===================== */
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

const KEYS = { theme: 'rumo_theme', schedule: 'rumo_schedule', stats: 'rumo_stats', errors: 'rumo_errors', geminiKey: 'rumo_gemini_key', lastSession: 'rumo_last_session' };

// MODELO ATUALIZADO PARA EVITAR ERRO v1beta (agora usa o endpoint universal)
const GEMINI_MODEL = 'gemini-1.5-flash-latest';

/* ===================== THEME ===================== */
function initTheme() {
  const saved = store.get(KEYS.theme, null);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
}
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  store.set(KEYS.theme, next);
});
initTheme();

/* ===================== NAVIGATION & MODALS ===================== */
const views = ['dashboard', 'calendario', 'questoes', 'redacao', 'recursos'];
function showView(name) {
  views.forEach(v => document.getElementById('view-' + v).classList.toggle('active', v === name));
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === name));
  document.getElementById('pomodoroBar').classList.toggle('visible', name === 'questoes' || name === 'redacao');
  if (name === 'calendario') renderCalendar();
  if (name === 'recursos') renderRecursos();
  if (name === 'redacao') renderRedacao();
  if (name === 'dashboard') renderDashboard();
}
document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => showView(btn.dataset.view)));

function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-close').forEach(btn => btn.addEventListener('click', () => closeModal(btn.dataset.close)));
document.querySelectorAll('.modal-overlay').forEach(overlay => overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); }));

document.getElementById('openSettings').addEventListener('click', () => {
  document.getElementById('geminiKeyInput').value = store.get(KEYS.geminiKey, '');
  openModal('modalSettings');
});
document.getElementById('saveGeminiKey').addEventListener('click', () => {
  store.set(KEYS.geminiKey, document.getElementById('geminiKeyInput').value.trim());
  const confirm = document.getElementById('keySaveConfirm');
  confirm.hidden = false; setTimeout(() => confirm.hidden = true, 2000);
});

/* ===================== CHIPS ===================== */
let selectedDisciplina = 'Matemática';
let selectedTipo = 'teoria';
function wireChipGroup(containerId, onSelect) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active'); onSelect(chip.dataset.value);
    });
  });
}
wireChipGroup('chipsDisciplina', v => selectedDisciplina = v);
wireChipGroup('chipsTipo', v => {
  selectedTipo = v;
  const wrapper = document.getElementById('wrapperDisciplina');
  v === 'simulado' ? wrapper.classList.add('disabled') : wrapper.classList.remove('disabled');
});

/* ===================== DASHBOARD ===================== */
function renderDashboard() {
  const h = new Date().getHours();
  document.getElementById('greetingText').textContent = h < 12 ? 'Bom dia! Bora estudar?' : h < 18 ? 'Boa tarde! Bora estudar?' : 'Boa noite! Bora estudar?';
  
  const last = store.get(KEYS.lastSession, null);
  const btnContinuar = document.getElementById('btnContinuar');
  if (last) { 
      btnContinuar.hidden = false; 
      document.getElementById('continueDetail').textContent = `${last.disciplina || 'Geral'} · ${last.tipo}`; 
  } else {
      btnContinuar.hidden = true;
  }

  const stats = store.get(KEYS.stats, { acertos: 0, erros: 0 });
  const total = stats.acertos + stats.erros;
  const pct = total ? Math.round((stats.acertos / total) * 100) : 0;
  document.getElementById('pctAcerto').textContent = pct + '%';
  document.getElementById('statAcertos').textContent = stats.acertos;
  document.getElementById('statErros').textContent = stats.erros;
  document.getElementById('statTotal').textContent = total;
  document.getElementById('ringFg').style.strokeDashoffset = 264 - (264 * pct / 100);

  const today = new Date().toISOString().slice(0, 10);
  const schedule = store.get(KEYS.schedule, []);
  const todays = schedule.filter(t => t.date === today).sort((a, b) => a.hora.localeCompare(b.hora));
  renderTaskList(document.getElementById('todayTasks'), todays, 'Nenhuma tarefa programada para hoje.');
}

function startStudySession(disciplina, tipo) {
  store.set(KEYS.lastSession, { disciplina: tipo === 'simulado' ? null : disciplina, tipo, timestamp: Date.now() });
  if (tipo === 'teoria') { 
      focusMateria = disciplina; 
      showView('recursos'); 
  } else if (tipo === 'simulado') { 
      openModal('modalSimulado'); 
  } else {
    pomodoro.isSimulado = false; 
    pomodoro.mode = 'focus'; 
    pomodoro.remaining = pomodoro.focusSecs;
    clearInterval(pomodoro.timer); 
    pomodoro.running = false; 
    renderPomodoro();
    showView('questoes'); 
    loadQuestion(disciplina);
  }
}
document.getElementById('btnComecar').addEventListener('click', () => startStudySession(selectedDisciplina, selectedTipo));
document.getElementById('btnContinuar').addEventListener('click', () => {
  const last = store.get(KEYS.lastSession, null);
  if (last) startStudySession(last.disciplina, last.tipo);
});

/* ===================== CALENDÁRIO ===================== */
let weekOffset = 0;
let selectedDate = new Date().toISOString().slice(0, 10);

function startOfWeek(date) { const d = new Date(date); d.setDate(d.getDate() - d.getDay()); return d; }

function renderCalendar() {
const base = new Date(); base.setDate(base.getDate() + weekOffset * 7);
const start = startOfWeek(base);
const dowNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const schedule = store.get(KEYS.schedule, []);

const monthFmt = new Intl.DateTimeFormat('pt-BR', { month: 'long' });
document.getElementById('weekLabel').textContent = `${monthFmt.format(start)} ${start.getFullYear()}`;

const weekDays = document.getElementById('weekDays'); weekDays.innerHTML = '';
for (let i = 0; i < 7; i++) {
  const d = new Date(start); d.setDate(start.getDate() + i);
  const iso = d.toISOString().slice(0, 10);
  const count = schedule.filter(t => t.date === iso).length;
  const pill = document.createElement('button');
  pill.className = 'day-pill' + (iso === selectedDate ? ' selected' : '');
  pill.innerHTML = `<span class="dow">${dowNames[i]}</span><span class="dom">${d.getDate()}</span><span class="dot-count">${count ? '●' : ''}</span>`;
  pill.addEventListener('click', () => { selectedDate = iso; renderCalendar(); });
  weekDays.appendChild(pill);
}

const dayFmt = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
document.getElementById('dayLabel').textContent = dayFmt.format(new Date(selectedDate + 'T00:00:00'));
const dayTasks = schedule.filter(t => t.date === selectedDate).sort((a, b) => a.hora.localeCompare(b.hora));
renderTaskList(document.getElementById('dayTasks'), dayTasks, 'Nenhum bloco marcado neste dia.');
}

document.getElementById('weekPrev').addEventListener('click', () => { weekOffset--; renderCalendar(); });
document.getElementById('weekNext').addEventListener('click', () => { weekOffset++; renderCalendar(); });
document.getElementById('btnAddBloco').addEventListener('click', () => { document.getElementById('blocoData').value = selectedDate; openModal('modalBloco'); });

document.getElementById('saveBloco').addEventListener('click', () => {
const schedule = store.get(KEYS.schedule, []);
schedule.push({
  id: 'b' + Date.now(),
  disciplina: document.getElementById('blocoDisciplina').value,
  tipo: document.getElementById('blocoTipo').value,
  date: document.getElementById('blocoData').value,
  hora: document.getElementById('blocoHora').value,
  done: false
});
store.set(KEYS.schedule, schedule);
closeModal('modalBloco');
selectedDate = document.getElementById('blocoData').value;
renderCalendar();
});

function renderTaskList(container, tasks, emptyMsg) {
  container.innerHTML = '';
  if (!tasks.length) { container.innerHTML = `<p class="empty-state">${emptyMsg}</p>`; return; }
  tasks.forEach(task => {
    const el = document.createElement('div'); el.className = 'task-item' + (task.done ? ' done' : '');
    el.innerHTML = `<button class="task-check" data-id="${task.id}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg></button>
      <div class="task-body"><div class="task-title">${task.disciplina}</div><div class="task-meta">${task.hora} · ${task.tipo}</div></div><span class="task-tag">${task.tipo}</span>`;
    el.querySelector('.task-check').addEventListener('click', () => {
      const schedule = store.get(KEYS.schedule, []);
      const t = schedule.find(x => x.id === task.id); if (t) t.done = !t.done;
      store.set(KEYS.schedule, schedule); renderDashboard(); renderCalendar();
    });
    container.appendChild(el);
  });
}

/* ===================== SIMULADO & TRI SIMULADO ===================== */
let simuladoHistory = [];

document.getElementById('btnSimuladoDia1').addEventListener('click', () => { closeModal('modalSimulado'); startSimulado(5.5 * 3600); });
document.getElementById('btnSimuladoDia2').addEventListener('click', () => { closeModal('modalSimulado'); startSimulado(5 * 3600); });

function startSimulado(seconds) {
  pomodoro.isSimulado = true; 
  pomodoro.remaining = seconds; 
  pomodoro.running = true;
  simuladoHistory = [];
  clearInterval(pomodoro.timer); 
  pomodoro.timer = setInterval(tickPomodoro, 1000);
  document.getElementById('btnFinalizarSimulado').style.display = 'inline-block';
  renderPomodoro(); 
  showView('questoes'); 
  loadQuestion(null);
}

document.getElementById('btnFinalizarSimulado').addEventListener('click', finalizarSimulado);

function finalizarSimulado() {
  clearInterval(pomodoro.timer);
  pomodoro.running = false;
  document.getElementById('btnFinalizarSimulado').style.display = 'none';
  
  let pontuacao = 350; 
  let coerencia = 1.0;
  let acertosDificeis = 0; let errosFaceis = 0;
  let acertosTotal = 0; let errosTotal = 0;

  simuladoHistory.forEach(r => {
    if (r.acertou) {
      acertosTotal++;
      if (r.q.dificuldade === 'facil') pontuacao += 45;
      if (r.q.dificuldade === 'media') pontuacao += 65;
      if (r.q.dificuldade === 'dificil') { pontuacao += 85; acertosDificeis++; }
    } else {
      errosTotal++;
      if (r.q.dificuldade === 'facil') errosFaceis++;
    }
  });

  if (acertosDificeis > 0 && errosFaceis > 0) {
     coerencia = 1.0 - (errosFaceis * 0.05); 
     coerencia = Math.max(coerencia, 0.75); 
  }

  let notaFinal = Math.round(pontuacao * coerencia);
  notaFinal = Math.min(Math.max(notaFinal, 0), 1000); 
  if (acertosTotal === 0) notaFinal = 0;

  document.getElementById('notaTRI').textContent = notaFinal;
  document.getElementById('triAcertos').textContent = acertosTotal;
  document.getElementById('triErros').textContent = errosTotal;
  openModal('modalResultadoSimulado');
}

/* ===================== CARREGAMENTO DAS QUESTÕES ===================== */
let activeMateriaFilter = null;

function loadQuestion(materiaFilter) {
  if (materiaFilter !== undefined) activeMateriaFilter = materiaFilter;
  const area = document.getElementById('questaoArea');
  document.getElementById('questoesTitle').textContent = pomodoro.isSimulado ? 'Simulado ENEM (Rodando)' : (activeMateriaFilter || 'Questões Gerais');

  // Lê a constante global MOCK_QUESTIONS do arquivo data.js
  let pool = MOCK_QUESTIONS;
  
  if (activeMateriaFilter && !pomodoro.isSimulado) {
    pool = pool.filter(q => q.materia.toLowerCase().includes(activeMateriaFilter.toLowerCase().split(' ')[0]));
  }

  const currentQuestion = pool[Math.floor(Math.random() * pool.length)];
  renderQuestion(currentQuestion);
}

function renderQuestion(q) {
  const area = document.getElementById('questaoArea');
  const isFilterActive = activeMateriaFilter && !pomodoro.isSimulado;
  
  area.innerHTML = `
    ${isFilterActive ? `<div class="filter-badge">Filtro ativo: ${activeMateriaFilter} <button id="btnLimparFiltro" title="Remover filtro">✕</button></div>` : ''}
    <div class="question-card">
      <div class="q-meta"><span class="q-source">${q.source}</span></div>
      <p class="q-enunciado">${parseMarkdownToHTML(q.enunciado)}</p>
      <div id="qAlts"></div>
      <div id="qFeedback"></div>
      <div class="q-actions" id="qActions">
        <button class="btn btn-ghost" id="btnPularQuestao">Pular</button>
        <button class="btn btn-outline" id="btnExplicarIA">Professor IA</button>
      </div>
    </div>
  `;
  
  const altsEl = document.getElementById('qAlts');
  q.alternativas.forEach(alt => {
    const el = document.createElement('div'); el.className = 'q-alt';
    el.innerHTML = `<span class="q-alt-letter">${alt.letra}</span><span>${parseMarkdownToHTML(alt.texto)}</span>`;
    el.addEventListener('click', () => answerQuestion(q, alt.letra));
    el.dataset.letra = alt.letra; altsEl.appendChild(el);
  });
  
  document.getElementById('btnPularQuestao').addEventListener('click', () => loadQuestion());
  document.getElementById('btnExplicarIA').addEventListener('click', () => explainWithAI(q, null));
  if (document.getElementById('btnLimparFiltro')) {
    document.getElementById('btnLimparFiltro').addEventListener('click', () => { activeMateriaFilter = null; loadQuestion(null); });
  }
}

function answerQuestion(q, chosenLetter) {
  const alts = document.querySelectorAll('.q-alt');
  if (document.querySelector('.q-alt.correct, .q-alt.wrong')) return;
  
  const hit = chosenLetter === q.correta;
  
  alts.forEach(el => {
    el.style.cursor = 'default';
    if (el.dataset.letra === q.correta) el.classList.add('correct');
    else if (el.dataset.letra === chosenLetter) el.classList.add('wrong');
  });

  if (pomodoro.isSimulado) {
    simuladoHistory.push({ acertou: hit, q: q });
  }

  const stats = store.get(KEYS.stats, { acertos: 0, erros: 0 });
  hit ? stats.acertos++ : stats.erros++;
  store.set(KEYS.stats, stats);

  const feedback = document.getElementById('qFeedback');
  feedback.innerHTML = `<div class="q-feedback ${hit ? 'hit' : 'miss'}">${hit ? '✓ Você acertou!' : '✗ Resposta errada. Gabarito: ' + q.correta}</div>`;

  if (!hit) {
      const errors = store.get(KEYS.errors, []);
      errors.unshift({ ...q, chosenLetter, timestamp: Date.now() });
      store.set(KEYS.errors, errors.slice(0, 50));
  }

  document.getElementById('qActions').innerHTML = `
    <button class="btn btn-primary" id="btnProximaQuestao">Próxima questão</button>
    <button class="btn btn-outline" id="btnExplicarIA">Professor IA</button>
  `;
  document.getElementById('btnProximaQuestao').addEventListener('click', () => loadQuestion());
  document.getElementById('btnExplicarIA').addEventListener('click', () => explainWithAI(q, chosenLetter));
}

document.getElementById('btnErrosView').addEventListener('click', () => {
  const errors = store.get(KEYS.errors, []);
  const area = document.getElementById('questaoArea');
  if (!errors.length) {
    area.innerHTML = `<p class="empty-state">Você ainda não errou nenhuma questão. Continue assim!</p>`;
    return;
  }
  area.innerHTML = '<div id="errorListWrap"></div>';
  const wrap = document.getElementById('errorListWrap');
  errors.forEach(err => {
    const el = document.createElement('div');
    el.className = 'error-list-item';
    el.innerHTML = `<span class="q-source">${err.source}</span><span>${err.enunciado.slice(0, 90)}${err.enunciado.length > 90 ? '…' : ''}</span>`;
    el.addEventListener('click', () => renderQuestion(err));
    wrap.appendChild(el);
  });
});

function parseMarkdownToHTML(text) {
  if (!text) return '';
  let html = text.toString();
  html = html.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" class="q-image-inline" alt="Imagem da questão">');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\n/g, '<br>');
  return html;
}

/* ===================== REDAÇÃO ===================== */
let activeEssayIndex = 0; let activeMotivIndex = 0;

function renderRedacao() {
  const tabsEl = document.getElementById('redacaoTabs');
  tabsEl.innerHTML = '';
  ESSAY_THEMES.forEach((theme, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === activeEssayIndex ? ' active' : '');
    btn.textContent = theme.ano;
    btn.addEventListener('click', () => { activeEssayIndex = i; activeMotivIndex = 0; renderRedacao(); });
    tabsEl.appendChild(btn);
  });

  const theme = ESSAY_THEMES[activeEssayIndex];
  document.getElementById('redacaoContent').innerHTML = `
    <span class="essay-year">ENEM ${theme.ano}</span>
    <h3 class="essay-title">${theme.tema}</h3>
    <p class="essay-instructions">${theme.instrucoes}</p>
    <div class="motiv-tabs" id="motivTabs"></div>
    <div class="motiv-text" id="motivText"></div>
  `;
  const motivTabs = document.getElementById('motivTabs');
  theme.motivadores.forEach((m, i) => {
    const btn = document.createElement('button');
    btn.className = 'motiv-btn' + (i === activeMotivIndex ? ' active' : '');
    btn.textContent = m.titulo;
    btn.addEventListener('click', () => { activeMotivIndex = i; renderRedacao(); });
    motivTabs.appendChild(btn);
  });
  document.getElementById('motivText').textContent = theme.motivadores[activeMotivIndex].texto;
}

document.getElementById('btnGerarTema').addEventListener('click', () => {
  let novoIndex;
  do { novoIndex = Math.floor(Math.random() * ESSAY_THEMES.length); } while (novoIndex === activeEssayIndex && ESSAY_THEMES.length > 1);
  activeEssayIndex = novoIndex; activeMotivIndex = 0; renderRedacao();
});

/* ===================== PROFESSOR IA & POMODORO ===================== */
async function callGemini(prompt) {
  const key = store.get(KEYS.geminiKey, '');
  if (!key) throw new Error('SEM_CHAVE');
  
  // Endpoint atualizado e dinâmico para evitar problemas de versão depreciada
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
    method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });
  
  const data = await res.json();
  if (!res.ok) {
     if (data.error && data.error.message && data.error.message.toLowerCase().includes('not found')) {
         throw new Error("MODELO_NAO_ENCONTRADO");
     }
     throw new Error(data.error?.message || 'Erro da API do Gemini');
  }
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Erro ao gerar resposta.';
}

async function explainWithAI(q, chosenLetter) {
  document.getElementById('iaModalTitle').textContent = 'Professor IA'; openModal('modalIA');
  const content = document.getElementById('iaContent');
  if (!store.get(KEYS.geminiKey, '')) { content.innerHTML = '<p>Configure sua chave do Gemini nas configurações (ícone de engrenagem no topo).</p>'; return; }
  content.innerHTML = '<div class="ia-loading"><span class="spinner"></span> Analisando a questão...</div>';

  const altsText = q.alternativas.map(a => `${a.letra}) ${a.texto}`).join('\n');
  const prompt = `Você é professor de cursinho. Explique de forma didática por que a alternativa correta (${q.correta}) está certa e por que a que o aluno marcou (${chosenLetter || 'nenhuma'}) está errada. Máximo 180 palavras.\n\nEnunciado: ${q.enunciado}\n\n${altsText}`;
  
  try { 
      content.innerHTML = parseMarkdownToHTML(await callGemini(prompt)); 
  } catch (err) { 
      if (err.message === "MODELO_NAO_ENCONTRADO") {
          content.innerHTML = `<p>Ocorreu um erro com a versão da API. O Google atualizou os modelos. Por favor, avise o desenvolvedor para atualizar o GEMINI_MODEL no código.</p>`;
      } else {
          content.innerHTML = `<p>Erro: ${err.message}</p>`; 
      }
  }
}

async function learnTopic(materia, topico) {
  document.getElementById('iaModalTitle').textContent = topico; openModal('modalIA');
  const content = document.getElementById('iaContent');
  if (!store.get(KEYS.geminiKey, '')) { content.innerHTML = '<p>Configure sua chave do Gemini nas configurações.</p>'; return; }
  content.innerHTML = '<div class="ia-loading"><span class="spinner"></span> Preparando aula...</div>';

  const prompt = `Explique o tema ${topico} (Matéria: ${materia}) para um aluno do ENEM. Use didática, um exemplo prático e formatação Markdown. Máximo 200 palavras.`;
  try { content.innerHTML = parseMarkdownToHTML(await callGemini(prompt)); } 
  catch (err) { content.innerHTML = `<p>Erro: ${err.message}</p>`; }
}

const pomodoro = { focusSecs: 25 * 60, remaining: 25 * 60, running: false, timer: null, isSimulado: false };
function formatTime(s) { const h = Math.floor(s/3600); const m = Math.floor((s%3600)/60).toString().padStart(2,'0'); const sec = (s%60).toString().padStart(2,'0'); return h>0 ? `${h}:${m}:${sec}`:`${m}:${sec}`; }
function renderPomodoro() {
  document.getElementById('pomodoroBarTime').textContent = formatTime(pomodoro.remaining);
  document.getElementById('pomodoroBarMode').textContent = pomodoro.isSimulado ? 'Simulado ENEM' : 'Foco';
  document.getElementById('pomodoroBarStart').textContent = pomodoro.running ? 'Pausar' : (pomodoro.isSimulado ? 'Continuar Prova' : 'Iniciar');
}
function tickPomodoro() {
  pomodoro.remaining--;
  if (pomodoro.remaining <= 0) {
    if (pomodoro.isSimulado) { clearInterval(pomodoro.timer); pomodoro.running = false; alert("Tempo esgotado! A prova terminou."); finalizarSimulado(); } 
    else { pomodoro.remaining = pomodoro.focusSecs; }
  }
  renderPomodoro();
}
document.getElementById('pomodoroBarStart').addEventListener('click', () => {
  pomodoro.running = !pomodoro.running;
  if (pomodoro.running) pomodoro.timer = setInterval(tickPomodoro, 1000); else clearInterval(pomodoro.timer);
  renderPomodoro();
});
document.getElementById('pomodoroBarReset').addEventListener('click', () => {
  clearInterval(pomodoro.timer); pomodoro.running = false;
  if (!pomodoro.isSimulado) pomodoro.remaining = pomodoro.focusSecs;
  renderPomodoro();
});

/* ===================== INIT ===================== */
const SUBJECT_ICONS = {
  'Matemática': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h10M4 18h16"/></svg>',
  'Ciências da Natureza': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2a15 15 0 010 20 15 15 0 000-20"/></svg>',
  'Linguagens': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
  'Ciências Humanas': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 000 20 15 15 0 000-20"/></svg>'
};

function renderRecursos() {
  const container = document.getElementById('recursosList'); container.innerHTML = '';
  Object.entries(STUDY_TOPICS).forEach(([materia, topicos]) => {
    const card = document.createElement('div'); card.className = 'subject-card';
    card.innerHTML = `<div class="subject-header">
        <div class="subject-header-left">
          <span class="subject-icon">${SUBJECT_ICONS[materia]}</span>
          <div><div class="subject-name">${materia}</div><div class="subject-count">${topicos.length} tópicos</div></div>
        </div>
        <svg class="subject-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="subject-body">${topicos.map(t => `<div class="topic-row"><span>${t}</span><button class="btn btn-xs btn-outline btn-ia-topic" data-materia="${materia}" data-topico="${t}">Aprender</button></div>`).join('')}</div>`;
    card.querySelector('.subject-header').addEventListener('click', () => card.classList.toggle('open'));
    card.querySelectorAll('.btn-ia-topic').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); learnTopic(btn.dataset.materia, btn.dataset.topico); }));
    container.appendChild(card);
  });
}

renderDashboard(); renderPomodoro(); renderRecursos();
