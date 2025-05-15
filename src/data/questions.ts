
import { Question, Party } from '../types';

export const questions = [
  {
    id: 1,
    text: "O governo anuncia que vai criar um ministério para “Descarbonização Espiritual e Felicidade Pública”. Tu dizes:",
    answers: [
      { id: "a1", text: "Desde que não taxe a gasolina do meu Mustang, tudo bem", value: "IL" },
      { id: "a2", text: "Felicidade? Isso é muito individualista. Nacionalizem a alegria", value: "PCP" },
      { id: "a3", text: "Excelente! E deviam pôr hortas comunitárias em todos os prédios", value: "PAN" },
      { id: "a4", text: "Prefiro um ministério para limpar os bairros e acabar com o crime", value: "Chega" },
      { id: "a5", text: "Uma medida progressista e consciente", value: "Livre" },
      { id: "a6", text: "Mais ministérios? Para quê?", value: "AD" },
      { id: "a7", text: "Desde que a taxa de carbono continue a financiar o SNS, apoio", value: "PS" },
      { id: "a8", text: "Se não incluir um sindicato do riso, é só folclore", value: "BE" },
    ],
  },
  // {
  //   id: 2,
  //   text: "O Metro de Lisboa vai funcionar 24h, mas só com DJ residente em cada estação. Tu...",
  //   answers: [
  //     { id: "a1", text: "Bora lá! Mas o DJ tem de ser antifascista!", value: "BE" },
  //     { id: "a2", text: "Mais um gasto inútil — privatizem o metro e toca a despachar.", value: "IL" },
  //     { id: "a3", text: "E os agricultores? Nada para eles?", value: "PCP" },
  //     { id: "a4", text: "Mais horários? Sim! Mas nada de batidas do demónio, sim senhor?", value: "Chega" },
  //     { id: "a5", text: "Muito bem! Cultura urbana e acessível.", value: "Livre" },
  //     { id: "a6", text: "Desde que o som seja bom e haja igualdade de género na cabine.", value: "PAN" },
  //     { id: "a7", text: "Excelente ideia — cultura e mobilidade de mãos dadas.", value: "PS" },
  //     { id: "a8", text: "Desde que os custos estejam bem calculados, não me oponho.", value: "AD" },
  //   ],
  // },
  {
    id: 2,
    text: "O preço da mini sobe para 1,90€. Reação?",
    answers: [
      { id: "a1", text: "Criminalizem o aumento. É especulação capitalista!", value: "PCP" },
      { id: "a2", text: "Mini a 1,90€? Isto é Lisboa a matar o povo.", value: "BE" },
      { id: "a3", text: "Paguem, se querem boa cerveja biológico.", value: "PAN" },
      { id: "a4", text: "Querem destruir os velhos cafés para meter PUBs!", value: "Chega" },
      { id: "a5", text: "Vamos criar um fundo de apoio a tascos independentes.", value: "PS" },
      { id: "a6", text: "Liberalizem o mercado da mini, já.", value: "IL" },
      { id: "a7", text: "Investiguem se o aumento viola alguma cláusula europeia.", value: "AD" },
      { id: "a8", text: "Desde que haja opção sem alcool e colonialismo, tudo bem.", value: "Livre" },
    ],
  },
  // {
  //   id: 4,
  //   text: "O Ministério da Educação quer trocar exames nacionais por batalhas de freestyle. Tu achas que...",
  //   answers: [
  //     { id: "a1", text: "Finalmente o ensino ao serviço da cultura!", value: "Livre" },
  //     { id: "a2", text: "Desde que o júri não seja nomeado pelo PS, até pode ser.", value: "AD" },
  //     { id: "a3", text: "O verdadeiro conhecimento não se mede a rimar.", value: "PCP" },
  //     { id: "a4", text: "Desde que o freestyle tenha espaço para todos, ótimo!", value: "PAN" },
  //     { id: "a5", text: "Mais uma palhaçada woke. O ensino devia ser à antiga.", value: "Chega" },
  //     { id: "a6", text: "Excelente. Podemos até criar startups de rap educativo.", value: "IL" },
  //     { id: "a7", text: "O importante é garantir equidade no acesso ao beat.", value: "BE" },
  //     { id: "a8", text: "Temos de assegurar que o freestyle contribui para o PIB.", value: "PS" },
  //   ],
  // },
  {
    id: 3,
    text: "O Primeiro-Ministro foi visto de trotinete elétrica, sem capacete, a comer uma seitana. Tu...",
    answers: [
      { id: "a1", text: "Mais um símbolo da degradação da autoridade do Estado.", value: "Chega" },
      { id: "a2", text: "Liberdade individual, mas que seja um produto português!", value: "IL" },
      { id: "a3", text: "Desde que seja uma bifana de soja sem crueldade animal, aprovo.", value: "PAN" },
      { id: "a4", text: "O proletariado não anda de trotinete!", value: "PCP" },
      { id: "a5", text: "Estamos finalmente a ter líderes com consciência ambiental.", value: "Livre" },
      { id: "a6", text: "Não interessa o que come, interessa é se paga impostos.", value: "AD" },
      { id: "a7", text: "As bifanas do povo não deviam ser gourmetizadas.", value: "BE" },
      { id: "a8", text: "Espero que ele tenha seguro. E que promova a segurança rodoviária.", value: "PS" },
    ],
  },
  // {
  //   id: 6,
  //   text: "Nova lei proíbe festas com mais de 15 pessoas sem declaração de intenção comunitária. Tu...",
  //   answers: [
  //     { id: "a1", text: "Estado gordo a querer controlar a nossa vida social.", value: "IL" },
  //     { id: "a2", text: "Festas deviam ser controladas, o povo anda a desperdiçar energia.", value: "PCP" },
  //     { id: "a3", text: "Declaração? Desde que tenha zona chill e opções vegan, apoio.", value: "PAN" },
  //     { id: "a4", text: "Se for para festas ilegais em bairros problemáticos, concordo.", value: "Chega" },
  //     { id: "a5", text: "Festas devem promover igualdade e diversidade — assino por baixo.", value: "Livre" },
  //     { id: "a6", text: "O importante é o equilíbrio. Declarações sim, mas sem exageros.", value: "PS" },
  //     { id: "a7", text: "Mais uma desculpa para não deixar o povo juntar-se e protestar.", value: "BE" },
  //     { id: "a8", text: "Espero que seja fiscalizado de forma eficiente.", value: "AD" },
  //   ],
  // },
  {
    id: 4,
    text: "Novo imposto sobre memes ofensivos é aprovado. Tu...",
    answers: [
      { id: "a1", text: "Liberdade de expressão acima de tudo!", value: "IL" },
      { id: "a2", text: "Ofensivo para quem? O capital tem de ser memeado!", value: "PCP" },
      { id: "a3", text: "Desde que não sejam ofensivos para minorias, apoio.", value: "BE" },
      { id: "a4", text: "Boa medida! Memes estão a destruir a juventude.", value: "Chega" },
      { id: "a5", text: "Proponho um código de ética memética e inclusiva.", value: "Livre" },
      { id: "a6", text: "A receita do imposto deve apoiar a saúde mental.", value: "PS" },
      { id: "a7", text: "Não censures memes, faz memes melhores.", value: "PAN" },
      { id: "a8", text: "Regulação sim, mas com bom senso jurídico.", value: "AD" },
    ],
  },
  // {
  //   id: 8,
  //   text: "É criado o “Ministério do Tempo Livre e Bons Costumes”. Tu...",
  //   answers: [
  //     { id: "a1", text: "O Estado não tem de gerir o meu tempo livre.", value: "IL" },
  //     { id: "a2", text: "Os bons costumes vêm do povo trabalhador, não do governo.", value: "PCP" },
  //     { id: "a3", text: "Se promover meditação, caminhadas e recicláveis, apoio.", value: "PAN" },
  //     { id: "a4", text: "Finalmente, ordem e moral de volta ao país.", value: "Chega" },
  //     { id: "a5", text: "Desde que inclua cultura comunitária, excelente.", value: "Livre" },
  //     { id: "a6", text: "O nome podia ser mais tecnocrático... mas vá.", value: "AD" },
  //     { id: "a7", text: "Bons costumes? Só se forem de esquerda.", value: "BE" },
  //     { id: "a8", text: "Interessa é se melhora o bem-estar social.", value: "PS" },
  //   ],
  // },
  {
    id: 5,
    text: "Um influencer é eleito deputado por ter mais seguidores do que votos. Tu...",
    answers: [
      { id: "a1", text: "Marketing político 5 estrelas. Que entre no mercado!", value: "IL" },
      { id: "a2", text: "Isto é o resultado do capitalismo digital.", value: "PCP" },
      { id: "a3", text: "Desde que seja um influencer pela justiça climática, apoio.", value: "PAN" },
      { id: "a4", text: "É preciso ver se defende os valores tradicionais.", value: "Chega" },
      { id: "a5", text: "Pode ser um canal novo de participação popular!", value: "Livre" },
      { id: "a6", text: "Influencer? Então que seja auditado como qualquer outro.", value: "AD" },
      { id: "a7", text: "Se não for anti-racista, não me representa.", value: "BE" },
      { id: "a8", text: "As redes sociais são parte da democracia moderna.", value: "PS" },
    ],
  },
  {
    id: 6,
    text: "Todos os deputados passam a usar fardas coloridas consoante o partido. Reação?",
    answers: [
      { id: "a1", text: "Finalmente transparência visual. Adoro.", value: "Livre" },
      { id: "a2", text: "Só se forem feitas por cooperativas locais.", value: "PCP" },
      { id: "a3", text: "Se forem de algodão orgânico e cruelty-free, aprovo.", value: "PAN" },
      { id: "a4", text: "Farda a sério, tipo camuflado. E disciplina!", value: "Chega" },
      { id: "a5", text: "Desde que não seja azul AD, está tudo bem.", value: "BE" },
      { id: "a6", text: "Mais um gasto ridículo. Vistam o que quiserem.", value: "IL" },
      { id: "a7", text: "Temos de analisar o custo-benefício da medida.", value: "AD" },
      { id: "a8", text: "A farda deve promover o espírito republicano.", value: "PS" },
    ],
  },
  {
    id: 7,
    text: "O Parlamento lança canal da Twitch com lives dos debates. Tu...",
    answers: [
      { id: "a1", text: "Boa! Mas com superchats para o SNS.", value: "PS" },
      { id: "a2", text: "Vamos todos ver deputados a jogar Minecraft e fugir ao IRS.", value: "BE" },
      { id: "a3", text: "Streaming? Usem para explicar leis com gráficos animados!", value: "AD" },
      { id: "a4", text: "Mais distrações... fechem o TikTok e abram as fábricas.", value: "PCP" },
      { id: "a5", text: "Excelente ideia! Já estou a seguir!", value: "Livre" },
      { id: "a6", text: "O Parlamento precisa de um pitch deck, não de lives.", value: "IL" },
      { id: "a7", text: "Desde que seja moderado e com controlo parental, sim.", value: "Chega" },
      { id: "a8", text: "Só entro se houver conteúdo sobre animais e ambiente.", value: "PAN" },
    ],
  },
  {
    id: 8,
    text: "Uma app de voto por emoji é proposta. Votas com...",
    answers: [
      { id: "a1", text: "Um foguete, claro. Cripto total.", value: "IL" },
      { id: "a2", text: "Um punho fechado. Luta de classes.", value: "PCP" },
      { id: "a3", text: "Uma couve. Orgânico é político.", value: "PAN" },
      { id: "a4", text: "Um cão bravo. Pátria, família, ordem.", value: "Chega" },
      { id: "a5", text: "Um arco-íris com cravos. Esperança e diversidade.", value: "Livre" },
      { id: "a6", text: "Uma carteira. Responsabilidade orçamental.", value: "AD" },
      { id: "a7", text: "Um megafone. Protesto sempre!", value: "BE" },
      { id: "a8", text: "Um coração azul. Europa e consensos.", value: "PS" },
    ],
  },
  // {
  //   id: 13,
  //   text: "O Estado vai distribuir bicicletas elétricas com Wi-Fi e cesto para pão artesanal. Tu dizes...",
  //   answers: [
  //     { id: "a1", text: "Desde que a app seja open source, subscrevo já.", value: "Livre" },
  //     { id: "a2", text: "Dinheiro mal gasto. Privatizem o transporte pessoal.", value: "IL" },
  //     { id: "a3", text: "Cesto de pão? Mas e os tratores para os agricultores?", value: "PCP" },
  //     { id: "a4", text: "Isto é só para a elite de Lisboa com brunch ao domingo.", value: "Chega" },
  //     { id: "a5", text: "Apoio! Menos carros, mais ciclovias e glúten consciente.", value: "PAN" },
  //     { id: "a6", text: "Onde está o estudo de impacto orçamental?", value: "AD" },
  //     { id: "a7", text: "Excelente. Se tiver motor alimentado por sol e esperança.", value: "PS" },
  //     { id: "a8", text: "Importante é que seja acessível a todas as minorias urbanas.", value: "BE" },
  //   ],
  // },
  {
    id: 9,
    text: "Novo programa de habitação: partilhar T1s entre 4 jovens até aos 35.",
    answers: [
      { id: "a1", text: "Faz sentido! Partilha é consciência coletiva.", value: "Livre" },
      { id: "a2", text: "Com isso, o mercado vai explodir. Deixem o mercado funcionar!", value: "IL" },
      { id: "a3", text: "Mais uma medida que ignora a propriedade privada dos grandes.", value: "PCP" },
      { id: "a4", text: "É a esquerda a forçar o comunismo habitacional.", value: "Chega" },
      { id: "a5", text: "Se houver cláusula vegan-friendly e espaço para plantas, apoio.", value: "PAN" },
      { id: "a6", text: "Precisamos de casas acessíveis, não utopias.", value: "AD" },
      { id: "a7", text: "É um bom começo, mas ainda muito tímido.", value: "PS" },
      { id: "a8", text: "Só é justo se os senhorios também forem regulados.", value: "BE" },
    ],
  },
  // {
  //   id: 15,
  //   text: "Há uma proposta para substituir os debates parlamentares por jogos de tabuleiro.",
  //   answers: [
  //     { id: "a1", text: "Genial! Política lúdica e inclusiva.", value: "Livre" },
  //     { id: "a2", text: "E os trabalhadores? Jogam Monopoly com salários mínimos?", value: "PCP" },
  //     { id: "a3", text: "Se o jogo for sustentável e reciclável, apoio.", value: "PAN" },
  //     { id: "a4", text: "Estão a brincar com a pátria!", value: "Chega" },
  //     { id: "a5", text: "Desde que haja fair play e moderação, parece justo.", value: "PS" },
  //     { id: "a6", text: "Mais um delírio. Precisamos é de produtividade.", value: "AD" },
  //     { id: "a7", text: "Jogo de tabuleiro? Desde que seja cooperativo e de protesto.", value: "BE" },
  //     { id: "a8", text: "Se for gamificado e com investimento privado, assino.", value: "IL" },
  //   ],
  // },
  {
    id: 10,
    text: "Todos os comboios passam a emitir aromaterapia de eucalipto e Lo-Fi Chill Beats.",
    answers: [
      { id: "a1", text: "Modernização sensorial? Adoro!", value: "Livre" },
      { id: "a2", text: "Mais um desvio de dinheiro para projetos ridículos.", value: "IL" },
      { id: "a3", text: "Eucalipto? Isso favorece os grandes latifundiários!", value: "PCP" },
      { id: "a4", text: "Isso é lavagem cerebral da esquerda urbana.", value: "Chega" },
      { id: "a5", text: "Perfeito para equilibrar o chakra do utente.", value: "PAN" },
      { id: "a6", text: "Quem aprovou isto e quanto custou?", value: "AD" },
      { id: "a7", text: "Desde que beneficie o bem-estar coletivo, apoio.", value: "PS" },
      { id: "a8", text: "Só se o Lo-Fi for inclusivo e com letras feministas.", value: "BE" },
    ],
  },
  {
    id: 11,
    text: "Um reality show com deputados a viverem juntos é lançado: Casa da Democracia. Tu...",
    answers: [
      { id: "a1", text: "Desde que ganhem por produtividade, bora.", value: "IL" },
      { id: "a2", text: "Reality show é o ópio do povo.", value: "PCP" },
      { id: "a3", text: "Mas tem horta urbana e yoga ao acordar?", value: "PAN" },
      { id: "a4", text: "Excelente. Vamos ver quem é que come bifes.", value: "Chega" },
      { id: "a5", text: "Maravilhoso. A política precisa de ser mais acessível.", value: "Livre" },
      { id: "a6", text: "Espero que tenham seguro e regimento interno.", value: "AD" },
      { id: "a7", text: "Reality show é burguesia mediática.", value: "BE" },
      { id: "a8", text: "Pode ser uma via de aproximação à juventude.", value: "PS" },
    ],
  },
  {
    id: 12,
    text: "A ASAE vai fiscalizar quem diz “bacalhau à Brás” quando usa paloco. Tu...",
    answers: [
      { id: "a1", text: "Finalmente! Respeito gastronómico é património cultural.", value: "PS" },
      { id: "a2", text: "Isto é o Estado a meter-se até na travessa do povo.", value: "IL" },
      { id: "a3", text: "Bacalhau para todos ou revolução nas cozinhas.", value: "PCP" },
      { id: "a4", text: "Paloco à Brás é traição nacional. Cadeia com eles.", value: "Chega" },
      { id: "a5", text: "Desde que seja sustentável e de origem ética, tudo bem.", value: "PAN" },
      { id: "a6", text: "O nome é importante, mas o importante é a segurança alimentar.", value: "AD" },
      { id: "a7", text: "Vamos fazer ações de sensibilização nos mercados.", value: "BE" },
      { id: "a8", text: "A comida é identidade. Isto é luta simbólica e legítima.", value: "Livre" },
    ],
  },
  {
    id: 13,
    text: "É proposta uma lei para obrigar influencers a fazer serviço cívico antes de vender Prozis.",
    answers: [
      { id: "a1", text: "Claro. Influência sem ética é capitalismo puro.", value: "PCP" },
      { id: "a2", text: "Cada um que influencie à vontade. Livre mercado!", value: "IL" },
      { id: "a3", text: "Boa ideia. Podiam fazer workshops sobre compostagem.", value: "PAN" },
      { id: "a4", text: "Atenção: muitos promovem lixo tóxico, moral e digital.", value: "Chega" },
      { id: "a5", text: "Sim! E também devem ler Saramago antes de postar.", value: "Livre" },
      { id: "a6", text: "Regulação sim, mas sem censura.", value: "AD" },
      { id: "a7", text: "Devem informar-se sobre feminismo antes de vender batons.", value: "BE" },
      { id: "a8", text: "Um passo importante para elevar a literacia cívica.", value: "PS" },
    ],
  },
  // {
  //   id: 20,
  //   text: "Propõem substituir a AR por reuniões mensais no Zoom com emojis para votar.",
  //   answers: [
  //     { id: "a1", text: "Menos deslocações = menos emissões. Apoio!", value: "PAN" },
  //     { id: "a2", text: "Se for seguro e criptografado, assino.", value: "IL" },
  //     { id: "a3", text: "Mais uma desculpa para não pisarem o chão do povo.", value: "PCP" },
  //     { id: "a4", text: "Política por Zoom? Isto é um circo!", value: "Chega" },
  //     { id: "a5", text: "Mais acessível, mas com moderação simbólica presencial.", value: "Livre" },
  //     { id: "a6", text: "Tem de haver registo legal e backup físico.", value: "AD" },
  //     { id: "a7", text: "Desde que seja inclusivo e acessível a todos, apoio.", value: "BE" },
  //     { id: "a8", text: "Importa é o conteúdo, não o formato.", value: "PS" },
  //   ],
  // },
  {
    id: 14,
    text: "Um novo hino é proposto com beat trap da think music e letra escrita por inteligência artificial.",
    answers: [
      { id: "a1", text: "Genial. Uma pátria com flow.", value: "Livre" },
      { id: "a2", text: "IA a escrever o hino? Já nem há respeito!", value: "Chega" },
      { id: "a3", text: "Depende: foi treinada com dados coloniais?", value: "BE" },
      { id: "a4", text: "Desde que a batida respeite o ambiente, aceito.", value: "PAN" },
      { id: "a5", text: "O verdadeiro hino é o som do trabalho honesto.", value: "PCP" },
      { id: "a6", text: "Quem pagou ao produtor?", value: "AD" },
      { id: "a7", text: "Uma medida jovem e inclusiva.", value: "PS" },
      { id: "a8", text: "Trap? Façam é um pitch no Shark Tank.", value: "IL" },
    ],
  },
  // {
  //   id: 22,
  //   text: "Montenegro anuncia que vai apagar a empresa no Spin-Inviva. A tua reação:",
  //   answers: [
  //     { id: "a1", text: "Um verdadeiro exemplo de empreendedorismo reversível.", value: "AD" },
  //     { id: "a2", text: "Claro, agora é moda apagar provas em vez de impostos.", value: "BE" },
  //     { id: "a3", text: "Se fosse no setor privado, isto chamava-se 'pivotar'.", value: "IL" },
  //     { id: "a4", text: "Isto cheira a esturro, mas não se compara ao marxismo.", value: "Chega" },
  //     { id: "a5", text: "Empresas e políticos deviam ser abertos como uma assembleia de bairro.", value: "Livre" },
  //     { id: "a6", text: "Quem nunca teve uma empresa esquecida que atire a primeira fatura.", value: "PS" },
  //     { id: "a7", text: "Mais um exemplo de capitalismo sem responsabilidade.", value: "PCP" },
  //     { id: "a8", text: "Empresas fantasmas consomem recursos do planeta!", value: "PAN" },
  //   ],
  // },
  {
    id: 15,
    text: "Pedro Nuno Santos vai de Porsche para o Parlamento. Tu...",
    answers: [
      { id: "a1", text: "Se for elétrico e partilhado, ainda vá...", value: "PAN" },
      { id: "a2", text: "O camarada chegou com estilo de CEO. Coerência ficou em casa.", value: "BE" },
      { id: "a3", text: "Nada contra o luxo, desde que pago com o próprio salário.", value: "IL" },
      { id: "a4", text: "É tudo farinha do mesmo saco socialista de luxo.", value: "Chega" },
      { id: "a5", text: "O verdadeiro problema é não ser português, o carro.", value: "PCP" },
      { id: "a6", text: "Não é o carro que importa, é o rumo do país.", value: "PS" },
      { id: "a7", text: "Podia ter ido de trotinete, ao menos era mais estético.", value: "Livre" },
      { id: "a8", text: "Podia ter declarado no IRS o valor do GPS.", value: "AD" },
    ],
  },
  {
    id: 16,
    text: "Diogo Batáguas lança mais um “Conteúdo” a expor a política portuguesa. Tu...",
    answers: [
      { id: "a1", text: "É o único jornalismo que me dá vontade de viver.", value: "Livre" },
      { id: "a2", text: "Um humorista é mais sério que metade do Parlamento.", value: "BE" },
      { id: "a3", text: "Enquanto houver liberdade para isso, o mercado funciona.", value: "IL" },
      { id: "a4", text: "Mais um vendido à esquerda woke.", value: "Chega" },
      { id: "a5", text: "Era bom se ao menos citasse Marx de vez em quando.", value: "PCP" },
      { id: "a6", text: "Críticas sim, mas também precisa ouvir os dois lados.", value: "AD" },
      { id: "a7", text: "Concordo, mas prefiro debates sérios com PowerPoints.", value: "PS" },
      { id: "a8", text: "Tem piada, mas deviam compensar as piadas com reflorestação.", value: "PAN" },
    ],
  },
  // {
  //   id: 26,
  //   text: "Guilherme Duarte lança programa sobre as eleições com gritaria e memes. Reação?",
  //   answers: [
  //     { id: "a1", text: "Finalmente alguém a explicar política como se fosse TikTok com cérebro.", value: "Livre" },
  //     { id: "a2", text: "Só falta incluir um sindicato dos Gritinhos.", value: "BE" },
  //     { id: "a3", text: "Gritar não é solução. Um bom gráfico fala por si.", value: "AD" },
  //     { id: "a4", text: "Mais um esquerdista disfarçado de humorista.", value: "Chega" },
  //     { id: "a5", text: "Se ajudasse o proletariado a votar consciente, era útil.", value: "PCP" },
  //     { id: "a6", text: "Boas iniciativas, desde que sem fake news.", value: "PS" },
  //     { id: "a7", text: "Se não tiver patrocínio privado, não é sustentável.", value: "IL" },
  //     { id: "a8", text: "Um programa desses devia ter bolacha vegan no intervalo.", value: "PAN" },
  //   ],
  // },
  {
    id: 17,
    text: "O Windoh decide fundar um partido político: o Influencers Unidos pelo Futuro. Reação?",
    answers: [
      { id: "a1", text: "Finalmente alguém que perceba de alcance orgânico!", value: "IL" },
      { id: "a2", text: "O futuro é distopia se o parlamento virar live do Twitch.", value: "PCP" },
      { id: "a3", text: "Já estou a seguir, mas só se tiver pets no programa.", value: "PAN" },
      { id: "a4", text: "Tudo menos mais um partido da ‘geração fragilizada’.", value: "Chega" },
      { id: "a5", text: "Se incluir representatividade e eco-fashion, alinho.", value: "Livre" },
      { id: "a6", text: "Desde que siga as regras legais e tenha contas auditadas.", value: "AD" },
      { id: "a7", text: "Mais um que quer fama em vez de luta de classes.", value: "BE" },
      { id: "a8", text: "Apoio a juventude interessada, mas com responsabilidade.", value: "PS" },
    ],
  },
  // {
  //   id: 28,
  //   text: "NuméiRo lança NFT do 25 de Abril com IA a dançar o “Grândola”. Reação?",
  //   answers: [
  //     { id: "a1", text: "Cripto-cravos? Onde posso investir?", value: "IL" },
  //     { id: "a2", text: "A revolução não se mete à venda em blockchain.", value: "PCP" },
  //     { id: "a3", text: "Desde que os lucros vão para ONG ambientais, pode ser.", value: "PAN" },
  //     { id: "a4", text: "Mais uma aberração globalista para apagar a nossa história.", value: "Chega" },
  //     { id: "a5", text: "Tecnologia sim, mas com consciência histórica.", value: "Livre" },
  //     { id: "a6", text: "Pode ser, desde que respeite os direitos de autor.", value: "AD" },
  //     { id: "a7", text: "O 25 de Abril não é hype nem JPEG.", value: "BE" },
  //     { id: "a8", text: "Interessante, mas precisa de regulação.", value: "PS" },
  //   ],
  // },
  // {
  //   id: 29,
  //   text: "Emigração jovem bate recordes. Portugal lidera em cérebros exportados. Tu dizes...",
  //   answers: [
  //     { id: "a1", text: "Tristeza. Um país que exporta sonhos por falta de condições.", value: "PS" },
  //     { id: "a2", text: "A culpa é do socialismo que mata a ambição.", value: "IL" },
  //     { id: "a3", text: "Fuga de cérebros? Isso chama-se capitalismo selvagem.", value: "PCP" },
  //     { id: "a4", text: "Os que ficam também deviam aprender a trabalhar!", value: "Chega" },
  //     { id: "a5", text: "Temos de criar comunidades criativas cá.", value: "Livre" },
  //     { id: "a6", text: "Mais oportunidades cá dentro. É urgente.", value: "AD" },
  //     { id: "a7", text: "Sem salários dignos e casas acessíveis, ninguém fica.", value: "BE" },
  //     { id: "a8", text: "É o planeta que perde quando jovens emigram com pegada de carbono.", value: "PAN" },
  //   ],
  // },
];

export const parties: Party[] = [
  {
    id: "Livre",
    name: "Livre",
    color: "#6ec492",
    description: "Defende que todos devíamos andar de bicicleta, viver num T0 sustentável e usar palavras como 'horizontalidade' e 'transversalidade' em conversas de café.",
  },
  {
    id: "IL",
    name: "Iniciativa Liberal",
    color: "#57c7da",
    description: "Sonha com um país onde não há impostos, o Estado só existe para emitir passaportes, e cada cidadão gere a sua própria mini-nação via app no telemóvel.",
  },
  {
    id: "PCP",
    name: "Partido Comunista Português",
    color: "#c2262f",
    description: "Vive em 1974 (e com orgulho). É contra tudo o que envolva tecnologia após o VHS, mas a favor de greves e da força da classe operária — sempre.",
  },
  {
    id: "Chega",
    name: "Chega",
    color: "#31387f",
    description: "Acredita que tudo se resolve com punições, fardas e muito barulho. Os culpados? Todos, menos eles.",
  },
  {
    id: "PAN",
    name: "PAN",
    color: "#157d96",
    description: "Quer salvar o planeta, os animais, as plantas, as pedras e possivelmente também os sentimentos dos golfinhos. Carnívoros, cuidado.",
  },
  {
    id: "AD",
    name: "Aliança Democrática (PSD)",
    color: "#f5742a",
    description: "O partido que diz que sabe governar, mas só quando não está a governar. Defensores do centrão com um toque vintage cavaquista.",
  },
  {
    id: "PS",
    name: "Partido Socialista",
    color: "#e3226b",
    description: "Especialistas em parecerem moderados enquanto fazem tudo para manter o poder. Às vezes esquecem-se dos Porsches no parque de estacionamento.",
  },
  {
    id: "BE",
    name: "Bloco de Esquerda",
    color: "#6b3497",
    description: "Quer um mundo mais justo, inclusivo e igualitário, de preferência com muito protesto, muita causa e nenhum orçamento aprovado.",
  },
];


// Logic to calculate which party is closest to user's answers
export const calculateResults = (userAnswers: { [key: number]: string }): Result[] => {
  // Initialize a score object for each party with 0
  const partyScores: { [key: string]: number } = {};
  parties.forEach(party => {
    partyScores[party.id] = 0;
  });

  // Iterate through the user's answers
  Object.values(userAnswers).forEach(partyId => {
    // Increment the score for the selected party
    if (partyScores[partyId] !== undefined) {
      partyScores[partyId] += 1;
    }
  });

  // Calculate the total number of answers
  const totalAnswers = Object.keys(userAnswers).length;

  // Convert the scores into a results array
  const results: Result[] = Object.entries(partyScores).map(([partyId, score]) => {
    // Calculate the percentage of alignment
    const percentage = totalAnswers > 0 ? Math.round((score / totalAnswers) * 100) : 0;

    return {
      partyId,
      score,
      percentage,
    };
  });

  // Sort results by highest percentage match
  return results.sort((a, b) => b.percentage - a.percentage);
};

interface Result {
  partyId: string;
  score: number;
  percentage: number;
}
