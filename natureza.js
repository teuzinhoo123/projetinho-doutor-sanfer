const questoesNatureza = [
  {
    id: 41,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Vacinas de mRNA, como as da COVID-19, funcionam ensinando as células humanas a:",
    options: ["Modificar o próprio DNA", "Produzir a proteína do vírus para gerar resposta imune", "Atacar diretamente o RNA viral", "Aumentar os glóbulos vermelhos", "Matar bactérias invasoras"],
    correct: 1,
    explanation: "O mRNA fornece a 'receita' para os ribossomos produzirem o antígeno, sem usar o vírus inteiro."
  },
  {
    id: 42,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> A emissão de SOx e NOx por combustíveis fósseis gera chuva ácida, cuja principal consequência é:",
    options: ["Aumento da camada de ozônio", "Acidificação de corpos d'água, afetando ecossistemas aquáticos", "Maior incidência de câncer de pele", "Melhora do solo agrícola", "Aumento global das temperaturas"],
    correct: 1,
    explanation: "A diminuição do pH da água mata peixes e altera a cadeia trófica."
  },
  {
    id: 43,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> No cruzamento de duas plantas heterozigotas (Aa x Aa) para dominância completa, a proporção fenotípica esperada é:",
    options: ["1:2:1", "3:1", "9:3:3:1", "1:1", "100% iguais"],
    correct: 1,
    explanation: "Os genótipos são AA, Aa, Aa (3 dominantes) e aa (1 recessivo). Logo, 3:1."
  },
  {
    id: 44,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Agrotóxicos persistentes como o DDT acumulam-se nos tecidos. Em uma cadeia alimentar, a maior concentração estará:",
    options: ["Nos produtores (plantas)", "Nos consumidores primários (herbívoros)", "No nível trófico mais alto (predadores de topo)", "Nos decompositores apenas", "Distribuída igualmente"],
    correct: 2,
    explanation: "A magnificação trófica (biomagnificação) aumenta a toxina ao longo da cadeia alimentar."
  },
  {
    id: 45,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Ao frear um ônibus bruscamente, os passageiros são jogados para frente. Esse fenômeno é explicado pela:",
    options: ["3ª Lei de Newton (Ação e Reação)", "2ª Lei de Newton (Dinâmica)", "1ª Lei de Newton (Inércia)", "Lei da Gravitação Universal", "Força de Atrito Estático"],
    correct: 2,
    explanation: "Um corpo em movimento tende a continuar em movimento retilíneo uniforme até que uma força atue sobre ele."
  },
  {
    id: 46,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Para calcular a energia necessária para aquecer 1kg de água de 20ºC para 80ºC sem mudar de estado, usamos a fórmula do Calor Sensível, que é:",
    options: ["Q = m.L", "Q = m.c.ΔT", "E = m.c²", "P = U.i", "F = m.a"],
    correct: 1,
    explanation: "Equação fundamental da calorimetria (Que MaCeTe)."
  },
  {
    id: 47,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Numa reação química, se o rendimento for de 80%, a quantidade de produto obtida em relação à teoria é:",
    options: ["Igual a 100%", "20% a mais", "20% a menos (apenas 80% do previsto)", "80% a mais", "Imprevisível"],
    correct: 2,
    explanation: "Rendimento menor que 100% significa que reações paralelas ou perdas ocorreram."
  },
  {
    id: 48,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Ao ligar três resistores iguais (R) em paralelo, a Resistência Equivalente (Req) do circuito será:",
    options: ["3R", "R/3", "R", "R²", "Zero"],
    correct: 1,
    explanation: "Em paralelo, resistores iguais são divididos pela quantidade (Req = R/n)."
  },
  {
    id: 49,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> O Cerrado apresenta árvores com cascas grossas, troncos retorcidos e raízes profundas. Essas raízes servem principalmente para:",
    options: ["Buscar água no lençol freático em épocas de seca", "Proteger contra geadas", "Realizar fotossíntese subterrânea", "Evitar o ataque de insetos foliares", "Armazenar amido para o frio"],
    correct: 0,
    explanation: "Adaptação fundamental para sobreviver ao longo período de seca do bioma."
  },
  {
    id: 50,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Após uma refeição rica em carboidratos, o hormônio liberado para colocar a glicose dentro das células é o(a):",
    options: ["Glucagon", "Adrenalina", "Cortisol", "Insulina", "Testosterona"],
    correct: 3,
    explanation: "A insulina abaixa o nível de açúcar no sangue (hipoglicemiante)."
  },
  {
    id: 51,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Bactérias resistentes a antibióticos surgem em hospitais. Pela Teoria de Darwin (Seleção Natural), isso ocorre porque:",
    options: ["O antibiótico induz a mutação nas bactérias", "As bactérias se esforçam para mudar", "O ambiente hospitalar seleciona as bactérias previamente mutantes e resistentes", "Elas param de se reproduzir", "Há geração espontânea"],
    correct: 2,
    explanation: "A variação genética já existe; o meio apenas 'seleciona' os mais aptos."
  },
  {
    id: 52,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> O etanol é um composto pertencente à função álcool. Sua estrutura caracteriza-se pela presença da hidroxila (-OH) ligada a:",
    options: ["Carbono insaturado", "Anel aromático", "Carbono saturado (apenas ligações simples)", "Carbonila (C=O)", "Nitrogênio"],
    correct: 2,
    explanation: "Se estivesse em anel aromático seria fenol; em carbono com dupla, seria enol."
  },
  {
    id: 53,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> A meia-vida do C-14 é de 5730 anos. Após 11460 anos, uma amostra fóssil terá qual porcentagem de seu C-14 original?",
    options: ["50%", "25%", "12,5%", "100%", "0%"],
    correct: 1,
    explanation: "11460 equivale a 2 meias-vidas. (100% -> 50% -> 25%)."
  },
  {
    id: 54,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Uma pessoa com miopia tem dificuldade para ver de longe, pois a imagem se forma antes da retina. Para corrigir, usa-se lente:",
    options: ["Convergente", "Divergente", "Cilíndrica", "Plana", "Bifocal"],
    correct: 1,
    explanation: "Lentes divergentes abrem os raios de luz para que o foco chegue mais para trás, na retina."
  },
  {
    id: 55,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> A organela celular responsável pela produção de energia (ATP) por meio da respiração celular é o(a):",
    options: ["Ribossomo", "Complexo de Golgi", "Lisossomo", "Cloroplasto", "Mitocôndria"],
    correct: 4,
    explanation: "A mitocôndria é a 'usina de força' da célula eucariótica."
  },
  {
    id: 56,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Quando uma ambulância se aproxima, o som da sirene parece mais agudo, e ao se afastar, mais grave. Esse fenômeno é o:",
    options: ["Efeito fotoelétrico", "Difração", "Ressonância", "Efeito Doppler", "Polarização"],
    correct: 3,
    explanation: "A frequência aparente da onda muda devido ao movimento relativo entre fonte e observador."
  },
  {
    id: 57,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Para separar uma mistura homogênea de água e sal (obtendo ambos ao final), o método mais adequado é a:",
    options: ["Filtração", "Decantação", "Destilação Simples", "Catação", "Levigação"],
    correct: 2,
    explanation: "A água evapora, passa pelo condensador e volta a ser líquida, deixando o sal no balão."
  },
  {
    id: 58,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> No Ciclo do Nitrogênio, as bactérias fixadoras (Rhizobium) transformam o gás N2 da atmosfera em compostos absorvíveis para as plantas, como:",
    options: ["Gás Carbônico", "Glicose", "Amônia / Nitratos", "Ácido Sulfúrico", "Fosfatos"],
    correct: 2,
    explanation: "Plantas não absorvem N2 diretamente; dependem das bactérias para transformá-lo em nitratos/amônia."
  },
  {
    id: 59,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Um catalisador químico acelera a velocidade de uma reação sem ser consumido, pois ele atua:",
    options: ["Aumentando a temperatura da mistura", "Diminuindo a energia de ativação", "Aumentando a concentração dos reagentes", "Aumentando a pressão total", "Diminuindo a área de contato"],
    correct: 1,
    explanation: "O catalisador oferece um caminho alternativo que exige menos energia para a reação acontecer."
  },
  {
    id: 60,
    area: 'Natureza',
    text: "<strong>(ENEM)</strong> Em uma pilha de Daniel, o eletrodo que sofre oxidação (perde elétrons) e corrói chama-se:",
    options: ["Cátodo (polo positivo)", "Ânodo (polo negativo)", "Ponte salina", "Solvente", "Voltímetro"],
    correct: 1,
    explanation: "Macete: 'Crao' (Cátodo Reduz, Ânodo Oxida). O ânodo emite os elétrons, logo é o polo negativo da pilha."
  }
];
