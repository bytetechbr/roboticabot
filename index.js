const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: "MTEwNDgwMTI1MjAzNjA1MDk1NA.GGbfv3.13PJma7obrbCqe_T0AysVk3byG6YYfN1-xHyWk",
    prefix: ".",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"]
});

// Ping Command Example
bot.command({
    name: "ping",
    code: `Pong! $pingms`
});

bot.command({
  name: "mblock",
  description: "Explica detalhadamente o que é o mBlock",
  code: `
    $color[008000]
    $title[O que é o mBlock?]
    $description[
      🤖 mBlock é um software gratuito de programação em blocos desenvolvido pela [Makeblock](https://www.makeblock.com/software/mblock). Ele é usado para programar robôs, dispositivos eletrônicos e outros projetos de hardware de forma visual e intuitiva, sem a necessidade de conhecimentos avançados de programação.

      🧩 O mBlock é baseado na plataforma [Scratch](https://scratch.mit.edu/) do MIT, que permite aos usuários programar usando blocos de código visual em vez de digitar linhas de código. Ele oferece uma variedade de blocos pré-programados para diferentes funções, como movimento, som e sensores, que os usuários podem arrastar e soltar para criar programas personalizados.

      🔌 Além disso, o mBlock é compatível com uma variedade de placas e kits de robótica, incluindo o [mBot](https://www.makeblock.com/steam-kits/mbot) e o [Ranger](https://www.makeblock.com/steam-kits/ranger). Ele também suporta a programação em texto para usuários mais avançados e inclui recursos avançados, como depuração e monitoramento em tempo real.

      🏫 O mBlock é amplamente utilizado em escolas e instituições de ensino em todo o mundo para ensinar programação e robótica para crianças e jovens. Ele também é usado por entusiastas de eletrônica e robótica de todas as idades como uma ferramenta poderosa e acessível para criar projetos personalizados.

      🌐 Para saber mais sobre o mBlock, visite o site oficial da [Makeblock](https://www.makeblock.com/software/mblock).
    ]
  `
});

bot.command({
  name: "arduino",
  description: "Explica detalhadamente o que é o Arduino IDE",
  code: `
    $color[008000]
    $title[O que é o Arduino IDE?]
    $description[
      🤖 O Arduino IDE é um ambiente de desenvolvimento integrado (IDE) gratuito e de código aberto usado para programar e desenvolver projetos com a placa microcontroladora [Arduino](https://www.arduino.cc/). Ele é usado por entusiastas e profissionais de eletrônica para criar projetos interativos, robótica, automação residencial e outros projetos de hardware.

      🧑‍💻 O Arduino IDE é baseado na linguagem de programação C++ e é projetado para ser fácil de usar, com uma interface gráfica intuitiva e funcionalidades avançadas de depuração e monitoramento. Ele oferece uma ampla variedade de bibliotecas e exemplos de código para ajudar os usuários a começar a programar rapidamente, e é compatível com uma grande variedade de placas e shields de hardware.

      🔌 O Arduino IDE suporta a programação em texto, com recursos avançados de edição de código, como auto-completar e realce de sintaxe. Ele também inclui um monitor serial para depurar e testar projetos em tempo real, bem como uma ferramenta de gravação de bootloader para atualizar o firmware da placa Arduino.

      🏫 O Arduino IDE é amplamente utilizado em escolas e instituições de ensino em todo o mundo para ensinar programação e eletrônica para crianças e jovens. Ele também é usado por profissionais de eletrônica e robótica para criar projetos personalizados e protótipos.

      🌐 Para saber mais sobre o Arduino IDE, visite o site oficial da [Arduino](https://www.arduino.cc/en/software).
    ]
  `
});

bot.command({
  name: "aulasrobotica",
  description: "Explica sobre as aulas de robótica para a turma",
  code: `
    $color[008000]
    $title[Aulas de Robótica para a Turma]
    $description[
      🤖 Olá, turma de robótica! As aulas de robótica são uma maneira divertida e educativa de aprender sobre ciência, tecnologia, engenharia e matemática (STEM). Na verdade, a robótica é uma das melhores maneiras de ensinar STEM, pois é prática e envolvente.

      💡 Durante nossas aulas de robótica, iremos aprender conceitos básicos de eletrônica, mecânica e programação, além de construir e programar nossos próprios robôs para realizar tarefas específicas. As aulas serão uma mistura de teoria e prática, para que possamos aprender de forma efetiva.

      🏫 Se vocês precisarem de ajuda com as lições ou com a construção dos sistemas, não hesitem em me contatar ou pedir ajuda aos colegas. Juntos, podemos superar quaisquer obstáculos e aprender muito sobre robótica!

      🌐 Para acessar as aulas de robótica oferecidas pela nossa escola, por favor acessem o seguinte link: https://aluno.escoladigital.pr.gov.br/robotica/aulas/educacional. Lá vocês poderão encontrar as lições de robótica e recursos adicionais.

      🔍 Para saber mais sobre robótica e seus benefícios, confira os seguintes links:
      - FIRST Robotics Competition: https://www.firstinspires.org/robotics/frc
      - Wikipedia - Robótica: https://pt.wikipedia.org/wiki/Rob%C3%B3tica
      - Artigo - A importância da robótica na educação: https://www.educacao.estadao.com.br/noticias/geral,a-importancia-da-robotica-na-educacao,10000017459
    ]
  `
});

bot.command({
  name: "reportbug",
  description: "Reportar bugs do bot",
  code: `
    $color[008000]
    $title[Reportar Bug]
    $description[🐞 Encontrou algum bug no bot? Lamentamos muito por isso! Estamos sempre trabalhando para melhorar o bot e corrigir quaisquer problemas que possam surgir.

      📝 Por favor, ajude-nos a resolver o problema relatando-o através deste formulário: [Formulário de Relatório de Bugs](https://forms.gle/1WV4vL1FTcoMFG138)

      🙏 Agradecemos sua ajuda em tornar nosso bot melhor e mais confiável!]
  `
});

bot.command({
  name: "logicabooleana",
  description: "Explica o que é lógica booleana de forma simples",
  code: `
    $color[008000]
    $title[Lógica Booleana]
    $description[
      🤔 Você já ouviu falar em lógica booleana? Se não, não se preocupe! É mais simples do que parece.

      💻 A lógica booleana é um tipo de álgebra usada em programação para trabalhar com valores booleanos (verdadeiro ou falso). Ela é usada para tomar decisões em um programa com base em condições que podem ser verdadeiras ou falsas.

      🔢 Em lógica booleana, existem dois valores: "verdadeiro" e "falso". Esses valores são frequentemente representados por 1 e 0, respectivamente.

      🤓 Um exemplo de lógica booleana é o operador "AND" (E, em português). Ele retorna "verdadeiro" apenas quando ambas as condições forem verdadeiras. Por exemplo, a expressão "1 AND 1" é verdadeira, enquanto a expressão "1 AND 0" é falsa.

      🤯 Outro exemplo é o operador "OR" (OU, em português). Ele retorna "verdadeiro" quando pelo menos uma das condições for verdadeira. Por exemplo, a expressão "1 OR 0" é verdadeira, assim como a expressão "1 OR 1".

      🤔 A lógica booleana pode parecer confusa no início, mas é uma ferramenta poderosa na programação. Ela permite que os programadores criem programas que tomam decisões e realizam tarefas automaticamente com base em condições específicas.

      📚 Se você quiser aprender mais sobre lógica booleana, recomendo este artigo da Wikipedia: https://pt.wikipedia.org/wiki/%C3%81lgebra_booleana
    ]
  `
});

bot.command({
  name: "help",
  description: "Mostra todos os comandos disponíveis",
  code: `
$color[0096ff]
$title[Comandos do Bot]
$description[
🤖 **.ping** - Verifica a latência do bot.
🤖 **.aulasrobotica** - Explica sobre as aulas de robótica para a turma.
🤖 **.logicabooleana** - Explica a lógica booleana com um exemplo.
🤖 **.mblock** - Mostra como baixar e instalar o software mBlock.
🤖 **.arduinoide** - Mostra como baixar e instalar a IDE do Arduino.
🤖 **.help** - Mostra todos os comandos disponíveis.
🤖 **.reportbug** - Reporta um bug para o desenvolvedor.
]
`
});

bot.command({
  name: "robopergunta",
  description: "O robô responde uma pergunta com uma resposta aleatória",
  usage: ".robopergunta [sua pergunta]",
  code: `
    $description[$randomText[Sim;Não;Talvez;Não sei;Pode ser;Com certeza;Claro;Não acredito;Com toda certeza;Impossível;Sem dúvidas;Com toda a certeza;Provavelmente;De jeito nenhum;Com toda a probabilidade;Não apostaria nisso;Não posso responder agora;Sem sombra de dúvidas;Melhor não contar agora;Concentre-se e pergunte novamente;Não conte com isso;Minha resposta é não;Minhas fontes dizem não;As perspectivas não são boas;Acho que não;As estrelas dizem que não;Não está claro;Eu não apostaria nisso hoje;Minha resposta é sim, com certeza;As perspectivas são boas;Não posso prever agora]]
    $color[0096ff]
  `
});
