/* ===================== BANCO DE RECURSOS (RESUMOS DOS GUIAS DESCOMPLICA) ===================== */
const STUDY_TOPICS = {
  'Matemática': [
    { 
      nome: 'Razão, Proporção e Regra de Três (22%)', 
      teoria: '**O Pulo do Gato:** Antes de montar a conta, pergunte: se um aumenta, o outro aumenta ou diminui? Aumenta junto = direta. Um sobe e o outro desce = inversa (inverta a fração antes de multiplicar).\n\n**Porcentagem:** Aumentar 20% é multiplicar por 1,20; dar desconto de 20% é multiplicar por 0,80. Percentuais sucessivos se multiplicam, jamais se somam.',
      pdf: 'guia-definitivo-matematica.pdf#page=3'
    },
    { 
      nome: 'Geometria Espacial e Sólidos (14,6%)', 
      teoria: '**O Pulo do Gato:** Pergunte se a questão quer o que enche (volume) ou o que reveste (área). E se o resultado sair em litros: $1 m³ = 1.000 L$.\n\n**Decore:** Volume de Prisma/Cilindro = Área da Base × Altura. Pirâmide e Cone = (Área da Base × Altura) / 3.',
      pdf: 'guia-definitivo-matematica.pdf#page=6'
    },
    { 
      nome: 'Estatística (14,1%)', 
      teoria: '**O Pulo do Gato:** Tem valor muito fora da curva? A mediana representa melhor. A média é sensível a valores extremos e "mente".\n\n**Gráficos:** Leia o eixo antes de tudo. Eixo que não começa no zero exagera visualmente diferenças pequenas.',
      pdf: 'guia-definitivo-matematica.pdf#page=8'
    }
  ],
  
  'Linguagens': [
    { 
      nome: 'Variação Linguística (30,4%)', 
      teoria: '**O Pulo do Gato:** Se a alternativa diz que a variedade é errada ou pobre, descarte. A resposta certa fala em adequação ao contexto ou em preconceito social.\n\n**Decore:** Não existe erro, existe inadequação. Norma-padrão é apenas a variedade de prestígio.',
      pdf: 'guia-definitivo-portugues.pdf#page=3'
    },
    { 
      nome: 'Gêneros Textuais (24,9%)', 
      teoria: '**O Pulo do Gato:** Faça três perguntas ao texto: quem escreveu, para quem e para quê? Respondidas as três, o gênero e a finalidade aparecem sozinhos.\n\n**Decore:** Gênero é a prática social (carta, receita, bula, meme). Suporte é onde circula. Finalidade é o que busca (informar, convencer, instruir).',
      pdf: 'guia-definitivo-portugues.pdf#page=7'
    },
    { 
      nome: 'Interpretação e Compreensão (21,3%)', 
      teoria: '**O Pulo do Gato:** Antes de olhar as alternativas, resuma o texto em uma frase. Elimine tudo que não conversa com essa frase.\n\n**Decore:** Inferência é a conclusão autorizada pelo texto, e não a opinião do leitor. Intertextualidade: Paráfrase reafirma, Paródia subverte.',
      pdf: 'guia-definitivo-portugues.pdf#page=10'
    }
  ],

  'Ciências da Natureza': [
    { 
      nome: 'Biologia: Impactos Ambientais (15,1%)', 
      teoria: '**O Pulo do Gato:** Escreva a cadeia antes de marcar: causa $\\rightarrow$ mecanismo $\\rightarrow$ consequência. A alternativa errada quase sempre acerta as pontas e erra o meio.\n\n**Decore:** Efeito estufa é natural, o problema é a sua intensificação. Camada de ozônio é destruída por CFCs. Magnificação trófica: toxinas acumulam no topo da cadeia alimentar.',
      pdf: 'guia-definitivo-biologia.pdf#page=5'
    },
    { 
      nome: 'Química: Química Orgânica (21,8%)', 
      teoria: '**O Pulo do Gato:** O Carbono é tetravalente (faz 4 ligações). Procure o grupo funcional antes de qualquer coisa: Álcool (OH em carbono saturado), Fenol (OH direto no anel), Aldeído (CHO na ponta), Cetona (CO no meio), Ácido Carboxílico (COOH).\n\n**Decore Reações:** Adição (abre dupla), Substituição (troca átomo), Esterificação (Ácido + Álcool $\\rightarrow$ Éster + Água).',
      pdf: 'guia-definitivo-quimica.pdf#page=3'
    },
    { 
      nome: 'Física: Eletricidade (20,3%)', 
      teoria: '**O Pulo do Gato:** Série segura a corrente, paralelo partilha a tensão. Uma casa é ligada em paralelo (todo aparelho recebe a tensão cheia). Se fosse em série, apagar uma lâmpada apagaria tudo.\n\n**Decore:** $U = R \\cdot i$ (Lei de Ohm). Potência: $P = U \\cdot i$. Consumo: $E = P \\cdot t$ (P em kW, t em horas para obter kWh).',
      pdf: 'guia-definitivo-fisica.pdf#page=3'
    }
  ],

  'Ciências Humanas': [
    { 
      nome: 'História: Brasil República (15,3%)', 
      teoria: '**O Pulo do Gato:** Pergunte quem vota e como. O voto aberto, restrito e fraudado explica o coronelismo, a política dos governadores e a estabilidade das oligarquias.\n\n**Decore:** A Proclamação (1889) foi um golpe militar sem participação popular. A Era Vargas trouxe direitos trabalhistas (CLT) atrelados a controle político e censura (DIP).',
      pdf: 'guia-definitivo-historia.pdf#page=13'
    },
    { 
      nome: 'Geografia: Meio Ambiente (13,7%)', 
      teoria: '**O Pulo do Gato:** Escala é fração! $1/100$ é maior que $1/1.000.000$. Denominador grande significa escala pequena (pouco detalhe).\n\n**Meio Ambiente:** Todo problema ambiental esconde uma disputa por território. O desmatamento é uma cadeia: grilagem $\\rightarrow$ madeira $\\rightarrow$ pecuária $\\rightarrow$ lavoura.',
      pdf: 'Apostila_Geografia_ENEM_lib.pdf#page=17'
    },
    { 
      nome: 'Sociologia: Cultura e Desigualdade (33,6%)', 
      teoria: '**O Pulo do Gato:** Etnocentrismo = julgar o outro pelos próprios valores. Relativismo = compreender a prática na lógica de quem a pratica. A alternativa que julga a cultura como "atrasada" está sempre errada.\n\n**Desigualdade:** Identifique o cruzamento CRG (Classe, Raça, Gênero). O racismo estrutural é reproduzido por instituições e resultados, independente da intenção.',
      pdf: 'guia-definitivo-sociologia.pdf#page=3'
    },
    {
      nome: 'Filosofia: Teoria do Conhecimento (49,5%)',
      teoria: '**O Pulo do Gato:** Procure de onde o autor tira a justificativa: da razão ou dos sentidos? Racionalismo (Descartes) desconfia dos sentidos. Empirismo (Locke, Hume, Bacon) diz que a mente é tábula rasa.\n\n**Kant:** Sintetiza os dois: a experiência dá o conteúdo e a razão dá as formas. "Esclarecimento" é sair da menoridade e pensar por si mesmo.',
      pdf: 'guia-definitivo-filosofia.pdf#page=3'
    }
  ],

  'Redação': [
    { 
      nome: 'Estrutura e Competência 2 (Tema e Repertório)', 
      teoria: '**O Pulo do Gato:** O tema tem peças. Ex: "Desafios para a valorização da herança africana no Brasil". Falta uma peça, o texto tangencia.\n\n**Repertório:** Repertório de bolso (genérico) trava a nota. Use referências ligadas à pauta. Ex: O livro "Quarto de Despejo" de Carolina Maria de Jesus serve perfeitamente para exclusão e racismo estrutural.',
      pdf: 'Apostila_Redacao_ENEM_lib.pdf#page=2'
    },
    { 
      nome: 'Competência 5 (Proposta de Intervenção)', 
      teoria: '**O Pulo do Gato:** A proposta exige 5 elementos obrigatórios: Agente, Ação, Meio/Modo, Efeito e Detalhamento.\n\n**Exemplo prático:** O Ministério da Educação (Agente) - órgão responsável pelas políticas de ensino (Detalhamento) - deve criar oficinas culturais (Ação), por meio da destinação de verbas federais às escolas (Meio), a fim de mitigar o apagamento histórico dessas populações (Efeito).',
      pdf: 'Apostila_Redacao_ENEM_lib.pdf#page=11'
    }
  ]
};

/* ===================== BANCO DE TEMAS DE REDAÇÃO (ÚLTIMOS 10 ANOS) ===================== */
const ESSAY_THEMES = [
    { 
        ano: 2024, 
        tema: 'Desafios para a valorização da herança africana no Brasil', 
        instrucoes: 'A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos.', 
        motivadores: [
            { titulo: 'Atenção ao Recorte', texto: 'A frase temática tem quatro peças: Desafios, valorização, herança africana, Brasil. O texto só cumpre o tema quando as quatro aparecem. Escrever sobre herança africana sem falar dos desafios tangencia o tema (trava a nota em 40 na C2).' },
            { titulo: 'Repertório Produtivo', texto: 'A obra "Quarto de despejo", de Carolina Maria de Jesus, retrata o cotidiano da própria autora — mulher negra e pobre — na década de 1960. O uso desse livro é um excelente repertório produtivo para discutir a marginalização e os desafios da valorização dessa herança.' }
        ] 
    },
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
    }
];
