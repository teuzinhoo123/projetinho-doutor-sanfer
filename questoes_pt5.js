const MOCK_QUESTIONS_PT5 = [
  {
    id: 'his-04-01', source: 'Apostila História ENEM', materia: 'Ciências Humanas', dificuldade: 'media',
    enunciado: 'A Revolta da Vacina (1904) mostrou claramente o aspecto defensivo, desorganizado e fragmentado da ação popular. Não se negava o Estado, não se reivindicava participação nas decisões políticas; defendiam-se valores e direitos considerados acima da intervenção do Estado.<br><br>A mobilização analisada representou um alerta, na medida em que a ação popular questionava[cite: 13]',
    alternativas: [
      { letra: 'A', texto: 'a alta de preços.' }, 
      { letra: 'B', texto: 'a política clientelista.' }, 
      { letra: 'C', texto: 'as reformas urbanas.' }, 
      { letra: 'D', texto: 'o arbítrio governamental.' }, 
      { letra: 'E', texto: 'as práticas eleitorais.' }
    ],
    correta: 'D',
    resolucao: 'A revolta questionava o arbítrio governamental, entendido como a intervenção excessiva do Estado sobre a esfera privada e o próprio corpo, que a população considerava fora do alcance do governo[cite: 13].'
  },
  {
    id: 'his-04-02', source: 'Apostila História ENEM', materia: 'Ciências Humanas', dificuldade: 'media',
    enunciado: 'O governo Vargas, principalmente durante o Estado Novo, pretendeu construir um Estado capaz de criar uma nova sociedade. Uma dimensão-chave desse projeto tinha no território seu foco principal. Não por acaso, foram criadas então instituições encarregadas de fornecer dados confiáveis, como o Conselho Nacional de Geografia e o IBGE, este de 1938.<br><br>A criação dessas instituições pelo governo Vargas representava uma estratégia política de[cite: 13]',
    alternativas: [
      { letra: 'A', texto: 'levantar informações para a preservação da paisagem.' }, 
      { letra: 'B', texto: 'controlar o crescimento exponencial da população.' }, 
      { letra: 'C', texto: 'obter conhecimento científico das diversidades regionais.' }, 
      { letra: 'D', texto: 'conter o fluxo migratório do campo para a cidade.' }, 
      { letra: 'E', texto: 'propor a criação de novas unidades da federação.' }
    ],
    correta: 'C',
    resolucao: 'Para governar, planear e integrar um país continental, o Estado Novo precisava primeiro conhecer as suas diferenças internas através de mapeamento e estatística (obter conhecimento científico das diversidades regionais)[cite: 13].'
  },
  {
    id: 'geo-04-01', source: 'Apostila Geografia ENEM', materia: 'Ciências Humanas', dificuldade: 'facil',
    enunciado: 'A participação social no planejamento e na gestão urbanos ganhou impulso a partir do Estatuto da Cidade (Lei 10.257/2001). No entanto, é notório o limite à representação dos interesses das camadas sociais menos favorecidas nesse processo. Este rumo deve ser corrigido.<br><br>Qual medida promove a participação social descrita no texto?[cite: 8]',
    alternativas: [
      { letra: 'A', texto: 'Redução dos impostos municipais.' }, 
      { letra: 'B', texto: 'Privatização dos espaços públicos.' }, 
      { letra: 'C', texto: 'Adensamento das áreas de comércio.' }, 
      { letra: 'D', texto: 'Valorização dos condomínios fechados.' }, 
      { letra: 'E', texto: 'Fortalecimento das associações de bairro.' }
    ],
    correta: 'E',
    resolucao: 'O fortalecimento das associações de bairro é a única alternativa que cria efetivamente um canal direto de representação e participação pública para as camadas que o texto identifica como sub-representadas[cite: 8].'
  },
  {
    id: 'geo-04-02', source: 'Apostila Geografia ENEM', materia: 'Ciências Humanas', dificuldade: 'media',
    enunciado: 'A fome não é um problema técnico, pois ela não se deve à falta de alimentos, isso porque a fome convive hoje com as condições materiais para resolvê-la. (Porto-Gonçalves, 2004).<br><br>O texto demonstra que o problema alimentar apresentado tem uma dimensão política por estar associado ao(à)[cite: 8]',
    alternativas: [
      { letra: 'A', texto: 'escala de produtividade regional.' }, 
      { letra: 'B', texto: 'padrão de distribuição de renda.' }, 
      { letra: 'C', texto: 'dificuldade de armazenamento de grãos.' }, 
      { letra: 'D', texto: 'crescimento da população mundial.' }, 
      { letra: 'E', texto: 'custo de escoamento dos produtos.' }
    ],
    correta: 'B',
    resolucao: 'O autor nega que a fome seja por falta de produção, capacidade técnica ou logística. Num país que exporta alimentos em excesso, a fome convive com a abundância por causa da profunda desigualdade no padrão de distribuição de renda[cite: 8].'
  },
  {
    id: 'soc-04-01', source: 'Apostila Sociologia ENEM', materia: 'Ciências Humanas', dificuldade: 'facil',
    enunciado: '"Eu estava pagando o sapateiro e conversando com um preto... Ele estava revoltado com um guarda civil que espancou um preto e amarrou numa árvore. O guarda civil é branco. E há certos brancos que transforma preto em bode expiatório. Quem sabe se guarda civil ignora que já foi extinta a escravidão?" (Carolina Maria de Jesus, Quarto de Despejo).<br><br>O texto expõe uma característica da sociedade brasileira, que é o(a):[cite: 16]',
    alternativas: [
      { letra: 'A', texto: 'Racismo estrutural.' }, 
      { letra: 'B', texto: 'Desemprego latente.' }, 
      { letra: 'C', texto: 'Concentração de renda.' }, 
      { letra: 'D', texto: 'Exclusão informacional.' }, 
      { letra: 'E', texto: 'Precariedade da educação.' }
    ],
    correta: 'A',
    resolucao: 'A cena mostra violência praticada por um agente público e a autora aponta que isto é um padrão histórico repetido desde a escravidão, o que define perfeitamente o conceito sociológico de racismo estrutural operando pelo Estado[cite: 16].'
  },
  {
    id: 'soc-04-02', source: 'Apostila Sociologia ENEM', materia: 'Ciências Humanas', dificuldade: 'media',
    enunciado: 'O toyotismo, a partir dos anos 1970, teve grande impacto no mundo ocidental, quando se mostrou para os países avançados como uma opção possível para a superação de uma crise de acumulação.<br><br>A característica organizacional do modelo em questão, requerida no contexto de crise, foi o(a)[cite: 16]',
    alternativas: [
      { letra: 'A', texto: 'expansão dos grandes estoques.' }, 
      { letra: 'B', texto: 'incremento da fabricação em massa.' }, 
      { letra: 'C', texto: 'adequação da produção à demanda.' }, 
      { letra: 'D', texto: 'aumento da mecanização do trabalho.' }, 
      { letra: 'E', texto: 'centralização das etapas de planejamento.' }
    ],
    correta: 'C',
    resolucao: 'O modelo toyotista opõe-se ao fordismo (que foca em massa e estoques grandes) justamente por aplicar a filosofia just-in-time: a produção é enxuta, com stock mínimo, sendo diretamente ajustada e puxada pela procura real (demanda)[cite: 16].'
  },
  {
    id: 'fil-04-01', source: 'Apostila Filosofia ENEM', materia: 'Ciências Humanas', dificuldade: 'media',
    enunciado: 'Sócrates: "Quem não sabe o que uma coisa é, como poderia saber de que tipo de coisa ela é? Ou te parece ser possível alguém que não conhece absolutamente quem é Mênon saber se ele é belo, se é rico e ainda se é nobre? Assim, Mênon, que coisa afirmas ser a virtude?".<br><br>A atitude apresentada na interlocução do filósofo com Mênon é um exemplo da utilização do(a)[cite: 10]',
    alternativas: [
      { letra: 'A', texto: 'escrita epistolar.' }, 
      { letra: 'B', texto: 'método dialético.' }, 
      { letra: 'C', texto: 'linguagem trágica.' }, 
      { letra: 'D', texto: 'explicação fisicalista.' }, 
      { letra: 'E', texto: 'suspensão judicativa.' }
    ],
    correta: 'B',
    resolucao: 'As perguntas encadeadas que conduzem o interlocutor a admitir que desconhece a definição essencial de algo para, a partir daí, construírem conhecimento, são a assinatura do método dialético socrático (ironia e maiêutica)[cite: 10].'
  },
  {
    id: 'fil-04-02', source: 'Apostila Filosofia ENEM', materia: 'Ciências Humanas', dificuldade: 'dificil',
    enunciado: 'Essa atmosfera de loucura e irrealidade, criada pela aparente ausência de propósitos, é a verdadeira cortina de ferro que esconde dos olhos do mundo todas as formas de campos de concentração. Vistos de fora, os campos só podem ser descritos com imagens extraterrenas... provoca uma crueldade tão incrível que termina levando à aceitação do extermínio como solução perfeitamente normal. (H. Arendt).<br><br>A partir da análise da autora, evidencia-se uma crítica à naturalização do(a)[cite: 10]',
    alternativas: [
      { letra: 'A', texto: 'ideário nacional, que legitima as desigualdades sociais.' }, 
      { letra: 'B', texto: 'alienação ideológica, que justifica as ações individuais.' }, 
      { letra: 'C', texto: 'cosmologia religiosa, que sustenta as tradições hierárquicas.' }, 
      { letra: 'D', texto: 'segregação humana, que fundamenta os projetos biopolíticos.' }, 
      { letra: 'E', texto: 'enquadramento cultural, que favorece os comportamentos punitivos.' }
    ],
    correta: 'D',
    resolucao: 'Arendt alerta para o totalitarismo que isola, retira a humanidade e processa indivíduos em massa com fins de extermínio sob uma aura de normalidade administrativa (o que hoje denominamos de segregação que fundamenta projetos biopolíticos de administração da morte)[cite: 10].'
  }
];