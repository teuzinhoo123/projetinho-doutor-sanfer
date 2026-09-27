const MOCK_QUESTIONS_PT2 = [
  // QUÍMICA
  {
    id: 'qui-01-01', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Terras-raras é o nome dado ao conjunto dos dezessete elementos químicos da Tabela Periódica, formado pelos quinze lantanídeos mais o escândio e o ítrio. Sobre esses elementos químicos e a localização das suas principais reservas mundiais, podemos afirmar corretamente que[cite: 17]',
    alternativas: [
      { letra: 'A', texto: 'possuem distintas aplicações em diversos setores. As maiores concentrações localizam-se na república da Guiné.' }, 
      { letra: 'B', texto: 'são utilizados pelo agronegócio internacional. As principais jazidas estão estabelecidas na Arábia Saudita.' }, 
      { letra: 'C', texto: 'suas ocorrências se dão em pequenas concentrações, misturadas a outros minerais, tornando difícil o processo de separação. As maiores reservas encontram-se na China.' }, 
      { letra: 'D', texto: 'ocorrem em áreas superficiais de fácil extração. As jazidas mais antigas situam-se no Japão.' }, 
      { letra: 'E', texto: 'são denominados metais raros e encontram-se nas minas de aluvião. Suas principais reservas estão no Chile.' }
    ],
    correta: 'C',
    resolucao: 'Terras raras ocorrem em pequenas concentrações misturadas a outros minerais, e é a separação que é difícil, não a extração. As maiores reservas estão na China, com o Brasil em segundo lugar.[cite: 17]'
  },
  {
    id: 'qui-01-02', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'dificil',
    enunciado: 'Em 1962, foi realizada com sucesso a reação entre o xenônio e o hexafluoreto de platina. Dentre os compostos conhecidos, um dos mais estáveis é o difluoreto de xenônio, no qual dois átomos de flúor se ligam covalentemente ao átomo de gás nobre.<br><br>Ao se escrever a fórmula de Lewis do composto de xenônio citado, quantos elétrons na camada de valência haverá no átomo do gás nobre?[cite: 17]',
    alternativas: [
      { letra: 'A', texto: '6' }, { letra: 'B', texto: '8' }, { letra: 'C', texto: '10' }, { letra: 'D', texto: '12' }, { letra: 'E', texto: '14' }
    ],
    correta: 'C',
    resolucao: 'No difluoreto de xenônio o gás nobre fica com 10 elétrons na camada de valência, somando três pares isolados e dois pares ligantes. É um caso de expansão de octeto.[cite: 17]'
  },
  {
    id: 'qui-01-03', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Os "gases inertes" não interferem em nenhuma reação química. Só em 1962 um químico conseguiu forçar o xenônio a combinar-se fugazmente com o flúor.<br><br>Qual propriedade do flúor justifica sua escolha como reagente para o processo mencionado?[cite: 17]',
    alternativas: [
      { letra: 'A', texto: 'Densidade.' }, { letra: 'B', texto: 'Condutância.' }, { letra: 'C', texto: 'Eletronegatividade.' }, { letra: 'D', texto: 'Estabilidade nuclear.' }, { letra: 'E', texto: 'Temperatura de ebulição.' }
    ],
    correta: 'C',
    resolucao: 'A eletronegatividade do flúor é a maior da tabela, e é essa propriedade que explica a escolha dele como reagente capaz de forçar a reação com um gás nobre.[cite: 17]'
  },
  {
    id: 'qui-01-04', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'O elemento químico de número atômico (Z) igual a 41 tem propriedades tão parecidas com as do elemento de Z = 73 que chegaram a ser confundidos. Foram conferidos a esses elementos os nomes de nióbio e tântalo.<br><br>A importância econômica desses elementos, pela similaridade de suas propriedades, deve-se a[cite: 17]',
    alternativas: [
      { letra: 'A', texto: 'terem elétrons no subnível f.' }, { letra: 'B', texto: 'serem elementos de transição interna.' }, { letra: 'C', texto: 'pertencerem ao mesmo grupo na tabela periódica.' }, { letra: 'D', texto: 'terem seus elétrons mais externos nos níveis 4 e 5.' }, { letra: 'E', texto: 'estarem localizados na família dos alcalinos terrosos.' }
    ],
    correta: 'C',
    resolucao: 'Sempre que a prova pergunta por que dois elementos têm química parecida, a resposta é a mesma. Eles estão no mesmo grupo, portanto têm a mesma configuração de valência.[cite: 17]'
  },
  {
    id: 'qui-02-01', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'facil',
    enunciado: 'Um grupo de alunos realizou um experimento para observar algumas propriedades dos ácidos, adicionando um pedaço de mármore (CaCO3) a uma solução aquosa de ácido clorídrico (HCl), observando a liberação de um gás e o aumento da temperatura.<br><br>O gás obtido no experimento é o[cite: 17]',
    alternativas: [
      { letra: 'A', texto: 'H2' }, { letra: 'B', texto: 'O2' }, { letra: 'C', texto: 'CO2' }, { letra: 'D', texto: 'CO' }, { letra: 'E', texto: 'Cl2' }
    ],
    correta: 'C',
    resolucao: 'Ácido com carbonato forma sal, água e gás carbônico (CO2). A alternativa que aponta gás hidrogênio descreve a reação de ácido com metal puro.[cite: 17]'
  },
  {
    id: 'qui-02-02', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'A dimetilamina é uma substância de elevada toxidez que se espalhou por uma rodovia após um acidente. Para minimizar a agressão ao meio ambiente e evitar a evaporação, um químico considerou o uso de água, vinagre, óleo de soja, sal ou bicarbonato de sódio.<br><br>O tratamento correto para minimizar esse problema é usar[cite: 17]',
    alternativas: [
      { letra: 'A', texto: 'água.' }, { letra: 'B', texto: 'vinagre.' }, { letra: 'C', texto: 'óleo de soja.' }, { letra: 'D', texto: 'sal de cozinha.' }, { letra: 'E', texto: 'bicarbonato de sódio.' }
    ],
    correta: 'B',
    resolucao: 'A dimetilamina é uma base (amina), então precisa de um ácido para neutralizar, e o vinagre (ácido acético) é o único ácido da lista.[cite: 17]'
  },
  {
    id: 'qui-02-03', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'dificil',
    enunciado: 'Um estudante analisou a decomposição térmica do policloreto de vinila (PVC). Houve a liberação majoritária de um gás diatômico heteronuclear. Esse gás, quando borbulhado em solução alcalina com indicador ácido-base, alterou a cor. Em contato com solução de carbonato de sódio, liberou gás carbônico.<br><br>Qual foi o gás liberado majoritariamente?[cite: 17]',
    alternativas: [
      { letra: 'A', texto: 'H2' }, { letra: 'B', texto: 'Cl2' }, { letra: 'C', texto: 'CO' }, { letra: 'D', texto: 'CO2' }, { letra: 'E', texto: 'HCl' }
    ],
    correta: 'E',
    resolucao: 'Três pistas convergem para o cloreto de hidrogênio (HCl). Ele é diatômico heteronuclear, tem caráter ácido (altera indicador e reage com carbonato) e o PVC tem cloro na cadeia.[cite: 17]'
  },
  {
    id: 'qui-02-04', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Existe no comércio um produto antimofo constituído por uma embalagem com cloreto de cálcio anidro (CaCl2). Essa substância absorve a umidade ambiente, transformando-se em cloreto de cálcio di-hidratado (CaCl2.2H2O). Considere a massa molar da água igual a 18 g/mol e do CaCl2 igual a 111 g/mol.<br><br>Na hidratação da substância, o ganho percentual, em massa, é mais próximo de[cite: 17]',
    alternativas: [
      { letra: 'A', texto: '14%' }, { letra: 'B', texto: '16%' }, { letra: 'C', texto: '24%' }, { letra: 'D', texto: '32%' }, { letra: 'E', texto: '75%' }
    ],
    correta: 'D',
    resolucao: 'Cada mol de cloreto de cálcio ganha duas águas, ou seja, 36 g sobre os 111 g iniciais. O ganho é 36 / 111, cerca de 32%.[cite: 17]'
  },
  {
    id: 'qui-03-01', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'dificil',
    enunciado: 'Para obtenção do titânio metálico, o rutilo (TiO2) é clorado a TiCl4. A segunda operação é a redução com magnésio: 2 Mg + TiCl4 -> 2 MgCl2 + Ti. Considere Ti = 48 g/mol e Cl = 35,5 g/mol.<br><br>Qual a massa de gás cloro (Cl2) necessária para produzir 480 kg de titânio metálico?[cite: 17]',
    alternativas: [
      { letra: 'A', texto: '179 kg' }, { letra: 'B', texto: '359 kg' }, { letra: 'C', texto: '480 kg' }, { letra: 'D', texto: '710 kg' }, { letra: 'E', texto: '1 420 kg' }
    ],
    correta: 'E',
    resolucao: '480 kg de titânio equivalem a 10 kmol. A proporção é de 2 mols de Cl2 para 1 de Ti. São 20 kmol de Cl2, que a 71 g/mol dão 1 420 kg.[cite: 17]'
  },
  {
    id: 'qui-03-02', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'O biogás de suinocultura contém 70% em volume de metano (massa molar 16 g/mol; volume molar 22 L/mol). Em um gerador, 1 m³ de biogás substitui 0,59 L de etanol (densidade 0,78 g/mL).<br><br>A massa de metano necessária para substituir 10 mol de etanol é mais próxima de[cite: 17]',
    alternativas: [
      { letra: 'A', texto: '300 g.' }, { letra: 'B', texto: '400 g.' }, { letra: 'C', texto: '510 g.' }, { letra: 'D', texto: '590 g.' }, { letra: 'E', texto: '720 g.' }
    ],
    correta: 'C',
    resolucao: '10 mol de etanol equivalem a 460 g, que na densidade ocupam 0,59 L, correspondendo a 1 m³ de biogás. Desses 1000L, 70% é metano (700 L), que a 22 L/mol dão cerca de 31,8 mol e 510 g.[cite: 17]'
  },
  {
    id: 'qui-03-03', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'O processo de produção de nióbio é a redução aluminotérmica: 3 Nb2O5 + 10 Al -> 6 Nb + 5 Al2O3. Utiliza-se um excesso de 10% de Al em relação à quantidade estequiométrica. (Massas molares: Nb = 93, Al = 27).<br><br>A massa de alumínio necessária para produzir 9,3 kg de nióbio é mais próxima de[cite: 17]',
    alternativas: [
      { letra: 'A', texto: '2,7 kg.' }, { letra: 'B', texto: '3,0 kg.' }, { letra: 'C', texto: '4,1 kg.' }, { letra: 'D', texto: '4,5 kg.' }, { letra: 'E', texto: '5,0 kg.' }
    ],
    correta: 'E',
    resolucao: '9,3 kg de Nb são 100 mol. Pela proporção de 6 para 10, exige 166,7 mol de Al, ou 4,5 kg. Com o excesso de 10%, o valor sobe para 5,0 kg.[cite: 17]'
  },
  {
    id: 'qui-04-01', source: 'Apostila Química ENEM', materia: 'Ciências da Natureza', dificuldade: 'facil',
    enunciado: 'Na revelação de raios X gera-se íons prata (Ag(S2O3)2 3-). A prata metálica pode ser recuperada tratando a solução com uma espécie adequada (E° da redução da Prata = +0,02V). Os E° de redução disponíveis são: Cu (+0,34V), Pt (+1,20V), Al (-1,66V), Sn (-0,14V), Zn (-0,76V).<br><br>A espécie sólida adequada para essa recuperação é[cite: 17]',
    alternativas: [
      { letra: 'A', texto: 'Cu(s).' }, { letra: 'B', texto: 'Pt(s).' }, { letra: 'C', texto: 'Al3+(aq).' }, { letra: 'D', texto: 'Sn(s).' }, { letra: 'E', texto: 'Zn2+(aq).' }
    ],
    correta: 'D',
    resolucao: 'A espécie precisa estar na forma reduzida para ter elétrons para doar, e ter potencial de redução menor que o da prata (+0,02V). O Estanho metálico (Sn) cumpre os dois requisitos.[cite: 17]'
  },

  // FÍSICA
  {
    id: 'fis-01-01', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'facil',
    enunciado: 'O fogão por indução funciona gerando calor na panela por Efeito Joule. A vantagem é a eficiência energética. Este funcionamento dispensa chama.<br><br>A corrente elétrica na panela é induzida por um[cite: 19]',
    alternativas: [
      { letra: 'A', texto: 'campo elétrico estacionário.' }, { letra: 'B', texto: 'campo magnético variável.' }, { letra: 'C', texto: 'fluxo de elétrons livres.' }, { letra: 'D', texto: 'processo de radiação térmica.' }, { letra: 'E', texto: 'choque mecânico piezoelétrico.' }
    ],
    correta: 'B',
    resolucao: 'Indução exige variação de campo magnético. A bobina gera um campo variável, induzindo corrente no fundo da panela.[cite: 19]'
  },
  {
    id: 'fis-01-02', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'A pele molhada apresenta resistência média de 1 kOhm. Uma corrente entre 20 mA e 100 mA causa parada respiratória. Considere baterias de 12 V.<br><br>Qual associação de duas baterias é responsável por causar parada respiratória nesse indivíduo?[cite: 19]',
    alternativas: [
      { letra: 'A', texto: 'Em série, fornecendo 24V.' }, { letra: 'B', texto: 'Em paralelo, fornecendo 12V.' }, { letra: 'C', texto: 'Em série, fornecendo 6V.' }, { letra: 'D', texto: 'Em paralelo, fornecendo 24V.' }, { letra: 'E', texto: 'Oposta, fornecendo 0V.' }
    ],
    correta: 'A',
    resolucao: 'Em série, duas de 12V dão 24V. i = 24 / 1000 = 24 mA, o que cai na faixa de parada respiratória.[cite: 19]'
  },
  {
    id: 'fis-01-03', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Uma lanterna com três pilhas de 1,5V cada (resistência interna de 0,5 Ohm cada) foi ligada a uma lâmpada (4,5 W e 4,5 V). O usuário, por equívoco, inverteu uma das pilhas na ligação em série.<br><br>Com esse equívoco, qual a intensidade da corrente na lâmpada?[cite: 19]',
    alternativas: [
      { letra: 'A', texto: '0,25 A' }, { letra: 'B', texto: '0,33 A' }, { letra: 'C', texto: '0,75 A' }, { letra: 'D', texto: '1,00 A' }, { letra: 'E', texto: '1,33 A' }
    ],
    correta: 'A',
    resolucao: 'R da lâmpada = 4,5. Fem total = 1,5 + 1,5 - 1,5 = 1,5V. Resistência total = 4,5 + (3 * 0,5) = 6 Ohm. Corrente = 1,5 / 6 = 0,25 A.[cite: 19]'
  },
  {
    id: 'fis-01-04', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Um equipamento de resistência RC funciona em certa tensão. A única fonte disponível fornece 20% a mais da tensão recomendada. Usa-se um resistor de proteção RP.<br><br>Qual a configuração e o valor de RP em relação a RC?[cite: 19]',
    alternativas: [
      { letra: 'A', texto: 'Paralelo, RP = 1,2 RC' }, { letra: 'B', texto: 'Paralelo, RP = 0,2 RC' }, { letra: 'C', texto: 'Série, RP = 1,2 RC' }, { letra: 'D', texto: 'Série, RP = 2,2 RC' }, { letra: 'E', texto: 'Série, RP = 0,2 RC' }
    ],
    correta: 'E',
    resolucao: 'A ligação tem de ser em série para dividir a tensão. O RP fica com a sobra de 20%, logo sua resistência tem que ser 20% da do equipamento (0,2 RC).[cite: 19]'
  },
  {
    id: 'fis-02-01', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'facil',
    enunciado: 'O aquecedor solar possui coletores (água fria entra e esquenta) e o reservatório. A água quente sobe do coletor para o reservatório naturalmente.<br><br>O processo de transferência de calor nesse deslocamento de água é a[cite: 19]',
    alternativas: [
      { letra: 'A', texto: 'difusão.' }, { letra: 'B', texto: 'absorção.' }, { letra: 'C', texto: 'condução.' }, { letra: 'D', texto: 'irradiação.' }, { letra: 'E', texto: 'convecção.' }
    ],
    correta: 'E',
    resolucao: 'A água aquecida no coletor fica menos densa e sobe, enquanto a fria desce. O fluido se desloca carregando energia térmica: convecção.[cite: 19]'
  },
  {
    id: 'fis-02-02', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'facil',
    enunciado: 'As panelas de pressão elevam a temperatura de ebulição. Especialistas abaixam o fogo da panela logo após o início da saída de vapor.<br><br>Ao abaixar o fogo, a principal intenção é evitar o(a)[cite: 19]',
    alternativas: [
      { letra: 'A', texto: 'risco de explosão.' }, { letra: 'B', texto: 'dilatação e desconexão da tampa.' }, { letra: 'C', texto: 'perda da qualidade nutritiva.' }, { letra: 'D', texto: 'deformação da borracha.' }, { letra: 'E', texto: 'consumo de gás desnecessário.' }
    ],
    correta: 'E',
    resolucao: 'Depois que ferve, a temperatura trava. Aumentar a chama só evapora a água mais rápido, queimando gás à toa (o risco de explosão é controlado pela válvula).[cite: 19]'
  },
  {
    id: 'fis-02-03', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Recipiente A (40x40x40 cm) e Recipiente B (60x40x40 cm), ambos de faces com mesma espessura. Uma estudante suspende gelo a 0°C dentro deles. Após um tempo, a massa fundida em B foi o dobro da fundida em A.<br><br>A razão das condutividades térmicas kA/kB é mais próxima de[cite: 19]',
    alternativas: [
      { letra: 'A', texto: '0,50' }, { letra: 'B', texto: '0,67' }, { letra: 'C', texto: '0,75' }, { letra: 'D', texto: '1,33' }, { letra: 'E', texto: '2,00' }
    ],
    correta: 'B',
    resolucao: 'Área A = 9600 cm²; Área B = 12800 cm². Fluxo B = 2 * Fluxo A. Logo kB*12800 = 2*kA*9600. Daí kA/kB = 12800 / 19200 = 0,67.[cite: 19]'
  },
  {
    id: 'fis-02-04', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Um tacho oco recebe vapor d\'água a 120°C que sai como líquido a 100°C. Esse processo libera energia usada para evaporar o doce de leite.<br><br>No processo de fornecimento de energia pela parede oca, ocorre liberação proveniente de[cite: 19]',
    alternativas: [
      { letra: 'A', texto: 'somente calor latente de vaporização.' }, { letra: 'B', texto: 'somente calor latente de condensação.' }, { letra: 'C', texto: 'calor sensível e calor latente de vaporização.' }, { letra: 'D', texto: 'calor sensível e calor latente de condensação.' }, { letra: 'E', texto: 'apenas redução de pressão térmica.' }
    ],
    correta: 'D',
    resolucao: 'O vapor esfria de 120° a 100°C (calor sensível) e depois muda de estado gasoso para líquido (calor latente de condensação).[cite: 19]'
  },
  {
    id: 'fis-03-01', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'facil',
    enunciado: 'Fones com Cancelamento de Ruído reduzem ruídos persistentes como os de turbinas de avião emitindo uma onda contrária ao ruído ambiente.<br><br>Essa tecnologia baseia-se no fenômeno de[cite: 19]',
    alternativas: [
      { letra: 'A', texto: 'Absorção.' }, { letra: 'B', texto: 'Interferência.' }, { letra: 'C', texto: 'Polarização.' }, { letra: 'D', texto: 'Reflexão.' }, { letra: 'E', texto: 'Difração.' }
    ],
    correta: 'B',
    resolucao: 'O fone capta o som e gera uma onda em oposição de fase, cancelando o ruído (interferência destrutiva).[cite: 19]'
  },
  {
    id: 'fis-03-02', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'media',
    enunciado: 'Leitores ópticos de CD e DVD enfrentam limitação por espalhamento da luz pelo efeito de difração, que ocorre quando as dimensões do obstáculo são da ordem do comprimento de onda. O uso de lasers com menor comprimento de onda permite ler discos com cavidades menores.<br><br>Em qual região espectral se situa o laser ideal para esse fim (menor comprimento de onda visual)?[cite: 19]',
    alternativas: [
      { letra: 'A', texto: 'Violeta.' }, { letra: 'B', texto: 'Azul.' }, { letra: 'C', texto: 'Verde.' }, { letra: 'D', texto: 'Vermelho.' }, { letra: 'E', texto: 'Infravermelho.' }
    ],
    correta: 'A',
    resolucao: 'Dentro do espectro visível, a cor com maior frequência e, portanto, menor comprimento de onda é o violeta (raio Blu-ray usa o azul-violeta).[cite: 19]'
  },
  {
    id: 'fis-03-03', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'facil',
    enunciado: 'Para iluminar a própria casa, um mecânico instalou garrafas PET transparentes com água no telhado. A luz incide do ar para dentro da água da garrafa e espalha-se pelo cômodo escuro.<br><br>Que fenômeno óptico explica o funcionamento principal da "luz engarrafada" ao atravessar o meio?[cite: 19]',
    alternativas: [
      { letra: 'A', texto: 'Difração.' }, { letra: 'B', texto: 'Absorção.' }, { letra: 'C', texto: 'Polarização.' }, { letra: 'D', texto: 'Reflexão.' }, { letra: 'E', texto: 'Refração.' }
    ],
    correta: 'E',
    resolucao: 'A luz passa do ar para a água e depois para o ar dentro do cômodo, mudando de meio e de direção. Isso é Refração.[cite: 19]'
  },
  {
    id: 'fis-03-04', source: 'Apostila Física ENEM', materia: 'Ciências da Natureza', dificuldade: 'dificil',
    enunciado: 'Um radar parado emite ondas de rádio (f0) contra uma ambulância em alta velocidade que se aproxima dele com a sirene ligada. As ondas batem nela e retornam (fr). O operador escuta o som da sirene.<br><br>Como o operador percebe o som da sirene e qual a relação entre as frequências de rádio fr e f0?[cite: 19]',
    alternativas: [
      { letra: 'A', texto: 'Mais grave, fr < f0.' }, { letra: 'B', texto: 'Mais agudo, fr < f0.' }, { letra: 'C', texto: 'Mais agudo, fr = f0.' }, { letra: 'D', texto: 'Mais agudo, fr > f0.' }, { letra: 'E', texto: 'Mais grave, fr > f0.' }
    ],
    correta: 'D',
    resolucao: 'Aproximação aumenta a frequência percebida em ambos os casos (Efeito Doppler atua no som e na luz/rádio). Logo, o som é mais agudo e fr > f0.[cite: 19]'
  }
];