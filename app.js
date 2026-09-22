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

const GEMINI_MODEL = 'gemini-3.5-flash';

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

/* ===================== CHIPS (HOME) ===================== */
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
wireChipGroup('chipsTipo', v => selectedTipo = v);

/* ===================== DASHBOARD ===================== */
function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Bom dia! Bora estudar?';
  if (h < 18) return 'Boa tarde! Bora estudar?';
  return 'Boa noite! Bora estudar?';
}

function renderDashboard() {
  document.getElementById('greetingText').textContent = greeting();

  const last = store.get(KEYS.lastSession, null);
  const btnContinuar = document.getElementById('btnContinuar');
  if (last) {
    btnContinuar.hidden = false;
    document.getElementById('continueDetail').textContent = `${last.disciplina} · ${tipoLabel(last.tipo)}`;
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

function tipoLabel(tipo) {
  return { teoria: 'Teoria', exercicio: 'Exercício', revisao: 'Revisão', simulado: 'Simulado', redacao: 'Redação' }[tipo] || tipo;
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

/* Roteamento inteligente: Teoria -> Recursos filtrado | Exercícios/Revisão/Simulado -> Questões filtradas */
function startStudySession(disciplina, tipo) {
  store.set(KEYS.lastSession, { disciplina, tipo, timestamp: Date.now() });
  if (tipo === 'teoria') {
    focusMateria = disciplina;
    showView('recursos');
  } else {
    showView('questoes');
    loadQuestion(disciplina);
  }
}

document.getElementById('btnComecar').addEventListener('click', () => {
  startStudySession(selectedDisciplina, selectedTipo);
});

document.getElementById('btnContinuar').addEventListener('click', () => {
  const last = store.get(KEYS.lastSession, null);
  if (!last) return;
  startStudySession(last.disciplina, last.tipo);
});

/* ===================== CALENDÁRIO ===================== */
let weekOffset = 0;
let selectedDate = new Date().toISOString().slice(0, 10);

function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - day);
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

/* ===================== QUESTÕES: ADAPTADORES MULTI-API ===================== */
const MOCK_QUESTIONS = [
  {
    id: 'mock-1', source: 'Banco local', materia: 'Matemática',
    enunciado: 'Uma loja vende um produto por R$ 240,00 à vista ou em 3 parcelas iguais com juros de 5% ao mês sobre o valor parcelado. Qual o valor aproximado de cada parcela?',
    imagem: null,
    alternativas: [
      { letra: 'A', texto: 'R$ 80,00' },
      { letra: 'B', texto: 'R$ 84,00' },
      { letra: 'C', texto: 'R$ 88,20' },
      { letra: 'D', texto: 'R$ 92,40' },
      { letra: 'E', texto: 'R$ 96,00' }
    ],
    correta: 'C'
  },
  {
    id: 'mock-2', source: 'Banco local', materia: 'Linguagens',
    enunciado: 'Em textos argumentativos, a coesão referencial tem papel central na construção do sentido. Assinale a alternativa em que o termo destacado retoma corretamente um elemento anterior do texto: "A educação pública brasileira enfrenta desafios estruturais. ELA precisa de investimento contínuo."',
    imagem: null,
    alternativas: [
      { letra: 'A', texto: '"Ela" retoma "educação pública brasileira"' },
      { letra: 'B', texto: '"Ela" retoma "desafios estruturais"' },
      { letra: 'C', texto: '"Ela" retoma "investimento"' },
      { letra: 'D', texto: '"Ela" não possui referente no texto' },
      { letra: 'E', texto: '"Ela" retoma o texto como um todo' }
    ],
    correta: 'A'
  },
  {
    id: 'mock-3', source: 'Banco local', materia: 'Ciências da Natureza',
    enunciado: 'O desmatamento da Amazônia altera o regime de chuvas em regiões distantes da floresta devido a um fenômeno conhecido como "rios voadores". Esse fenômeno está diretamente relacionado a qual processo do ciclo hidrológico?',
    imagem: null,
    alternativas: [
      { letra: 'A', texto: 'Infiltração' },
      { letra: 'B', texto: 'Escoamento superficial' },
      { letra: 'C', texto: 'Evapotranspiração' },
      { letra: 'D', texto: 'Condensação nas geleiras' },
      { letra: 'E', texto: 'Percolação subterrânea' }
    ],
    correta: 'C'
  },
  {
    id: 'mock-4', source: 'Banco local', materia: 'Ciências Humanas',
    enunciado: 'Durante a Guerra Fria, o mundo se organizou em torno de dois blocos ideológicos antagônicos. Qual par representa corretamente essas potências e suas respectivas ideologias?',
    imagem: null,
    alternativas: [
      { letra: 'A', texto: 'Estados Unidos (socialismo) e URSS (capitalismo)' },
      { letra: 'B', texto: 'Estados Unidos (capitalismo) e URSS (socialismo)' },
      { letra: 'C', texto: 'França (capitalismo) e China (socialismo)' },
      { letra: 'D', texto: 'Alemanha (socialismo) e Japão (capitalismo)' },
      { letra: 'E', texto: 'Reino Unido (socialismo) e Cuba (capitalismo)' }
    ],
    correta: 'B'
  }
];

const QUESTION_SOURCES = [
  {
    name: 'enem-api (yunger7)',
    url: 'https://api.enem.dev/v1/exams/2022/questions?limit=10',
    parse(data) {
      const list = data.questions || data.data || data;
      return list.map((q, i) => ({
        id: 'enemdev-' + (q.index || i),
        source: 'enem.dev',
        materia: q.discipline || null,
        enunciado: q.context || q.title || q.alternativesIntroduction || '',
        imagem: q.files && q.files[0] ? q.files[0] : null,
        alternativas: (q.alternatives || []).map(a => ({ letra: a.letter, texto: a.text })),
        correta: q.correctAlternative
      }));
    }
  },
  {
    name: 'docs.enem.dev',
    url: 'https://docs.enem.dev/api/questions?limit=10',
    parse(data) {
      const list = data.results || data;
      return list.map((q, i) => ({
        id: 'docs-' + i,
        source: 'docs.enem.dev',
        materia: q.discipline || null,
        enunciado: q.enunciado || q.statement || '',
        imagem: q.image || null,
        alternativas: (q.options || []).map((t, idx) => ({ letra: String.fromCharCode(65 + idx), texto: t })),
        correta: q.answer
      }));
    }
  },
  {
    name: 'ENEM Hub',
    url: 'https://platform.enemhub.com.br/api/questions?size=10',
    parse(data) {
      const list = data.content || data;
      return list.map((q, i) => ({
        id: 'hub-' + i,
        source: 'ENEM Hub',
        materia: q.discipline || null,
        enunciado: q.statement || q.text || '',
        imagem: q.imageUrl || null,
        alternativas: (q.alternatives || []).map(a => ({ letra: a.letter, texto: a.description })),
        correta: q.correctAlternative
      }));
    }
  },
  {
    name: 'API das Questões',
    url: 'https://apidasquestoes.com.br/enem/questoes?limit=10',
    parse(data) {
      const list = data.questoes || data;
      return list.map((q, i) => ({
        id: 'apidasq-' + i,
        source: 'API das Questões',
        materia: q.materia || null,
        enunciado: q.enunciado || '',
        imagem: q.imagem || null,
        alternativas: (q.alternativas || []).map(a => ({ letra: a.letra, texto: a.texto })),
        correta: q.gabarito
      }));
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
      if (parsed.length) return parsed;
    } catch (err) {
      console.warn(`Fonte "${src.name}" falhou, tentando próxima...`, err.message);
    }
  }
  console.info('Todas as fontes externas falharam. Usando banco local de questões.');
  return MOCK_QUESTIONS;
}

let questionQueue = [];
let currentQuestion = null;
let activeMateriaFilter = null;

async function loadQuestion(materiaFilter) {
  if (materiaFilter !== undefined) activeMateriaFilter = materiaFilter;
  const area = document.getElementById('questaoArea');
  area.innerHTML = `<div class="empty-state">Carregando questão...</div>`;
  document.getElementById('questoesTitle').textContent = activeMateriaFilter ? `Questões · ${activeMateriaFilter}` : 'Questões';

  if (!questionQueue.length) questionQueue = await fetchQuestionsFromAPIs();
  let pool = questionQueue;
  if (activeMateriaFilter) {
    const filtered = pool.filter(q => q.materia === activeMateriaFilter);
    pool = filtered.length ? filtered : MOCK_QUESTIONS.filter(q => q.materia === activeMateriaFilter);
  }
  if (!pool.length) pool = MOCK_QUESTIONS;

  currentQuestion = pool[Math.floor(Math.random() * pool.length)];
  questionQueue = questionQueue.filter(q => q.id !== currentQuestion.id);
  renderQuestion(currentQuestion);
}

function renderQuestion(q) {
  const area = document.getElementById('questaoArea');
  area.innerHTML = `
    ${activeMateriaFilter ? `<div class="filter-note">Filtrando por ${activeMateriaFilter} <button id="btnLimparFiltro" style="border:none;background:none;color:inherit;font-weight:700;cursor:pointer;">✕</button></div>` : ''}
    <div class="question-card">
      <div class="q-meta"><span class="q-source">${q.source}</span></div>
      ${q.imagem ? `<img class="q-image" src="${q.imagem}" alt="Imagem da questão">` : ''}
      <p class="q-enunciado">${q.enunciado}</p>
      <div id="qAlts"></div>
      <div id="qFeedback"></div>
      <div class="q-actions" id="qActions">
        <button class="btn btn-ghost" id="btnPularQuestao">Pular</button>
        <button class="btn btn-outline" id="btnExplicarIA">Professor IA: Me explica?</button>
      </div>
    </div>
  `;
  const altsEl = document.getElementById('qAlts');
  q.alternativas.forEach(alt => {
    const el = document.createElement('div');
    el.className = 'q-alt';
    el.innerHTML = `<span class="q-alt-letter">${alt.letra}</span><span>${alt.texto}</span>`;
    el.addEventListener('click', () => answerQuestion(q, alt.letra));
    el.dataset.letra = alt.letra;
    altsEl.appendChild(el);
  });
  document.getElementById('btnPularQuestao').addEventListener('click', () => loadQuestion());
  document.getElementById('btnExplicarIA').addEventListener('click', () => explainWithAI(q, null));
  const btnLimpar = document.getElementById('btnLimparFiltro');
  if (btnLimpar) btnLimpar.addEventListener('click', (e) => { e.stopPropagation(); loadQuestion(null); });
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
    <button class="btn btn-outline" id="btnExplicarIA">Professor IA: Me explica?</button>
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

/* ===================== FORMATAÇÃO MARKDOWN SIMPLES ===================== */
function markdownToHtml(text) {
  const lines = text.split('\n');
  let html = '';
  let inList = false;
  lines.forEach(line => {
    const trimmed = line.trim();
    const isBullet = /^[-*]\s+/.test(trimmed);
    const isNumbered = /^\d+[.)]\s+/.test(trimmed);
    if (isBullet || isNumbered) {
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${trimmed.replace(/^[-*]\s+|^\d+[.)]\s+/, '')}</li>`;
    } else {
      if (inList) { html += '</ul>'; inList = false; }
      if (trimmed) html += `<p>${trimmed}</p>`;
    }
  });
  if (inList) html += '</ul>';
  return html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>');
}

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
  if (!res.ok) throw new Error(data.error?.message || 'Erro na API do Gemini');
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Não foi possível gerar uma resposta.';
}

async function explainWithAI(q, chosenLetter) {
  document.getElementById('iaModalTitle').textContent = 'Professor IA';
  openModal('modalIA');
  const content = document.getElementById('iaContent');
  if (!store.get(KEYS.geminiKey, '')) {
    content.innerHTML = `<p>Você ainda não configurou sua chave da API do Gemini. Toque no ícone de engrenagem no topo para adicionar sua chave gratuita.</p>`;
    return;
  }
  content.innerHTML = `<div class="ia-loading"><span class="spinner"></span> Gerando explicação...</div>`;

  const altsText = q.alternativas.map(a => `${a.letra}) ${a.texto}`).join('\n');
  const prompt = `Você é um professor de cursinho pré-vestibular, didático e encorajador. Explique de forma clara e passo a passo a seguinte questão estilo ENEM, indicando por que a alternativa correta (${q.correta}) está certa e, se o aluno errou, por que a alternativa escolhida (${chosenLetter || 'nenhuma ainda'}) está incorreta. Use linguagem simples, em português do Brasil, em no máximo 180 palavras.\n\nEnunciado: ${q.enunciado}\n\nAlternativas:\n${altsText}`;

  try {
    const text = await callGemini(prompt);
    content.innerHTML = markdownToHtml(text);
  } catch (err) {
    content.innerHTML = `<p>Erro ao consultar o Professor IA: ${err.message}. Verifique se sua chave é válida em Configurações.</p>`;
  }
}

async function learnTopic(materia, topico) {
  document.getElementById('iaModalTitle').textContent = topico;
  openModal('modalIA');
  const content = document.getElementById('iaContent');
  if (!store.get(KEYS.geminiKey, '')) {
    content.innerHTML = `<p>Você ainda não configurou sua chave da API do Gemini. Toque no ícone de engrenagem no topo para adicionar sua chave gratuita.</p>`;
    return;
  }
  content.innerHTML = `<div class="ia-loading"><span class="spinner"></span> Preparando mini-aula...</div>`;

  const prompt = `Atue como um professor de cursinho focado no ENEM. Explique o tema ${topico} de forma didática e clara, incluindo um exemplo prático ou macete. Contexto: matéria de ${materia}. Responda em português do Brasil, em no máximo 220 palavras.`;

  try {
    const text = await callGemini(prompt);
    content.innerHTML = markdownToHtml(text);
  } catch (err) {
    content.innerHTML = `<p>Erro ao consultar o Professor IA: ${err.message}. Verifique se sua chave é válida em Configurações.</p>`;
  }
}

/* ===================== MOMENTO REDAÇÃO ===================== */
const ESSAY_THEMES = [
  {
    ano: 2023,
    tema: 'Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil',
    instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.',
    motivadores: [
      { titulo: 'Texto I', texto: 'O trabalho de cuidado, historicamente atribuído às mulheres, envolve atividades como cuidar de crianças, idosos e do lar. Embora essencial para a manutenção da sociedade, esse trabalho raramente é reconhecido, remunerado ou contabilizado nas estatísticas econômicas oficiais, o que perpetua desigualdades de gênero no mercado de trabalho e na distribuição de renda.' },
      { titulo: 'Texto II', texto: 'Pesquisas mostram que mulheres dedicam, em média, o dobro de horas semanais a afazeres domésticos e cuidados não remunerados em comparação aos homens. Essa sobrecarga limita o tempo disponível para qualificação profissional, lazer e participação política, restringindo a autonomia econômica feminina.' },
      { titulo: 'Texto III', texto: 'Países que implementaram políticas públicas de valorização do cuidado, como creches gratuitas e licença parental equilibrada entre os gêneros, registraram aumento na participação feminina no mercado formal de trabalho e redução das desigualdades salariais entre homens e mulheres.' }
    ]
  },
  {
    ano: 2022,
    tema: 'Desafios para a valorização de comunidades e povos tradicionais no Brasil',
    instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.',
    motivadores: [
      { titulo: 'Texto I', texto: 'Povos indígenas, quilombolas, ribeirinhos e outras comunidades tradicionais mantêm modos de vida e saberes ancestrais que contribuem para a preservação ambiental e a diversidade cultural do país, mas frequentemente enfrentam invisibilidade social e disputas territoriais.' },
      { titulo: 'Texto II', texto: 'A demarcação de terras tradicionais é um processo lento e frequentemente contestado judicialmente, o que gera insegurança para essas populações e favorece o avanço de atividades como garimpo ilegal, desmatamento e grilagem sobre seus territórios.' },
      { titulo: 'Texto III', texto: 'Iniciativas de educação escolar indígena e quilombola, quando implementadas com participação das próprias comunidades, fortalecem a identidade cultural, a autoestima e a permanência dos jovens em seus territórios de origem.' }
    ]
  },
  {
    ano: 2021,
    tema: 'Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil',
    instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.',
    motivadores: [
      { titulo: 'Texto I', texto: 'O registro civil de nascimento é a porta de entrada para o exercício da cidadania, permitindo acesso a serviços de saúde, educação, benefícios sociais e documentos posteriores como CPF e título de eleitor. Sua ausência mantém milhões de brasileiros à margem de direitos básicos.' },
      { titulo: 'Texto II', texto: 'A subnotificação de registros é mais comum em regiões remotas, como áreas rurais da Amazônia e comunidades ribeirinhas, onde o acesso a cartórios é limitado pela distância e pela falta de informação sobre a gratuidade do serviço.' },
      { titulo: 'Texto III', texto: 'Mutirões de registro civil realizados em parceria entre cartórios, prefeituras e maternidades têm reduzido significativamente o número de subnotificações em regiões prioritárias, aproximando o Estado de populações historicamente invisibilizadas.' }
    ]
  },
  {
    ano: 2020,
    tema: 'O estigma associado às doenças mentais na sociedade brasileira',
    instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.',
    motivadores: [
      { titulo: 'Texto I', texto: 'Pessoas com transtornos mentais frequentemente enfrentam preconceito e discriminação, o que dificulta a busca por tratamento adequado e a reinserção social, perpetuando ciclos de sofrimento e exclusão.' },
      { titulo: 'Texto II', texto: 'A falta de informação sobre saúde mental favorece a circulação de estigmas e estereótipos, associando erroneamente transtornos psiquiátricos à periculosidade ou incapacidade, o que afasta pacientes de diagnósticos e tratamentos precoces.' },
      { titulo: 'Texto III', texto: 'Campanhas de conscientização e a ampliação da rede de Centros de Atenção Psicossocial (CAPS) têm mostrado resultados positivos na redução do preconceito e no acolhimento de pessoas em sofrimento psíquico.' }
    ]
  }
];

let activeEssayIndex = 0;
let activeMotivIndex = 0;

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
  const content = document.getElementById('redacaoContent');
  content.innerHTML = `
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
  do { novoIndex = Math.floor(Math.random() * ESSAY_THEMES.length); }
  while (novoIndex === activeEssayIndex && ESSAY_THEMES.length > 1);
  activeEssayIndex = novoIndex;
  activeMotivIndex = 0;
  renderRedacao();
});

/* ===================== HUB DE RECURSOS (GUIA DE ESTUDOS IA) ===================== */
const STUDY_TOPICS = {
  'Matemática': ['Porcentagem', 'Regra de Três', 'Funções do 1º e 2º grau', 'Geometria Plana e Espacial'],
  'Ciências da Natureza': ['Ecologia e Cadeias Alimentares', 'Citologia', 'Leis de Newton', 'Estequiometria'],
  'Linguagens': ['Funções da Linguagem', 'Figuras de Linguagem', 'Interpretação de Texto', 'Literatura Modernista'],
  'Ciências Humanas': ['Era Vargas', 'Guerra Fria', 'Geopolítica Contemporânea', 'Urbanização Brasileira']
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
            <div class="subject-count">${topicos.length} tópicos</div>
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
    card.querySelector('.subject-header').addEventListener('click', () => {
      card.classList.toggle('open');
    });
    card.querySelectorAll('.btn-ia-topic').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        learnTopic(btn.dataset.materia, btn.dataset.topico);
      });
    });
    container.appendChild(card);
  });
  const openCard = container.querySelector('.subject-card.open');
  if (openCard) openCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  focusMateria = null;
}

/* ===================== MODO FOCO (POMODORO) ===================== */
const pomodoro = { focusSecs: 25 * 60, restSecs: 5 * 60, remaining: 25 * 60, mode: 'focus', running: false, timer: null };

function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

function renderPomodoro() {
  document.getElementById('pomodoroBarTime').textContent = formatTime(pomodoro.remaining);
  document.getElementById('pomodoroBarMode').textContent = pomodoro.mode === 'focus' ? 'Foco' : 'Descanso';
  document.getElementById('pomodoroBarStart').textContent = pomodoro.running ? 'Pausar' : 'Iniciar';
}

function tickPomodoro() {
  pomodoro.remaining--;
  if (pomodoro.remaining <= 0) {
    pomodoro.mode = pomodoro.mode === 'focus' ? 'rest' : 'focus';
    pomodoro.remaining = pomodoro.mode === 'focus' ? pomodoro.focusSecs : pomodoro.restSecs;
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
  pomodoro.mode = 'focus';
  pomodoro.remaining = pomodoro.focusSecs;
  renderPomodoro();
});

/* ===================== INIT ===================== */
renderDashboard();
renderPomodoro();
