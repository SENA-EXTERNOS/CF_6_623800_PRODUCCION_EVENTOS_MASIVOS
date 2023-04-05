<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Señalización, control y registro de participantes

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-9
        p La señalización se utiliza con diferentes fines, por ejemplo, para dirigir a los asistentes a algún lugar específico o para promocionar y destacar una marca, producto o negocio como tal. Su utilización dependerá del tamaño del encuentro, los eventos pequeños no tendrán necesidad de una gran cantidad de señalización, por el contrario, los eventos masivos requerirán más.

        p Algunas de las áreas donde la señalización cobra gran relevancia visual es en entradas, salidas (incluidas las de emergencia), áreas de registro, baños, zonas de alimentos y bebidas, zonas para fumadores, numeración de salones, entre otros. 

      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Texto que describa la imagen') 
      
    .row.justify-content-around.align-items-center.time-line-rediect.mt-3
      .col-lg-12
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-3
          p(data-aos="fade-down") Debido a que existen muchos tipos de eventos, se deberán tener presentes varios requisitos a la hora de crear la señalización adecuada; dentro de estos se pueden encontrar: el tipo de espacio que se va a utilizar (al aire libre o en recinto cerrado), el tipo de asistentes al evento, el presupuesto disponible para la calidad y cantidad de la señalización, la duración del evento, entre otros. 

          p Asimismo, se debe definir la clase de anuncios que se van a disponer en el lugar del evento, algunos ejemplos son: 

    SlyderF(columnas="col-lg-6 col-xl-4").mt-5
      .tarjeta.color-acento-botones.p-4.height-tarjetas
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img2.svg' alt='AvatarTop')
        h3.text-center Cartel colgante
        p.text-center Son visibles y tienen un mayor alcance. 

      .tarjeta.color-acento-botones.p-4.height-tarjetas
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
        h3.text-center Gráficos de piso
        p.text-center Sirven para orientar a las personas hacia algún lugar puntual del evento o para nombrar espacios de este.

      .tarjeta.color-acento-botones.p-4.height-tarjetas
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
        h3.text-center Señales digitales
        p.text-center Son más costosas, pero tienen un mayor impacto visual en los asistentes. 

      .tarjeta.color-acento-botones.p-4.height-tarjetas
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
        h3.text-center Telones de fondo
        p.text-center Sirven para eventos musicales y también para que los asistentes se tomen fotos.

      .tarjeta.color-acento-botones.p-4.height-tarjetas
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
        h3.text-center Proyecciones
        p.text-center Se usan a manera de diapositivas que transmiten la información necesaria cuando no se cuenta con presupuesto para imprimir afiches, carteles colgantes o señales digitales. 

      .tarjeta.color-acento-botones.p-4.height-tarjetas
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img7.svg' alt='AvatarTop')
        h3.text-center Carteles de <i>stands</i>
        p.text-center Son portátiles, se arman rápido y fácil, por lo que se pueden trasladar de un lugar a otro sin mucha complicación.  

    
    .row.mt-5
      p #[b Aspectos para definir adecuadamente la señalización de un evento]
      p.mb-5 Según la Corporación Casa Lima (2022), algunos aspectos para tener en cuenta al momento de definir la señalización de un evento son:
    .row.justify-content-center.mb-4.bgr1-tema1
      .col-lg-12
        .crd.clr--gray.brd--rad.p-4
          PasosB.color-acento-contenido
            .row.justify-content-center(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p Debe leerse fácil y la información debe exponerse de manera breve. 
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img10.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p Se debe utilizar una fuente en negrilla, en colores oscuros sobre un fondo claro, para proporcionar un alto nivel de contraste. 
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img11.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p Usar la información de manera descendente. Es importante usar fondos antirreflejos para personas con problemas de visión. 
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img12.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p Recordar siempre que el evento debe ser incluyente, por lo tanto, es bueno tener espacios para personas que vayan en silla de ruedas, caminos adaptados, rampas, baños con accesibilidad, etc. 
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img13.png', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p La señalización direccional debe proporcionar información clara y breve, evitar los párrafos, utilizar instrucciones, íconos y flechas cortas y al punto.
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img14.png', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p Ser consistente en el orden en que aparece la información en las señales y utilizar la cantidad mínima de caracteres.
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/1.png', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p Utilizar símbolos reconocidos internacionalmente en los carteles.
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/2.png', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p Siempre verificar las capacidades de impresión en el sitio.
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img17.svg', alt='')

            .row.justify-content-center(titulo="").pt-3
              .col-lg-6.mb-4.mb-lg-0
                p Usar plantillas prediseñadas con fondos blancos para las necesidades de última hora como, por ejemplo, agregar logotipos de patrocinadores.
              .col-lg-4.col-xs-6
                figure
                  img(src='@/assets/curso/temas/tema1/img18.svg', alt='')
            

    .row.justify-content-center.align-items-center
      .col-lg-8
        .row.justify-content-center.align-items-center.mt-5.bgr1-intro
          .col-lg-9.p-4
            p Por otro lado, se debe enfatizar en que el <b>proceso de acreditación</b> es muy importante; es el <b>primer contacto</b> entre el asistente y el evento, por esa razón debe ser cuidado en todos sus detalles. Esa primera experiencia puede <b>fidelizar clientes</b> o dejar una imagen negativa en ellos. 

          .col-lg-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img19.svg', alt='Texto que describa la imagen').width-image1


    h5.mt-5 Proceso de acreditación

    .row.mt-5
      p Como se dijo anteriormente, la acreditación es el primer contacto entre el asistente y el evento. En esta, los coordinadores se deben encargar de generar un buen ambiente o estado, que procure comodidad, sencillez y facilidad en el proceso al asistente.  
      p.mb-5 Como todo proceso, se presentan momentos o etapas las cuales, si se planean bien, pueden generar que fluya con agilidad la acreditación. Algunos aspectos a tener en cuenta en este proceso son:
    .row
      .col-lg-12.order-2.order-lg-1
        TabsA.color-secundario.mb-5        
          .tarjeta.clr-paleYellow.p-4(titulo="Equipos de trabajo")
            h4 Equipos de trabajo
            p Se deben tener presentes los equipos tecnológicos que se van a usar al momento de la acreditación y la cantidad de personal necesario para atender al público visitante. Es necesario tener una escarapela o algún elemento portable que permita identificar a los asistentes, ya sea física o digital. A ellos se les debe informar toda novedad, alertar sobre controles de seguridad y brindarles orden, con el fin de evitar largas filas y alargar el tiempo de espera.
    
          .tarjeta.clr-paleYellow.p-4(titulo="Las acreditaciones")
            h4 Las acreditaciones
            p Deben ser claras, concisas, legibles, incluir la información necesaria para identificar a la persona y tener un tamaño adecuado. Se aconseja un tamaño A6, aproximadamente.

          .tarjeta.clr-paleYellow.p-4(titulo="Impresión <em>in situ</em>")
            h4 Impresión #[i in situ]
            p Esta opción empieza a recortar tiempos respecto a la tradicional impresión previa de todas las acreditaciones. Tan solo con identificar correctamente a los asistentes en la entrada, se puede imprimir el distintivo y entregar la acreditación en pocos minutos (Meetmaps, 2020).

          .tarjeta.clr-paleYellow.p-4(titulo="Pulsera inteligente")
            h4 Pulsera inteligente
            p Se usa mucho en festivales, ya que sirve para acceder al evento y como medio de pago en los puestos de comida. Una vez se paga el tiquete de ingreso, se debe acceder a una aplicación de celular y a través de pagos electrónicos como PayPal o tarjeta de crédito, se recarga la pulsera con dinero. Al llegar al evento, el boleto se canjea por la pulsera y la recarga previa de dinero se verá reflejada. Un chip en ella permite acceder a las compras de artesanías, recuerdos, refrescos y comida, con un simple movimiento de mano. También se pueden hacer recargas de dinero durante el festival.

          .tarjeta.clr-paleYellow.p-4(titulo="PDF con la entrada")
            h4 PDF con la entrada
            p Se usa para eventos cuya entrada se puede pagar a través de ciertas plataformas. Cuando el usuario hace la compra, recibe un PDF que puede imprimir y presentar para ingresar directamente al evento.

          .tarjeta.clr-paleYellow.p-4(titulo="Aplicación móvil")
            h4 Aplicación móvil
            p Muchos eventos tienen su propia aplicación, para que el participante pueda acceder, crea con su identificación un código QR que puede mostrar a la entrada del evento, de esa manera ahorra tiempo en las filas de acreditación.

    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.1 Señalización preventiva e informativa

    .row.mt-5
      p #[b Señalización preventiva]

    .row.justify-content-around.align-items-center.mt-3
      .col-lg-8
        .cajonAmarillo.bgr-tarjeta2-tema1.p-4.mt-3
          p(data-aos="fade-down") En un evento masivo es imprescindible mantener la seguridad de todas las personas involucradas, por ello, la señalización preventiva es de gran importancia, ya que brinda a los asistentes instrucciones sobre cómo actuar en caso de emergencia y cuáles son las prohibiciones en ciertas áreas. Los desastres de origen natural o antrópico se pueden presentar en cualquier momento, por lo tanto, proteger la vida e integridad de los asistentes es una obligación de todo organizador de eventos.  
        h5.mt-3 Tipos de señalización preventiva
        p.mt-3 Como se mencionó, la señalización preventiva es muy importante para el cuidado de las personas o las condiciones del lugar, a continuación, se muestra su clasificación según el tipo de mensaje que brinda:    

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img20.svg', alt='Texto que describa la imagen')   

    .row.justify-content-around.align-items-center.time-line-rediect.mt-3
      .col-lg-12
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img21.svg', alt='Texto que describa la imagen')   

    .row.justify-content-around.align-items-center.time-line-rediect.mt-3
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta1-tema1.p-4.mt-3
          p(data-aos="fade-down") Adicional a esa clasificación, también se debe tener presente que cada color de la señal brinda información específica. 

        p.mt-5 A continuación, se muestra cómo se clasifican las señales según los colores y las características que se deben tener presentes para que estas cumplan con su objetivo, además, la claridad que el mensaje debe tener para que sean fáciles de entender y de acatar en caso de una emergencia. 


    .row
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton-2.color-acento-botones.p-4.text-white
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img22.svg', alt='Texto que describa la imagen')

          h3.text-center Rojo
          p.text-small.text-center Alto, prohibición y equipo contra incendio

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton-1.color-acento-contenido.p-4.text-white
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img23.svg', alt='Texto que describa la imagen')

          h3.text-center Amarillo
          p.text-small.text-center Precaución y riesgo

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton-2.color-acento-botones.p-4.text-white
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img24.svg', alt='Texto que describa la imagen')

          h3.text-center Verde
          p.text-small.text-center Condición segura y primeros auxilios.

      .col-sm-6.col-lg-3
        .tarjeta--boton-1.color-acento-contenido.p-4.text-white
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/img25.svg', alt='Texto que describa la imagen')

          h3.text-center Azul
          p.text-small.text-center Obligación

    .row.mt-5
      p #[b Señalización informativa]

    .row.justify-content-center.align-items-center.bgr2-tema1
      .col-lg-2
      .col-lg-9.p-4
        p A diferencia de la señalización preventiva, la informativa tiene como fin dar a conocer algo a los asistentes del evento, se puede usar para identificar los salones o las áreas (registro, alimentación, zonas para fumadores, etc.). También es importante para señalizar recorridos, en caso de que el recinto sea un espacio muy grande (esto permite la correcta circulación del personal y de los asistentes) y para mostrarles a los participantes el cronograma o plan del evento, con el fin de que tengan en cuenta las actividades, sus horarios y los espacios para la alimentación.

    h5.mt-5 Clasificación de señalización informativa

    p.mb-5 De manera general, estas señales se pueden clasificar así (EDT Eventos, s. f.):

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/img27.svg', alt='Texto que describa la imagen')

      .tarjeta.color-secundario.p-3(x="17%" y="55%" numero="1")
        .h5.mb-2.text-center Ubicación
        p.text-center Aseguran al individuo la correcta y fácil localización de un punto concreto dentro de un espacio. Por ejemplo, la salida del edificio, los servicios, el comedor, etc.

      .tarjeta.color-secundario.p-3(x="33.5%" y="84%" numero="2")
        .h5.mb-2.text-center Orientativas
        p.text-center Permiten que el público se sitúe en el espacio y pueda encontrar las zonas a las que quiere ir.

      .tarjeta.color-secundario.p-3(x="50%" y="55%" numero="3")
        .h5.mb-2.text-center Dirección
        p.text-center Se trata, en esencia, de flechas que indican un camino para la correcta circulación. El mejor ejemplo son las flechas de los parqueaderos que indican dónde se encuentra la salida.

      .tarjeta.color-secundario.p-3(x="67%" y="84%" numero="4")
        .h5.mb-2.text-center Informativas
        p.text-center Orientadas a aportar información al público sobre el entorno.

      .tarjeta.color-secundario.p-3(x="84%" y="55%" numero="5")
        .h5.mb-2.text-center Decorativas 
        p.text-center Su función principal es adornar el espacio, aunque en ocasiones también presentan información de manera sutil.


    .row.justify-content-center.align-items-center
      .col-lg-7
        p.mt-3 Otros aspectos para tener en cuenta con respecto a esta señalización son:
        ul.lista-ul--color
          li 
            i.fas.fa-chevron-right
            p.mb-0 Cuando se incluyen uniformes o camisetas para el personal de logística del evento, hay mayor orden, ya que los asistentes pueden reconocerlos fácilmente.

          li 
            i.fas.fa-chevron-right
            p.mb-0 Los carteles colgantes pueden ser propicios dentro de eventos masivos como ferias comerciales y convenciones, porque son más visibles para los asistentes.

        p.p-4.bgr-grey.text-white La tecnología siempre atraerá mayor cantidad de miradas: pantallas electrónicas y digitales se convierten en buenas aliadas a la hora de mostrar información o comunicar datos relevantes. La señalización digital tiene, además, otros beneficios, a saber:

        ul.lista-ul--color
          li 
            i.fas.fa-chevron-right
            p.mb-0 Debido a lo atractiva que resulta, convoca a una mayor cantidad de clientes al estand o al evento como tal.

          li 
            i.fas.fa-chevron-right
            p.mb-0 Puede mostrar de manera interactiva, innovadora y moderna los servicios o productos de una compañía.

          li 
            i.fas.fa-chevron-right
            p.mb-0 Los visitantes pueden estar informados acerca de las actividades del evento.

          li 
            i.fas.fa-chevron-right
            p.mb-0 Los estands en las ferias comerciales pueden diferenciarse de manera positiva frente a la competencia. 

          li 
            i.fas.fa-chevron-right
            p.mb-0 Hay mayor interacción del cliente con el producto a través de pantallas táctiles que contengan información de interés, juegos, trivias o efectos de realidad aumentada.


      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img28.png', alt='Texto que describa la imagen')

    .row.mt-5
      p #[b Planimetrías de señalización del evento]

    .row.justify-content-center.align-items-center
      .col-lg-6
        .bloque-texto-f.p-2.bloque-texto-f-1-color.bloque-texto-f-1
          .bloque-texto-f__texto
            p.mb-0 La planimetría es un plano técnico que contiene la representación a escala de todos los espacios con la ubicación de los elementos de video, iluminación, audio y escenario. Se elabora antes del evento y tiene como objetivo optimizar los recursos tecnológicos y la preparación de la propuesta comercial para la empresa contratante. 
            br
            br
            |En la guía gráfica se evidencia la ubicación de la señalética del evento, que sirve para que los asistentes sepan como movilizarse, por donde evacuar el lugar y la ubicación de los equipos de seguridad; de igual forma, en el plano se deben presentar las zonas de riesgo eléctrico y aquellas a las que no se puede acceder.          

      .col-lg-6.p-4.bgr-purple
        p #[b Para su creación se deben tener en cuenta algunos aspectos, como:]

        ul.lista-ul--color
          li 
            i.fas.fa-chevron-right
            p.mb-0 La distribución de las mesas y sillas para los invitados.

          li 
            i.fas.fa-chevron-right
            p.mb-0 Los recursos audiovisuales que ocupan un importante espacio en el recinto del evento.

          li 
            i.fas.fa-chevron-right
            p.mb-0 Pistas de baile.

          li 
            i.fas.fa-chevron-right
            p.mb-0 Espacios para #[i buffet], zona de alimentación y bebida.

    .row.mt-5
      p Antes de elaborar este documento, es muy importante hacer una visita de inspección al lugar del evento, a fin de identificar áreas donde la señalización se ha utilizado con eficacia en el pasado, definir el material más apropiado según la localización y las condiciones climáticas, revisar los permisos y tiempos pertinentes para el uso de señalización exterior, como pancartas e identificar los puntos de montaje que deberán hacer personas capacitadas, etc.  

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img29.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A escala técnica, según la Corporación Casa Lima (2022), la documentación que deberá contener el plano de señalización será la siguiente:
          br
          br
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Plano de ubicación y localización.
          li 
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Plano de arquitectura y distribución de mobiliario.

          li 
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Cálculo de aforo o máxima carga de ocupantes estimada.
          li 
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Plan de Seguridad o Plan de Contingencia.

          li 
            .lista-ol--cuadro__vineta
              span 5
            p.mb-0 Cálculo de tiempo máximo de evacuación.
          li 
            .lista-ol--cuadro__vineta
              span 6
            p.mb-0 Plano de señalización de equipos de seguridad.

          li 
            .lista-ol--cuadro__vineta
              span 7
            p.mb-0 Plano de rutas de evacuación.
          li 
            .lista-ol--cuadro__vineta
              span 8
            p.mb-0 Planos eléctricos.

          li 
            .lista-ol--cuadro__vineta
              span 9
            p.mb-0 Certificados de prueba y operatividad de equipos de seguridad.
          
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-6
        .bloque-texto-f.recuadro2-color.p-4.recuadro2-width
          .bloque-texto-f__texto
            p.mb-0 Una vez diseñado el plan, también se recomienda incluir una sección donde se brinden las directrices para almacenar letreros reutilizables que puedan funcionar en escenarios futuros; que se puedan donar o reciclar. Asimismo, es importante evaluar la señalización una vez finalice el evento, con el fin de determinar su efectividad y minimizar costos en una segunda oportunidad. 

      .col-lg-6
        .bloque-texto-f.color-primario.p-4.color-f2.recuadro3-width
          .bloque-texto-f__texto
            p.mb-0 Dicho lo anterior, se puede entender que, contar con este documento y comprenderlo, ayuda a reducir las consecuencias que podrían presentarse a partir de una situación de riesgo. Cuando los empleados del evento conocen como actuar y hacia donde ir en una emergencia, se previenen accidentes y las posibilidades de salvar su vida y la de otros aumenta.

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.2 Control y registro de participantes

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-7
        .cajonAmarillo.bgr-tarjeta1-tema1.py-4.mt-3.px-5
          p.mb-0(data-aos="fade-down") El proceso de registro o acreditación de asistentes a un evento es fundamental para su correcta identificación y segmentación, bien sea por profesiones, edades, cargos o simplemente por perfiles más básicos, como ponente, organizador, proveedor, patrocinador, asistente, etc. Es un proceso que debe desarrollarse ágilmente, ya que no existe nada más molesto y agotador que tener que esperar en una larga fila para poder entrar a un evento; por lo tanto, cualquier estrategia que disminuya los tiempos en este paso, el descontento de los invitados y una mala imagen, será bienvenida.

      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img30.png', alt='Texto que describa la imagen').imagen-cajon

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-10
        p A continuación, se mencionan aspectos importantes que se deben tener en cuenta en el proceso de registro o acreditación de los asistentes a un evento. 

    .tarjeta.tarjeta--azul.p-4.bgr3-tema1
      SlyderA(tipo="b")
        .row.p-4
          .col-md-6.mb-4.mb-md-0
            p En algunos eventos los asistentes pueden llegar con sus acreditaciones ya impresas tras haberlas recibido por correo electrónico con anterioridad o como “preinscritos”. En este caso, hay sistemas, <i>softwares</i> o aplicaciones que facilitan el proceso y brindan mayor agilidad. Utilizan un formulario donde se han registrado los datos del asistente, al cual el personal encargado accede con solo ingresar el nombre de este; el sistema arroja sus datos para imprimir y entregar la escarapela. Ahora también se utilizan los códigos QR que pueden ser enviados físicamente o por internet a la persona que va a asistir, luego de que esta haya ingresado sus datos en un formulario web, de manera que, a la entrada los empleados del evento puedan escanear el código e identificarla más fácilmente. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img31.png', alt='Texto que describa la imagen')

        .row.p-4
          .col-md-6.mb-4.mb-md-0
            p Como se puede ver, el control del acceso es un mecanismo para verificar rápidamente que al evento solo entrarán personas acreditadas o registradas. Este control es una medida de seguridad que, además de facilitarle la labor al organizador durante el evento, le sirve para crear una base de datos que le ayude a gestionar diversas actividades, como enviar información, contactar posibles clientes, invitarlos a otros eventos, crear campañas promocionales, ofrecer bonos, descuentos o fidelizarlos para una recompra posterior. 
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img33.png', alt='Texto que describa la imagen')

        .row.p-4
          .col-md-6.mb-4.mb-md-0
            p Cuanta más organización tenga el proceso de registro en la entrada del evento, menos probabilidades hay de aglomeraciones y, por tanto, mayor será la satisfacción de los asistentes al sentirse bien atendidos desde el inicio. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img32.png', alt='Texto que describa la imagen')


        

    .row.mt-5
      p #[b Control de acceso]

    .row.justify-content-center.align-items-center.mt-3
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img34.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p.mt-3 La tecnología es la mejor aliada a la hora de controlar el acceso de los participantes a los eventos. Existen muchos mecanismos para esa labor que añaden valor al encuentro, entre los cuales están:

    .bg--img_03.mt-5
      .row.justify-content-center.mb-4
        .col-lg-5
          .cajonAmarillo.bgr-tarjeta1-tema1.p-4.mt-3
            p.text-center(data-aos="fade-down") #[b Mecanismos para control de acceso en un evento:]

          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img35.svg", alt="alt").img400.m-auto
        .col-lg-7.mt-3
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="NFC, tecnología inalámbrica de corto alcance")
              .col-12
                p.mb-0 La comunicación de campo cercano (#[i Near Field Communication —NFC—]) es un sistema que se encarga de identificar y validar a las personas cuando se registran. Para darles ingreso se utilizan dispositivos que leen el celular de la persona o su tarjeta con chip NFC.

            .row(titulo="Sistema de escaneo de códigos QR")
              .col-12
                p.mb-0 Son códigos que se obtienen de manera fácil y a bajo costo. El participante se debe registrar en la página web del organizador o del proveedor que gestiona los boletos de entrada al encuentro, y recibe de vuelta un correo electrónico con su código QR personal. Al ingresar al evento se muestra el código, bien sea impreso o en la pantalla del celular, para que sea escaneado por personal logístico o por un lector de QR. 

            .row(titulo="Lectores biométricos")
              .col-12
                p.mb-0 Son sensores o dispositivos tecnológicos que pueden hacer una lectura de la voz, el rostro o las huellas dactilares del asistente al evento. 

            .row(titulo="Kioscos de registro automático")
              .col-12
                p.mb-0 Permiten registros individuales sin ayuda del personal del evento. Los solicitantes de registro pueden usar sus códigos QR para registrarse y evitar hacer fila.


    .row.justify-content-center.align-items-center.mt-3
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema1/img36.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p.mt-3 Sea cual sea el tipo de evento y el tamaño de este, es importante contar con personal capacitado que pueda informar y dar respuesta oportuna a las preguntas o inquietudes de los asistentes, tanto dentro como fuera del recinto. El equipo de trabajo debe estar pendiente de los sistemas tecnológicos usados para el control de acceso; debe organizar la base de datos que se va formando con la participación de cada asistente, mantener orden en la entrada y estar altamente preparado para resolver cualquier problema de última hora, sobre todo en las puertas o en el control de ingreso (Lobbyfix, 2021).
        .row.justify-content-center.align-items-center
          .col-lg-9
            p Así como este control funciona para la entrada de asistentes al evento, también funciona para la salida, ya que permite evaluar el aforo y la permanencia del público dentro del recinto. El control del aforo es importante para saber la cantidad de personas que se encuentran en el espacio y evitar sobrecupo; de esta manera se pone como prioridad la seguridad de todas las personas. Con respecto al control de la permanencia, esta se hace para gestionar los flujos de entrada y salida y conocer los periodos de mayor afluencia durante el evento.
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/tema1/img37.svg', alt='Texto que describa la imagen')

    .row.mt-5
      p #[b Registro de participantes]
    p.mb-5 En el siguiente video se muestran otros elementos referentes al registro de los participantes a un evento.
    .row.justify-content-center.align-items-center.mb-5.mt-3          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6hEAFvWGuW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
