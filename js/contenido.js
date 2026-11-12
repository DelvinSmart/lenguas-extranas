// Contenido del mapa: cada rama con sus puntos y el texto exacto de cada uno.
// H() arma un pasaje bíblico con sus versículos numerados.
const H = (ref, verses) => `<div class="passage"><div class="ref">${ref}</div>${verses.map(([n,t]) => `<p><b>${n}</b>${t}</p>`).join("")}</div>`;

const BRANCHES = [
  { title:"El término original", sub:"La palabra", color:"--b2", leaves:[
    { label:"“extrañas” · glōssa", html:`
<p>Si Vamos a los textos originales, vemos que la palabra <b>"extrañas"</b> o <b>"desconocidas"</b></p>
<p>Referente a este término, no existe en las Escrituras; ellas fueron injertada posteriormente por algunos traductores.</p>
<p>(En 1 Corintios 14:21, donde la traducción dice "lenguas extrañas", el griego usa <i>heteroglōssois</i>, que significa "de otras lenguas", o sea, idiomas de otros pueblos; Pablo está citando a Isaías 28:11.)</p>
<p>El término griego empleado es <span class="g">glōssa</span>, lo que quiere decir literalmente <b>"lengua" o "idioma humano"</b>.</p>` }
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
<p>De repente, el Espíritu Santo desciende sobre los discípulos —aquellos galileos humildes que solo conocían su idioma local— y ocurre algo extraordinario: empiezan a hablar de forma fluida y perfecta en los idiomas de todos esos extranjeros que venían de afuera. Cuando los visitantes escuchan a gente de pueblo hablarles exactamente en el idioma en el que ellos crecieron en el extranjero, se quedan completamente asombrados. <b>El milagro no fue emitir balbuceos ininteligibles, sino comunicación perfecta y real para que todos pudieran entender el mensaje de Dios sin barreras de lenguaje.</b></p>` }
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
  ]}
];
