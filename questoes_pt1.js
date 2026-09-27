const MOCK_QUESTIONS = [
  // MATEMÁTICA
  {
    id: 'mat-01-01', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'facil',
    enunciado: 'No atletismo, um grande desafio da prova de 100 metros rasos é a sua conclusão num tempo abaixo da marca de referência dos 10,00 segundos. Vários atletas já alcançaram esse feito. Em 2009, o jamaicano Usain Bolt estabeleceu o recorde mundial masculino dessa prova, com o tempo de 9,58 segundos.<br><br>Qual é a diferença, em segundo, entre a marca de referência e a marca estabelecida por Usain Bolt em 2009?[cite: 18]',
    alternativas: [
      { letra: 'A', texto: '0,02' }, { letra: 'B', texto: '0,42' }, { letra: 'C', texto: '0,52' }, { letra: 'D', texto: '1,02' }, { letra: 'E', texto: '1,42' }
    ],
    correta: 'B',
    resolucao: 'Basta subtrair, com atenção às casas decimais. 10,00 - 9,58 = 0,42 segundo.[cite: 18]'
  },
  {
    id: 'mat-01-02', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'media',
    enunciado: 'Um supermercado conta com cinco caixas disponíveis para pagamento. Um cliente pretende gastar o menor tempo possível de espera na fila. Ele observa que as telas apresentavam as informações a seguir:<br>Caixa I: atendimento 12 min, 5 pessoas.<br>Caixa II: atendimento 6 min, 9 pessoas.<br>Caixa III: atendimento 5 min, 6 pessoas.<br>Caixa IV: atendimento 15 min, 2 pessoas.<br>Caixa V: atendimento 9 min, 3 pessoas.<br><br>Para alcançar seu objetivo, o cliente deverá escolher o caixa[cite: 18]',
    alternativas: [
      { letra: 'A', texto: 'I.' }, { letra: 'B', texto: 'II.' }, { letra: 'C', texto: 'III.' }, { letra: 'D', texto: 'IV.' }, { letra: 'E', texto: 'V.' }
    ],
    correta: 'E',
    resolucao: 'O tempo de espera é o tempo por atendimento vezes o número de pessoas na fila. Dá 60, 54, 30, 30 e 27 minutos. O menor é o caixa V, que não tem nem a fila mais curta nem o atendimento mais rápido.[cite: 18]'
  },
  {
    id: 'mat-01-03', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'media',
    enunciado: 'A primeira etapa para obtenção da carteira de motorista é a contratação de três produtos: 20 aulas teóricas, 10 aulas práticas e o aluguel do veículo. Uma pessoa pesquisou os valores em três autoescolas:<br>I: Teórica R$ 10, Prática R$ 80, Aluguel R$ 400<br>II: Teórica R$ 30, Prática R$ 50, Aluguel R$ 200<br>III: Teórica R$ 20, Prática R$ 40, Aluguel R$ 400<br><br>A autoescola que será contratada para que o custo total seja o menor possível é a[cite: 18]',
    alternativas: [
      { letra: 'A', texto: 'I, com o custo total de R$ 1 400,00.' }, { letra: 'B', texto: 'II, com o custo total de R$ 280,00.' }, { letra: 'C', texto: 'II, com o custo total de R$ 1 300,00.' }, { letra: 'D', texto: 'III, com o custo total de R$ 460,00.' }, { letra: 'E', texto: 'III, com o custo total de R$ 1 200,00.' }
    ],
    correta: 'C',
    resolucao: 'Some os três produtos em cada autoescola. A I dá 1 400, a II dá 1 300 e a III dá 1 200. As alternativas B e D trazem custos parciais, de quem esqueceu de multiplicar pelo número de aulas.[cite: 18]'
  },
  {
    id: 'mat-01-04', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'dificil',
    enunciado: 'O metrô vende dois tipos de tíquetes (azul e vermelha) em cartelas com nove tíquetes cada. Duas cartelas azuis e uma vermelha são vendidas por R$ 32,40. Sabe-se que o preço de um tíquete azul menos o preço de um tíquete vermelho é igual ao preço de um tíquete vermelho mais cinco centavos.<br><br>Qual o preço, em real, de uma cartela de tíquetes vermelhos?[cite: 18]',
    alternativas: [
      { letra: 'A', texto: '4,68' }, { letra: 'B', texto: '6,30' }, { letra: 'C', texto: '9,30' }, { letra: 'D', texto: '10,50' }, { letra: 'E', texto: '10,65' }
    ],
    correta: 'B',
    resolucao: 'O enunciado diz que a - v = v + 0,05, logo a = 2v + 0,05. Como 18a + 9v = 32,40, ou seja, 2a + v = 3,60, substituindo sai 5v = 3,50 e v = 0,70. A cartela tem 9 tíquetes, então custa R$ 6,30.[cite: 18]'
  },
  {
    id: 'mat-02-01', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'facil',
    enunciado: 'Uma pessoa pretende instalar GNV no seu carro. Havia cinco modelos de cilindro: 10, 14, 17, 21 e 25 m³. O preço do cilindro é proporcional à sua capacidade. Esse carro rodará 30 km diariamente, 7 dias por semana, e o consumo do GNV é de 1 m³ a cada 13 km rodados. A pessoa escolherá o cilindro de menor preço que garanta apenas um abastecimento semanal.<br><br>Qual será a capacidade, em metro cúbico, do cilindro escolhido?[cite: 18]',
    alternativas: [
      { letra: 'A', texto: '10' }, { letra: 'B', texto: '14' }, { letra: 'C', texto: '17' }, { letra: 'D', texto: '21' }, { letra: 'E', texto: '25' }
    ],
    correta: 'C',
    resolucao: 'Em uma semana o carro roda 210 km, e a 1 m³ a cada 13 km isso dá cerca de 16,15 m³. Como o preço é proporcional à capacidade, o mais barato que serve é o menor que cobre 16,15, ou seja, 17 m³.[cite: 18]'
  },
  {
    id: 'mat-02-02', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'media',
    enunciado: 'Uma piscina tem capacidade de 2 500 000 litros. Seu sistema de abastecimento foi regulado para ter uma vazão constante de 6 000 litros de água por minuto. O mesmo sistema foi instalado em uma segunda piscina de 2 750 000 litros, e regulado para uma vazão constante capaz de enchê-la em um tempo 20% maior que o gasto na primeira.<br><br>A vazão do sistema da segunda piscina, em litro por minuto, é[cite: 18]',
    alternativas: [
      { letra: 'A', texto: '8 250.' }, { letra: 'B', texto: '7 920.' }, { letra: 'C', texto: '6 545.' }, { letra: 'D', texto: '5 500.' }, { letra: 'E', texto: '5 280.' }
    ],
    correta: 'D',
    resolucao: 'A primeira piscina leva cerca de 416,7 minutos. Um tempo 20% maior é 500 minutos, então a vazão da segunda é 2 750 000 ÷ 500 = 5 500 L/min. Repare que a vazão caiu, apesar de a piscina ser maior.[cite: 18]'
  },
  {
    id: 'mat-02-03', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'media',
    enunciado: 'Um borrifador de atuação automática libera, a cada acionamento, uma mesma quantidade de inseticida. O recipiente, quando cheio, contém 360 mL, que duram 60 dias se for acionado a cada 48 minutos ininterruptamente.<br><br>A quantidade liberada a cada acionamento, em mililitro, é[cite: 18]',
    alternativas: [
      { letra: 'A', texto: '0,125.' }, { letra: 'B', texto: '0,200.' }, { letra: 'C', texto: '4,800.' }, { letra: 'D', texto: '6,000.' }, { letra: 'E', texto: '12,000.' }
    ],
    correta: 'B',
    resolucao: 'Em 60 dias há 86 400 minutos, e acionando a cada 48 minutos são 1 800 acionamentos. Cada um libera 360 ÷ 1 800 = 0,2 mL.[cite: 18]'
  },
  {
    id: 'mat-02-04', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'dificil',
    enunciado: 'A diretora compra papel ofício proporcional ao número de alunos. No bimestre passado, comprou 6 000 folhas para 1 200 alunos. Agora, a escola tem 1 150 alunos. Ela só pode gastar R$ 220,00 e o fornecedor vende embalagens de 100 unidades a R$ 4,00 cada. Assim, será preciso convencer o fornecedor a dar um desconto para comprar a quantidade total necessária.<br><br>O desconto necessário, em porcentagem, pertence ao intervalo[cite: 18]',
    alternativas: [
      { letra: 'A', texto: '(5,0 ; 5,5).' }, { letra: 'B', texto: '(8,0 ; 8,5).' }, { letra: 'C', texto: '(11,5 ; 12,5).' }, { letra: 'D', texto: '(19,5 ; 20,5).' }, { letra: 'E', texto: '(3,5 ; 4,0).' }
    ],
    correta: 'A',
    resolucao: 'A proporção é de 5 folhas por aluno, então 1 150 alunos pedem 5 750 folhas, ou 58 embalagens, já que não se compra meia. O custo é R$ 232,00, e para caber nos R$ 220,00 o desconto precisa ser de cerca de 5,17%.[cite: 18]'
  },
  {
    id: 'mat-03-01', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'facil',
    enunciado: 'Uma empresa produziu 110 toneladas de plástico a partir do petróleo e 80 toneladas a partir de reciclados. Reciclar custa R$ 500,00/tonelada, o que equivale a 5% do custo do petróleo. Para o mês seguinte, a meta é produzir a mesma quantidade total, mas com redução de pelo menos 50% no custo.<br><br>A quantidade mínima de plástico reciclado no mês seguinte deverá ser[cite: 18]',
    alternativas: [
      { letra: 'A', texto: '135.' }, { letra: 'B', texto: '140.' }, { letra: 'C', texto: '155.' }, { letra: 'D', texto: '160.' }, { letra: 'E', texto: '175.' }
    ],
    correta: 'B',
    resolucao: 'Reciclar custa R$ 500, e isso é 5% do custo pelo petróleo, que portanto é R$ 10 000. O custo atual é R$ 1 140 000 para 190 t, e precisa cair para R$ 570 000. Resolvendo 1 900 000 - 9 500r ≤ 570 000, sai r ≥ 140.[cite: 18]'
  },
  {
    id: 'mat-03-02', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'media',
    enunciado: 'Para melhorar o fluxo, a prefeitura reduzirá o tempo de sinal vermelho, que atualmente é de 15s a cada 60s. O engenheiro calculou a probabilidade de encontrar o sinal vermelho como 15/60. Estabeleceu uma redução de forma que a probabilidade de encontrar ambos vermelhos seja igual a 4/100 (eventos independentes).<br><br>A redução do tempo vermelho estabelecida foi de[cite: 18]',
    alternativas: [
      { letra: 'A', texto: '1,35.' }, { letra: 'B', texto: '3,00.' }, { letra: 'C', texto: '9,00.' }, { letra: 'D', texto: '12,60.' }, { letra: 'E', texto: '13,80.' }
    ],
    correta: 'B',
    resolucao: 'A probabilidade atual é 0,25. Para que os dois deem 0,04, cada um precisa valer 0,2 (pois 0,2 * 0,2 = 0,04), o que leva o tempo a 12 segundos. A redução é de 15 - 12 = 3 segundos.[cite: 18]'
  },
  {
    id: 'mat-03-03', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'media',
    enunciado: 'Três dados cúbicos (1 a 6) foram utilizados. Artur escolheu dois, João ficou com o terceiro. Vence quem obtiver o maior número (o maior de Artur vs o de João). Em caso de empate, a vitória é de João.<br><br>O jogador que tem a maior probabilidade de vitória é[cite: 18]',
    alternativas: [
      { letra: 'A', texto: 'Artur, com probabilidade de 2/3.' }, { letra: 'B', texto: 'João, com probabilidade de 4/9.' }, { letra: 'C', texto: 'Artur, com probabilidade de 91/216.' }, { letra: 'D', texto: 'João, com probabilidade de 91/216.' }, { letra: 'E', texto: 'Artur, com probabilidade de 125/216.' }
    ],
    correta: 'E',
    resolucao: 'Artur perde apenas quando os dois dados dele saem menores ou iguais ao de João. A chance de João vencer é (1 + 4 + 9 + 16 + 25 + 36)/216 = 91/216, então Artur vence com 125/216. Dois dados compensam a vantagem do empate.[cite: 18]'
  },
  {
    id: 'mat-03-04', source: 'Apostila Matemática ENEM', materia: 'Matemática', dificuldade: 'dificil',
    enunciado: 'Um hospital tem 7 médicos cardiologistas e 6 neurologistas. A direção formará uma equipe com 5 médicos, sendo, pelo menos, 3 cardiologistas.<br><br>A expressão que representa o número máximo de maneiras de formar a equipe é[cite: 18]',
    alternativas: [
      { letra: 'A', texto: '(7!/4!) × (6!/4!)' }, { letra: 'B', texto: '[7!/(3!×4!)] × [6!/(2!×4!)]' }, { letra: 'C', texto: '7!/(3!×4!) + 6!/(2!×4!) + 5!/(1!×4!)' }, { letra: 'D', texto: 'Multiplicação dos 3 casos' }, { letra: 'E', texto: '[7!/(3!×4!) × 6!/(2!×4!)] + [7!/(4!×3!) × 6!/(1!×5!)] + [7!/(5!×2!) × 6!/(0!×6!)]' }
    ],
    correta: 'E',
    resolucao: 'Os casos são 3 cardiologistas com 2 neuros, 4 com 1, e 5 com nenhum. Dentro de cada caso as escolhas se multiplicam (combinação), e entre os casos elas se somam.[cite: 18]'
  },

  // BIOLOGIA
  {
    id: 'bio-01-01', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'facil',
    enunciado: 'Células de ameba tratadas com citocalasina B perdem o formato e o movimento. O grupo controle mantém pseudópodes.<br><br>Qual componente celular foi afetado pela droga?[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'Vacúolos.' }, { letra: 'B', texto: 'Mitocôndrias.' }, { letra: 'C', texto: 'Microfilamentos.' }, { letra: 'D', texto: 'Material genético.' }, { letra: 'E', texto: 'Membrana plasmática.' }
    ],
    correta: 'C',
    resolucao: 'A droga afeta os microfilamentos (actina), que respondem pela forma da célula e pelo movimento dos pseudópodes.[cite: 14]'
  },
  {
    id: 'bio-01-02', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Os ursos acordam da hibernação graças à termogenina, proteína mitocondrial que impede a chegada dos prótons à ATP sintetase, gerando calor.<br><br>Em qual etapa do metabolismo ela interfere?[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'Glicólise.' }, { letra: 'B', texto: 'Fermentação lática.' }, { letra: 'C', texto: 'Ciclo do ácido cítrico.' }, { letra: 'D', texto: 'Oxidação do piruvato.' }, { letra: 'E', texto: 'Fosforilação oxidativa.' }
    ],
    correta: 'E',
    resolucao: 'A termogenina interfere na fosforilação oxidativa, desviando os prótons da ATP sintetase e dissipando a energia como calor.[cite: 14]'
  },
  {
    id: 'bio-01-03', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Experimentos com enzima catalase mostram atividade crescendo até 15°C e caindo rapidamente aos 35°C.<br><br>Essa queda justifica-se pelo(a)[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'variação do pH do meio.' }, { letra: 'B', texto: 'aumento da energia de ativação.' }, { letra: 'C', texto: 'consumo da enzima.' }, { letra: 'D', texto: 'diminuição do substrato.' }, { letra: 'E', texto: 'modificação da estrutura tridimensional da enzima.' }
    ],
    correta: 'E',
    resolucao: 'A queda de atividade após o pico de temperatura deve-se à desnaturação, onde a enzima perde sua forma tridimensional.[cite: 14]'
  },
  {
    id: 'bio-01-04', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'dificil',
    enunciado: 'Micronúcleos são fragmentos de DNA provenientes do fuso mitótico durante a divisão celular associados a lesões genéticas.<br><br>Os micronúcleos se originam dos(as)[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'nucléolos.' }, { letra: 'B', texto: 'lisossomos.' }, { letra: 'C', texto: 'ribossomos.' }, { letra: 'D', texto: 'mitocôndrias.' }, { letra: 'E', texto: 'cromossomos.' }
    ],
    correta: 'E',
    resolucao: 'Micronúcleos são fragmentos originados de cromossomos que não chegaram ao polo durante a divisão celular.[cite: 14]'
  },
  {
    id: 'bio-02-01', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'facil',
    enunciado: 'A lei da distribuição independente de Mendel refere-se a genes segregando independentemente. Hoje sabe-se que isso nem sempre é verdade.<br><br>Por quê?[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'Depende de dominância.' }, { letra: 'B', texto: 'Nem sempre herdam dos genitores.' }, { letra: 'C', texto: 'Alterações levam a falhas.' }, { letra: 'D', texto: 'Genes localizados fisicamente próximos tendem a ser herdados juntos.' }, { letra: 'E', texto: 'Cromossomo pode não sofrer disjunção.' }
    ],
    correta: 'D',
    resolucao: 'A segunda lei de Mendel falha (ligação gênica) quando os genes estão fisicamente próximos no mesmo cromossomo, sendo herdados juntos.[cite: 14]'
  },
  {
    id: 'bio-02-02', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Nas mulheres, a inativação aleatória do cromossomo X nas células resulta em mosaicismo.<br><br>Para doenças recessivas ligadas ao sexo, essa inativação causa:[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'pleiotropia.' }, { letra: 'B', texto: 'mutação gênica.' }, { letra: 'C', texto: 'interação gênica.' }, { letra: 'D', texto: 'penetrância incompleta.' }, { letra: 'E', texto: 'expressividade variável.' }
    ],
    correta: 'E',
    resolucao: 'A inativação aleatória do X gera células que expressam o alelo normal e outras o mutante, resultando em expressividade variável da doença.[cite: 14]'
  },
  {
    id: 'bio-02-03', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Sequência de códons: AUG-UUU-GUU-CAA-UGU-AGU-UAG. UAG e UAA são códons terminais.<br><br>Qual mutação produzirá a menor proteína?[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'Deleção no códon 3.' }, { letra: 'B', texto: 'Substituição C por U no códon 4.' }, { letra: 'C', texto: 'Substituição no códon 6.' }, { letra: 'D', texto: 'Substituição no códon 7.' }, { letra: 'E', texto: 'Deleção no códon 5.' }
    ],
    correta: 'B',
    resolucao: 'Trocar C por U no códon 4 transforma CAA em UAA (códon de parada). A proteína terá apenas 3 aminoácidos, sendo a menor possível nas alternativas.[cite: 14]'
  },
  {
    id: 'bio-02-04', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'dificil',
    enunciado: 'População em equilíbrio de Hardy-Weinberg (ABO): 25% grupo O, 16% A homozigoto.<br><br>Qual a porcentagem de doadores compatíveis para o grupo B nessa população?[cite: 14]',
    alternativas: [
      { letra: 'A', texto: '11%' }, { letra: 'B', texto: '19%' }, { letra: 'C', texto: '26%' }, { letra: 'D', texto: '36%' }, { letra: 'E', texto: '60%' }
    ],
    correta: 'D',
    resolucao: 'Grupo O (r²) = 0,25, logo r = 0,5. Grupo A homo (p²) = 0,16, logo p = 0,4. Como p+q+r = 1, q = 0,1. Doadores para B são B e O. Soma = q² + 2qr + r² = 0,01 + 0,1 + 0,25 = 0,36 (36%).[cite: 14]'
  },
  {
    id: 'bio-03-01', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'facil',
    enunciado: 'Espécies de anuros variam a reprodução: de 5.000 gametas sem cuidado a 20 gametas na folha ou no saco vocal.<br><br>Isso evidencia que:[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'fêmeas influenciam machos.' }, { letra: 'B', texto: 'cuidado é necessário.' }, { letra: 'C', texto: 'grau de evolução determina o comportamento.' }, { letra: 'D', texto: 'sucesso reprodutivo garantido por estratégias diferentes.' }, { letra: 'E', texto: 'ambiente induz modificação de gametas.' }
    ],
    correta: 'D',
    resolucao: 'Os quatro padrões reprodutivos mostram que o sucesso na manutenção da espécie pode ser alcançado por diferentes estratégias evolutivas.[cite: 14]'
  },
  {
    id: 'bio-03-02', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Corais peçonhentas na Amazônia, falsas-corais no Cerrado com coloração idêntica.<br><br>A vantagem para a falsa-coral é:[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'Facilita captura.' }, { letra: 'B', texto: 'Diminui competição.' }, { letra: 'C', texto: 'Geração de híbridos.' }, { letra: 'D', texto: 'Reduz predação.' }, { letra: 'E', texto: 'Otimiza encontro reprodutivo.' }
    ],
    correta: 'D',
    resolucao: 'O mimetismo reduz a predação sobre a falsa-coral (inofensiva), pois os predadores evitam o padrão de cor por o associarem ao perigo da coral-verdadeira.[cite: 14]'
  },
  {
    id: 'bio-03-03', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'A aquisição evolutiva que marcou a separação entre as Pteridófitas e as Gimnospermas, permitindo a conquista definitiva da terra firme, foi a:[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'proteção do embrião.' }, { letra: 'B', texto: 'presença de vasos.' }, { letra: 'C', texto: 'formação do tubo polínico.' }, { letra: 'D', texto: 'polinização pelo vento.' }, { letra: 'E', texto: 'produção de frutos.' }
    ],
    correta: 'C',
    resolucao: 'O tubo polínico eliminou a dependência da água externa para a fecundação, permitindo a conquista definitiva da terra.[cite: 14]'
  },
  {
    id: 'bio-03-04', source: 'Apostila Biologia ENEM', materia: 'Ciências da Natureza', dificuldade: 'dificil',
    enunciado: 'Esquema de especiação alopátrica: população separada, sofre mutações e ao juntarem novamente (D1), não se misturam.<br><br>A situação D1 indica que:[cite: 14]',
    alternativas: [
      { letra: 'A', texto: 'Ocorre novo isolamento geográfico.' }, { letra: 'B', texto: 'Única população em gradiente.' }, { letra: 'C', texto: 'Duas populações com isolamento reprodutivo.' }, { letra: 'D', texto: 'Coexistem sem reproduzir.' }, { letra: 'E', texto: 'Preservadas mesmas características.' }
    ],
    correta: 'C',
    resolucao: 'Em D1, o isolamento persiste mesmo sem a barreira física inicial, o que caracteriza isolamento reprodutivo e duas espécies distintas.[cite: 14]'
  }
];