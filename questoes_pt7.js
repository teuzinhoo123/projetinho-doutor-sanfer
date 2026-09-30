// Questões de Matemática das apostilas (assuntos 1 a 6).
const MOCK_QUESTIONS_PT7 = [
  {
    "id": "mat-04-01",
    "source": "Apostila Matemática ENEM (ENEM 2025)",
    "materia": "Matemática",
    "dificuldade": "facil",
    "enunciado": "No atletismo, um grande desafio da prova de 100 metros rasos é a sua conclusão num tempo abaixo da marca de referência dos 10,00 segundos. Vários atletas já alcançaram esse feito. Em 2009, o jamaicano Usain Bolt estabeleceu o recorde mundial masculino dessa prova, com o tempo de 9,58 segundos.<br><br>Qual é a diferença, em segundo, entre a marca de referência e a marca estabelecida por Usain Bolt em 2009?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "0,02"
      },
      {
        "letra": "B",
        "texto": "0,42"
      },
      {
        "letra": "C",
        "texto": "0,52"
      },
      {
        "letra": "D",
        "texto": "1,02"
      },
      {
        "letra": "E",
        "texto": "1,42"
      }
    ],
    "correta": "B",
    "resolucao": "Basta subtrair, com atenção às casas decimais: 10,00 − 9,58 = 0,42 segundo."
  },
  {
    "id": "mat-04-02",
    "source": "Apostila Matemática ENEM (ENEM 2023)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Um supermercado conta com cinco caixas disponíveis para pagamento. Foram instaladas telas que apresentam o tempo médio gasto por cada caixa para iniciar e finalizar o atendimento de cada cliente, e o número de pessoas presentes na fila de cada caixa em tempo real. Um cliente, na hora de passar sua compra, sabendo que cada um dos cinco caixas iniciará um novo atendimento naquele momento, pretende gastar o menor tempo possível de espera na fila. Ele observa que as telas apresentavam as informações a seguir. Caixa I, atendimento 12 minutos, 5 pessoas na fila. Caixa II, atendimento 6 minutos, 9 pessoas na fila. Caixa III, atendimento 5 minutos, 6 pessoas na fila. Caixa IV, atendimento 15 minutos, 2 pessoas na fila. Caixa V, atendimento 9 minutos, 3 pessoas na fila.<br><br>Para alcançar seu objetivo, o cliente deverá escolher o caixa",
    "alternativas": [
      {
        "letra": "A",
        "texto": "I."
      },
      {
        "letra": "B",
        "texto": "II."
      },
      {
        "letra": "C",
        "texto": "III."
      },
      {
        "letra": "D",
        "texto": "IV."
      },
      {
        "letra": "E",
        "texto": "V."
      }
    ],
    "correta": "E",
    "resolucao": "O tempo de espera é o tempo por atendimento vezes o número de pessoas na fila. Dá 60, 54, 30, 30 e 27 minutos. O menor é o caixa V, que não tem nem a fila mais curta nem o atendimento mais rápido."
  },
  {
    "id": "mat-04-03",
    "source": "Apostila Matemática ENEM (ENEM 2025)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Em um país, a primeira etapa para obtenção da carteira de motorista é a contratação de três produtos: um pacote com 20 aulas teóricas, um pacote com 10 aulas práticas e o aluguel do veículo para realização das aulas práticas. Uma pessoa que pretende obter a carteira de motorista pesquisou o valor do aluguel do veículo e os valores de cada aula teórica e de cada aula prática em três autoescolas. O quadro apresenta esses valores. A U TO E S C O L A        AULA TEÓRICA (R$)              AULA PRÁTICA (R$)               ALUGUEL (R$) I                         10                             80                              400 II                        30                             50                              200 III                       20                             40                              400 Ela contratará os três produtos numa mesma autoescola de modo que o custo total nessa primeira etapa seja o menor possível.<br><br>A autoescola que será contratada é a",
    "alternativas": [
      {
        "letra": "A",
        "texto": "I, com o custo total de R$ 1 400,00."
      },
      {
        "letra": "B",
        "texto": "II, com o custo total de R$ 280,00."
      },
      {
        "letra": "C",
        "texto": "II, com o custo total de R$ 1 300,00."
      },
      {
        "letra": "D",
        "texto": "III, com o custo total de R$ 460,00."
      },
      {
        "letra": "E",
        "texto": "III, com o custo total de R$ 1 200,00."
      }
    ],
    "correta": "E",
    "resolucao": "Some os três produtos em cada autoescola: 20 aulas teóricas + 10 aulas práticas + aluguel. A I dá R$ 1 400, a II dá R$ 1 300 e a III dá R$ 1 200. As alternativas B e D trazem custos parciais, de quem esqueceu de multiplicar pelo número de aulas."
  },
  {
    "id": "mat-04-04",
    "source": "Apostila Matemática ENEM (ENEM 2023)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "O metrô de um município oferece dois tipos de tíquetes com colorações diferentes, azul e vermelha, sendo vendidos em cartelas, cada qual com nove tíquetes da mesma cor e mesmo valor unitário. Duas cartelas de tíquetes azuis e uma cartela de tíquetes vermelhos são vendidas por R$ 32,40. Sabe-se que o preço de um tíquete azul menos o preço de um tíquete vermelho é igual ao preço de um tíquete vermelho mais cinco centavos.<br><br>Qual o preço, em real, de uma cartela de tíquetes vermelhos?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "4,68"
      },
      {
        "letra": "B",
        "texto": "6,30"
      },
      {
        "letra": "C",
        "texto": "9,30"
      },
      {
        "letra": "D",
        "texto": "10,50"
      },
      {
        "letra": "E",
        "texto": "10,65"
      }
    ],
    "correta": "B",
    "resolucao": "O enunciado diz que a − v = v + 0,05, logo a = 2v + 0,05. Como 18a + 9v = 32,40, ou seja, 2a + v = 3,60, substituindo sai 5v = 3,50 e v = 0,70. A cartela tem 9 tíquetes, então custa R$ 6,30."
  },
  {
    "id": "mat-04-05",
    "source": "Apostila Matemática ENEM (ENEM 2025)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Uma pessoa pretende instalar um kit de gás natural veicular (GNV) em seu carro. Na loja que escolheu para realizar a compra e instalação desse kit, havia cinco modelos de cilindro para armazenamento do gás, cujas capacidades, em metro cúbico, eram, respectivamente: 10, 14, 17, 21 e 25. O preço do cilindro é proporcional à sua capacidade. Esse carro rodará 30 km diariamente, 7 dias por semana, e o consumo do GNV é de 1 m³ a cada 13 km rodados. A pessoa escolherá o modelo de cilindro de menor preço e que garanta apenas um abastecimento semanal.<br><br>Nessas condições, qual será a capacidade, em metro cúbico, do cilindro escolhido por essa pessoa?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "10"
      },
      {
        "letra": "B",
        "texto": "14"
      },
      {
        "letra": "C",
        "texto": "17"
      },
      {
        "letra": "D",
        "texto": "21"
      },
      {
        "letra": "E",
        "texto": "25"
      }
    ],
    "correta": "C",
    "resolucao": "Em uma semana o carro roda 210 km e, a 1 m³ a cada 13 km, isso dá cerca de 16,15 m³. Como o preço é proporcional à capacidade, o mais barato que serve é o menor que cobre 16,15, ou seja, 17 m³."
  },
  {
    "id": "mat-04-06",
    "source": "Apostila Matemática ENEM (ENEM 2024)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Uma piscina tem capacidade de 2 500 000 litros. Seu sistema de abastecimento foi regulado para ter uma vazão constante de 6 000 litros de água por minuto. O mesmo sistema foi instalado em uma segunda piscina, com capacidade de 2 750 000 litros, e regulado para ter uma vazão, também constante, capaz de enchê-la em um tempo 20% maior que o gasto para encher a primeira piscina.<br><br>A vazão do sistema de abastecimento da segunda piscina, em litro por minuto, é",
    "alternativas": [
      {
        "letra": "A",
        "texto": "8 250."
      },
      {
        "letra": "B",
        "texto": "7 920."
      },
      {
        "letra": "C",
        "texto": "6 545."
      },
      {
        "letra": "D",
        "texto": "5 500."
      },
      {
        "letra": "E",
        "texto": "5 280."
      }
    ],
    "correta": "D",
    "resolucao": "A primeira piscina leva cerca de 416,7 minutos. Um tempo 20% maior é 500 minutos, então a vazão da segunda é 2 750 000 ÷ 500 = 5 500 L/min. Repare que a vazão caiu, apesar de a piscina ser maior."
  },
  {
    "id": "mat-04-07",
    "source": "Apostila Matemática ENEM (ENEM 2022)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Um borrifador de atuação automática libera, a cada acionamento, uma mesma quantidade de inseticida. O recipiente desse produto, quando cheio, contém 360 mL de inseticida, que duram 60 dias se o borrifador permanecer ligado ininterruptamente e for acionado a cada 48 minutos.<br><br>A quantidade de inseticida que é liberada a cada acionamento do borrifador, em mililitro, é",
    "alternativas": [
      {
        "letra": "A",
        "texto": "0,125."
      },
      {
        "letra": "B",
        "texto": "0,200."
      },
      {
        "letra": "C",
        "texto": "4,800."
      },
      {
        "letra": "D",
        "texto": "6,000."
      },
      {
        "letra": "E",
        "texto": "12,000."
      }
    ],
    "correta": "B",
    "resolucao": "Em 60 dias há 86 400 minutos, e acionando a cada 48 minutos são 1 800 acionamentos. Cada um libera 360 ÷ 1 800 = 0,2 mL."
  },
  {
    "id": "mat-04-08",
    "source": "Apostila Matemática ENEM (ENEM 2023)",
    "materia": "Matemática",
    "dificuldade": "dificil",
    "enunciado": "A cada bimestre, a diretora de uma escola compra uma quantidade de folhas de papel ofício proporcional ao número de alunos matriculados. No bimestre passado, ela comprou 6 000 folhas para serem utilizadas pelos 1 200 alunos matriculados. Neste bimestre, alguns alunos cancelaram suas matrículas e a escola tem, agora, 1 150 alunos. A diretora só pode gastar R$ 220,00 nessa compra, e sabe que o fornecedor da escola vende as folhas de papel ofício em embalagens de 100 unidades a R$ 4,00 a embalagem. Assim, será preciso convencer o fornecedor a dar um desconto à escola, de modo que seja possível comprar a quantidade total de papel ofício necessária para o bimestre.<br><br>O desconto necessário no preço final da compra, em porcentagem, pertence ao intervalo",
    "alternativas": [
      {
        "letra": "A",
        "texto": "(5,0 ; 5,5)."
      },
      {
        "letra": "B",
        "texto": "(8,0 ; 8,5)."
      },
      {
        "letra": "C",
        "texto": "(11,5 ; 12,5)."
      },
      {
        "letra": "D",
        "texto": "(19,5 ; 20,5)."
      },
      {
        "letra": "E",
        "texto": "(3,5 ; 4,0)."
      }
    ],
    "correta": "A",
    "resolucao": "A proporção é de 5 folhas por aluno, então 1 150 alunos pedem 5 750 folhas, ou 58 embalagens, já que não se compra meia. O custo é R$ 232,00, e para caber nos R$ 220,00 o desconto precisa ser de cerca de 5,17%."
  },
  {
    "id": "mat-04-09",
    "source": "Apostila Matemática ENEM (ENEM 2025)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Uma empresa produziu, em um determinado mês, 110 toneladas de plástico a partir de derivados de petróleo e 80 toneladas a partir de plásticos reciclados. O custo para reciclar uma tonelada de plástico é de R$ 500,00, que equivale a 5% do custo para produzir a mesma quantidade de plástico a partir de derivados de petróleo. Para o mês seguinte, a meta dessa empresa é produzir a mesma quantidade de plástico que foi produzida nesse mês, mas com redução de, pelo menos, 50% no custo de produção.<br><br>Para que no mês seguinte a empresa atinja a meta, a quantidade mínima de toneladas de plástico que devem ser produzidas a partir de reciclagem deverá ser",
    "alternativas": [
      {
        "letra": "A",
        "texto": "135."
      },
      {
        "letra": "B",
        "texto": "140."
      },
      {
        "letra": "C",
        "texto": "155."
      },
      {
        "letra": "D",
        "texto": "160."
      },
      {
        "letra": "E",
        "texto": "175."
      }
    ],
    "correta": "B",
    "resolucao": "Reciclar custa R$ 500,00 por tonelada, que é 5% do custo pelo petróleo, portanto R$ 10 000,00. O custo atual é R$ 1 140 000,00 para 190 toneladas e precisa cair para no máximo R$ 570 000,00. Resolvendo 1 900 000 − 9 500r ≤ 570 000, sai r ≥ 140."
  },
  {
    "id": "mat-04-10",
    "source": "Apostila Matemática ENEM (ENEM 2024)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Para melhorar o fluxo de ônibus em uma avenida que tem dois semáforos, a prefeitura reduzirá o tempo em que cada sinal ficará vermelho, que atualmente é de 15 segundos a cada 60 segundos. Admita que o instante de chegada de um ônibus a cada semáforo é aleatório. O engenheiro de tráfego calculou a probabilidade de um ônibus encontrar cada um deles vermelho, obtendo 15/60. A partir daí, estabeleceu uma mesma redução no tempo em que cada sinal ficará vermelho, de maneira que a probabilidade de um ônibus encontrar ambos os sinais vermelhos numa mesma viagem seja igual a 4/100, considerando os eventos independentes.<br><br>Para isso, a redução do tempo em que o sinal ficará vermelho, em segundo, estabelecida pelo engenheiro foi de",
    "alternativas": [
      {
        "letra": "A",
        "texto": "1,35."
      },
      {
        "letra": "B",
        "texto": "3,00."
      },
      {
        "letra": "C",
        "texto": "9,00."
      },
      {
        "letra": "D",
        "texto": "12,60."
      },
      {
        "letra": "E",
        "texto": "13,80."
      }
    ],
    "correta": "B",
    "resolucao": "A probabilidade atual em um semáforo é 0,25. Para que os dois juntos deem 0,04, cada um precisa valer 0,2, o que leva o tempo a 12 segundos. A redução é de 3 segundos."
  },
  {
    "id": "mat-04-11",
    "source": "Apostila Matemática ENEM (ENEM 2025)",
    "materia": "Matemática",
    "dificuldade": "dificil",
    "enunciado": "Três dados cúbicos, com faces numeradas de 1 a 6, foram utilizados em um jogo. Artur escolheu dois dados, e João ficou com o terceiro. O jogo consiste em ambos lançarem seus dados, observarem os números nas faces voltadas para cima e compararem o maior número obtido por Artur com o número obtido por João. Vence o jogador que obtiver o maior número. Em caso de empate, a vitória é de João.<br><br>O jogador que tem a maior probabilidade de vitória é",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Artur, com probabilidade de 2/3."
      },
      {
        "letra": "B",
        "texto": "João, com probabilidade de 4/9."
      },
      {
        "letra": "C",
        "texto": "Artur, com probabilidade de 91/216."
      },
      {
        "letra": "D",
        "texto": "João, com probabilidade de 91/216."
      },
      {
        "letra": "E",
        "texto": "Artur, com probabilidade de 125/216."
      }
    ],
    "correta": "E",
    "resolucao": "Artur perde apenas quando os dois dados dele saem menores ou iguais ao de João. A chance de João vencer é (1 + 4 + 9 + 16 + 25 + 36)/216 = 91/216, então Artur vence com 125/216. Dois dados contra um compensam a vantagem do empate."
  },
  {
    "id": "mat-04-12",
    "source": "Apostila Matemática ENEM (ENEM 2024)",
    "materia": "Matemática",
    "dificuldade": "dificil",
    "enunciado": "Um hospital tem 7 médicos cardiologistas e 6 médicos neurologistas em seu quadro de funcionários. Para executar determinada atividade, a direção desse hospital formará uma equipe com 5 médicos, sendo, pelo menos, 3 cardiologistas.<br><br>A expressão numérica que representa o número máximo de maneiras distintas de formar essa equipe é",
    "alternativas": [
      {
        "letra": "A",
        "texto": "(7!/4!) × (6!/4!)"
      },
      {
        "letra": "B",
        "texto": "[7!/(3!×4!)] × [6!/(2!×4!)]"
      },
      {
        "letra": "C",
        "texto": "7!/(3!×4!) + 6!/(2!×4!) + 5!/(1!×4!)"
      },
      {
        "letra": "D",
        "texto": "[7!/(3!×4!) + 6!/(2!×4!)] × [7!/(4!×3!) + 6!/(1!×5!)] × [7!/(5!×2!) + 6!/(0!×6!)]"
      },
      {
        "letra": "E",
        "texto": "[7!/(3!×4!) × 6!/(2!×4!)] + [7!/(4!×3!) × 6!/(1!×5!)] + [7!/(5!×2!) × 6!/(0!×6!)]"
      }
    ],
    "correta": "E",
    "resolucao": "Os casos são 3 cardiologistas com 2 neurologistas, 4 com 1, e 5 com nenhum. Dentro de cada caso as escolhas se multiplicam, e entre os casos elas se somam. A alternativa D troca as somas pelas multiplicações."
  },
  {
    "id": "mat-04-13",
    "source": "Apostila Matemática ENEM (ENEM 2025)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "No entorno de uma lagoa circular, cujo raio mede 1 km, há uma ciclovia. Devido aos frequentes roubos de bicicleta, a prefeitura planeja alocar policiais em posições estratégicas para patrulhar essa ciclovia, de forma a torná-la totalmente protegida. Um ponto da ciclovia é considerado protegido se houver pelo menos um policial a, no máximo, 200 m de distância daquele ponto, posicionado sobre a ciclovia (isto é, um policial protege até 200 m para cada lado do ponto em que está). Desconsidere a largura da pista da ciclovia e utilize 3 como aproximação para π.<br><br>Nessas condições, a quantidade mínima necessária de policiais a serem alocados ao longo dessa ciclovia para torná-la protegida é",
    "alternativas": [
      {
        "letra": "A",
        "texto": "4."
      },
      {
        "letra": "B",
        "texto": "8."
      },
      {
        "letra": "C",
        "texto": "15."
      },
      {
        "letra": "D",
        "texto": "30."
      },
      {
        "letra": "E",
        "texto": "60."
      }
    ],
    "correta": "C",
    "resolucao": "O comprimento da ciclovia é 2 · 3 · 1 000 = 6 000 m. Cada policial protege 400 m, somando os 200 m de cada lado, então são 15 policiais."
  },
  {
    "id": "mat-04-14",
    "source": "Apostila Matemática ENEM (ENEM 2024)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Um fazendeiro pretende construir um galinheiro ocupando uma região plana de formato retangular, com lados de comprimentos L metro e C metro. Os lados serão cercados por telas de tipos diferentes. Nos lados de comprimento L metro, será utilizada uma tela cujo metro linear custa R$ 20,00, enquanto, nos outros dois lados, uma que custa R$ 15,00. O fazendeiro quer gastar, no máximo, R$ 6 000,00 na compra de toda a tela necessária, e deseja que o galinheiro tenha a maior área possível.<br><br>Qual será a medida, em metro, do maior lado do galinheiro?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "85"
      },
      {
        "letra": "B",
        "texto": "100"
      },
      {
        "letra": "C",
        "texto": "175"
      },
      {
        "letra": "D",
        "texto": "200"
      },
      {
        "letra": "E",
        "texto": "350"
      }
    ],
    "correta": "B",
    "resolucao": "O custo dá 40L + 30C = 6 000, ou seja, 4L + 3C = 600, e a área L · C é máxima quando as duas parcelas se igualam, ou seja, 4L = 3C = 300, o que dá L = 75 e C = 100. O maior lado mede 100 m."
  },
  {
    "id": "mat-04-15",
    "source": "Apostila Matemática ENEM (ENEM 2025)",
    "materia": "Matemática",
    "dificuldade": "dificil",
    "enunciado": "Uma fábrica utilizou uma impressora 3D para produzir o protótipo de uma peça. O protótipo tem forma de um poliedro convexo, obtido pela justaposição de dois sólidos distintos, um com a forma de um prisma hexagonal regular reto e o outro com a forma de um tronco de pirâmide hexagonal reta. A base maior do tronco de pirâmide coincide com uma das bases do prisma. Após a impressão, ele foi encaminhado ao setor de customização para a pintura de sua superfície. O critério definido considera que faces congruentes entre si devem ser pintadas com uma mesma cor, e faces não congruentes entre si devem apresentar cores distintas.<br><br>Qual é a quantidade de cores utilizadas para pintar o protótipo?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "9"
      },
      {
        "letra": "B",
        "texto": "8"
      },
      {
        "letra": "C",
        "texto": "6"
      },
      {
        "letra": "D",
        "texto": "4"
      },
      {
        "letra": "E",
        "texto": "3"
      }
    ],
    "correta": "D",
    "resolucao": "A face de contato desaparece. Sobram o hexágono livre do prisma, os seis retângulos, os seis trapézios e o hexágono menor, ou seja, quatro grupos de faces congruentes."
  },
  {
    "id": "mat-04-16",
    "source": "Apostila Matemática ENEM (ENEM 2024)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Uma indústria faz uma parceria com uma distribuidora de sucos para lançar no mercado dois tipos de embalagens. Para a fabricação dessas embalagens, a indústria dispõe de folhas de alumínio retangulares, de dimensões 10 cm por 20 cm. Cada uma dessas folhas é utilizada para formar a superfície lateral da embalagem, em formato de cilindro circular reto, que posteriormente recebe fundo e tampa circulares. Na Embalagem 1, a folha é enrolada de modo que a circunferência da base mede 10 cm e a altura é 20 cm. Na Embalagem 2, a circunferência da base mede 20 cm e a altura é 10 cm.<br><br>Dentre essas duas embalagens, a de maior capacidade apresentará volume, em centímetro cúbico, igual a",
    "alternativas": [
      {
        "letra": "A",
        "texto": "4 000 π"
      },
      {
        "letra": "B",
        "texto": "2 000 π"
      },
      {
        "letra": "C",
        "texto": "4 000/π"
      },
      {
        "letra": "D",
        "texto": "1 000/π"
      },
      {
        "letra": "E",
        "texto": "500/π"
      }
    ],
    "correta": "D",
    "resolucao": "Enrolando pelo lado de 10 cm como circunferência, o volume é 500/π, e pelo lado de 20 cm é 1 000/π. O raio entra ao quadrado e a altura apenas linearmente."
  },
  {
    "id": "mat-04-17",
    "source": "Apostila Matemática ENEM (ENEM 2024)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Uma empresa produz mochilas escolares sob encomenda. Essa empresa tem um custo total de produção, composto por um custo fixo, que não depende do número de mochilas, mais um custo variável, que é proporcional ao número de mochilas produzidas. O custo total cresce de forma linear. Para 30 mochilas, o custo total é R$ 1 050,00; para 50 mochilas, R$ 1 650,00; e para 100 mochilas, R$ 3 150,00.<br><br>O custo total, em real, para a produção de 80 mochilas será",
    "alternativas": [
      {
        "letra": "A",
        "texto": "2 400,00."
      },
      {
        "letra": "B",
        "texto": "2 520,00."
      },
      {
        "letra": "C",
        "texto": "2 550,00."
      },
      {
        "letra": "D",
        "texto": "2 700,00."
      },
      {
        "letra": "E",
        "texto": "2 800,00."
      }
    ],
    "correta": "C",
    "resolucao": "De 30 para 50 mochilas o custo sobe R$ 600,00 para 20 unidades, então cada mochila custa R$ 30,00 e o custo fixo é R$ 150,00. Logo C(80) = 150 + 2 400 = R$ 2 550,00. A alternativa A é a resposta de quem esquece o custo fixo."
  },
  {
    "id": "mat-04-18",
    "source": "Apostila Matemática ENEM (ENEM 2023)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "Um agricultor é informado sobre um método de proteção para a lavoura que consiste em inserir larvas específicas, de rápida reprodução. A reprodução dessas larvas faz com que sua população multiplique-se por 10 a cada 3 dias e, para evitar eventuais desequilíbrios, é possível cessar essa reprodução aplicando-se um produto X. O agricultor decide iniciar esse método com 100 larvas e dispõe de 5 litros do produto X, cuja aplicação recomendada é de exatamente 1 litro para cada população de 200 000 larvas. A quantidade total do produto X de que ele dispõe deverá ser aplicada de uma única vez.<br><br>Quantos dias após iniciado esse método o agricultor deverá aplicar o produto X?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "2"
      },
      {
        "letra": "B",
        "texto": "4"
      },
      {
        "letra": "C",
        "texto": "6"
      },
      {
        "letra": "D",
        "texto": "12"
      },
      {
        "letra": "E",
        "texto": "18"
      }
    ],
    "correta": "D",
    "resolucao": "A população é 100 · 10^(d/3), e a aplicação ocorre em 1 000 000 de larvas (5 litros × 200 000). Então 10^(d/3) = 10⁴, logo d/3 = 4 e d = 12 dias. A alternativa B é de quem esquece de multiplicar pelos 3 dias do intervalo."
  },
  {
    "id": "mat-04-19",
    "source": "Apostila Matemática ENEM (ENEM 2023)",
    "materia": "Matemática",
    "dificuldade": "dificil",
    "enunciado": "Uma loja vende seus produtos de duas formas, à vista ou financiado em três parcelas mensais iguais. Para definir o valor dessas parcelas nas vendas financiadas, a loja aumenta em 20% o valor do produto à vista e divide esse novo valor por 3. A primeira parcela deve ser paga no ato da compra, e as duas últimas, em 30 e 60 dias após a compra. Um cliente da loja decidiu comprar, de forma financiada, um produto cujo valor à vista é R$ 1 500,00. Utilize 5,29 como aproximação para √28.<br><br>A taxa mensal de juros compostos praticada nesse financiamento é de",
    "alternativas": [
      {
        "letra": "A",
        "texto": "6,7%"
      },
      {
        "letra": "B",
        "texto": "10%"
      },
      {
        "letra": "C",
        "texto": "20%"
      },
      {
        "letra": "D",
        "texto": "21,5%"
      },
      {
        "letra": "E",
        "texto": "23,3%"
      }
    ],
    "correta": "D",
    "resolucao": "O valor financiado é R$ 1 800,00 em três parcelas de R$ 600,00, e a primeira é paga no ato. Igualando a valor presente e chamando x = 1/(1+i), sobra 2x² + 2x − 3 = 0, cuja raiz positiva é 0,8225. Isso dá uma taxa de aproximadamente 21,6%, e a alternativa mais próxima é 21,5%. A alternativa C, 20%, é o acréscimo aplicado pela loja, que não é a taxa de juros, porque parte do pagamento é feita à vista."
  },
  {
    "id": "mat-04-20",
    "source": "Apostila Matemática ENEM (ENEM 2025)",
    "materia": "Matemática",
    "dificuldade": "dificil",
    "enunciado": "Um empresário utiliza máquinas cuja pressão interna P, em atmosfera, depende do tempo contínuo de utilização t, em hora, e de um parâmetro positivo K, que define o modelo da máquina, segundo a expressão P = 4 · log[−K · (t + 1) · (t − 19)]. O fabricante recomenda que a pressão interna não ultrapasse 10 atmosferas durante o funcionamento. O empresário pretende comprar novas máquinas que deverão funcionar, diariamente, por um período contínuo de 10 horas, e precisa definir o modelo escolhendo o maior valor possível do parâmetro K, atendendo à recomendação do fabricante.<br><br>O maior valor a ser escolhido para K é",
    "alternativas": [
      {
        "letra": "A",
        "texto": "10^(0,5)"
      },
      {
        "letra": "B",
        "texto": "10^8"
      },
      {
        "letra": "C",
        "texto": "10^(2,5)/84"
      },
      {
        "letra": "D",
        "texto": "10^(2,5)/99"
      },
      {
        "letra": "E",
        "texto": "25 × 10^(−2)"
      }
    ],
    "correta": "A",
    "resolucao": "A condição vira −K(t+1)(t−19) ≤ 10^2,5. A expressão (t+1)(19−t) atinge o máximo em t = 9, valendo 100, então 100K ≤ 10^2,5 e K ≤ 10^0,5. As alternativas C e D vêm de calcular nas pontas do intervalo em vez de procurar o máximo."
  },
  {
    "id": "mat-04-21",
    "source": "Apostila Matemática ENEM (ENEM 2024)",
    "materia": "Matemática",
    "dificuldade": "facil",
    "enunciado": "A umidade relativa do ar é um dos indicadores utilizados na meteorologia para fazer previsões sobre o clima. Em uma cidade, as médias mensais da umidade relativa do ar, em porcentagem, em seis meses consecutivos foram: maio, 66; junho, 64; julho, 54; agosto, 46; setembro, 60; outubro, 64.<br><br>Nessa cidade, a mediana desses dados, em porcentagem, da umidade relativa do ar no período considerado foi",
    "alternativas": [
      {
        "letra": "A",
        "texto": "56."
      },
      {
        "letra": "B",
        "texto": "58."
      },
      {
        "letra": "C",
        "texto": "59."
      },
      {
        "letra": "D",
        "texto": "60."
      },
      {
        "letra": "E",
        "texto": "62."
      }
    ],
    "correta": "E",
    "resolucao": "Ordenando, fica 46, 54, 60, 64, 64, 66. Como a quantidade é par, a mediana é a média dos dois centrais, ou seja, 62. Quem pegar o valor do meio sem ordenar encontra 54, que nem está entre as alternativas."
  },
  {
    "id": "mat-04-22",
    "source": "Apostila Matemática ENEM (ENEM 2023)",
    "materia": "Matemática",
    "dificuldade": "media",
    "enunciado": "O gerente de uma fábrica pretende comparar a evolução das vendas de dois produtos similares, I e II. Para isso, passou a verificar o número de unidades vendidas de cada um desses produtos em cada mês. O produto I vendeu 80 unidades em abril, 90 em maio e 100 em junho. O produto II vendeu 190 unidades em abril, 170 em maio e 150 em junho. O gerente estava decidido a cessar a produção do produto II no mês seguinte àquele em que as vendas do produto I superassem as do produto II. Suponha que a variação na quantidade de unidades vendidas se manteve, mês a mês, como no período representado.<br><br>Em qual mês o produto II parou de ser produzido?",
    "alternativas": [
      {
        "letra": "A",
        "texto": "Junho."
      },
      {
        "letra": "B",
        "texto": "Julho."
      },
      {
        "letra": "C",
        "texto": "Agosto."
      },
      {
        "letra": "D",
        "texto": "Setembro."
      },
      {
        "letra": "E",
        "texto": "Outubro."
      }
    ],
    "correta": "D",
    "resolucao": "O produto I sobe 10 por mês e o II cai 20. Em agosto seriam 120 contra 110, quando o I passa o II pela primeira vez. Como a produção cessa no mês seguinte, a resposta é setembro. A alternativa C é de quem para no mês da ultrapassagem."
  }
];
