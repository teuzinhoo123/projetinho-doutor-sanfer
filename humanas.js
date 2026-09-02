const questoesHumanas = [
  {
    id: 21,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> O encarecimento de bairros revitalizados que expulsa a população de baixa renda chama-se:",
    options: ["Favelização", "Gentrificação", "Conurbação", "Macrocefalia urbana", "Metropolização"],
    correct: 1,
    explanation: "Gentrificação valoriza o espaço, tornando o custo de vida insustentável para os antigos moradores."
  },
  {
    id: 22,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> O Plano Marshall foi uma estratégia dos EUA durante a Guerra Fria para:",
    options: ["Atacar a URSS", "Reconstruir a Europa e conter o comunismo", "Isolar a América Latina", "Apoiar a China", "Criar armas nucleares"],
    correct: 1,
    explanation: "Apoio econômico para evitar que países europeus em crise adotassem o socialismo."
  },
  {
    id: 23,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> Milton Santos critica a globalização como ela é hoje, chamando-a de:",
    options: ["Globalização solidária", "Aldeia global harmônica", "Globalização perversa (fábula e mito)", "Integração igualitária", "Desglobalização total"],
    correct: 2,
    explanation: "Ele divide em: como fábula, como perversidade (a real) e como possibilidade."
  },
  {
    id: 24,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> A Consolidação das Leis do Trabalho (CLT), criada em 1943 por Vargas, visava:",
    options: ["Fomentar o anarquismo", "Atender a base operária e cooptar os sindicatos ao Estado", "Privatizar as indústrias", "Desregulamentar o mercado", "Proibir o trabalho feminino"],
    correct: 1,
    explanation: "Garantia direitos, mas também atrelava os sindicatos ao controle do Ministério do Trabalho."
  },
  {
    id: 25,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> A democracia na Grécia Antiga diferenciava-se da atual por ser:",
    options: ["Representativa e universal", "Direta, mas restrita (excluía mulheres, escravos e metecos)", "Militarizada e oligárquica", "Teocrática e igualitária", "Comandada por reis absolutos"],
    correct: 1,
    explanation: "Cidadãos debatiam na Ágora diretamente, mas a cidadania era altamente excludente."
  },
  {
    id: 26,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> A introdução da linha de montagem e a produção em massa padronizada caracterizam o modelo:",
    options: ["Toyotismo", "Volvismo", "Fordismo", "Artesanal", "Flexível"],
    correct: 2,
    explanation: "Henry Ford criou as esteiras rolantes, barateando o produto e alienando o operário."
  },
  {
    id: 27,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> Produção 'just-in-time', trabalhador multifuncional e terceirização são marcas do:",
    options: ["Fordismo", "Taylorismo", "Toyotismo", "Fisiocratismo", "Mercantilismo"],
    correct: 2,
    explanation: "Modelo japonês (anos 70) flexível, que produz conforme a demanda (sem estoques gigantes)."
  },
  {
    id: 28,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> Para Thomas Hobbes, o 'Estado de Natureza' é marcado por:",
    options: ["Paz e harmonia", "Guerra de todos contra todos", "Propriedade privada garantida", "Democracia direta", "Socialismo primitivo"],
    correct: 1,
    explanation: "'O homem é o lobo do homem', justificando a necessidade de um Estado absoluto."
  },
  {
    id: 29,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> Movimento do século XVIII que defendia a razão contra o absolutismo e os privilégios da nobreza:",
    options: ["Renascimento", "Iluminismo", "Romantismo", "Positivismo", "Anarquismo"],
    correct: 1,
    explanation: "A 'Luz' da razão iluminaria as trevas da ignorância imposta pela Igreja e Reis Absolutistas."
  },
  {
    id: 30,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> O Ato Institucional nº 5 (AI-5), de 1968, representou no Brasil:",
    options: ["O retorno da democracia", "A anistia política", "O auge da repressão, censura e fechamento político", "A eleição direta para presidente", "O fim da tortura"],
    correct: 2,
    explanation: "Deu poderes absolutos ao presidente, fechou o Congresso e suspendeu o habeas corpus."
  },
  {
    id: 31,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> A Revolução Verde (anos 60) aumentou a produção agrícola mundial utilizando:",
    options: ["Manejo orgânico exclusivo", "Sementes melhoradas, fertilizantes químicos e agrotóxicos", "Reforma agrária radical", "Trabalho escravo", "Desmatamento zero"],
    correct: 1,
    explanation: "Modernizou o campo, mas gerou impactos ambientais e concentrou terras (monopólio de sementes)."
  },
  {
    id: 32,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> Para Émile Durkheim, o 'fato social' possui três características principais:",
    options: ["Subjetividade, individualidade e caos", "Exterioridade, coercitividade e generalidade", "Liberdade, igualdade e fraternidade", "Economia, política e cultura", "Ação, reação e emoção"],
    correct: 1,
    explanation: "Regras sociais existem fora do indivíduo (exterior), impõem punição (coerção) e se repetem na maioria (generalidade)."
  },
  {
    id: 33,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> Max Weber defende que o objeto de estudo da Sociologia é a 'ação social', que significa:",
    options: ["A estrutura de classes", "Qualquer ação humana que tenha sentido e considere o outro", "Os fatos biológicos", "O inconsciente humano", "As leis da natureza"],
    correct: 1,
    explanation: "Para Weber, a sociedade é o resultado das ações individuais dotadas de sentido e intenção."
  },
  {
    id: 34,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> A economia e a política durante o Feudalismo (Idade Média Europeia) eram, respectivamente:",
    options: ["Industriais e centralizadas", "Comerciais e democráticas", "Agrárias e descentralizadas (poder dos senhores feudais)", "Nômades e absolutistas", "Mercantilistas e teocráticas"],
    correct: 2,
    explanation: "A terra era a principal riqueza, e o Rei dividia poder com nobres e com a Igreja."
  },
  {
    id: 35,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> A Conferência de Berlim (1884-1885) teve como objetivo principal:",
    options: ["A independência da África", "A partilha da África entre as potências europeias", "A criação da ONU", "A libertação dos escravizados", "O fim da Primeira Guerra Mundial"],
    correct: 1,
    explanation: "As nações europeias dividiram o continente africano visando exploração neocolonial (Imperialismo)."
  },
  {
    id: 36,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> A Guerra de Canudos (1896-1897) liderada por Antônio Conselheiro no sertão baiano foi um movimento:",
    options: ["Anarquista", "Abolicionista urbano", "Messiânico e de resistência camponesa", "Militar republicano", "De independência do Brasil"],
    correct: 2,
    explanation: "Comunidade religiosa e autossustentável que foi massacrada pela recém-criada República."
  },
  {
    id: 37,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> A ética de Aristóteles baseia-se na busca da felicidade através do(a):",
    options: ["Prazer absoluto", "Justo meio (equilíbrio das virtudes)", "Sofrimento e resignação", "Acatamento cego às leis", "Revolução social"],
    correct: 1,
    explanation: "A virtude está no caminho do meio, evitando os extremos (excesso e falta)."
  },
  {
    id: 38,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> Fenômeno climático em que os centros urbanos apresentam temperaturas mais altas que as periferias:",
    options: ["El Niño", "Inversão Térmica", "Ilhas de Calor", "Chuva Ácida", "Efeito Estufa natural"],
    correct: 2,
    explanation: "Causado pelo asfalto, concreto e pouca vegetação, que absorvem mais calor durante o dia."
  },
  {
    id: 39,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> O Mercosul, bloco econômico do qual o Brasil faz parte, classifica-se atualmente como:",
    options: ["Zona de Livre Comércio apenas", "União Aduaneira (com Tarifa Externa Comum)", "Mercado Comum pleno", "União Econômica e Monetária (mesma moeda)", "Aliança Militar"],
    correct: 1,
    explanation: "Possui livre comércio interno e uma TEC (União Aduaneira), mas ainda não é um mercado comum completo."
  },
  {
    id: 40,
    area: 'Humanas',
    text: "<strong>(ENEM)</strong> O intenso deslocamento de pessoas do campo para a cidade no Brasil (séc. XX) foi impulsionado pela:",
    options: ["Industrialização urbana e mecanização agrícola", "Criação de reservas indígenas", "Abolição da escravatura", "Guerra do Paraguai", "Distribuição igualitária de terras rurais"],
    correct: 0,
    explanation: "A indústria atraiu mão de obra e os tratores substituíram trabalhadores no campo."
  }
];
