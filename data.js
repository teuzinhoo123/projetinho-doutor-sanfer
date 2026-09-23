/* ===================== BANCO DE RECURSOS E TÓPICOS ===================== */
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
  
/* ===================== BANCO DE TEMAS DE REDAÇÃO (ÚLTIMOS 10 ANOS) ===================== */
const ESSAY_THEMES = [
    { 
        ano: 2023, 
        tema: 'Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Texto I', texto: 'O trabalho de cuidado, historicamente atribuído às mulheres, envolve atividades como cuidar de crianças, idosos e do lar. Embora essencial para a manutenção da sociedade, esse trabalho raramente é reconhecido, remunerado ou contabilizado nas estatísticas econômicas oficiais, o que perpetua desigualdades de gênero no mercado de trabalho e na distribuição de renda.' }, 
            { titulo: 'Texto II', texto: 'Pesquisas mostram que mulheres dedicam, em média, o dobro de horas semanais a afazeres domésticos e cuidados não remunerados em comparação aos homens. Essa sobrecarga limita o tempo disponível para qualificação profissional, lazer e participação política, restringindo a autonomia econômica feminina.' },
            { titulo: 'Texto III', texto: 'A "economia do cuidado" é a base invisível que sustenta todas as outras engrenagens do capitalismo. Sem alguém para cozinhar, limpar e cuidar dos doentes, a força de trabalho ativa simplesmente entraria em colapso. O desafio do século XXI é transformar essa responsabilidade privada feminina em uma questão de política pública.' }
        ] 
    },
    { 
        ano: 2022, 
        tema: 'Desafios para a valorização de comunidades e povos tradicionais no Brasil', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Texto I', texto: 'Povos indígenas, quilombolas, ribeirinhos e outras comunidades tradicionais mantêm modos de vida e saberes ancestrais que contribuem para a preservação ambiental e a diversidade cultural do país, mas frequentemente enfrentam invisibilidade social e disputas territoriais.' },
            { titulo: 'Texto II', texto: 'A demarcação de terras tradicionais é um processo lento e frequentemente contestado judicialmente, o que gera insegurança para essas populações e favorece o avanço de atividades como garimpo ilegal, desmatamento e grilagem sobre seus territórios.' }
        ] 
    },
    { 
        ano: 2021, 
        tema: 'Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Texto I', texto: 'O registro civil de nascimento é a porta de entrada para o exercício da cidadania, permitindo acesso a serviços de saúde, educação, benefícios sociais e documentos posteriores como CPF e título de eleitor. Sua ausência mantém milhões de brasileiros à margem de direitos básicos.' }, 
            { titulo: 'Texto II', texto: 'A subnotificação de registros é mais comum em regiões remotas, como áreas rurais da Amazônia e comunidades ribeirinhas, onde o acesso a cartórios é limitado pela distância e pela falta de informação sobre a gratuidade do serviço estabelecida por lei.' }
        ] 
    },
    { 
        ano: 2020, 
        tema: 'O estigma associado às doenças mentais na sociedade brasileira', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Texto I', texto: 'Pessoas com transtornos mentais frequentemente enfrentam preconceito e discriminação, o que dificulta a busca por tratamento adequado e a reinserção social, perpetuando ciclos de sofrimento e exclusão, muitas vezes rotulados como "falta de força de vontade".' }, 
            { titulo: 'Texto II', texto: 'Segundo dados da Organização Mundial da Saúde (OMS), o Brasil é considerado o país mais ansioso do mundo e o quinto em casos de depressão. Apesar disso, o tabu em torno do acompanhamento psicológico e psiquiátrico impede que a maioria tenha acesso ao tratamento precoce.' }
        ] 
    },
    { 
        ano: 2019, 
        tema: 'Democratização do acesso ao cinema no Brasil', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Texto I', texto: 'O cinema é uma ferramenta fundamental de cultura, lazer e formação do imaginário social. No entanto, a maior parte das salas de exibição no Brasil está concentrada em shopping centers localizados em bairros nobres de grandes capitais.' }, 
            { titulo: 'Texto II', texto: 'O alto custo do ingresso e da alimentação nas bombonieres, aliado ao preço do transporte, torna a experiência cinematográfica proibitiva para a população de baixa renda e praticamente inexistente para moradores de cidades do interior.' }
        ] 
    },
    { 
        ano: 2018, 
        tema: 'Manipulação do comportamento do usuário pelo controle de dados na internet', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Texto I', texto: 'Os algoritmos das redes sociais e buscadores filtram ativamente as informações que recebemos com base no nosso comportamento de cliques e curtidas. Esse fenômeno cria as chamadas "bolhas sociais", que limitam o contato com opiniões divergentes e reduzem o pensamento crítico.' }, 
            { titulo: 'Texto II', texto: 'A coleta massiva de dados (Big Data) permite que empresas de tecnologia e entidades políticas tracem perfis psicológicos extremamente precisos dos usuários, direcionando campanhas altamente persuasivas para influenciar desde o consumo de produtos até decisões eleitorais vitais.' }
        ] 
    },
    { 
        ano: 2017, 
        tema: 'Desafios para a formação educacional de surdos no Brasil', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Texto I', texto: 'A educação inclusiva de qualidade demanda escolas fisicamente preparadas e, sobretudo, professores fluentes em LIBRAS (Língua Brasileira de Sinais) ou a presença constante de intérpretes na sala de aula. Esse cenário é ainda muito distante da realidade da imensa maioria das escolas públicas.' }, 
            { titulo: 'Texto II', texto: 'A dificuldade de comunicação com colegas ouvintes e o isolamento pedagógico resultam em altas taxas de evasão escolar, dificultando a posterior entrada desses cidadãos no mercado de trabalho e o pleno exercício da sua autonomia financeira.' }
        ] 
    },
    { 
        ano: 2016, 
        tema: 'Caminhos para combater a intolerância religiosa no Brasil', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Texto I', texto: 'Apesar de o Brasil se declarar constitucionalmente como um Estado Laico, denúncias de ataques, depredações a terreiros de matriz africana e agressões físicas e verbais motivadas por ódio religioso crescem ano após ano nos registros do Disque 100.' }, 
            { titulo: 'Texto II', texto: 'A Constituição Federal de 1988 é clara ao garantir a liberdade de consciência e de crença, assegurando o livre exercício dos cultos religiosos e garantindo a proteção aos locais de culto e às suas liturgias. O desafio é transformar o texto da lei em prática social.' }
        ] 
    },
    { 
        ano: 2015, 
        tema: 'A persistência da violência contra a mulher na sociedade brasileira', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Texto I', texto: 'Mesmo após a criação da Lei Maria da Penha (2006) e da Lei do Feminicídio (2015), o Brasil ainda ocupa posições alarmantes no ranking mundial de homicídios femininos. A legislação sozinha não foi capaz de frear a escalada de agressões.' }, 
            { titulo: 'Texto II', texto: 'A cultura do machismo estrutural normaliza piadas, controle financeiro e pequenas agressões psicológicas cotidianas. Estes comportamentos frequentemente escalam para violências físicas e casos fatais, a maioria deles cometidos dentro do ambiente doméstico por parceiros ou ex-parceiros.' }
        ] 
    },
    { 
        ano: 2014, 
        tema: 'Publicidade infantil em questão no Brasil', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Texto I', texto: 'Crianças, em sua fase de desenvolvimento cognitivo, são altamente suscetíveis a apelos publicitários, muitas vezes incapazes de distinguir entretenimento de estratégias de venda. O direcionamento de campanhas de brinquedos e alimentos ultraprocessados a esse público levanta fortes debates éticos mundiais.' }, 
            { titulo: 'Texto II', texto: 'Vários países da Europa já proibiram propagandas comerciais intercaladas em programas infantis na televisão. No Brasil, instituições de defesa do consumidor pressionam por leis mais rígidas, enquanto o mercado defende a autorregulação do setor publicitário.' }
        ] 
    }
];

/* ===================== BANCO DE QUESTÕES LOCAL EXPANDIDO (COM TRI) ===================== */
const MOCK_QUESTIONS = [
    // MATEMÁTICA
    { 
      id: 'm1', source: 'Banco Local - Matemática', materia: 'Matemática', dificuldade: 'facil', 
      enunciado: 'Um reservatório de água possui a forma de um paralelepípedo retângulo com dimensões de 2m de largura, 3m de comprimento e 1,5m de profundidade. Sabendo que 1 metro cúbico equivale a 1.000 litros, qual é a capacidade total, em litros, desse reservatório?', 
      alternativas: [{ letra: 'A', texto: '6.000 litros' }, { letra: 'B', texto: '7.500 litros' }, { letra: 'C', texto: '9.000 litros' }, { letra: 'D', texto: '12.000 litros' }, { letra: 'E', texto: '15.000 litros' }], 
      correta: 'C' 
    },
    { 
      id: 'm2', source: 'Banco Local - Matemática', materia: 'Matemática', dificuldade: 'media', 
      enunciado: 'Em uma promoção, uma loja oferece 20% de desconto em todos os seus produtos. Um cliente, ao pagar à vista, ganha um desconto adicional de 10% sobre o valor já com o primeiro desconto. Qual é o percentual de desconto total que esse cliente obteve em relação ao preço original?', 
      alternativas: [{ letra: 'A', texto: '28%' }, { letra: 'B', texto: '30%' }, { letra: 'C', texto: '32%' }, { letra: 'D', texto: '25%' }, { letra: 'E', texto: '22%' }], 
      correta: 'A' 
    },
    { 
      id: 'm3', source: 'Banco Local - Matemática', materia: 'Matemática', dificuldade: 'media', 
      enunciado: 'Um investidor aplicou R$ 10.000,00 a uma taxa de juros compostos de 10% ao ano. Qual o montante aproximado após 3 anos completos de aplicação?', 
      alternativas: [{ letra: 'A', texto: 'R$ 13.000,00' }, { letra: 'B', texto: 'R$ 13.310,00' }, { letra: 'C', texto: 'R$ 13.500,00' }, { letra: 'D', texto: 'R$ 14.100,00' }, { letra: 'E', texto: 'R$ 15.000,00' }], 
      correta: 'B' 
    },
    { 
      id: 'm4', source: 'Banco Local - Matemática', materia: 'Matemática', dificuldade: 'dificil', 
      enunciado: 'Em uma urna há 5 bolas vermelhas e 3 azuis, idênticas em tamanho e peso. Retirando-se duas bolas simultaneamente ao acaso, qual a probabilidade exata de que ambas sejam da cor vermelha?', 
      alternativas: [{ letra: 'A', texto: '5/14' }, { letra: 'B', texto: '5/28' }, { letra: 'C', texto: '10/28' }, { letra: 'D', texto: '25/64' }, { letra: 'E', texto: '15/56' }], 
      correta: 'A' 
    },
    
    // NATUREZA
    { 
      id: 'n1', source: 'Banco Local - Natureza', materia: 'Ciências da Natureza', dificuldade: 'facil', 
      enunciado: 'No estudo da Biologia Celular, as organelas possuem funções específicas essenciais para a sobrevivência do organismo. Qual das organelas abaixo é a principal responsável pela respiração celular e produção de ATP em células eucariontes?', 
      alternativas: [{ letra: 'A', texto: 'Ribossomo' }, { letra: 'B', texto: 'Complexo de Golgi' }, { letra: 'C', texto: 'Mitocôndria' }, { letra: 'D', texto: 'Lisossomo' }, { letra: 'E', texto: 'Retículo Endoplasmático Liso' }], 
      correta: 'C' 
    },
    { 
      id: 'n2', source: 'Banco Local - Natureza', materia: 'Ciências da Natureza', dificuldade: 'media', 
      enunciado: 'Um engenheiro projeta um carro elétrico com massa total de 1.000 kg. Durante um teste, o veículo viaja em uma rodovia plana a uma velocidade constante de 72 km/h. Qual é a energia cinética associada ao movimento deste carro neste exato momento?', 
      alternativas: [{ letra: 'A', texto: '40.000 J' }, { letra: 'B', texto: '200.000 J' }, { letra: 'C', texto: '400.000 J' }, { letra: 'D', texto: '518.400 J' }, { letra: 'E', texto: '2.592.000 J' }], 
      correta: 'B' 
    },
    { 
      id: 'n3', source: 'Banco Local - Natureza', materia: 'Ciências da Natureza', dificuldade: 'media', 
      enunciado: 'As teias alimentares ilustram o fluxo de energia dentro de um ecossistema. À medida que a energia flui dos produtores em direção aos consumidores de topo (como grandes predadores), o que ocorre de acordo com as leis da termodinâmica?', 
      alternativas: [{ letra: 'A', texto: 'A energia aumenta a cada nível trófico.' }, { letra: 'B', texto: 'A energia mantém-se constante em todos os níveis.' }, { letra: 'C', texto: 'A energia flui bidirecionalmente, retornando aos produtores.' }, { letra: 'D', texto: 'A energia diminui a cada nível, sendo dissipada em forma de calor.' }, { letra: 'E', texto: 'A energia é totalmente reciclada pelos fungos e bactérias.' }], 
      correta: 'D' 
    },
    { 
      id: 'n4', source: 'Banco Local - Natureza', materia: 'Ciências da Natureza', dificuldade: 'dificil', 
      enunciado: 'Na reação de combustão completa do etanol (C2H6O) nos motores de automóveis, há liberação de dióxido de carbono e água. Qual é a proporção estequiométrica correta: quantos mols de gás oxigênio (O2) são consumidos exatamente para cada mol de etanol totalmente queimado?', 
      alternativas: [{ letra: 'A', texto: '1 mol' }, { letra: 'B', texto: '2 mols' }, { letra: 'C', texto: '3 mols' }, { letra: 'D', texto: '4 mols' }, { letra: 'E', texto: '5 mols' }], 
      correta: 'C' 
    },
  
    // HUMANAS
    { 
      id: 'h1', source: 'Banco Local - Humanas', materia: 'Ciências Humanas', dificuldade: 'facil', 
      enunciado: 'O período da história do Brasil conhecido como "Era Vargas" (1930-1945) alterou profundamente a estrutura política e social do país. Essa fase foi marcada, entre outros fatores, por:', 
      alternativas: [{ letra: 'A', texto: 'Profunda descentralização do poder político e autonomia total dos estados.' }, { letra: 'B', texto: 'Adoção exclusiva de uma política de liberalismo econômico puro.' }, { letra: 'C', texto: 'Forte intervenção do Estado na economia e a sistematização das leis trabalhistas (CLT).' }, { letra: 'D', texto: 'Fim do modelo industrial no país, retornando ao foco estritamente cafeeiro.' }, { letra: 'E', texto: 'Alinhamento imediato e incondicional do Brasil às potências do Eixo logo no início da Segunda Guerra.' }], 
      correta: 'C' 
    },
    { 
      id: 'h2', source: 'Banco Local - Humanas', materia: 'Ciências Humanas', dificuldade: 'media', 
      enunciado: 'Durante o período da Guerra Fria, as duas superpotências globais (EUA e URSS) mediram forças sem um enfrentamento militar direto em seus próprios territórios. Qual evento histórico é considerado por historiadores como o momento de maior tensão e proximidade de uma guerra nuclear neste período?', 
      alternativas: [{ letra: 'A', texto: 'A escalada militar na Guerra do Vietnã' }, { letra: 'B', texto: 'A construção repentina do Muro de Berlim' }, { letra: 'C', texto: 'A Crise dos Mísseis em Cuba (1962)' }, { letra: 'D', texto: 'A eclosão da Guerra da Coreia' }, { letra: 'E', texto: 'O envio do primeiro homem ao espaço na Corrida Espacial' }], 
      correta: 'C' 
    },
    { 
      id: 'h3', source: 'Banco Local - Humanas', materia: 'Ciências Humanas', dificuldade: 'media', 
      enunciado: 'A globalização impulsionou a criação de blocos econômicos pelo mundo visando facilitar trocas comerciais. Qual é a principal característica que diferencia a União Europeia do Mercosul em termos de integração?', 
      alternativas: [{ letra: 'A', texto: 'Apenas a União Europeia permite o livre comércio de mercadorias.' }, { letra: 'B', texto: 'A União Europeia alcançou o estágio de união econômica e monetária com uma moeda única (Euro), o que o Mercosul não possui.' }, { letra: 'C', texto: 'O Mercosul possui um parlamento supranacional com poder de veto sobre leis nacionais, ao contrário da Europa.' }, { letra: 'D', texto: 'A União Europeia foi criada no final da Guerra Fria, enquanto o Mercosul surgiu após a Segunda Guerra Mundial.' }, { letra: 'E', texto: 'O Mercosul abrange todos os países da América Latina, enquanto a UE tem apenas 10 membros.' }], 
      correta: 'B' 
    },
    { 
      id: 'h4', source: 'Banco Local - Humanas', materia: 'Ciências Humanas', dificuldade: 'dificil', 
      enunciado: 'O filósofo contratualista Jean-Jacques Rousseau, em sua obra "O Contrato Social", elabora a tese de que a soberania reside fundamentalmente em qual entidade?', 
      alternativas: [{ letra: 'A', texto: 'Na figura de um monarca absolutista iluminado pela razão divina.' }, { letra: 'B', texto: 'Na vontade geral do povo, que é inalienável e indivisível.' }, { letra: 'C', texto: 'No parlamento representativo eleito por sufrágio censitário.' }, { letra: 'D', texto: 'No poder judiciário, único capaz de interpretar as leis naturais de forma justa.' }, { letra: 'E', texto: 'No clero, que atua como mediador entre a vontade de Deus e as leis civis.' }], 
      correta: 'B' 
    },
  
    // LINGUAGENS
    { 
      id: 'l1', source: 'Banco Local - Linguagens', materia: 'Linguagens', dificuldade: 'facil', 
      enunciado: 'No trecho poético "O vento sussurrava segredos antigos nas folhas secas de outono", o autor atribui características humanas a um elemento da natureza. Qual figura de linguagem está sendo empregada de forma predominante?', 
      alternativas: [{ letra: 'A', texto: 'Metáfora' }, { letra: 'B', texto: 'Metonímia' }, { letra: 'C', texto: 'Pleonasmo' }, { letra: 'D', texto: 'Personificação (ou Prosopopeia)' }, { letra: 'E', texto: 'Paradoxo' }], 
      correta: 'D' 
    },
    { 
      id: 'l2', source: 'Banco Local - Linguagens', materia: 'Linguagens', dificuldade: 'media', 
      enunciado: 'A Semana de Arte Moderna de 1922 foi um marco na literatura brasileira. A principal característica que definiu a "Fase Heroica" (1ª Geração Modernista) no Brasil foi:', 
      alternativas: [{ letra: 'A', texto: 'O retorno rigoroso às formas poéticas fixas, como o soneto.' }, { letra: 'B', texto: 'O esforço nacionalista por criar uma identidade brasileira livre de amarras acadêmicas europeias, usando versos livres.' }, { letra: 'C', texto: 'O foco exclusivo em temas políticos e de denúncia social armada.' }, { letra: 'D', texto: 'A valorização exaustiva de temas de amor platônico e fuga da realidade (escapismo).' }, { letra: 'E', texto: 'A tentativa de criar uma linguagem puramente matemática e concreta sem uso de sintaxe.' }], 
      correta: 'B' 
    },
    { 
      id: 'l3', source: 'Banco Local - Linguagens', materia: 'Linguagens', dificuldade: 'media', 
      enunciado: 'Em um manual de instruções de montagem de um móvel, a principal função da linguagem aplicada pelo redator é a:', 
      alternativas: [{ letra: 'A', texto: 'Função Fática, para testar o canal de comunicação.' }, { letra: 'B', texto: 'Função Poética, focada na beleza da mensagem.' }, { letra: 'C', texto: 'Função Emotiva, centrada nos sentimentos de quem escreveu.' }, { letra: 'D', texto: 'Função Apelativa (ou Conativa), que busca orientar o comportamento e as ações do leitor.' }, { letra: 'E', texto: 'Função Metalinguística, pois o manual explica como ler o próprio manual.' }], 
      correta: 'D' 
    },
    { 
      id: 'l4', source: 'Banco Local - Linguagens', materia: 'Linguagens', dificuldade: 'dificil', 
      enunciado: 'Leia o fragmento de Machado de Assis em *Memórias Póstumas de Brás Cubas*: "Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas memórias póstumas". O uso da ironia refinada, o pessimismo e a análise psicológica profunda são marcas de qual movimento literário brasileiro ao qual Machado pertence?', 
      alternativas: [{ letra: 'A', texto: 'Romantismo' }, { letra: 'B', texto: 'Realismo' }, { letra: 'C', texto: 'Parnasianismo' }, { letra: 'D', texto: 'Simbolismo' }, { letra: 'E', texto: 'Naturalismo' }], 
      correta: 'B' 
    }
];