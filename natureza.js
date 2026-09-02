const questoesNatureza = [
  {
    id: 41,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Vacinas de mRNA, como as da COVID-19, funcionam ensinando as células humanas a:",
    options: ["Modificar permanentemente o DNA nuclear", "Produzir uma proteína específica do vírus para gerar resposta imune", "Atacar diretamente o RNA viral circulante", "Aumentar a produção de hemácias no sangue", "Matar bactérias patogênicas por fagocitose"],
    correct: 1,
    explanation: [
      "Incorreta. O RNA mensageiro não entra no núcleo celular nem interage com o DNA humano.",
      "Correta! O mRNA fornece instruções temporárias para os ribossomos sintetizarem o antígeno viral, estimulando anticorpos sem inocular o vírus ativo.",
      "Incorreta. O mRNA não possui função enzimática ou lítica direta contra vírus.",
      "Incorreta. A produção de hemácias vincula-se ao hormônio eritropoietina nos rins.",
      "Incorreta. Vacinas virais não combatem infecções bacterianas diretas."
    ]
  },
  {
    id: 42,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> A emissão de SOx e NOx por combustíveis fósseis gera chuva ácida, cuja principal consequência é:",
    options: ["Aumento expressivo da camada de ozônio estatosférica", "Acidificação de lagos e solos, afetando a biodiversidade e vegetação", "Maior incidência direta de câncer de pele melanoma", "Melhora drástica da fertilidade agrícola dos solos", "Aquecimento global generalizado por reflexão térmica"],
    correct: 1,
    explanation: [
      "Incorreta. A destruição da camada de ozônio decorre de gases CFCs.",
      "Correta! Os óxidos formam ácidos fortes (sulfúrico e nítrico) na atmosfera, reduzindo o pH de ecossistemas aquáticos e terrestres.",
      "Incorreta. Câncer de pele relaciona-se aos raios ultravioleta B (UV-B) por falha no ozônio.",
      "Incorreta. A acidificação tóxica degrada e empobrece a fertilidade natural dos solos.",
      "Incorreta. O aquecimento global associa-se majoritariamente ao gás carbônico e metano."
    ]
  },
  {
    id: 43,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> No cruzamento de duas plantas heterozigotas (Aa x Aa) para dominância completa, a proporção fenotípica esperada é:",
    options: ["1:2:1", "3:1", "9:3:3:1", "1:1", "100% homogêneas"],
    correct: 1,
    explanation: [
      "Incorreta. A proporção 1:2:1 refere-se ao resultado genotípico (AA : Aa : aa).",
      "Correta! Na dominância completa, os genótipos AA e Aa manifestam o mesmo fenótipo dominante, gerando 3 dominantes para 1 recessivo (3:1).",
      "Incorreta. A proporção 9:3:3:1 aplica-se a diibridismo (duas características simultâneas).",
      "Incorreta. A proporção 1:1 ocorre em cruzamentos-teste (heterozigoto com recessivo).",
      "Incorreta. Pais heterozigotos segregam alelos, gerando descendência variada."
    ]
  },
  {
    id: 44,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Agrotóxicos persistentes como o DDT acumulam-se nos tecidos. Em uma cadeia alimentar, a maior concentração estará:",
    options: ["Nos produtores primários (fitoplâncton ou plantas)", "Nos consumidores primários herbívoros", "No nível trófico mais alto (predadores de topo)", "Distribuída igualmente em todos os níveis", "Apenas nos decompositores fungos e bactérias"],
    correct: 2,
    explanation: [
      "Incorreta. Os produtores possuem a menor concentração inicial absorvida do ambiente.",
      "Incorreta. Os herbívoros acumulam toxinas, mas em patamares inferiores aos predadores finais.",
      "Correta! O fenômeno da magnificação trófica (biomagnificação) faz com que substâncias indigeríveis acumulem-se progressivamente em doses maiores nos predadores de topo.",
      "Incorreta. A concentração multiplica-se a cada nível trófico ascendente.",
      "Incorreta. Não se restringe aos decompositores, acumulando-se ao longo da teia."
    ]
  },
  {
    id: 45,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Ao frear um ônibus bruscamente, os passageiros são jogados para frente. Esse fenômeno é explicado pela:",
    options: ["3ª Lei de Newton (Ação e Reação)", "2ª Lei de Newton (Princípio Fundamental da Dinâmica)", "1ª Lei de Newton (Princípio da Inércia)", "Lei da Gravitação Universal de Newton", "Força de Atrito Cinético estipulada"],
    correct: 2,
    explanation: [
      "Incorreta. A 3ª lei refere-se a forças aplicadas em corpos distintos simultaneamente.",
      "Incorreta. A 2ª lei calcula a resultante através de F = m.a.",
      "Correta! A inércia dita que um corpo tende a manter seu estado de movimento retilíneo uniforme a menos que uma força externa atue para alterá-lo.",
      "Incorreta. A gravitação universal trata da atração entre massas celestes.",
      "Incorreta. O atrito atua no contato das solas com o piso, mas o impulso para frente decorre da inércia."
    ]
  },
  {
    id: 46,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Para calcular a energia necessária para aquecer 1kg de água de 20ºC para 80ºC sem mudar de estado, usamos a fórmula do Calor Sensível:",
    options: ["Q = m.L (Calor Latente)", "Q = m.c.ΔT (Calor Sensível)", "E = m.c² (Relatividade Restrita)", "P = U.i (Potência Elétrica)", "F = m.a (Segunda Lei de Newton)"],
    correct: 1,
    explanation: [
      "Incorreta. Calor latente (m.L) é empregado exclusivamente em mudanças de estado físico.",
      "Correta! A equação fundamental da calorimetria Q = m.c.ΔT calcula a quantidade de calor sensível necessária para a variação de temperatura (ΔT).",
      "Incorreta. A fórmula de Einstein calcula equivalência massa-energia nuclear.",
      "Incorreta. P = U.i calcula potência em circuitos elétricos.",
      "Incorreta. F = m.a calcula forças mecânicas dinâmicas."
    ]
  },
  {
    id: 47,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Numa reação química, se o rendimento for de 80%, a quantidade de produto obtida em relação à teoria é:",
    options: ["Igual a 100% da massa estequiométrica prevista", "20% superior ao limite máximo calculado", "20% menor que o valor teórico máximo esperado", "80% superior ao cálculo estequiométrico básico", "Inexistente por falha total dos reagentes"],
    correct: 2,
    explanation: [
      "Incorreta. Rendimento de 100% representaria a totalidade teórica ideal.",
      "Incorreta. Nenhuma reação excede o limite estequiométrico máximo teórico.",
      "Correta! Um rendimento de 80% indica perda de 20% do produto real obtido em laboratório por reações secundárias ou ineficiências práticas.",
      "Incorreta. O rendimento real é sempre inferior ou igual ao máximo estequiométrico.",
      "Incorreta. Há obtenção de 80% do montante previsto."
    ]
  },
  {
    id: 48,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Ao ligar três resistores iguais (R) em paralelo, a Resistência Equivalente (Req) do circuito será:",
    options: ["3R (Soma tripla direta)", "R / 3 (Um terço da resistência original)", "R (Igual a um resistor isolado)", "R² (Quadrado da resistência)", "Zero absoluto"],
    correct: 1,
    explanation: [
      "Incorreta. A soma direta de valores iguais aplica-se exclusivamente a circuitos em série.",
      "Correta! Para resistores idênticos associados em paralelo, a resistência equivalente calcula-se dividindo o valor de R pelo número de geradores/resistores (R/3).",
      "Incorreta. A associação paralela reduz sempre a resistência total do circuito.",
      "Incorreta. R ao quadrado não condiz com as leis de Ohm para resistores paralelos.",
      "Incorreta. A resistência equivalente tende a zero apenas em curto-circuitos ideais."
    ]
  },
  {
    id: 49,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> O Cerrado apresenta árvores com cascas grossas, troncos retorcidos e raízes profundas. Essas raízes servem principalmente para:",
    options: ["Buscar água no lençol freático profundo durante a estação seca", "Proteger a planta contra geadas intensas no inverno", "Realizar fotossíntese subterrânea na ausência de luz", "Evitar o ataque predatório de insetos herbívoros do solo", "Armazenar amido exclusivo para suportar baixas temperaturas"],
    correct: 0,
    explanation: [
      "Correta! As raízes profundas garantem a captação hídrica em lençóis freáticos subterrâneos durante o longo período de estiagem do bioma.",
      "Incorreta. O Cerrado caracteriza-se por clima tropical sazonal quente, sem incidência de geadas polares.",
      "Incorreta. A fotossíntese exige luz solar direta nos cloroplastos foliares.",
      "Incorreta. A função primária adaptativa é a busca hídrica contra a seca extrema.",
      "Incorreta. O armazenamento de reservas serve à rebrota pós-queimadas, mas a profundidade é essencial para o balanço hídrico."
    ]
  },
  {
    id: 50,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Após uma refeição rica em carboidratos, o hormônio liberado para colocar a glicose dentro das células é o(a):",
    options: ["Glucagon hiperglicemiante", "Adrenalina de luta e fuga", "Cortisol anti-inflamatório", "Insulina hipoglicemiante", "Testosterona andrógena"],
    correct: 3,
    explanation: [
      "Incorreta. O glucagon atua elevando a glicose no sangue quando há jejum prolongado.",
      "Incorreta. A adrenalina prepara o corpo para emergências metabólicas rápidas.",
      "Incorreta. O cortisol regula o estresse crônico e o metabolismo de gorduras/proteínas.",
      "Correta! A insulina é o hormônio pancreático anabólico responsável por facilitar a entrada de glicose sanguínea nas células corporais, baixando a glicemia.",
      "Incorreta. A testosterona regula características sexuais secundárias e anabolismo muscular."
    ]
  },
  {
    id: 51,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Bactérias resistentes a antibióticos surgem em hospitais. Pela Teoria de Darwin (Seleção Natural), isso ocorre porque:",
    options: ["O antibiótico induz diretamente a mutação desejada na bactéria", "As bactérias desenvolvem inteligência e esforço para se adaptar", "O ambiente hospitalar seleciona as bactérias previamente mutantes e resistentes", "As bactérias param totalmente de se reproduzir por estresse", "Ocorre geração espontânea contínua de microrganismos"],
    correct: 2,
    explanation: [
      "Incorreta. O antibiótico não cria a mutação; ele atua apenas como agente seletivo.",
      "Incorreta. A evolução darwiniana não depende de esforço consciente ou teleológico.",
      "Correta! A variabilidade genética pré-existente (bactérias resistentes) é selecionada positivamente quando os antibióticos eliminam as formas sensíveis concorrentes.",
      "Incorreta. As bactérias resistentes sobrevivem e multiplicam-se rapidamente na ausência de rivais.",
      "Incorreta. A geração espontânea foi refutada definitivamente por Pasteur."
    ]
  },
  {
    id: 52,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> O etanol é um composto pertencente à função álcool. Sua estrutura caracteriza-se pela presença da hidroxila (-OH) ligada a:",
    options: ["Carbono insaturado com dupla ligação", "Carbono pertencente a anel aromático benzeno", "Carbono saturado com ligações exclusivamente simples", "Carbonila terminal (C=O)", "Átomo de nitrogênio pentavalente"],
    correct: 2,
    explanation: [
      "Incorreta. Hidroxila ligada a carbono com dupla ligação caracteriza enóis instáveis.",
      "Incorreta. Hidroxila ligada diretamente a anel aromático constitui a função fenol.",
      "Correta! O álcool possui o grupo hidroxila (-OH) ligado a um carbono saturado (hibridização sp3 com ligações simples).",
      "Incorreta. Carbonila terminal caracteriza a função aldeído.",
      "Incorreta. Compostos nitrogenados formam aminas ou amidas."
    ]
  },
  {
    id: 53,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> A meia-vida do C-14 é de 5730 anos. Após 11460 anos, uma amostra fóssil terá qual porcentagem de seu C-14 original?",
    options: ["50% da massa inicial", "25% da massa inicial", "12,5% da massa inicial", "100% intacto", "0% totalmente extinto"],
    correct: 1,
    explanation: [
      "Incorreta. 50% restaria após apenas uma meia-vida (5730 anos).",
      "Correta! 11460 anos equivalem exatamente a 2 meias-vidas (100% -> 50% em 5730 -> 25% em 11460 anos).",
      "Incorreta. 12,5% corresponderia a 3 meias-vidas (17190 anos).",
      "Incorreta. O isótopo decai radioativamente com o passar do tempo.",
      "Incorreta. O decaimento exponencial aproxima-se de zero, mas restam frações mensuráveis."
    ]
  },
  {
    id: 54,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Uma pessoa com miopia tem dificuldade para ver de longe, pois a imagem se forma antes da retina. Para corrigir, usa-se lente:",
    options: ["Convergente esférica", "Divergente esférica", "Cilíndrica estritamente", "Plana neutra", "Bifocal prismática"],
    correct: 1,
    explanation: [
      "Incorreta. Lentes convergentes corrigem a hipermetropia (foco formado após a retina).",
      "Correta! A miopia faz com que o globo ocular seja mais longo ou a córnea muito convergente, formando a imagem antes da retina. Lentes divergentes corrigem espalhando os raios de luz.",
      "Incorreta. Lentes cilíndricas corrigem especificamente o astigmatismo.",
      "Incorreta. Lentes planas não alteram a focalização visual.",
      "Incorreta. Lentes bifocais auxiliam na presbiopia (vista cansada)."
    ]
  },
  {
    id: 55,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> A organela celular responsável pela produção de energia (ATP) por meio da respiração celular é o(a):",
    options: ["Ribossomo tradutor", "Complexo de Golgi secretor", "Lisossomo digestório", "Cloroplasto fotossintético", "Mitocôndria"],
    correct: 4,
    explanation: [
      "Incorreta. Ribossomos realizam a síntese de proteínas celulares.",
      "Incorreta. O complexo de Golgi empacota e secreta substâncias celulares.",
      "Incorreta. Lisossomos realizam a digestão intracelular com enzimas ácidas.",
      "Incorreta. Cloroplastos realizam fotossíntese em células vegetais.",
      "Correta! A mitocôndria é a central energética da célula eucariótica, responsável pelas etapas aeróbicas da respiração celular e produção de ATP."
    ]
  },
  {
    id: 56,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Quando uma ambulância se aproxima, o som da sirene parece mais agudo, e ao se afastar, mais grave. Esse fenômeno é o:",
    options: ["Efeito fotoelétrico de luz", "Difração mecânica de ondas", "Ressonância acústica pura", "Efeito Doppler", "Polarização transversal"],
    correct: 3,
    explanation: [
      "Incorreta. O efeito fotoelétrico refere-se à emissão de elétrons por incidência luminosa.",
      "Incorreta. Difração é a capacidade de contornar obstáculos.",
      "Incorreta. Ressonância ocorre quando frequências naturais coincidem, amplificando a amplitude.",
      "Correta! O Efeito Doppler explica a alteração aparente na frequência percebida de uma onda devido ao movimento relativo entre a fonte sonora e o observador.",
      "Incorreta. Polarização restringe a vibração da onda a um único plano."
    ]
  },
  {
    id: 57,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Para separar uma mistura homogênea de água e sal (obtendo ambos ao final), o método mais adequado é a:",
    options: ["Filtração simples em papel", "Decantação estática por densidade", "Destilação simples", "Catação manual direta", "Levigação com corrente d'água"],
    correct: 2,
    explanation: [
      "Incorreta. A filtração separa apenas misturas heterogêneas sólido-líquido.",
      "Incorreta. Decantação exige fases imiscíveis com densidades diferentes.",
      "Correta! A destilação simples aproveita os diferentes pontos de ebulição, evaporando a água (que é condensada e recolhida) e retendo o sal no balão.",
      "Incorreta. Catação manual aplica-se a sólidos macroscópicos heterogêneos.",
      "Incorreta. Levigação separa minérios sólidos densos por corrente de água."
    ]
  },
  {
    id: 58,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> No Ciclo do Nitrogênio, as bactérias fixadoras (Rhizobium) transformam o gás N2 da atmosfera em compostos absorvíveis para as plantas, como:",
    options: ["Gás Carbônico (CO2)", "Glicose orgânica simples", "Amônia e íons Nitrato (NH3 / NO3-)", "Ácido Sulfúrico concentrado", "Fosfatos minerais do solo"],
    correct: 2,
    explanation: [
      "Incorreta. Gás carbônico participa do ciclo do carbono e da fotossíntese.",
      "Incorreta. Glicose é produzida pela fixação do carbono na fotossíntese.",
      "Correta! As bactérias fixadoras convertem o nitrogênio gasoso inerte da atmosfera em amônia e nitratos, formas assimiláveis pelas raízes vegetais.",
      "Incorreta. Ácido sulfúrico relaciona-se a emissões de enxofre e chuvas ácidas.",
      "Incorreta. Fosfatos pertencem ao ciclo biogeoquímico do fósforo."
    ]
  },
  {
    id: 59,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Um catalisador químico acelera a velocidade de uma reação sem ser consumido, pois ele atua:",
    options: ["Aumentando drasticamente a temperatura da mistura", "Diminuindo a energia de ativação necessária", "Aumentando a concentração inicial dos reagentes", "Aumentando a pressão total do sistema fechado", "Reduzindo o tempo total de validade dos produtos"],
    correct: 1,
    explanation: [
      "Incorreta. Catalisadores aceleram reações sem exigir alteração térmica global da mistura.",
      "Correta! O catalisador fornece um caminho reacional alternativo com menor energia de ativação, elevando a velocidade da reação.",
      "Incorreta. Concentração de reagentes afeta a colisão, mas não altera a barreira energética intrínseca do catalisador.",
      "Incorreta. Pressão interfere em equilíbrios gasosos, mas não define a catálise molecular direta.",
      "Incorreta. A validade do produto químico independe da ação catalítica da síntese."
    ]
  },
  {
    id: 60,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Em uma pilha de Daniel, o eletrodo que sofre oxidação (perde elétrons) e corrói chama-se:",
    options: ["Cátodo (polo positivo)", "Ânodo (polo negativo)", "Ponte salina neutra", "Solvente orgânico universal", "Voltímetro digital auxiliar"],
    correct: 1,
    explanation: [
      "Incorreta. No cátodo ocorre sempre a redução (ganho de elétrons), sendo o polo positivo.",
      "Correta! Pelo macete 'Crao' (Cátodo Reduz, Ânodo Oxida), o ânodo é o eletrodo onde ocorre a oxidação, liberando elétrons e atuando como polo negativo da pilha.",
      "Incorreta. A ponte salina apenas neutraliza as cargas iônicas das semicélulas.",
      "Incorreta. Solventes dissolvem os sais, mas não constituem o eletrodo oxidante.",
      "Incorreta. O voltímetro mede a diferença de potencial, sem sofrer corrosão."
    ]
  }
];
