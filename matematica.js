const questoesMatematica = [
  {
    id: 61,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Um capital de R$ 10.000 é aplicado a 10% ao ano, a juros compostos. Qual o montante após 2 anos?",
    options: ["R$ 11.000", "R$ 12.000", "R$ 12.100", "R$ 12.500", "R$ 13.000"],
    correct: 2,
    explanation: [
      "Incorreta. R$ 11.000 corresponderia apenas ao rendimento simples do primeiro ano.",
      "Incorreta. R$ 12.000 seria o resultado se os juros fossem lineares simples (2 x 1000).",
      "Correta! M = C * (1 + i)^t -> 10000 * (1,10)² = 10000 * 1,21 = R$ 12.100 (juros sobre juros).",
      "Incorreta. Valor incorreto obtido por cálculo estimativo impreciso.",
      "Incorreta. R$ 13.000 excederia o valor real acumulado da capitalização."
    ]
  },
  {
    id: 62,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Em um empréstimo a juros simples de R$ 5.000 com taxa de 2% ao mês, qual o valor dos juros gerados após 5 meses?",
    options: ["R$ 100", "R$ 250", "R$ 500", "R$ 520", "R$ 1.000"],
    correct: 2,
    explanation: [
      "Incorreta. R$ 100 representa o rendimento de um único mês isolado.",
      "Incorreta. R$ 250 seria o resultado obtido com taxa incorreta ou período menor.",
      "Correta! J = C * i * t -> 5000 * 0,02 * 5 = 5000 * 0,10 = R$ 500 de juros acumulados.",
      "Incorreta. Cálculo com acréscimo numérico infundado.",
      "Incorreta. R$ 1.000 dobraria a taxa para 10% mensais errôneamente."
    ]
  },
  {
    id: 63,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Lançando-se dois dados comuns (de 1 a 6) justos, qual a probabilidade de a soma das faces ser igual a 7?",
    options: ["1/36", "1/12", "1/6", "1/4", "1/2"],
    correct: 2,
    explanation: [
      "Incorreta. 1/36 representa a probabilidade de um único par específico (ex: sair duplo 6).",
      "Incorreta. 1/12 subestima os casos favoráveis totais do evento.",
      "Correta! Casos favoráveis (soma 7): (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 casos. Total de casos possíveis = 36. Logo, 6/36 = 1/6.",
      "Incorreta. 1/4 equivaleria a 25% de chance, valor incorreto para a distribuição.",
      "Incorreta. 1/2 representaria 50% de probabilidade, exagerada para este somatório."
    ]
  },
  {
    id: 64,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> As notas de um aluno em três provas foram 6, 7 e 8. A média aritmética simples de suas notas é:",
    options: ["6", "7", "7.5", "8", "21"],
    correct: 1,
    explanation: [
      "Incorreta. 6 seria a nota mínima isolada do conjunto.",
      "Correta! M = (6 + 7 + 8) / 3 = 21 / 3 = 7 exatos.",
      "Incorreta. 7,5 resultaria de divisão incorreta por 2 ou arredondamento falso.",
      "Incorreta. 8 corresponde à maior nota isolada obtida na prova final.",
      "Incorreta. 21 representa apenas a soma total das notas, antes da divisão pela quantidade."
    ]
  },
  {
    id: 65,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> O ENEM aplica pesos. Um candidato tira 800 em Redação (peso 3) e 600 em Matemática (peso 2). Qual a nota média?",
    options: ["700", "720", "740", "760", "800"],
    correct: 1,
    explanation: [
      "Incorreta. 700 seria a média aritmética simples desconsiderando os pesos.",
      "Correta! M = [(800 * 3) + (600 * 2)] / (3 + 2) = (2400 + 1200) / 5 = 3600 / 5 = 720.",
      "Incorreta. Valor incorreto derivado de ponderação trocada.",
      "Incorreta. Erro de cálculo aritmético na divisão final.",
      "Incorreta. 800 refere-se exclusivamente à nota parcial da Redação."
    ]
  },
  {
    id: 66,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Dada a lista de idades {12, 14, 15, 17, 18}, o valor da mediana é:",
    options: ["12", "14", "15", "16", "17"],
    correct: 2,
    explanation: [
      "Incorreta. 12 é o menor valor da extremidade esquerda da série.",
      "Incorreta. 14 constitui o segundo elemento do rol ordenado.",
      "Correta! Com os dados já ordenados, o termo central (3º elemento de um total de 5) é o número 15.",
      "Incorreta. 16 não pertence à lista original de dados apresentados.",
      "Incorreta. 17 representa o quarto elemento da sequência."
    ]
  },
  {
    id: 67,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Em uma loja de sapatos, as numerações mais vendidas num dia foram: 36, 37, 36, 38, 36, 39, 40. Qual é a moda dessa amostra?",
    options: ["36", "37", "38", "39", "40"],
    correct: 0,
    explanation: [
      "Correta! A moda é o valor que apresenta maior frequência absoluta. O número 36 apareceu três vezes, superando os demais.",
      "Incorreta. O número 37 apareceu apenas uma vez.",
      "Incorreta. O número 38 apareceu uma única vez.",
      "Incorreta. O número 39 possui frequência unitária.",
      "Incorreta. O número 40 não representa o pico de vendas diárias."
    ]
  },
  {
    id: 68,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> A área de um triângulo retângulo com base medindo 4 cm e altura medindo 6 cm é:",
    options: ["10 cm²", "12 cm²", "14 cm²", "24 cm²", "48 cm²"],
    correct: 1,
    explanation: [
      "Incorreta. 10 cm² resultaria de uma soma indevida dos catetos.",
      "Correta! Área do triângulo = (base * altura) / 2 -> (4 * 6) / 2 = 24 / 2 = 12 cm².",
      "Incorreta. Valor incorreto gerado por equívoco na fórmula.",
      "Incorreta. 24 cm² seria a área correspondente a um retângulo completo de lados 4 e 6.",
      "Incorreta. 48 cm² superestima o cálculo geométrico da figura."
    ]
  },
  {
    id: 69,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Um reservatório cilíndrico tem raio da base 2m e altura 5m. Considerando π=3, o volume aproximado é:",
    options: ["20 m³", "30 m³", "60 m³", "100 m³", "120 m³"],
    correct: 2,
    explanation: [
      "Incorreta. 20 m³ resulta de erro na potenciação do raio.",
      "Incorreta. 30 m³ desconsidera o quadrado do raio na fórmula.",
      "Correta! Volume = π * r² * h -> 3 * (2)² * 5 = 3 * 4 * 5 = 60 m³.",
      "Incorreta. 100 m³ excede o cálculo volumétrico correto.",
      "Incorreta. 120 m³ duplicaria incorretamente o resultado final."
    ]
  },
  {
    id: 70,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Uma corrida de táxi custa uma bandeirada fixa de R$ 5,00 mais R$ 2,00 por km rodado. A função que representa o custo de x quilômetros é:",
    options: ["C(x) = 5x", "C(x) = 2x", "C(x) = 5x + 2", "C(x) = 2x + 5", "C(x) = 7x"],
    correct: 3,
    explanation: [
      "Incorreta. C(x) = 5x desconsidera a taxa variável por quilômetro.",
      "Incorreta. C(x) = 2x omite o valor fixo inicial da bandeirada.",
      "Incorreta. Inverte os coeficientes fixo e variável na estrutura afim.",
      "Correta! O custo total afim compõe-se do termo fixo (b=5) somado ao produto da tarifa pela quilometragem variável (a=2) -> C(x) = 2x + 5.",
      "Incorreta. 7x soma incorretamente valores de naturezas distintas."
    ]
  },
  {
    id: 71,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Numa fábrica, o lucro diário L(x) = -x² + 40x - 300, onde x são as peças vendidas. Qual o número de peças para o lucro máximo?",
    options: ["10", "15", "20", "25", "40"],
    correct: 2,
    explanation: [
      "Incorreta. 10 peças geram lucro inferior ao ponto máximo da parábola.",
      "Incorreta. 15 peças não correspondem ao vértice de otimização.",
      "Correta! O valor de x que maximiza a função quadrática (x do vértice) calcula-se por Xv = -b / (2a) -> -40 / (2 * -1) = -40 / -2 = 20 peças.",
      "Incorreta. 25 peças começam a decrescer a curva de lucro.",
      "Incorreta. 40 peças representam a raiz superior onde o lucro anula-se."
    ]
  },
  {
    id: 72,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Uma camisa custava R$ 100. Teve um aumento de 20% e, em seguida, um desconto de 20% sobre o novo valor. Qual o preço final?",
    options: ["R$ 96", "R$ 100", "R$ 104", "R$ 120", "R$ 80"],
    correct: 0,
    explanation: [
      "Correta! Aumento de 20% sobre 100 = 120. Desconto de 20% sobre 120 (24 reais) = 120 - 24 = R$ 96.",
      "Incorreta. O preço não retorna ao valor inicial devido à mudança da base de cálculo do percentual.",
      "Incorreta. Valor incorreto derivado de operação aritmética equivocada.",
      "Incorreta. R$ 120 corresponde ao valor intermediário antes da aplicação do desconto.",
      "Incorreta. R$ 80 aplicaria o desconto sobre a base original incorretamente."
    ]
  },
  {
    id: 73,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Um produto é vendido com 15% de desconto por R$ 85,00. Qual era o seu preço original sem desconto?",
    options: ["R$ 90", "R$ 95", "R$ 100", "R$ 115", "R$ 120"],
    correct: 2,
    explanation: [
      "Incorreta. R$ 90 geraria um valor fracionado incorreto no desconto.",
      "Incorreta. 15% de R$ 95 não resultaria exatamente em R$ 85.",
      "Correta! Se o produto teve 15% de desconto, o preço pago (R$ 85) corresponde a 85% do total. Logo, 85 / 0,85 = R$ 100.",
      "Incorreta. R$ 115 aplicaria o percentual de forma somada incorreta.",
      "Incorreta. R$ 120 superestima o preço de partida."
    ]
  },
  {
    id: 74,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Um mapa está na escala 1:500.000. Dois pontos distam 4 cm no mapa. Qual a distância real em km?",
    options: ["2 km", "5 km", "20 km", "50 km", "200 km"],
    correct: 2,
    explanation: [
      "Incorreta. 2 km resulta de erro na conversão de centímetros para metros.",
      "Incorreta. 5 km desconsidera a proporção da escala métrica.",
      "Correta! 4 cm * 500.000 = 2.000.000 cm. Convertendo para metros (/100) = 20.000 m. Convertendo para quilômetros (/1.000) = 20 km.",
      "Incorreta. 50 km comete equívoco de conversão decimal.",
      "Incorreta. 200 km multiplica incorretamente o fator de escala."
    ]
  },
  {
    id: 75,
    area: 'Matematica',
    text: "<strong>(ENEM)</strong> Para formar uma comissão de 3 estudantes a partir de um grupo de 5 (A, B, C, D, E), quantas comissões distintas podem ser feitas?",
    options: ["10", "15", "20", "60", "120"],
    correct: 0,
    explanation: [
      "Correta! Como a ordem dos membros na comissão não importa, aplica-se Combinação: C(5,3) = 5! / (3! * 2!) = 120 / (6 * 2) = 10.",
      "Incorreta. 15 resultaria de erro na simplificação fatorial.",
      "Incorreta. 20 calcularia arranjos parciais sem considerar a divisão de repetição.",
      "Incorreta. 60 corresponde ao arranjo simples parcial (A5,3).",
      "Incorreta. 120 representa o fatorial completo de 5, sem agrupamento."
    ]
  },
  {
    id: 76,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Quantas senhas de 3 algarismos distintos podemos formar usando os números 1, 2, 3 e 4?",
    options: ["12", "24", "48", "64", "256"],
    correct: 1,
    explanation: [
      "Incorreta. 12 subestima as possibilidades de posições para os dígitos.",
      "Correta! Como a ordem importa (senha) e os algarismos são distintos, aplica-se Arranjo: 4 opções para o 1º dígito, 3 para o 2º e 2 para o 3º -> 4 * 3 * 2 = 24.",
      "Incorreta. 48 duplicaria o cálculo correto por fator indevido.",
      "Incorreta. 64 calcularia repetições permitidas (4³).",
      "Incorreta. 256 representa 4 elevado à 4ª potência."
    ]
  },
  {
    id: 77,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Num triângulo retângulo, a hipotenusa vale 10 cm e um dos ângulos agudos é de 30º. O cateto oposto a esse ângulo mede:",
    options: ["5 cm", "8 cm", "10 cm", "15 cm", "20 cm"],
    correct: 0,
    explanation: [
      "Correta! Seno(30º) = Cateto Oposto / Hipotenusa -> 1/2 = Cateto / 10 -> Cateto = 10 / 2 = 5 cm.",
      "Incorreta. 8 cm não condiz com as relações trigonométricas notáveis.",
      "Incorreta. 10 cm corresponderia ao valor total da hipotenusa.",
      "Incorreta. 15 cm superaria o comprimento da própria hipotenusa.",
      "Incorreta. 20 cm viola as leis geométricas do triângulo retângulo."
    ]
  },
  {
    id: 78,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> O primeiro termo de uma P.A. é 5 e a razão é 3. O 10º termo dessa progressão é:",
    options: ["27", "30", "32", "35", "50"],
    correct: 2,
    explanation: [
      "Incorreta. 27 corresponderia a cálculo com erro no número de razões somadas.",
      "Incorreta. 30 esquece de somar o primeiro termo inicial (5).",
      "Correta! Fórmula do termo geral: a_n = a_1 + (n - 1)*r -> a_10 = 5 + (10 - 1)*3 = 5 + (9 * 3) = 5 + 27 = 32.",
      "Incorreta. 35 resulta de somar razões além do índice estipulado.",
      "Incorreta. 50 multiplicaria incorretamente todos os valores sem progressão."
    ]
  },
  {
    id: 79,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> A distância entre os pontos A(0,0) e B(3,4) no plano cartesiano é:",
    options: ["3", "4", "5", "7", "25"],
    correct: 2,
    explanation: [
      "Incorreta. 3 representa apenas a variação na abcissa x.",
      "Incorreta. 4 representa apenas a variação na ordenada y.",
      "Correta! Pelo Teorema de Pitágoras (Distância = Raiz[(3 - 0)² + (4 - 0)²]) -> Raiz[9 + 16] = Raiz[25] = 5.",
      "Incorreta. 7 somaria indevidamente as coordenadas absolutas.",
      "Incorreta. 25 corresponde ao quadrado da distância antes de extrair a raiz quadrada."
    ]
  },
  {
    id: 80,
    area: 'Matemática',
    text: "<strong>(ENEM)</strong> Num estacionamento há carros e motos, totalizando 10 veículos e 32 rodas. Quantos carros há?",
    options: ["4", "5", "6", "7", "8"],
    correct: 2,
    explanation: [
      "Incorreta. 4 carros gerariam contagem de rodas inferior ao total estipulado.",
      "Incorreta. 5 carros resultariam em somatório de rodas incompatível.",
      "Correta! Montando o sistema: c + m = 10 e 4c + 2m = 32. Isolando c = 10 - m -> 4(10 - m) + 2m = 32 -> 40 - 2m = 32 -> 2m = 8 -> m = 4 motos. Logo, c = 6 carros.",
      "Incorreta. 7 carros ultrapassariam o total de rodas do problema.",
      "Incorreta. 8 carros violariam o limite de veículos estacionados."
    ]
  }
];
