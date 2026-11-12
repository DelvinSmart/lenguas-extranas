// Conteúdo do mapa em português: mesmas ramas e pontos de js/contenido.js, na mesma ordem.
// Os versículos vêm de js/biblia-pt.js (HPT = passagem inteira, VPT = um versículo dentro do texto).
const BRANCHES_PT = [
  { title:"Etimologia do termo", sub:"A origem da palavra", color:"--b2", leaves:[
    { label:"“estranhas” · glōssa", html:`
<p>Se formos aos textos originais, vemos que a palavra <b>"estranhas"</b> ou <b>"desconhecidas"</b></p>
<p>Com relação a esse termo, ela não existe nas Escrituras; foi enxertada depois por alguns tradutores.</p>
<p>(Em 1 Coríntios 14:21, onde algumas traduções falam de "outras línguas" ou "línguas estranhas", o grego usa <i>heteroglōssois</i>, que significa "de outras línguas", ou seja, idiomas de outros povos; Paulo está citando Isaías 28:11.)</p>
<p>O termo grego usado é <span class="g">glōssa</span>, que quer dizer literalmente <b>"língua" ou "idioma humano"</b>.</p>` },
    { label:"Uma palavra, vários sentidos", nuevo:true, html:`
<p>E aqui está a chave de tudo: a etimologia, ou seja, a origem da palavra. Quando buscamos a etimologia de um termo, descobrimos o seu verdadeiro significado, e não o que foram acrescentando com o tempo.</p>
<p>A mesma palavra <span class="g">glōssa</span> é usada na Bíblia com mais de um sentido:</p>
<ol>
<li><b>A língua do corpo</b>, o órgão com o qual falamos (Tiago 3:5-6).</li>
<li><b>Um idioma humano</b>, como em Atos 2:4 e 2:11.</li>
<li><b>Uma forma ou aparência</b>, como as “línguas como de fogo” de Atos 2:3.</li>
</ol>
<p>E reparem numa coisa: em Atos 2:4 diz que falaram em outras línguas (<span class="g">glōssa</span>), e nos versículos 6 e 8 o povo diz que os ouvia falar na sua própria língua, e ali o grego usa <span class="g">diálektos</span>, de onde vem a nossa palavra “dialeto”. Ou seja, Lucas usa as duas palavras para a mesma coisa: as línguas de Pentecostes eram idiomas e dialetos reais.</p>
<p><b>Por isso, quando a palavra é usada corretamente, no seu contexto, o texto se entende sozinho. O problema começa quando, de uma palavra que tem dois ou três sentidos, escolhemos o que não é.</b></p>` }
  ]},
  { title:"Parêntese: como o texto chegou até nós", sub:"A tradução", color:"--b3", leaves:[
    { label:"Hebraico e grego coiné", html:`
<p>E para entender isso de um jeito mais fácil, vamos abrir um parêntese e voltar um pouco no tempo para saber como o texto chegou até nós:</p>
<p>As Escrituras originais não foram escritas em português;</p>
<ul><li>O <b>Antigo Testamento</b> foi escrito em <b>hebraico</b></li></ul>
<p>e</p>
<ul><li>O <b>Novo Testamento</b> em <b>grego coiné</b>.</li></ul>` },
    { label:"Martinho Lutero, século XVI", html:`
<p>Durante muitos séculos, o acesso aos textos foi extremamente limitado e guardado por estruturas de poder que impediam que as pessoas comuns pudessem lê-los diretamente.</p>
<p>Isso começou a mudar graças a homens como <b>Martinho Lutero</b>, que, no <b>século XVI</b>, fez a histórica tradução da Bíblia para o alemão, impulsionando novas traduções para o inglês (como a de William Tyndale, em 1526) e para outros idiomas modernos, permitindo que hoje cada um de nós possa ter a Bíblia nas mãos.</p>` },
    { label:"Duas grandes vulnerabilidades", html:`
<p>No entanto, quando falamos de tradução, temos que levar em conta uma realidade inevitável:</p>
<p>quando os tradutores passam um texto de um idioma antigo para as nossas línguas atuais, enfrentam um desafio enorme que deixa a porta aberta para duas grandes vulnerabilidades:</p>
<ol>
<li>primeiro, que o tradutor cometa imprecisões ao interpretar certos termos, ou seja, pode traduzir mal o texto.</li>
<li>segundo, que o leitor entenda mal o que o texto original queria dizer de verdade, só porque chegou até ele uma tradução moderna.</li>
</ol>` },
    { label:"Verificar o idioma original", html:`
<p><b>É exatamente por esse motivo que, quando queremos conhecer a verdade sem nenhum tipo de alteração ou adulteração, não podemos ficar só na superfície de uma tradução moderna; é indispensável verificar o idioma original.</b></p>` }
  ]},
  { title:"Atos capítulo 2", sub:"Pentecostes", color:"--b4", leaves:[
    { label:"Atos 2:1-11", html:`
<p>Vamos examinar os dois livros do Novo Testamento onde esse tema é tratado a fundo, começando pelo relato de Atos capítulo 2</p>
${HPT("Atos 2:1-11 ARA")}` },
    { label:"v1 “todos reunidos”", html:`
<ul>
<li><b>Primeiro, v1 “todos reunidos”</b>: segundo o contexto do capítulo 1 do mesmo livro, está falando dos 12 apóstolos (incluindo Matias, que tinha acabado de ser escolhido).</li>
<li>Os demais discípulos, homens e mulheres (o grupo de uns 120 crentes mencionado em Atos 1:15).</li>
</ul>
<p>Eram os crentes que estavam esperando a promessa do Espírito Santo.</p>` },
    { label:"v3 “línguas como de fogo”", html:`
<ul><li><b>Segundo, v3 “línguas como de fogo”</b>: a palavra grega usada ali também é <span class="g">glōssa</span>, mas nesse contexto visual tem o sentido de “aparência ou forma”. Ou seja, chamas ou clarões de fogo que tinham uma forma parecida com a silhueta de uma língua.</li></ul>` },
    { label:"v5 “vindos de todas as nações”", html:`
<ul><li><b>Terceiro, v5 “estavam habitando em Jerusalém judeus” “vindos de todas as nações”</b></li></ul>` },
    { label:"Exemplo: os venezuelanos", html:`
<p>Para entender exatamente o que aconteceu no dia de Pentecostes e não ficar com ideias erradas, vamos dar um exemplo simples. Imaginemos os venezuelanos que, por vários motivos, saíram da sua terra e foram morar pelo mundo inteiro — nos Estados Unidos, na China, na Europa. Lá nasceram os filhos deles, e esses filhos já não aprenderam o espanhol do mesmo jeito, porque cresceram falando inglês, chinês ou o idioma do país onde nasceram. Então, mesmo levando a cultura e o sangue venezuelano, a língua materna deles já não é o espanhol, é outra.</p>
<p>Levando esse exemplo para o contexto bíblico de Atos capítulo 2, a cena se divide em três pontos-chave:</p>` },
    { label:"1. Os locais", html:`
<h3>1. Os que estavam em Jerusalém (os locais):</h3>
<p>Eram como aqueles venezuelanos que nunca saíram da sua terra e cujo único idioma natural é o espanhol. No contexto bíblico, eram os moradores de Judeia e de Jerusalém. Os discípulos de Jesus eram pescadores e gente simples da região da Galileia; pessoas humildes a quem ninguém nunca tinha ensinado um idioma estrangeiro.</p>` },
    { label:"2. A diáspora", html:`
<h3>2. Os que vieram de fora (a diáspora):</h3>
<p>Eram os judeus da dispersão (a diáspora). Tinham a mesma fé e o mesmo sangue, mas tinham nascido e crescido no estrangeiro (no Egito, em Roma, na Mesopotâmia etc.). Por isso, mesmo sendo culturalmente judeus, a língua materna deles já não era o aramaico ou o hebraico antigo de Jerusalém, mas os dialetos e idiomas dos países onde tinham crescido. Tinham viajado a Jerusalém só para celebrar a festa religiosa.</p>` },
    { label:"3. O grande milagre", html:`
<h3>3. O grande milagre:</h3>
<p>De repente, o Espírito Santo desce sobre os discípulos — aqueles galileus humildes que só conheciam o seu idioma local — e acontece algo extraordinário: começam a falar de forma fluente e perfeita nos idiomas de todos aqueles estrangeiros que vinham de fora. Quando os visitantes ouvem gente simples do interior falar com eles exatamente no idioma em que eles cresceram no estrangeiro, ficam completamente maravilhados. <b>O milagre não foi soltar balbucios incompreensíveis, mas uma comunicação perfeita e real, para que todos pudessem entender a mensagem de Deus sem barreiras de idioma.</b></p>` },
    { label:"A Torre de Babel", nuevo:true, html:`
<p>E isso não fica só em Atos 2. Para entender por completo, temos que voltar a Gênesis 11, à Torre de Babel.</p>
${HPT("Gênesis 11:1-9 ARA")}
<p>Ali a terra inteira falava um só idioma, e o povo se uniu para construir uma cidade e uma torre que chegasse até o céu, para tornar o seu nome célebre e não ser espalhado por toda a terra (Gênesis 11:1-4). Ou seja, estavam unidos, sim, mas unidos para edificar algo que não edificava a Deus, e sim a eles mesmos. E isso depois que Deus tinha mandado que enchessem a terra (Gênesis 9:1).</p>
<p>Então Deus desceu, confundiu a linguagem deles para que não se entendessem uns aos outros, e os espalhou por toda a terra (Gênesis 11:5-9). Foi por causa da maldade deles, para que não continuassem crescendo nela.</p>
<p>As tradições judaicas antigas contam coisas impressionantes sobre essa torre. Uma delas, o <i>Pirkei de-Rabbi Eliezer</i>, diz que era tão alta que levavam um ano para subir, e que se caía um tijolo eles choravam, mas se caía um homem não se importavam. Isso não está na Bíblia, é tradição, mas nos deixa imaginar a loucura de um povo unido numa mesma língua para edificar algo que não edifica o Senhor.</p>` },
    { label:"Babel e Pentecostes", nuevo:true, html:`
<p>A Bíblia está cheia de conexões entre o Antigo e o Novo Testamento. Um estudo muito conhecido, de Chris Harrison e Christoph Römhild, contou 63.779 referências cruzadas, e esta é uma das mais impactantes.</p>
<p>Agora, reparem na comparação, porque é bem profunda: o mesmo Deus que confundiu as línguas em Babel é o que, em Pentecostes, usa essas mesmas línguas para unir o seu povo.</p>
<ul>
<li><b>Em Babel</b>, os homens queriam tornar o próprio nome célebre. <b>Em Pentecostes</b>, falavam das grandezas de Deus (Atos 2:11).</li>
<li><b>Em Babel</b>, as línguas separaram os povos e os espalharam. <b>Em Pentecostes</b>, gente de todas as nações se juntou num mesmo lugar e entendeu uma mesma mensagem (Atos 2:5-6).</li>
<li><b>Em Babel</b>, ninguém entendia ninguém. <b>Em Pentecostes</b>, cada um entendia no seu próprio idioma.</li>
<li><b>Em Babel</b>, as línguas serviram para que parassem de edificar. <b>Em Pentecostes</b>, serviram para edificar: era a fundação da igreja, que começou a partir dos apóstolos.</li>
</ul>
<p>E aqui vem algo do grego que é muito forte. Na tradução grega do Antigo Testamento, a Septuaginta, quando Deus diz em Gênesis 11:7 que vai confundir a linguagem deles, a palavra é <span class="g">synchéō</span>, e Babel é chamada de <span class="g">Sýnchysis</span>, que quer dizer “Confusão” (Gênesis 11:9). E em Atos 2:6, quando diz que a multidão ficou perplexa, Lucas usa esse mesmo verbo: <span class="g">synechýthē</span>. A mesma palavra de Babel, mas agora Deus a usa para o bem.</p>
<p>Mas atenção a um detalhe: em Pentecostes Deus não apagou os idiomas nem os transformou numa só língua. Cada um continuou ouvindo o seu próprio idioma, mas todos receberam a mesma mensagem. As línguas de Babel foram para separar; as de Pentecostes, para unir a igreja na adoração a Cristo. Desde os primeiros séculos, mestres da igreja como Gregório de Nazianzo e Agostinho de Hipona já ensinavam que Pentecostes era o contrário de Babel.</p>
<p><b>E isso prova mais uma vez que as línguas de Pentecostes eram idiomas humanos reais, os mesmos idiomas que nasceram em Babel. O que Deus dividiu em Babel por causa do pecado, ele usa em Pentecostes para que todas as nações ouçam o evangelho, como o profeta já tinha anunciado em Sofonias 3:9.</b></p>
${HPT("Sofonias 3:9 ARA")}` }
  ]},
  { title:"1 Coríntios capítulo 14", sub:"As orientações de Paulo", color:"--b5", leaves:[
    { label:"1 Coríntios 14:1-25", html:`
<p>Agora vamos analisar as orientações do apóstolo Paulo em 1 Coríntios 14 — uma passagem muito citada —,</p>
${HPT("1 Coríntios 14:1-25 ARA")}` },
    { label:"v2 “mistérios” · Efésios 3:3-6", html:`
<ul><li><b>Primeiro, v2, “em espírito fala mistérios”</b>: a palavra “mistérios”, biblicamente, é uma verdade divina que antes estava escondida nos planos de Deus, mas que agora foi revelada.</li></ul>
<p>Por exemplo, o apóstolo Paulo chama de mistério a união de judeus e gentios num mesmo corpo (Efésios 3:3-6).</p>
${HPT("Efésios 3:3-6 ARA")}` },
    { label:"Imaginemos a reunião da igreja", html:`
<p>Agora vamos imaginar que estamos numa reunião da igreja e alguém se levanta para orar ou falar e, em vez de falar em português para que o povo diga "amém" e entenda a mensagem, começa a falar com uma emoção altíssima num idioma que ninguém entende.</p>
<p>Ninguém processa nem entende nada, e nem a própria pessoa que está falando entende com a sua mente o que está dizendo; simplesmente sente uma “corrente de emoção espiritual muito forte e deixa as palavras saírem”.</p>
<p>É aí que entra a frase de Paulo: <b>"${VPT("1 Coríntios 14:1-25 ARA", 2)}" (1 Coríntios 14:2).</b></p>
<p>Não quer dizer que a pessoa virou um profeta de códigos divinos escondidos. Significa que, para o ser humano, a mensagem fica como um mistério impenetrável. É um segredo entre essa pessoa e Deus, porque, como ninguém tem a capacidade de entender aquele idioma estrangeiro, para a congregação é um enigma, porque não entende.</p>` },
    { label:"Os coríntios e a resposta de Paulo", html:`
<p>Na mente dos coríntios, isso era como um nível espiritual elevado: "Vejam como estou conectado com Deus, vejam como estou emocionado, que falo coisas que ninguém entende".</p>
<p>E Paulo lhes diz: «Espere um momento. Se ninguém entende nada, para que serve? Para Deus não há segredos, ele sabe tudo; mas se você está numa reunião pública e o que você diz fica como um "mistério" que ninguém traduziu, para os outros é como se você estivesse falando com a parede».</p>
<p><b>Por isso Paulo insiste que a fé cristã não é criar um clube de mistérios que ninguém explica, mas que tudo o que se fala na igreja seja claro, transparente e compreensível, para que todos aprendam e cresçam juntos.</b></p>` },
    { label:"v9 “palavra compreensível”", html:`
<ul><li><b>Segundo, v9</b>: ${VPT("1 Coríntios 14:1-25 ARA", 9)}</li></ul>
<p><b>Compreensível</b> é o oposto de <b>incompreensível</b>: algo claro, que se entende; do contrário, não se poderia traduzir.</p>
<p>No grego original a palavra usada é <span class="g">eúsēmon</span> (de <i>eu</i>, "bem", e <i>sēma</i>, "sinal"), ou seja, uma palavra com significado claro<br>(no texto, a ideia é dar uma mensagem "fácil de entender" ou "bem articulada").</p>` },
    { label:"Almeida Revista e Corrigida", html:`
<ul><li><b>Como a Almeida Revista e Corrigida (ARC) traduz?</b></li></ul>
<p>A ARC traduz esse versículo de forma muito parecida e direta, e fala de “palavras bem inteligíveis”:</p>
${HPT("1 Coríntios 14:9 ARC")}` }
  ]},
  { title:"Fundamento histórico", sub:"De onde vem · Onde nasceu", color:"--b6", leaves:[
    { label:"De Lutero a Topeka: quase 400 anos", nuevo:true, html:`
<p>Agora, já sabendo como a Bíblia chegou até nós, vamos ver quando apareceu essa história das línguas que ninguém entende. E aqui vem algo muito importante: isso não nasceu com os apóstolos, nem com a Reforma. Isso apareceu quase 400 anos depois que Martinho Lutero traduziu a Bíblia.</p>
<p>Vejamos como as datas se encaixam:</p>
<ol>
<li><b>1522, a tradução de Martinho Lutero:</b> Lutero traduziu o Novo Testamento para o alemão, e depois vieram outras traduções importantes, como a King James em inglês, em 1611. O grande objetivo dele era que as pessoas comuns pudessem ler a Bíblia por si mesmas, no seu próprio idioma, sem depender do latim.</li>
<li><b>Do século XVI ao XIX, os séculos intermediários:</b> Durante todos esses anos, as grandes igrejas históricas (luteranos, reformados, batistas, presbiterianos, católicos) liam essas traduções e entendiam que o dom de línguas eram idiomas humanos reais, como aconteceu em Pentecostes. Houve alguns grupos isolados com experiências assim, como os seguidores de Edward Irving na Escócia e em Londres por volta de 1830, mas nenhuma das igrejas históricas ensinava o balbucio incompreensível como doutrina.</li>
<li><b>1901, Topeka, Kansas:</b> 379 anos depois da tradução de Lutero, na escola de Charles Parham, ensinou-se pela primeira vez que falar em línguas era a prova obrigatória de ter recebido o Espírito Santo. Dali passou em 1906 para a Rua Azusa e se espalhou pelo mundo inteiro.</li>
</ol>` },
    { label:"Topeka, Kansas 1901", html:`
<h3>1. Sobre a origem do fenômeno moderno (Topeka, Kansas 1901 e Rua Azusa 1906)</h3>
<p>Este é um fato histórico amplamente documentado, tanto por historiadores seculares quanto por historiadores do próprio movimento pentecostal:</p>
<ul><li><b>Charles Parham e Topeka (1901):</b> O evento fundador está registrado nos arquivos históricos do movimento pentecostal. Parham, fundador do Bethel Bible College em Topeka, Kansas, chegou à conclusão de que falar em línguas era a evidência bíblica do batismo no Espírito Santo depois de estudar o livro de Atos com seus alunos. Em 1º de janeiro de 1901, uma aluna chamada Agnes Ozman foi a primeira a ter essa experiência sob o ensino dele (eles diziam que ela falou em chinês).</li></ul>` },
    { label:"Rua Azusa 1906–1909", html:`
<ul><li><b>O Avivamento da Rua Azusa (1906–1909):</b> Dirigido pelo pastor afro-americano William J. Seymour em Los Angeles, Califórnia. Esse avivamento foi o trampolim global que espalhou a doutrina pentecostal moderna pelo mundo inteiro. As atas, os jornais da época (como o boletim The Apostolic Faith) e os historiadores modernos do cristianismo (como Vinson Synan e Allan Anderson) documentam como, a partir dali, se institucionalizou a ideia das "línguas incompreensíveis" como sinal espiritual.</li></ul>` },
    { label:"O que aconteceu na mente dessas pessoas?", nuevo:true, html:`
<p>Os séculos passaram, e no começo do século XX alguns intérpretes leram as traduções, sobretudo as que diziam "língua desconhecida" ou "língua estranha" (como a King James, que diz <i>unknown tongue</i>, e essa palavra <i>unknown</i> não está no grego). Tiraram esses textos do seu contexto do século I e concluíram que o dom era emitir sons espirituais místicos, e não falar idiomas estrangeiros reais.</p>
<p>E reparem numa coisa: o próprio Parham acreditava, no começo, que eram idiomas humanos reais, para mandar missionários a outros países sem precisar estudar o idioma. Quando esses missionários chegaram ao campo e ninguém os entendia, o movimento acabou reinterpretando aquilo como uma linguagem de oração que ninguém entende.</p>
<p>Pensem assim: desde Pentecostes, por volta do ano 30, até Topeka em 1901, passaram-se uns 1.870 anos. Quase 1.900 anos em que o Espírito Santo salvava e agia na igreja sem que ninguém ensinasse isso como doutrina. Algo que começou há uns 120 anos não pode virar lei; pode ser uma distorção que foi tomada como lei.</p>
<p><b>Por isso é tão importante voltar aos textos originais e ao contexto histórico, porque ali vemos o que os crentes dos séculos passados entendiam perfeitamente, antes que nascesse essa corrente moderna do século XX.</b></p>` },
    { label:"Oráculo de Delfos", html:`
<h3>2. Sobre as práticas pagãs antigas (Oráculo de Delfos e Corinto)</h3>
<ul><li><b>Fontes históricas greco-romanas:</b> Os historiadores das religiões e os exegetas do Novo Testamento (como Gordon Fee, no seu célebre comentário de 1 Coríntios, ou E. R. Dodds, em Os gregos e o irracional) documentam amplamente que o mundo helenístico estava saturado de práticas extáticas. No Oráculo de Delfos, segundo os escritores antigos, a Pítia (sacerdotisa de Apolo) entrava em transe e proferia sons e palavras que os sacerdotes interpretavam.</li></ul>` },
    { label:"O contexto de Corinto", html:`
<ul><li><b>O contexto de Corinto:</b> Os estudiosos da Bíblia concordam que os crentes de Corinto vinham desse fundo politeísta e, culturalmente, associavam o êxtase religioso e os sons estranhos a um sinal de contato divino superior, o que explica por que Paulo teve que corrigir com firmeza essa confusão em 1 Coríntios 14, contrastando-a com a ordem e a razão.</li></ul>` },
    { label:"“Intérprete” · léxicos gregos", html:`
<h3>3. Sobre o significado de "intérprete" (<span class="g">diermēneutēs / diermēneuō</span>) e "mistérios"</h3>
<ul><li><b>Léxicos do grego do Novo Testamento:</b> Esta definição exegética não é uma opinião, mas o resultado da análise filológica formal dos textos originais, reunida em obras de referência padrão no mundo inteiro:
<ul>
<li>O Léxico Grego-Inglês do Novo Testamento de Walter Bauer e Frederick Danker (conhecido como BDAG), onde diermēneuō é definido como traduzir de um idioma para outro ou explicar com clareza o significado de algo.</li>
<li>O Dicionário Teológico do Novo Testamento (TDNT), editado por Gerhard Kittel, que analisa como, no mundo clássico helenístico, essa família de palavras era usada principalmente para a tradução linguística literal entre diferentes povos e idiomas (por exemplo, passar do aramaico para o grego).</li>
</ul></li></ul>` }
  ]},
  { title:"Todos devem falar em línguas?", sub:"O batismo do Espírito Santo", color:"--b1", leaves:[
    { label:"Batizados por um mesmo Espírito", nuevo:true, html:`
<p>E agora vamos ao que hoje se ensina em muitas igrejas: que, se a pessoa foi batizada com o Espírito Santo, obrigatoriamente tem que falar em línguas, e se não fala, é porque não recebeu. Foi isso o que Parham ensinou em 1901. Mas vamos ver o que diz a Bíblia.</p>
${HPT("1 Coríntios 12:13 ARA")}
<p>Reparem: diz <b>todos</b>. Todos os crentes foram batizados pelo mesmo Espírito num só corpo, judeus ou gregos, escravos ou livres. Não diz “todos os que falaram em línguas”. O Espírito Santo entra na vida da pessoa quando ela aceita o chamado de Deus, e desde esse momento começa a fazer a sua obra.</p>
${HPT("1 Coríntios 12:30 ARA")}
<p>E aqui Paulo faz uma pergunta. No grego, a forma da pergunta (com a palavra <span class="g">mē</span>) espera que a resposta seja “não”. Ou seja: todos falam em línguas? Não. Todos têm dons de curar? Não. Cada um recebe o dom que o Espírito quer lhe dar (1 Coríntios 12:11).</p>
<p><b>Então, se todos foram batizados pelo Espírito (v13), mas nem todos falam em línguas (v30), as línguas não podem ser a prova obrigatória do batismo do Espírito Santo.</b></p>` },
    { label:"O fruto do Espírito", nuevo:true, html:`
<p>E então, qual é a prova de que uma pessoa está cheia do Espírito Santo? A Bíblia diz com clareza: o fruto.</p>
${HPT("Gálatas 5:22-23 ARA")}
<p>Ser batizado pelo Espírito Santo significa começar a dar frutos, frutos dignos de arrependimento (Mateus 3:8). Esses frutos vão crescendo dentro da pessoa, e são eles que mostram que de verdade essa pessoa foi cheia do Espírito Santo.</p>
<p><b>Reparem que nessa lista não aparece falar em línguas.</b></p>` },
    { label:"O eunuco: creu e não falou em línguas", nuevo:true, html:`
<p>E temos um exemplo bem claro em Atos 8: o eunuco etíope. Ele já vinha lendo as Escrituras, o livro de Isaías, e Filipe, guiado por um anjo do Senhor e pelo Espírito (Atos 8:26-29), chegou até ele e lhe anunciou o evangelho de Jesus.</p>
${HPT("Atos 8:35-39 ARA")}
<p>Reparem: o eunuco creu, foi batizado e seguiu o seu caminho cheio de júbilo. Júbilo, alegria, que é fruto do Espírito. Mas o texto não diz em nenhum lugar que ele falou em línguas. E o mesmo Espírito que agia na vida dele foi o que levou Filipe até aquele caminho e depois o arrebatou dali.</p>
<p>Um detalhe importante para o debate: o versículo 37 a ARA coloca entre colchetes, porque não aparece nos manuscritos gregos mais antigos. Por isso não baseamos nada nesse versículo; o ponto se sustenta com os versículos 35, 36, 38 e 39.</p>` },
    { label:"Espírito Santo e fogo", nuevo:true, html:`
<p>E agora vamos a algo que se ouve muito nas igrejas: o “batismo de fogo”. Muitos pegam a frase de João Batista, “Ele vos batizará com o Espírito Santo e com fogo”, e a usam para dizer que esse fogo é falar em línguas ou um fogo que se sente no culto. Mas vamos ler o texto completo, no seu contexto.</p>
${HPT("Mateus 3:7-12 ARA")}
<p>Reparem com quem João está falando: com os fariseus e saduceus (v7). Ele os chama de raça de víboras e pergunta quem os induziu a fugir da ira vindoura. E reparem no fogo: no versículo 10, a árvore que não produz bom fruto é lançada ao fogo; no versículo 11, “com o Espírito Santo e com fogo”; e no versículo 12, a palha é queimada em fogo inextinguível. As três vezes o fogo está no mesmo contexto: o juízo sobre os que não se arrependem.</p>
<p>Ou seja, João está falando de dois grupos: o trigo, que são os que se arrependem e recebem o Espírito Santo, e a palha, que são os que não dão fruto e vão para o fogo. É a mesma pá separando as duas coisas.</p>
${HPT("Atos 1:5 ARA")}
<p>E aqui está a prova mais forte: quando Jesus, já ressuscitado, repete essa promessa aos seus discípulos, diz “sereis batizados com o Espírito Santo”, e não menciona o fogo. Por quê? Porque os seus discípulos não iam receber o juízo; iam receber o Espírito.</p>
<p>Para sermos honestos no debate: alguns intérpretes veem esse fogo como uma purificação do crente. Mas o contexto mostra juízo, e em nenhum lugar o texto diz que esse fogo seja falar em línguas. As “línguas como de fogo” de Atos 2:3 eram uma aparência, como já vimos: <i>como</i> de fogo.</p>
<p>E essa ideia do “batismo de fogo” como uma experiência à parte também não vem dos apóstolos. Foi ensinada no fim do século XIX em alguns grupos de santidade, como a Associação de Santidade Batizada com Fogo, que Benjamin Irwin fundou em 1895, e dali passou para o movimento que começou em Topeka em 1901 e na Rua Azusa em 1906.</p>
<p><b>Por isso, usar “Espírito Santo e fogo” para ensinar que é preciso falar em línguas ou sentir um fogo no culto é tirar o texto do seu contexto.</b></p>` }
  ]}
];
