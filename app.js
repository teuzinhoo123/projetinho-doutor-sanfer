/* ===================== STORAGE HELPERS ===================== */
const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

const KEYS = {
  theme: 'rumo_theme',
  schedule: 'rumo_schedule',
  stats: 'rumo_stats',
  errors: 'rumo_errors',
  geminiKey: 'rumo_gemini_key',
  lastSession: 'rumo_last_session',
};

const GEMINI_MODEL = 'gemini-1.5-flash';

/* ===================== THEME ===================== */
function initTheme() {
  const saved = store.get(KEYS.theme, null);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
}
document.getElementById('themeToggle').addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  store.set(KEYS.theme, next);
});
initTheme();

/* ===================== NAVIGATION ===================== */
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
document.querySelectorAll('.nav-item').forEach(btn => {
  btn.addEventListener('click', () => showView(btn.dataset.view));
});

/* ===================== MODALS ===================== */
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.close));
});
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
});
document.getElementById('openSettings').addEventListener('click', () => {
  document.getElementById('geminiKeyInput').value = store.get(KEYS.geminiKey, '');
  openModal('modalSettings');
});
document.getElementById('saveGeminiKey').addEventListener('click', () => {
  store.set(KEYS.geminiKey, document.getElementById('geminiKeyInput').value.trim());
  const confirm = document.getElementById('keySaveConfirm');
  confirm.hidden = false;
  setTimeout(() => confirm.hidden = true, 2000);
});

/* ===================== CHIPS E LÓGICA DO SIMULADO ===================== */
let selectedDisciplina = 'Matemática';
let selectedTipo = 'teoria';

function wireChipGroup(containerId, onSelect) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      onSelect(chip.dataset.value);
    });
  });
}
wireChipGroup('chipsDisciplina', v => selectedDisciplina = v);

wireChipGroup('chipsTipo', v => {
  selectedTipo = v;
  const wrapper = document.getElementById('wrapperDisciplina');
  if (v === 'simulado') {
    wrapper.classList.add('disabled');
  } else {
    wrapper.classList.remove('disabled');
  }
});

/* ===================== DASHBOARD ===================== */
function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Bom dia! Bora estudar?';
  if (h < 18) return 'Boa tarde! Bora estudar?';
  return 'Boa noite! Bora estudar?';
}

function tipoLabel(tipo) {
  return { teoria: 'Teoria', exercicio: 'Exercício', simulado: 'Simulado', redacao: 'Redação' }[tipo] || tipo;
}

function renderDashboard() {
  document.getElementById('greetingText').textContent = greeting();
  const last = store.get(KEYS.lastSession, null);
  const btnContinuar = document.getElementById('btnContinuar');
  if (last) {
    btnContinuar.hidden = false;
    document.getElementById('continueDetail').textContent = `${last.disciplina || 'Geral'} · ${tipoLabel(last.tipo)}`;
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
  const ring = document.getElementById('ringFg');
  const circumference = 264;
  ring.style.strokeDashoffset = circumference - (circumference * pct / 100);

  const today = new Date().toISOString().slice(0, 10);
  const schedule = store.get(KEYS.schedule, []);
  const todays = schedule.filter(t => t.date === today).sort((a, b) => a.hora.localeCompare(b.hora));
  renderTaskList(document.getElementById('todayTasks'), todays, 'Nenhuma tarefa para hoje. Que tal adicionar uma no cronograma?');
}

function renderTaskList(container, tasks, emptyMsg) {
  container.innerHTML = '';
  if (!tasks.length) {
    container.innerHTML = `<p class="empty-state">${emptyMsg}</p>`;
    return;
  }
  tasks.forEach(task => {
    const el = document.createElement('div');
    el.className = 'task-item' + (task.done ? ' done' : '');
    el.innerHTML = `
      <button class="task-check" data-id="${task.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
      </button>
      <div class="task-body">
        <div class="task-title">${task.disciplina}</div>
        <div class="task-meta">${task.hora} · ${tipoLabel(task.tipo)}</div>
      </div>
      <span class="task-tag">${tipoLabel(task.tipo)}</span>
    `;
    el.querySelector('.task-check').addEventListener('click', () => toggleTask(task.id));
    container.appendChild(el);
  });
}

function toggleTask(id) {
  const schedule = store.get(KEYS.schedule, []);
  const task = schedule.find(t => t.id === id);
  if (task) task.done = !task.done;
  store.set(KEYS.schedule, schedule);
  renderDashboard();
  renderCalendar();
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

document.getElementById('btnSimuladoDia1').addEventListener('click', () => { closeModal('modalSimulado'); startSimulado(5.5 * 3600); });
document.getElementById('btnSimuladoDia2').addEventListener('click', () => { closeModal('modalSimulado'); startSimulado(5 * 3600); });

function startSimulado(seconds) {
  pomodoro.isSimulado = true;
  pomodoro.remaining = seconds;
  pomodoro.running = true;
  clearInterval(pomodoro.timer);
  pomodoro.timer = setInterval(tickPomodoro, 1000);
  renderPomodoro();
  showView('questoes');
  loadQuestion(null);
}

/* ===================== CALENDÁRIO ===================== */
let weekOffset = 0;
let selectedDate = new Date().toISOString().slice(0, 10);

function startOfWeek(date) {
  const d = new Date(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

function renderCalendar() {
  const base = new Date();
  base.setDate(base.getDate() + weekOffset * 7);
  const start = startOfWeek(base);
  const dowNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const schedule = store.get(KEYS.schedule, []);

  const monthFmt = new Intl.DateTimeFormat('pt-BR', { month: 'long' });
  document.getElementById('weekLabel').textContent = `${monthFmt.format(start)} ${start.getFullYear()}`;

  const weekDays = document.getElementById('weekDays');
  weekDays.innerHTML = '';
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
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
document.getElementById('btnAddBloco').addEventListener('click', () => {
  document.getElementById('blocoData').value = selectedDate;
  openModal('modalBloco');
});
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

/* ===================== TRADUTOR DE MARKDOWN ===================== */
function parseMarkdownToHTML(text) {
  if (!text) return '';
  let html = text.toString();
  
  html = html.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" class="q-image-inline" alt="Imagem da questão">');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/\n\n/g, '<br><br>');
  html = html.replace(/\n/g, '<br>');
  
  return html;
}

/* ===================== QUESTÕES: FETCH E LÓGICA ===================== */
const MOCK_QUESTIONS = [
  {
    id: 'mock-1', source: 'Banco local', materia: 'Matemática',
    enunciado: 'Uma loja vende um produto por R$ 240,00 à vista ou em 3 parcelas iguais com juros de 5% ao mês sobre o valor parcelado. Qual o valor aproximado de cada parcela?',
    alternativas: [{ letra: 'A', texto: 'R$ 80,00' }, { letra: 'B', texto: 'R$ 84,00' }, { letra: 'C', texto: 'R$ 88,20' }, { letra: 'D', texto: 'R$ 92,40' }, { letra: 'E', texto: 'R$ 96,00' }],
    correta: 'C'
  }
];

const QUESTION_SOURCES = [
  {
    name: 'ENEM API',
    url: 'https://api.enem.dev/v1/exams/2022/questions?limit=50',
    parse(data) {
      const list = data.questions || data.data || data;
      return list.map((q, i) => {
        let enunciadoFinal = '';
        if (q.context) enunciadoFinal += q.context + '\n\n';
        if (q.alternativesIntroduction) enunciadoFinal += q.alternativesIntroduction;
        else if (q.title) enunciadoFinal += q.title;

        return {
          id: 'enemdev-' + Date.now() + '-' + i,
          source: 'Questões ENEM',
          materia: q.discipline || null,
          enunciado: enunciadoFinal,
          alternativas: (q.alternatives || []).map(a => ({ letra: a.letter, texto: a.text })),
          correta: q.correctAlternative
        };
      });
    }
  }
];

async function fetchQuestionsFromAPIs() {
  for (const src of QUESTION_SOURCES) {
    try {
      const res = await fetch(src.url, { headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const parsed = src.parse(data).filter(q => q.enunciado && q.alternativas.length);
      if (parsed.length > 0) return parsed;
    } catch (err) {
      console.warn(`Fonte falhou.`, err.message);
    }
  }
  return MOCK_QUESTIONS;
}

function checkMateriaMatch(apiMateria, filter) {
  if (!apiMateria || !filter) return false;
  const a = apiMateria.toLowerCase();
  const b = filter.toLowerCase();
  if (b.includes('natureza') && a.includes('natureza')) return true;
  if (b.includes('humanas') && a.includes('humanas')) return true;
  if (b.includes('linguagens') && a.includes('linguagens')) return true;
  if (b.includes('matemática') && (a.includes('matemática') || a.includes('matematica'))) return true;
  return false;
}

let questionQueue = [];
let currentQuestion = null;
let activeMateriaFilter = null;

async function loadQuestion(materiaFilter) {
  if (materiaFilter !== undefined) activeMateriaFilter = materiaFilter;
  const area = document.getElementById('questaoArea');
  
  area.innerHTML = `<div class="empty-state">Buscando questão...</div>`;
  document.getElementById('questoesTitle').textContent = pomodoro.isSimulado ? 'Simulado ENEM' : 'Questões';

  try {
    if (!questionQueue.length) {
      questionQueue = await fetchQuestionsFromAPIs();
    }
    
    let pool = questionQueue;
    
    if (activeMateriaFilter && !pomodoro.isSimulado) {
      let filtered = pool.filter(q => checkMateriaMatch(q.materia, activeMateriaFilter));
      
      if (filtered.length === 0) {
        const moreData = await fetchQuestionsFromAPIs();
        questionQueue.push(...moreData);
        filtered = questionQueue.filter(q => checkMateriaMatch(q.materia, activeMateriaFilter));
      }
      
      pool = filtered.length ? filtered : MOCK_QUESTIONS.filter(q => q.materia === activeMateriaFilter);
    }
    
    if (!pool.length) pool = MOCK_QUESTIONS;

    currentQuestion = pool[Math.floor(Math.random() * pool.length)];
    questionQueue = questionQueue.filter(q => q.id !== currentQuestion.id);
    
    renderQuestion(currentQuestion);
  } catch (err) {
    area.innerHTML = `<div class="empty-state">Erro ao carregar. Tente de novo.</div>`;
  }
}

function renderQuestion(q) {
  const area = document.getElementById('questaoArea');
  const isFilterActive = activeMateriaFilter && !pomodoro.isSimulado;
  
  area.innerHTML = `
    ${isFilterActive ? `<div class="filter-badge">Filtro ativo: ${activeMateriaFilter} <button id="btnLimparFiltro" title="Remover filtro">✕</button></div>` : ''}
    <div class="question-card">
      <div class="q-meta"><span class="q-source">${q.source || 'ENEM'}</span></div>
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
    const el = document.createElement('div');
    el.className = 'q-alt';
    el.innerHTML = `<span class="q-alt-letter">${alt.letra}</span><span>${parseMarkdownToHTML(alt.texto)}</span>`;
    el.addEventListener('click', () => answerQuestion(q, alt.letra));
    el.dataset.letra = alt.letra;
    altsEl.appendChild(el);
  });
  
  document.getElementById('btnPularQuestao').addEventListener('click', () => loadQuestion());
  document.getElementById('btnExplicarIA').addEventListener('click', () => explainWithAI(q, null));
  const btnLimpar = document.getElementById('btnLimparFiltro');
  if (btnLimpar) {
    btnLimpar.addEventListener('click', (e) => { 
      e.stopPropagation(); 
      activeMateriaFilter = null; 
      loadQuestion(null); 
    });
  }
}

function answerQuestion(q, chosenLetter) {
  const alts = document.querySelectorAll('.q-alt');
  if (document.querySelector('.q-alt.correct, .q-alt.wrong')) return;
  
  alts.forEach(el => {
    el.style.cursor = 'default';
    if (el.dataset.letra === q.correta) el.classList.add('correct');
    else if (el.dataset.letra === chosenLetter) el.classList.add('wrong');
  });

  const stats = store.get(KEYS.stats, { acertos: 0, erros: 0 });
  const hit = chosenLetter === q.correta;
  if (hit) stats.acertos++; else stats.erros++;
  store.set(KEYS.stats, stats);

  const feedback = document.getElementById('qFeedback');
  feedback.innerHTML = `<div class="q-feedback ${hit ? 'hit' : 'miss'}">${hit ? '✓ Você acertou!' : '✗ Resposta errada. Gabarito: ' + q.correta}</div>`;

  if (!hit) {
    const errors = store.get(KEYS.errors, []);
    errors.unshift({ ...q, chosenLetter, timestamp: Date.now() });
    store.set(KEYS.errors, errors.slice(0, 50));
  }

  const actions = document.getElementById('qActions');
  actions.innerHTML = `
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

/* ===================== PROFESSOR IA (GEMINI) ===================== */
async function callGemini(prompt) {
  const key = store.get(KEYS.geminiKey, '');
  if (!key) throw new Error('SEM_CHAVE');
  
  const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });
  
  const data = await res.json();
  
  if (!res.ok) {
    if (res.status === 503 || res.status === 429 || (data.error && data.error.message.toLowerCase().includes('high demand'))) {
      throw new Error('OVERLOAD');
    }
    if (res.status === 400 || res.status === 401 || res.status === 403) {
      throw new Error('INVALID_KEY');
    }
    throw new Error(data.error?.message || 'Erro desconhecido na API do Gemini');
  }
  
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Não foi possível gerar uma resposta.';
}

async function explainWithAI(q, chosenLetter) {
  document.getElementById('iaModalTitle').textContent = 'Professor IA';
  openModal('modalIA');
  const content = document.getElementById('iaContent');
  
  if (!store.get(KEYS.geminiKey, '')) {
    content.innerHTML = `<p>Você ainda não configurou sua chave da API do Gemini. Toque no ícone de engrenagem no topo para adicionar.</p>`;
    return;
  }
  content.innerHTML = `<div class="ia-loading"><span class="spinner"></span> Analisando a questão...</div>`;

  const altsText = q.alternativas.map(a => `${a.letra}) ${a.texto}`).join('\n');
  const prompt = `Você é um professor de cursinho pré-vestibular. Explique de forma didática a seguinte questão, indicando por que a alternativa correta (${q.correta}) está certa e por que a alternativa que o aluno escolheu (${chosenLetter || 'ele não escolheu'}) está incorreta. Seja breve, no máximo 180 palavras.\n\nEnunciado: ${q.enunciado}\n\nAlternativas:\n${altsText}`;

  try {
    const text = await callGemini(prompt);
    content.innerHTML = parseMarkdownToHTML(text);
  } catch (err) {
    if (err.message === 'OVERLOAD') {
      content.innerHTML = `<p>O servidor do Professor IA está tomando um fôlego porque há muitos acessos agora. Tente novamente em alguns segundos! 🧘‍♂️</p>`;
    } else if (err.message === 'INVALID_KEY' || err.message === 'SEM_CHAVE') {
      content.innerHTML = `<p>Sua chave de acesso é inválida. Verifique se copiou corretamente em Configurações.</p>`;
    } else {
      content.innerHTML = `<p>Erro ao consultar: ${err.message}</p>`;
    }
  }
}

async function learnTopic(materia, topico) {
  document.getElementById('iaModalTitle').textContent = topico;
  openModal('modalIA');
  const content = document.getElementById('iaContent');
  
  if (!store.get(KEYS.geminiKey, '')) {
    content.innerHTML = `<p>Configure sua chave da API do Gemini nas configurações.</p>`;
    return;
  }
  content.innerHTML = `<div class="ia-loading"><span class="spinner"></span> Preparando mini-aula...</div>`;

  const prompt = `Atue como um professor de cursinho focado no ENEM. Explique o tema ${topico} (Matéria: ${materia}) de forma didática e clara, incluindo um macete. Responda em português do Brasil, máximo 200 palavras. Use formatação em Markdown (negritos e tópicos).`;

  try {
    const text = await callGemini(prompt);
    content.innerHTML = parseMarkdownToHTML(text);
  } catch (err) {
    if (err.message === 'OVERLOAD') {
      content.innerHTML = `<p>O servidor está ocupado no momento. Respire fundo e tente em alguns segundos! 🧘‍♂️</p>`;
    } else {
      content.innerHTML = `<p>Erro: ${err.message}</p>`;
    }
  }
}

/* ===================== REDAÇÃO ===================== */
const ESSAY_THEMES = [
  { ano: 2023, tema: 'Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil', instrucoes: 'A partir da leitura dos textos motivadores...', motivadores: [{ titulo: 'Texto I', texto: 'O trabalho de cuidado, historicamente atribuído às mulheres...' }] },
  { ano: 2022, tema: 'Desafios para a valorização de comunidades e povos tradicionais no Brasil', instrucoes: 'Redija um texto dissertativo-argumentativo...', motivadores: [{ titulo: 'Texto I', texto: 'Povos indígenas e quilombolas mantêm modos de vida que contribuem...' }] }
];

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

/* ===================== HUB DE RECURSOS TURBINADO ===================== */
const STUDY_TOPICS = {
  'Matemática': [
    'Matemática Financeira e Porcentagem', 'Razão e Proporção', 'Regra de Três (Simples e Composta)',
    'Leitura de Gráficos e Tabelas', 'Estatística (Média, Moda e Mediana)', 'Funções do 1º e 2º grau', 
    'Geometria Plana (Áreas e Perímetros)', 'Geometria Espacial (Cálculo de Volume)', 'Trigonometria Básica', 
    'Probabilidade', 'Análise Combinatória', 'Logaritmos (Propriedades)'
  ],
  'Ciências da Natureza': [
    'Ecologia e Impactos Ambientais', 'Citologia (Células e Organelas)', 'Genética (Leis de Mendel)',
    'Fisiologia Humana (Sistemas)', 'Leis de Newton (Dinâmica)', 'Termologia e Calorimetria',
    'Ondulatória e Acústica', 'Eletrodinâmica (Circuitos e Resistores)', 'Estequiometria',
    'Ligações Químicas e Polaridade', 'Separação de Misturas', 'Química Orgânica (Reações)'
  ],
  'Linguagens': [
    'Interpretação de Texto Avançada', 'Funções da Linguagem', 'Figuras de Linguagem',
    'Variação Linguística', 'Gêneros Textuais', 'Modernismo no Brasil (1ª, 2ª e 3ª fases)', 
    'Romantismo e Realismo', 'Arte Contemporânea e Vanguardas', 'Intertextualidade e Metalinguagem',
    'Coesão e Coerência Textual', 'Linguagem Corporal e Esportes', 'Impacto das Tecnologias na Comunicação'
  ],
  'Ciências Humanas': [
    'Era Vargas', 'Ditadura Militar no Brasil', 'República Oligárquica',
    'Guerra Fria', 'Revolução Industrial', 'Geopolítica e Conflitos Contemporâneos',
    'Globalização e Blocos Econômicos', 'Urbanização e Migração', 'Geografia Agrária e Agronegócio',
    'Filosofia Antiga (Grécia)', 'Filosofia Moderna (Iluminismo e Contratualistas)', 'Sociologia: Cultura e Trabalho'
  ]
};

const SUBJECT_ICONS = {
  'Matemática': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h10M4 18h16"/></svg>',
  'Ciências da Natureza': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2a15 15 0 010 20 15 15 0 000-20"/></svg>',
  'Linguagens': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>',
  'Ciências Humanas': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 000 20 15 15 0 000-20"/></svg>'
};

let focusMateria = null;

function renderRecursos() {
  const container = document.getElementById('recursosList');
  container.innerHTML = '';
  Object.entries(STUDY_TOPICS).forEach(([materia, topicos]) => {
    const isOpen = materia === focusMateria;
    const card = document.createElement('div');
    card.className = 'subject-card' + (isOpen ? ' open' : '');
    card.innerHTML = `
      <div class="subject-header">
        <div class="subject-header-left">
          <span class="subject-icon">${SUBJECT_ICONS[materia]}</span>
          <div>
            <div class="subject-name">${materia}</div>
            <div class="subject-count">${topicos.length} grandes tópicos</div>
          </div>
        </div>
        <svg class="subject-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="subject-body">
        ${topicos.map(t => `
          <div class="topic-row">
            <span class="topic-name">${t}</span>
            <button class="btn btn-xs btn-ia-topic" data-materia="${materia}" data-topico="${t}">Aprender com Professor IA</button>
          </div>
        `).join('')}
      </div>
    `;
    card.querySelector('.subject-header').addEventListener('click', () => { card.classList.toggle('open'); });
    card.querySelectorAll('.btn-ia-topic').forEach(btn => {
      btn.addEventListener('click', (e) => { e.stopPropagation(); learnTopic(btn.dataset.materia, btn.dataset.topico); });
    });
    container.appendChild(card);
  });
  focusMateria = null;
}

/* ===================== CRONÔMETRO HÍBRIDO ===================== */
const pomodoro = { focusSecs: 25 * 60, restSecs: 5 * 60, remaining: 25 * 60, mode: 'focus', running: false, timer: null, isSimulado: false };

function formatTime(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return h > 0 ? `${h}:${m}:${sec}` : `${m}:${sec}`;
}

function renderPomodoro() {
  document.getElementById('pomodoroBarTime').textContent = formatTime(pomodoro.remaining);
  if (pomodoro.isSimulado) {
    document.getElementById('pomodoroBarMode').textContent = 'Simulado ENEM';
    document.getElementById('pomodoroBarStart').textContent = pomodoro.running ? 'Pausar' : 'Continuar';
  } else {
    document.getElementById('pomodoroBarMode').textContent = pomodoro.mode === 'focus' ? 'Foco' : 'Descanso';
    document.getElementById('pomodoroBarStart').textContent = pomodoro.running ? 'Pausar' : 'Iniciar';
  }
}

function tickPomodoro() {
  pomodoro.remaining--;
  if (pomodoro.remaining <= 0) {
    if (pomodoro.isSimulado) {
      clearInterval(pomodoro.timer);
      pomodoro.running = false;
      alert("Tempo esgotado! Canetas para baixo!");
    } else {
      pomodoro.mode = pomodoro.mode === 'focus' ? 'rest' : 'focus';
      pomodoro.remaining = pomodoro.mode === 'focus' ? pomodoro.focusSecs : pomodoro.restSecs;
    }
  }
  renderPomodoro();
}

document.getElementById('pomodoroBarStart').addEventListener('click', () => {
  pomodoro.running = !pomodoro.running;
  if (pomodoro.running) pomodoro.timer = setInterval(tickPomodoro, 1000);
  else clearInterval(pomodoro.timer);
  renderPomodoro();
});
document.getElementById('pomodoroBarReset').addEventListener('click', () => {
  clearInterval(pomodoro.timer);
  pomodoro.running = false;
  if (pomodoro.isSimulado) {
     alert("Você não pode reiniciar o relógio no meio do Simulado!"); 
     pomodoro.running = true;
     pomodoro.timer = setInterval(tickPomodoro, 1000);
  } else {
    pomodoro.mode = 'focus';
    pomodoro.remaining = pomodoro.focusSecs;
  }
  renderPomodoro();
});

/* ===================== INIT ===================== */
renderDashboard();
renderPomodoro();
