const questoesMatematica = [
  {
    id: 61,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Um capital de R$ 10.000 é aplicado a 10% ao ano, a juros compostos. Qual o montante após 2 anos?",
    options: ["R$ 11.000", "R$ 12.000", "R$ 12.100", "R$ 12.500", "R$ 13.000"],
    correct: 2,
    explanation: "M = 10000 * (1.10)² = 10000 * 1.21 = 12.100."
  },
  {
    id: 62,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Em um empréstimo a juros simples de R$ 5.000 com taxa de 2% ao mês, qual o valor dos juros gerados após 5 meses?",
    options: ["R$ 100", "R$ 250", "R$ 500", "R$ 520", "R$ 1.000"],
    correct: 2,
    explanation: "J = C.i.t = 5000 * 0.02 * 5 = 500."
  },
  {
    id: 63,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Lançando-se dois dados comuns (de 1 a 6) justos, qual a probabilidade de a soma das faces ser igual a 7?",
    options: ["1/36", "1/12", "1/6", "1/4", "1/2"],
    correct: 2,
    explanation: "Casos favoráveis: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Total: 6. Casos possíveis: 36. 6/36 = 1/6."
  },
  {
    id: 64,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> As notas de um aluno em três provas foram 6, 7 e 8. A média aritmética simples de suas notas é:",
    options: ["6", "7", "7.5", "8", "21"],
    correct: 1,
    explanation: "M = (6 + 7 + 8) / 3 = 21 / 3 = 7."
  },
  {
    id: 65,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> O ENEM aplica pesos. Um candidato tira 800 em Redação (peso 3) e 600 em Matemática (peso 2). Qual a nota média?",
    options: ["700", "720", "740", "760", "800"],
    correct: 1,
    explanation: "M = ((800*3) + (600*2)) / 5 = (2400 + 1200) / 5 = 3600 / 5 = 720."
  },
  {
    id: 66,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Dada a lista de idades {12, 14, 15, 17, 18}, o valor da mediana é:",
    options: ["12", "14", "15", "16", "17"],
    correct: 2,
    explanation: "A lista está ordenada, o termo central (3º de 5) é o 15."
  },
  {
    id: 67,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Em uma loja de sapatos, as numerações mais vendidas num dia foram: 36, 37, 36, 38, 36, 39, 40. Qual é a moda dessa amostra?",
    options: ["36", "37", "38", "39", "40"],
    correct: 0,
    explanation: "Moda é o valor mais frequente. O 36 apareceu três vezes."
  },
  {
    id: 68,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> A área de um triângulo retângulo com base medindo 4 cm e altura medindo 6 cm é:",
    options: ["10 cm²", "12 cm²", "14 cm²", "24 cm²", "48 cm²"],
    correct: 1,
    explanation: "Área = (base * altura) / 2 = (4 * 6) / 2 = 12."
  },
  {
    id: 69,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Um reservatório cilíndrico tem raio da base 2m e altura 5m. Considerando π=3, o volume aproximado é:",
    options: ["20 m³", "30 m³", "60 m³", "100 m³", "120 m³"],
    correct: 2,
    explanation: "Volume = π * r² * h = 3 * 2² * 5 = 3 * 4 * 5 = 60 m³."
  },
  {
    id: 70,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Uma corrida de táxi custa uma bandeirada fixa de R$ 5,00 mais R$ 2,00 por km rodado. A função que representa o custo de x quilômetros é:",
    options: ["C(x) = 5x", "C(x) = 2x", "C(x) = 5x + 2", "C(x) = 2x + 5", "C(x) = 7x"],
    correct: 3,
    explanation: "Valor fixo (b=5) + valor variável por km (a=2) -> y = 2x + 5."
  },
  {
    id: 71,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Numa fábrica, o lucro diário L(x) = -x² + 40x - 300, onde x são as peças vendidas. Qual o número de peças para o lucro máximo?",
    options: ["10", "15", "20", "25", "40"],
    correct: 2,
    explanation: "O x do vértice indica o ponto máximo. Xv = -b/2a = -40 / (2*-1) = -40 / -2 = 20."
  },
  {
    id: 72,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Uma camisa custava R$ 100. Teve um aumento de 20% e, em seguida, um desconto de 20% sobre o novo valor. Qual o preço final?",
    options: ["R$ 96", "R$ 100", "R$ 104", "R$ 120", "R$ 80"],
    correct: 0,
    explanation: "100 + 20% = 120. Agora, desconto de 20% sobre 120 (que é 24 reais). 120 - 24 = 96."
  },
  {
    id: 73,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Um produto é vendido com 15% de desconto por R$ 85,00. Qual era o seu preço original sem desconto?",
    options: ["R$ 90", "R$ 95", "R$ 100", "R$ 115", "R$ 120"],
    correct: 2,
    explanation: "Se tem 15% de desconto, os 85 reais representam 85% do total. Logo, 100% é 100 reais."
  },
  {
    id: 74,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Um mapa está na escala 1:500.000. Dois pontos distam 4 cm no mapa. Qual a distância real em km?",
    options: ["2 km", "5 km", "20 km", "50 km", "200 km"],
    correct: 2,
    explanation: "4 cm * 500.000 = 2.000.000 cm = 20.000 metros = 20 km."
  },
  {
    id: 75,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Para formar uma comissão de 3 estudantes a partir de um grupo de 5 (A, B, C, D, E), quantas comissões distintas podem ser feitas?",
    options: ["10", "15", "20", "60", "120"],
    correct: 0,
    explanation: "Combinação (a ordem não importa): C(5,3) = 5! / (3!*2!) = 120 / 12 = 10."
  },
  {
    id: 76,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Quantas senhas de 3 algarismos distintos podemos formar usando os números 1, 2, 3 e 4?",
    options: ["12", "24", "48", "64", "256"],
    correct: 1,
    explanation: "Arranjo (a ordem importa): 4 opções p/ 1º, 3 opções p/ 2º, 2 opções p/ 3º = 4*3*2 = 24."
  },
  {
    id: 77,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Num triângulo retângulo, a hipotenusa vale 10 cm e um dos ângulos agudos é de 30º. O cateto oposto a esse ângulo mede:",
    options: ["5 cm", "8 cm", "10 cm", "15 cm", "20 cm"],
    correct: 0,
    explanation: "Seno = Oposto/Hipotenusa. Sen(30º) = 1/2. Cateto / 10 = 1/2 -> Cateto = 5."
  },
  {
    id: 78,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> O primeiro termo de uma P.A. é 5 e a razão é 3. O 10º termo dessa progressão é:",
    options: ["27", "30", "32", "35", "50"],
    correct: 2,
    explanation: "Fórmula do termo geral: a10 = a1 + (n-1)r = 5 + (9)*3 = 5 + 27 = 32."
  },
  {
    id: 79,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> A distância entre os pontos A(0,0) e B(3,4) no plano cartesiano é:",
    options: ["3", "4", "5", "7", "25"],
    correct: 2,
    explanation: "Distância = Raiz((3-0)² + (4-0)²) = Raiz(9+16) = Raiz(25) = 5 (Teorema de Pitágoras)."
  },
  {
    id: 80,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Num estacionamento há carros e motos, totalizando 10 veículos e 32 rodas. Quantos carros há?",
    options: ["4", "5", "6", "7", "8"],
    correct: 2,
    explanation: "c+m=10; 4c+2m=32. De c=10-m, 4(10-m)+2m=32 -> 40-2m=32 -> 2m=8 -> m=4. Logo, c=6."
  }
];
