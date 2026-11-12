// Contenido del mapa: cada rama con sus puntos y el texto exacto de cada uno.
// H() arma un pasaje bíblico con sus versículos numerados.
const H = (ref, verses) => `<div class="passage"><div class="ref">${ref}</div>${verses.map(([n,t]) => `<p><b>${n}</b>${t}</p>`).join("")}</div>`;

const BRANCHES = [
  { title:"Etimología del término", sub:"El origen de la palabra", color:"--b2", leaves:[
    { label:"“extrañas” · glōssa", html:`
<p>Si Vamos a los textos originales, vemos que la palabra <b>"extrañas"</b> o <b>"desconocidas"</b></p>
<p>Referente a este término, no existe en las Escrituras; ellas fueron injertada posteriormente por algunos traductores.</p>
<p>(En 1 Corintios 14:21, donde la traducción dice "lenguas extrañas", el griego usa <i>heteroglōssois</i>, que significa "de otras lenguas", o sea, idiomas de otros pueblos; Pablo está citando a Isaías 28:11.)</p>
<p>El término griego empleado es <span class="g">glōssa</span>, lo que quiere decir literalmente <b>"lengua" o "idioma humano"</b>.</p>` },
    { label:"Una palabra, varios sentidos", nuevo:true, html:`
<p>Y aquí está la clave de todo: la etimología, o sea, el origen de la palabra. Cuando buscamos la etimología de un término, sabemos su verdadero significado, y no lo que le fueron añadiendo con el tiempo.</p>
<p>La misma palabra <span class="g">glōssa</span> se usa en la Biblia con más de un sentido:</p>
<ol>
<li><b>La lengua del cuerpo</b>, el órgano con el que hablamos (Santiago 3:5-6).</li>
<li><b>Un idioma humano</b>, como en Hechos 2:4 y 2:11.</li>
<li><b>Una forma o apariencia</b>, como las “lenguas como de fuego” de Hechos 2:3.</li>
</ol>
<p>Y fíjense en algo: en Hechos 2:4 dice que hablaron en otras lenguas (<span class="g">glōssa</span>), y en los versículos 6 y 8 la gente dice que los oía hablar en su propia lengua, y ahí el griego usa <span class="g">diálektos</span>, de donde viene nuestra palabra “dialecto”. O sea, Lucas usa las dos palabras para lo mismo: las lenguas de Pentecostés eran idiomas y dialectos reales.</p>
<p><b>Por eso, cuando la palabra se usa correctamente, en su contexto, el texto se entiende solo. El problema empieza cuando a una palabra que tiene dos o tres sentidos le escogemos el que no es.</b></p>` }
  ]},
  { title:"Paréntesis: cómo nos llegó el texto", sub:"La traducción", color:"--b3", leaves:[
    { label:"Hebreo y griego koiné", html:`
<p>Y para entender esto de forma mas fácil, vamos a abrir un paréntesis y volver un poco hacia atrás para saber cómo nos ha llegado el texto:</p>
<p>Las Escrituras originales no fueron redactadas en español;</p>
<ul><li>El <b>Antiguo Testamento</b> fue escrito en <b>hebreo</b></li></ul>
<p>y</p>
<ul><li>El <b>Nuevo Testamento</b> en <b>griego koiné</b>.</li></ul>` },
    { label:"Martín Lutero, siglo XVI", html:`
<p>Durante muchos siglos, el acceso a los textos estuvo extremadamente limitado y custodiado por estructuras de poder que impedían que la gente común pudiera leerlos directamente.</p>
<p>Esto comenzó a cambiar gracias a hombres como <b>Martín Lutero</b>, quien, en el <b>siglo XVI</b>, realizó la histórica traducción de la Biblia al alemán, impulsando nuevas traducciones al inglés (como la de William Tyndale, en 1526) y a otros idiomas modernos, permitiendo que hoy cada uno de nosotros pueda tener la Bíblia en sus manos.</p>` },
    { label:"Dos grandes vulnerabilidades", html:`
<p>Sin embargo, Cuando hablamos de traducción, debemos tener en cuenta una realidad inevitable:</p>
<p>cuando los traductores trasladan un texto de un idioma antiguo a nuestras lenguas actuales, se enfrentan a un desafío enorme que deja abierta la puerta a dos grandes vulnerabilidades:</p>
<ol>
<li>primero, que el traductor pueda cometer imprecisiones al interpretar ciertos términos, o sea, puede traducir mal el texto.</li>
<li>segundo, que el lector malinterprete lo que el texto original quería decir realmente solo porque le llego una traducción moderna.</li>
</ol>` },
    { label:"Verificar el idioma original", html:`
<p><b>Es exactamente por este motivo que, cuando queremos conocer la verdad sin ningún tipo de alteraciones o adulterios, no podemos quedarnos solo en la superficie de una traducción moderna, sino que es indispensable verificar el idioma original.</b></p>` }
  ]},
  { title:"Hechos capítulo 2", sub:"Pentecostés", color:"--b4", leaves:[
    { label:"Hechos 2:1-11", html:`
<p>Vamos examinar los dos libros del Nuevo Testamento donde este tema es tratado a fondo: comenzando por el relato de Hechos capítulo 2</p>
${H("Hechos 2:1-11 LBLA",[
["1","Cuando llegó el día de Pentecostés, estaban todos juntos en un mismo lugar."],
["2","De repente vino del cielo un ruido como el de una ráfaga de viento impetuoso que llenó toda la casa donde estaban sentados,"],
["3","y se les aparecieron lenguas como de fuego que, repartiéndose, se posaron sobre cada uno de ellos."],
["4","Todos fueron llenos del Espíritu Santo y comenzaron a hablar en otras lenguas, según el Espíritu les daba habilidad para expresarse."],
["5","Y había judíos que moraban en Jerusalén, hombres piadosos, procedentes de todas las naciones bajo el cielo."],
["6","Y al ocurrir este estruendo, la multitud se juntó; y estaban desconcertados porque cada uno los oía hablar en su propia lengua."],
["7","Y estaban asombrados y se maravillaban, diciendo: Mirad, ¿no son galileos todos estos que están hablando?"],
["8","¿Cómo es que cada uno de nosotros los oímos hablar en nuestra lengua en la que hemos nacido?"],
["9","Partos, medos y elamitas, habitantes de Mesopotamia, de Judea y de Capadocia, del Ponto y de Asia,"],
["10","de Frigia y de Panfilia, de Egipto y de las regiones de Libia alrededor de Cirene, viajeros de Roma, tanto judíos como prosélitos,"],
["11","cretenses y árabes, les oímos hablar en nuestros idiomas de las maravillas de Dios."]
])}` },
    { label:"vs1 “estaban todos juntos”", html:`
<ul>
<li><b>Primero, vs1 “estaban todos juntos”</b> según el contexto en el capítulo 1 del mismo libro está hablando de los 12 apostoles (incluyendo a Matías, quien acababa de ser incorporado).</li>
<li>Los demás discípulos varones y mujeres (el grupo de los aproximadamente 120 creyentes mencionado en Hechos 1:15).</li>
</ul>
<p>Eran los creyentes que estaban esperando la promesa del Espíritu Santo.</p>` },
    { label:"vs3 “lenguas como de fuego”", html:`
<ul><li><b>Segundo, vs3 “lenguas como de fuego”</b> la palabra griega usada allí también es <span class="g">glōssa</span>, pero en este contexto visual tiene el sentido de “apariencia o forma”. Es decir, llamas o destellos de fuego que tenían la forma similar a una flama parecida la silueta de una lengua.</li></ul>` },
    { label:"vs5 “procedentes de todas las naciones”", html:`
<ul><li><b>Tercero vs5 “había judíos que vivian en Jerusalén” “procedentes de todas las naciones”</b></li></ul>` },
    { label:"Ejemplo: los venezolanos", html:`
<p>Para entender exactamente qué pasó el día de Pentecostés y no hacernos ideas equivocadas, vamos a poner un ejemplo sencillo. Imaginemos a los venezolanos que por diversas razones salieron de su tierra y se fueron a vivir por todo el mundo —a Estados Unidos, a China, a Europa—. A ellos les nacieron hijos allá y a esos hijos que les nacieron ya no se les enseñó a hablar español de la misma manera; porque crecieron hablando inglés, chino o el idioma del país donde nacieron. Entonces aunque llevan la cultura y la sangre venezolana, su lengua materna ya no es el español, es otra.</p>
<p>Llevando este ejemplo al contexto bíblico de Hechos capítulo 2, la escena se divide en tres puntos clave:</p>` },
    { label:"1. Los locales", html:`
<h3>1. Los que estaban en Jerusalén (los locales):</h3>
<p>Eran como aquellos venezolanos que nunca salieron de su tierra y cuyo idioma único y natural es el español. En el contexto bíblico, eran los habitantes locales de Judea y Jerusalén. Los discípulos de Jesús eran pescadores y gente común de la región de Galilea; personas humildes a las que nadie les había  enseñado jamás un idioma extranjero.</p>` },
    { label:"2. La diáspora", html:`
<h3>2. Los que vinieron de afuera (la diáspora):</h3>
<p>Eran los judíos de la dispersión (la diáspora). Tenían la misma fe y la misma sangre, pero habían nacido y crecido en el extranjero (en Egipto, Roma, Mesopotamia, etc.). Por lo tanto, aunque eran culturalmente judíos, su idioma materno ya no era el arameo o el hebreo antiguo de Jerusalén, sino los dialectos e idiomas de los países donde habían crecido. Habían viajado a Jerusalén únicamente para celebrar la fiesta religiosa.</p>` },
    { label:"3. El gran milagro", html:`
<h3>3. El gran milagro:</h3>
<p>De repente, el Espíritu Santo desciende sobre los discípulos —aquellos galileos humildes que solo conocían su idioma local— y ocurre algo extraordinario: empiezan a hablar de forma fluida y perfecta en los idiomas de todos esos extranjeros que venían de afuera. Cuando los visitantes escuchan a gente de pueblo hablarles exactamente en el idioma en el que ellos crecieron en el extranjero, se quedan completamente asombrados. <b>El milagro no fue emitir balbuceos ininteligibles, sino comunicación perfecta y real para que todos pudieran entender el mensaje de Dios sin barreras de lenguaje.</b></p>` },
    { label:"La Torre de Babel", nuevo:true, html:`
<p>Y esto no se queda solo en Hechos 2. Para entenderlo completo tenemos que volver a Génesis 11, a la Torre de Babel.</p>
${H("Génesis 11:1-9 LBLA",[
["1","Toda la tierra hablaba la misma lengua y las mismas palabras."],
["2","Y aconteció que según iban hacia el oriente, hallaron una llanura en la tierra de Sinar, y se establecieron allí."],
["3","Y se dijeron unos a otros: Vamos, fabriquemos ladrillos y cozámos<i>los</i> bien. Y usaron ladrillo en lugar de piedra, y asfalto en lugar de mezcla."],
["4","Y dijeron: Vamos, edifiquémonos una ciudad y una torre cuya cúspide <i>llegue</i> hasta los cielos, y hagámonos un nombre <i>famoso</i>, para que no seamos dispersados sobre la faz de toda la tierra."],
["5","Y el <span class='sc'>Señor</span> descendió para ver la ciudad y la torre que habían edificado los hijos de los hombres."],
["6","Y dijo el <span class='sc'>Señor</span>: He aquí, son un solo pueblo y todos ellos tienen la misma lengua. Y esto es lo que han comenzado a hacer, y ahora nada de lo que se propongan hacer les será imposible."],
["7","Vamos, bajemos y allí confundamos su lengua, para que nadie entienda el lenguaje del otro."],
["8","Así los dispersó el <span class='sc'>Señor</span> desde allí sobre la faz de toda la tierra, y dejaron de edificar la ciudad."],
["9","Por eso fue llamada Babel, porque allí confundió el <span class='sc'>Señor</span> la lengua de toda la tierra; y de allí los dispersó el <span class='sc'>Señor</span> sobre la faz de toda la tierra."]
])}
<p>Allí toda la tierra hablaba un mismo idioma, y el pueblo se unió para construir una ciudad y una torre que llegara hasta el cielo, para hacerse un nombre y no ser dispersados por toda la tierra (Génesis 11:1-4). O sea, estaban unidos, sí, pero unidos para edificar algo que no edificaba a Dios, sino a ellos mismos. Y eso después que Dios les había mandado a llenar la tierra (Génesis 9:1).</p>
<p>Entonces Dios descendió, confundió su lengua para que no se entendieran unos a otros, y los dispersó por toda la tierra (Génesis 11:5-9). Fue por causa de su maldad, para que no siguieran creciendo en ella.</p>
<p>Las tradiciones judías antiguas cuentan cosas impresionantes de esa torre. Una de ellas, el <i>Pirkei de-Rabbi Eliezer</i>, dice que era tan alta que tardaban un año en subir, y que si se caía un ladrillo lloraban, pero si se caía un hombre no les importaba. Eso no está en la Biblia, es tradición, pero nos deja imaginar la locura de un pueblo unido en una misma lengua para edificar algo que no edifica al Señor.</p>` },
    { label:"Babel y Pentecostés", nuevo:true, html:`
<p>La Biblia está llena de conexiones entre el Antiguo y el Nuevo Testamento. Un estudio muy conocido, de Chris Harrison y Christoph Römhild, contó 63.779 referencias cruzadas, y esta es una de las más impactantes.</p>
<p>Ahora, fíjense en la comparación, porque es bien profunda: el mismo Dios que confundió las lenguas en Babel es el que, en Pentecostés, usa esas mismas lenguas para unir a su pueblo.</p>
<ul>
<li><b>En Babel</b>, los hombres querían hacerse un nombre para ellos. <b>En Pentecostés</b>, hablaban de las maravillas de Dios (Hechos 2:11).</li>
<li><b>En Babel</b>, las lenguas separaron a los pueblos y los dispersaron. <b>En Pentecostés</b>, gente de todas las naciones se juntó en un mismo lugar y entendió un mismo mensaje (Hechos 2:5-6).</li>
<li><b>En Babel</b>, nadie entendía a nadie. <b>En Pentecostés</b>, cada uno entendía en su propio idioma.</li>
<li><b>En Babel</b>, las lenguas fueron para que dejaran de edificar. <b>En Pentecostés</b>, fueron para edificar: era la fundación de la iglesia, que comenzó a partir de los apóstoles.</li>
</ul>
<p>Y aquí viene algo del griego que es bien fuerte. En la traducción griega del Antiguo Testamento, la Septuaginta, cuando Dios dice en Génesis 11:7 “confundamos su lengua”, la palabra es <span class="g">synchéō</span>, y a Babel la llama <span class="g">Sýnchysis</span>, que quiere decir “Confusión” (Génesis 11:9). Y en Hechos 2:6, cuando dice que la multitud estaba desconcertada, Lucas usa ese mismo verbo: <span class="g">synechýthē</span>. La misma palabra de Babel, pero ahora Dios la usa para bien.</p>
<p>Pero ojo con un detalle: en Pentecostés Dios no borró los idiomas ni los volvió una sola lengua. Cada uno siguió oyendo su propio idioma, pero todos recibieron el mismo mensaje. Las lenguas de Babel fueron para separar; las de Pentecostés, para unir a la iglesia en adorar a Cristo. Desde los primeros siglos, maestros de la iglesia como Gregorio Nacianceno y Agustín de Hipona ya enseñaban que Pentecostés era lo contrario de Babel.</p>
<p><b>Y esto prueba una vez más que las lenguas de Pentecostés eran idiomas humanos reales, los mismos idiomas que nacieron en Babel. Lo que Dios dividió en Babel por causa del pecado, lo usa en Pentecostés para que todas las naciones oigan el evangelio, como ya lo había anunciado el profeta en Sofonías 3:9.</b></p>
${H("Sofonías 3:9 LBLA",[
["9","En ese tiempo daré a los pueblos labios puros, para que todos ellos invoquen el nombre del <span class='sc'>Señor</span>, para que le sirvan de común acuerdo."]
])}` }
  ]},
  { title:"1 Corintios capítulo 14", sub:"Las directrices de Pablo", color:"--b5", leaves:[
    { label:"1 Corintios 14:1-25", html:`
<p>Ahora vamos a analizar las directrices del apóstol Pablo en 1 Corintios 14 —un pasaje frecuentemente invocado—,</p>
${H("1 Corintios 14:1-25 LBLA",[
["1","Procurad alcanzar el amor; pero también desead ardientemente los dones espirituales, sobre todo que profeticéis."],
["2","Porque el que habla en lenguas no habla a los hombres, sino a Dios, pues nadie lo entiende, sino que en su espíritu habla misterios."],
["3","Pero el que profetiza habla a los hombres para edificación, exhortación y consolación."],
["4","El que habla en lenguas, a sí mismo se edifica, pero el que profetiza edifica a la iglesia."],
["5","Yo quisiera que todos hablarais en lenguas, pero aún más, que profetizarais; pues el que profetiza es superior al que habla en lenguas, a menos que las interprete para que la iglesia reciba edificación."],
["6","Ahora bien, hermanos, si yo voy a vosotros hablando en lenguas, ¿de qué provecho os seré a menos de que os hable por medio de revelación, o de conocimiento, o de profecía, o de enseñanza?"],
["7","Aun las cosas inanimadas, como la flauta o el arpa, al producir un sonido, si no dan con distinción los sonidos, ¿cómo se sabrá lo que se toca en la flauta o en el arpa?"],
["8","Porque si la trompeta da un sonido incierto, ¿quién se preparará para la batalla?"],
["9","Así también vosotros, a menos que con la boca pronunciéis palabras inteligibles, ¿cómo se sabrá lo que decís? Pues hablaréis al aire."],
["10","Hay, quizás, muchas variedades de idiomas en el mundo, y ninguno carece de significado."],
["11","Pues si yo no sé el significado de las palabras, seré para el que habla un extranjero, y el que habla será un extranjero para mí."],
["12","Así también vosotros, puesto que anheláis dones espirituales, procurad abundar en ellos para la edificación de la iglesia."],
["13","Por tanto, el que habla en lenguas, pida en oración para que pueda interpretar."],
["14","Porque si yo oro en lenguas, mi espíritu ora, pero mi entendimiento queda sin fruto."],
["15","Entonces ¿qué? Oraré con el espíritu, pero también oraré con el entendimiento; cantaré con el espíritu, pero también cantaré con el entendimiento."],
["16","De otra manera, si bendices solo en el espíritu, ¿cómo dirá el Amén a tu acción de gracias el que ocupa el lugar del que no tiene ese don, puesto que no sabe lo que dices?"],
["17","Porque tú das gracias bien, pero el otro no es edificado."],
["18","Doy gracias a Dios porque hablo en lenguas más que todos vosotros;"],
["19","sin embargo, en la iglesia prefiero hablar cinco palabras con mi entendimiento, para instruir también a otros, antes que diez mil palabras en lenguas."],
["20","Hermanos, no seáis niños en la manera de pensar; más bien, sed niños en la malicia, pero en la manera de pensar sed maduros."],
["21","En la ley está escrito: POR HOMBRES DE LENGUAS EXTRAÑAS Y POR BOCA DE EXTRAÑOS HABLARÉ A ESTE PUEBLO, Y NI AUN ASÍ ME ESCUCHARÁN, dice el Señor."],
["22","Así que las lenguas son una señal, no para los que creen, sino para los incrédulos; pero la profecía es una señal, no para los incrédulos, sino para los creyentes."],
["23","Por tanto, si toda la iglesia se reúne y todos hablan en lenguas, y entran algunos sin ese don o son incrédulos, ¿no dirán que estáis locos?"],
["24","Pero si todos profetizan, y entra un incrédulo, o uno sin ese don, por todos será convencido, por todos será juzgado;"],
["25","los secretos de su corazón quedarán al descubierto, y él se postrará y adorará a Dios, declarando que en verdad Dios está entre vosotros.”"]
])}` },
    { label:"v2 “misterios” · Efesios 3:3-6", html:`
<ul><li><b>Primero v2, “en su espíritu habla misterios”</b> la palabra “misterios” Bíblicamente es una verdad divina que antes estaba oculta en los planes de Dios, pero que ahora ha sido revelada.</li></ul>
<p>Por ejemplo, el apóstol Pablo llama misterio a la unión de Judíos y Gentiles en un mismo cuerpo en (Efesios 3:3-6).</p>
${H("Efesios 3:3-6 LBLA",[
["3","que por revelación me fue dado a conocer el misterio, tal como antes os escribí brevemente."],
["4","En vista de lo cual, leyendo, podréis comprender mi discernimiento del misterio de Cristo,"],
["5","que en otras generaciones no se dio a conocer a los hijos de los hombres, como ahora ha sido revelado a sus santos apóstoles y profetas por el Espíritu;"],
["6","a saber, que los gentiles son coherederos y miembros del mismo cuerpo, participando igualmente de la promesa en Cristo Jesús mediante el evangelio,"]
])}` },
    { label:"Imaginemos la reunión de la iglesia", html:`
<p>Ahora vamos a imaginarnos que estamos en una reunión de la iglesia y se levanta alguien a orar o hablar y en lugar de hablar en el español para que la gente le diga "amén" y entienda el mensaje, empieza a hablar con una emoción super altísima en un idioma que nadie entiende.</p>
<p>Nadie procesa ni entiende nada y ni siquiera la misma persona que está hablando entiende lo que está diciendo con su propia mente; simplemente siente una “corriente de emoción espiritual muy fuerte y deja salir las palabras”.</p>
<p>Ahí es donde entra la frase de Pablo cuando dice: <b>"pues nadie lo entiende, sino que en su espíritu habla misterios" (1 Corintios 14:2).</b></p>
<p>No quiere decir que la persona se convirtió en un profeta de códigos divinos ocultos, Significa que para el ser humano, el mensaje se queda en un misterio impenetrable. Es un secreto entre esa persona y Dios, porque como nadie tiene la capacidad de entender ese idioma extranjero, para la congregación es un acertijo porque no lo entiende.</p>` },
    { label:"Los corintios y la respuesta de Pablo", html:`
<p>En la mente de los corintios, esto era como un nivel espiritual elevado: "Miren qué conectado estoy con Dios, miren qué emocionado estoy que hablo cosas que nadie entiende".</p>
<p>Y Pablo les dice: «Espérate un momento. Si nadie entiende nada, ¿de qué sirve? Para Dios no hay secretos, Él lo sabe todo; pero si estás en una reunión pública y lo que dices se queda en un "misterio" que nadie tradujo, para los demás es como si le hablaras a la pared».</p>
<p><b>Por eso Pablo insiste en que la fe cristiana no es sobre crear un club de misterios que nadie explica, sino que todo lo que se hable en la iglesia sea claro, transparente y comprensible para que todos aprendan y crezcan juntos.</b></p>` },
    { label:"v9 “palabras inteligibles”", html:`
<ul><li><b>Segundo v9</b> Así también vosotros, a menos que con la boca pronunciéis palabras inteligibles, ¿cómo se sabrá lo que decís? Pues hablaréis al aire.</li></ul>
<p><b>Inteligible</b> es lo opuesto a <b>ininteligible</b>, algo que es comprensible, claro, que se entiende o de lo contrario no se podría traducir.</p>
<p>En el Griego original la palabra usada es <span class="g">eúsēmon</span> (de <i>eu</i>, "bien", y <i>sēma</i>, "señal"), o sea, una palabra con un significado claro<br>(en el texto se usa la idea de dar un mensaje "fácil de entender" o "bien articulado").</p>` },
    { label:"Reina-Valera 1960", html:`
<ul><li><b>¿Cómo lo traduce la Reina-Valera (RV 1960)?</b></li></ul>
<p>La Reina-Valera traduce este versículo de una forma muy similar y directa:</p>
<div class="passage"><div class="ref">RV 1960</div><p>«Así también vosotros, si por la lengua no diereis palabra bien comprensible, ¿cómo se entenderá lo que decís? Porque hablaréis al aire.»</p></div>` }
  ]},
  { title:"Fundamento histórico", sub:"De dónde proviene · Donde nació", color:"--b6", leaves:[
    { label:"De Lutero a Topeka: casi 400 años", nuevo:true, html:`
<p>Ahora, ya sabiendo cómo nos llegó la Biblia, vamos a ver cuándo apareció esto de las lenguas que nadie entiende. Y aquí viene algo muy importante: esto no nació con los apóstoles, ni con la Reforma. Esto apareció casi 400 años después que Martín Lutero tradujo la Biblia.</p>
<p>Veamos cómo encajan las fechas:</p>
<ol>
<li><b>1522, la traducción de Martín Lutero:</b> Lutero tradujo el Nuevo Testamento al alemán, y después vinieron otras traducciones importantes, como la King James en inglés, en 1611. Su gran objetivo era que la gente común pudiera leer la Biblia por sí misma, en su propio idioma, sin depender del latín.</li>
<li><b>Del siglo XVI al XIX, los siglos intermedios:</b> Durante todos esos años, las grandes iglesias históricas (luteranos, reformados, bautistas, presbiterianos, católicos) leían esas traducciones y entendían que el don de lenguas eran idiomas humanos reales, como pasó en Pentecostés. Hubo algunos grupos aislados con experiencias así, como los seguidores de Edward Irving en Escocia y Londres hacia 1830, pero ninguna de las iglesias históricas enseñaba el balbuceo ininteligible como doctrina.</li>
<li><b>1901, Topeka, Kansas:</b> 379 años después de la traducción de Lutero, en la escuela de Charles Parham, se enseñó por primera vez que hablar en lenguas era la prueba obligatoria de haber recibido el Espíritu Santo. De ahí saltó en 1906 a la Calle Azusa y se regó por todo el mundo.</li>
</ol>` },
    { label:"Topeka, Kansas 1901", html:`
<h3>1. Sobre el origen del fenómeno moderno (Topeka, Kansas 1901 y Calle Azusa 1906)</h3>
<p>Este es un hecho histórico ampliamente documentado tanto por historiadores seculares como por historiadores del movimiento pentecostal:</p>
<ul><li><b>Charles Parham y Topeka (1901):</b> El evento fundacional está registrado en los archivos históricos del movimiento pentecostal. Parham, fundador de la Bethel Bible College en Topeka, Kansas, llegó a la conclusión de que hablar en lenguas era la evidencia bíblica del bautismo en el Espíritu Santo tras estudiar el libro de Hechos con sus estudiantes. El 1 de enero de 1901, una estudiante llamada Agnes Ozman fue la primera en experimentar este hablar bajo su enseñanza (ellos decían que ella habló en chino).</li></ul>` },
    { label:"Calle Azusa 1906–1909", html:`
<ul><li><b>El Avivamiento de la Calle Azusa (1906–1909):</b> Dirigido por el pastor afroamericano William J. Seymour en Los Ángeles, California. Este avivamiento fue el trampolín global que propagó la doctrina pentecostal moderna por todo el mundo. Las actas, periódicos de la época (como el boletín The Apostolic Faith) y los historiadores modernos del cristianismo (como Vinson Synan y Allan Anderson) documentan cómo desde este lugar se institucionalizó el concepto de las "lenguas ininteligibles" como señal espiritual.</li></ul>` },
    { label:"¿Qué pasó en la mente de esas personas?", nuevo:true, html:`
<p>Pasaron los siglos, y a principios del siglo XX algunos intérpretes leyeron las traducciones, sobre todo las que decían "lengua desconocida" (como la King James, que dice <i>unknown tongue</i>, y esa palabra <i>unknown</i> no está en el griego). Sacaron esos textos de su contexto del siglo I y concluyeron que el don era emitir sonidos espirituales místicos, y no hablar idiomas extranjeros reales.</p>
<p>Y fíjense en algo: el mismo Parham creía al comienzo que eran idiomas humanos reales, para mandar misioneros a otros países sin tener que estudiar el idioma. Cuando esos misioneros llegaron al campo y nadie les entendía, el movimiento lo terminó reinterpretando como un lenguaje de oración que nadie entiende.</p>
<p>Piénsenlo así: desde Pentecostés, hacia el año 30, hasta Topeka en 1901, pasaron unos 1.870 años. Casi 1.900 años en que el Espíritu Santo salvaba y obraba en la iglesia sin que nadie enseñara esto como doctrina. Algo que comenzó hace unos 120 años no se puede volver una ley; puede ser una distorsión que se tomó como ley.</p>
<p><b>Por eso es tan importante volver a los textos originales y al contexto histórico, porque ahí vemos lo que los creyentes de los siglos pasados entendían perfectamente antes de que naciera esta corriente moderna del siglo XX.</b></p>` },
    { label:"Oráculo de Delfos", html:`
<h3>2. Sobre las prácticas paganas antiguas (Oráculos de Delfos y Corinto)</h3>
<ul><li><b>Fuentes históricas grecorromanas:</b> Los historiadores de las religiones y los exégetas del Nuevo Testamento (como Gordon Fee en su célebre comentario sobre 1 Corintios o E.R. Dodds en Los griegos y lo irracional) documentan extensamente que el mundo helenístico estaba saturado de prácticas extáticas. En el Oráculo de Delfos, según los escritores antiguos, la Pitia (sacerdotisa de Apolo) entraba en trances y profería sonidos y palabras que los sacerdotes interpretaban.</li></ul>` },
    { label:"El contexto corintio", html:`
<ul><li><b>El contexto corintio:</b> Los eruditos bíblicos coinciden en que los creyentes de Corinto venían de este transfondo politeísta y culturalmente asociaban el éxtasis religioso y los sonidos extraños con una señal de contacto divino superior, lo cual explica por qué Pablo tuvo que corregir severamente esa confusión en 1 Corintios 14 contrastándola con el orden y la razón.</li></ul>` },
    { label:"“Intérprete” · léxicos griegos", html:`
<h3>3. Sobre el significado de "intérprete" (<span class="g">diermēneutēs / diermēneuō</span>) y "misterios"</h3>
<ul><li><b>Léxicos del griego del Nuevo Testamento:</b> Esta definición exegética no es una opinión, sino el resultado del análisis filológico formal de los textos originales recopilados en obras de referencia estándar a nivel mundial:
<ul>
<li>El Léxico Griego-Inglés del Nuevo Testamento de Walter Bauer y Frederick Danker (conocido como BDAG), donde se define diermēneuō como traducir de un idioma a otro o explicar con claridad el significado de algo.</li>
<li>El Diccionario Teológico del Nuevo Testamento (TDNT), editado por Gerhard Kittel, que analiza cómo en el mundo clásico helenístico esta familia de palabras se usaba principalmente para la traducción lingüística literal entre diferentes pueblos e idiomas (por ejemplo, pasar del arameo al griego).</li>
</ul></li></ul>` }
  ]},
  { title:"¿Todos deben hablar en lenguas?", sub:"El bautismo del Espíritu Santo", color:"--b1", leaves:[
    { label:"Bautizados por un mismo Espíritu", nuevo:true, html:`
<p>Y ahora vamos a lo que hoy se enseña en muchas iglesias: que si la persona fue bautizada con el Espíritu Santo, obligatoriamente tiene que hablar en lenguas, y si no habla, es porque no lo recibió. Eso fue lo que enseñó Parham en 1901. Pero vamos a ver qué dice la Biblia.</p>
${H("1 Corintios 12:13 LBLA",[
["13","Pues por un mismo Espíritu todos fuimos bautizados en un solo cuerpo, ya judíos o griegos, ya esclavos o libres, y a todos se nos dio a beber del mismo Espíritu."]
])}
<p>Fíjense: dice <b>todos</b>. Todos los creyentes fueron bautizados por el mismo Espíritu en un solo cuerpo, judíos o griegos, esclavos o libres. No dice “todos los que hablaron en lenguas”. El Espíritu Santo entra en la vida de la persona cuando ella acepta el llamado de Dios, y desde ese momento comienza a hacer su obra.</p>
${H("1 Corintios 12:30 LBLA",[
["30","¿Acaso tienen todos dones de sanidad? ¿Acaso hablan todos en lenguas? ¿Acaso interpretan todos?"]
])}
<p>Y aquí Pablo hace una pregunta. En el griego, la forma de la pregunta (con la palabra <span class="g">mē</span>) espera que la respuesta sea “no”. O sea: ¿hablan todos en lenguas? No. ¿Todos tienen dones de sanidad? No. Cada uno recibe el don que el Espíritu quiere darle (1 Corintios 12:11).</p>
<p><b>Entonces, si todos fueron bautizados por el Espíritu (v13), pero no todos hablan en lenguas (v30), las lenguas no pueden ser la prueba obligatoria del bautismo del Espíritu Santo.</b></p>` },
    { label:"El fruto del Espíritu", nuevo:true, html:`
<p>¿Y entonces cuál es la prueba de que una persona está llena del Espíritu Santo? La Biblia lo dice claro: el fruto.</p>
${H("Gálatas 5:22-23 LBLA",[
["22","Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fidelidad,"],
["23","mansedumbre, dominio propio; contra tales cosas no hay ley."]
])}
<p>Ser bautizado por el Espíritu Santo significa comenzar a dar frutos, frutos dignos de arrepentimiento (Mateo 3:8). Esos frutos van creciendo dentro de la persona, y son ellos los que muestran que realmente esa persona ha sido llena del Espíritu Santo.</p>
<p><b>Fíjense que en esa lista no aparece hablar en lenguas.</b></p>` },
    { label:"El eunuco: creyó y no habló en lenguas", nuevo:true, html:`
<p>Y tenemos un ejemplo bien claro en Hechos 8: el eunuco etíope. Él ya venía leyendo las Escrituras, el libro de Isaías, y Felipe, guiado por un ángel del Señor y por el Espíritu (Hechos 8:26-29), llegó hasta él y le anunció el evangelio de Jesús.</p>
${H("Hechos 8:35-39 LBLA",[
["35","Entonces Felipe abrió su boca, y comenzando desde esta Escritura, le anunció el evangelio de Jesús."],
["36","Yendo por el camino, llegaron a un lugar donde había agua; y el eunuco dijo*: Mira, agua. ¿Qué impide que yo sea bautizado?"],
["37","[Y Felipe dijo: Si crees con todo tu corazón, puedes. Respondió él y dijo: Creo que Jesucristo es el Hijo de Dios.]"],
["38","Y mandó parar el carruaje; ambos descendieron al agua, Felipe y el eunuco, y lo bautizó."],
["39","Al salir ellos del agua, el Espíritu del Señor arrebató a Felipe; y no lo vio más el eunuco, que continuó su camino gozoso."]
])}
<p>Fíjense: el eunuco creyó, fue bautizado y continuó su camino gozoso. Gozo, que es fruto del Espíritu. Pero el texto no dice en ninguna parte que habló en lenguas. Y el mismo Espíritu que obraba en su vida fue el que llevó a Felipe hasta ese camino y después lo arrebató de allí.</p>
<p>Un detalle importante para el debate: el versículo 37 la LBLA lo pone entre corchetes, porque no aparece en los manuscritos griegos más antiguos. Por eso no basamos nada en ese versículo; el punto se sostiene con los versículos 35, 36, 38 y 39.</p>` }
  ]}
];
