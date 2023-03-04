export default {
  global: {
    componenteFormativo:
      'Señalización, registro de participantes y <em>merchandising</em> del evento',
    descripcionCurso:
      'La señalización, el registro de participantes y el <em>merchandising</em> del evento siempre serán aspectos fundamentales para guiar al asistente, orientarlo, alentarlo, darle a conocer información importante, fidelizarlo y hacer que todo fluya de manera exitosa en la realización del evento, por lo que es importante conocer y manejar estos conceptos de manera apropiada.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Señalización, control y registro de participantes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Señalización preventiva e informativa',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Control y registro de participantes',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Merchandising</em> en los eventos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Organización de eventos',
      referencia:
        'Galmés, M. (2010). <em>La organización de eventos como herramienta de comunicación de marketing</em>. [Tesis doctoral]. Modelo integrado y experiencial. Universidad de Málaga',
      tipo: 'Tesis doctoral',
      link:
        'https://dspace-libros.metabiblioteca.com.co/jspui/bitstream/001/356/5/978-84-9747-609-6.pdf',
    },
    {
      tema: 'Organización de eventos',
      referencia:
        'Rocha da Cruz, F. (2021, enero-marzo). La organización de eventos públicos y <em>disneylización</em> de la sociedad: estudio de casos en el centro de la ciudad de Oporto. <em>Aposta, Revista de Ciencias Sociales</em> (88), pp. 30-48. ',
      tipo: 'Artículo',
      link: 'http://apostadigital.com/revistav3/hemeroteca/fmrcruz3.pdf',
    },
    {
      tema: 'Señalética',
      referencia:
        'Bula, D. (2017). <em>Propuesta práctica de diseño de señalética para la facultad de la Facultad de Bellas Artes</em>. Universidad Politécnica de Valencia.',
      tipo: 'Artículo',
      link: 'https://bit.ly/3g2m4ex',
    },
    {
      tema: '<em>Merchandising</em>',
      referencia:
        'Vallejo, J. (2018, enero). Iniciativas de mercadeo ambiental y digital <em>signage</em> en las ferias comerciales como aporte al desarrollo sostenible. Pensamiento & Gestión (44).',
      tipo: 'Artículo',
      link: 'https://bit.ly/3GePuRb',
    },
    {
      tema: '<em>Merchandising</em>',
      referencia:
        'Valverde, P. (2017). <em>Proyecto de atracción y merchandising sobre Nikola Tesla para un parque temático</em>. [Tesis de grado].',
      tipo: 'Tesis de grado',
      link: 'http://hdl.handle.net/10251/94003',
    },
  ],
  glosario: [
    {
      termino: 'Biometría',
      significado:
        'Toma de medidas físicas, de forma estandarizada, de seres vivos o procesos biológicos. La biometría también es el reconocimiento de las personas mediante sus rasgos físicos o conductuales, para lo que se utiliza la tecnología. La más conocida es el reconocimiento facial, de huellas dactilares y de retina. ',
    },
    {
      termino: 'Cliente',
      significado:
        'Persona natural o jurídica que compra un producto o usa los servicios profesionales de otra.',
    },
    {
      termino: 'Código QR',
      significado:
        'Son la evolución de los códigos de barra. Sirven para almacenar información que puede ser legible en ciertos dispositivos tecnológicos.',
    },
    {
      termino: '<em>Merchandising</em>',
      significado:
        'Conjunto de estrategias que apuntan a la promoción y venta de productos tanto dentro como fuera del punto de venta (Hotmart, 2022).',
    },
    {
      termino: 'Plano del evento',
      significado:
        'Documento que muestra el espacio del salón designado para una exposición, evento o espectáculo. También muestra en detalle el espacio que puede ocupar cada estand, el área de registro, las entradas y salidas, etc.',
    },
    {
      termino: 'Registro de asistencia',
      significado:
        'Proceso por el cual los asistentes al evento se acreditan y son admitidos para su ingreso.',
    },
    {
      termino: 'Satisfacción del cliente',
      significado:
        'Es la medición de la respuesta que los consumidores tienen con respecto al servicio o producto de una marca. Las calificaciones son referentes para mejorar el servicio que se les ofrece y para conocer en detalle lo que necesitan (HubSpot, 2021).',
    },
    {
      termino: 'Señalética',
      significado:
        'Es una estrategia importante para potenciar la imagen de marca, señalizar zonas y espacios, y decorar un evento de manera creativa y única.',
    },
    {
      termino: 'Sistema de seguridad',
      significado:
        'Conjunto de elementos y de sistemas de orden electrónico y físico, además de la intervención de una adecuada vigilancia humana, que proporciona un resultado eficiente de seguridad en relación directa con el riesgo de inseguridad que soporta una sociedad (Villavicencio y Genner, 2013).',
    },
    {
      termino: 'Tecnología NFC',
      significado:
        'Es la comunicación de campo cercano; solución digital que permite conectar dispositivos de manera inalámbrica y muy sencilla de utilizar. Se suele utilizar para emparejar dispositivos móviles con otros sistemas con solo acercarlos, y también para compartir archivos, enlaces o imágenes (BBVA, 2022).',
    },
  ],
  referencias: [
    {
      referencia:
        'BBVA (2022). <em>Cómo aprovechar la tecnología NFC de tu celular</em>.',
      link:
        'https://www.bbva.com/es/ar/como-aprovechar-la-tecnologia-nfc-de-tu-celular/',
    },
    {
      referencia:
        'Corporación Casa Lima (2022). Certificado de Defensa Civil: Requisitos. LinkedIn',
      link:
        'https://www.linkedin.com/pulse/certificado-de-defensa-civil-requisitos-corporacioncasalima/?trk=pulse-article_more-articles_related-content-card&originalSubdomain=es',
    },
    {
      referencia:
        'EDT Eventos (s. f.). <em>Señalética y eventos: cómo delimitar tus espacios correctamente</em>.',
      link:
        'https://www.edt.es/senaletica-eventos-como-delimitar-tus-espacios/',
    },
    {
      referencia:
        'Hotmart (2022). ¿Qué es el <em>merchandising</em> y cómo aplicarlo en tu negocio? ',
      link: 'https://hotmart.com/es/blog/merchandising',
    },
    {
      referencia:
        'Hubspot (2022). <em>Satisfacción del cliente: qué es, sus elementos y cómo medirla</em>.',
      link: 'https://blog.hubspot.es/service/satisfaccion-del-cliente',
    },
    {
      referencia:
        'Lobbyfix (2021, 7 de junio). <em>Control de accesos para eventos</em>. Siete reglas para evitar el caos.',
      link: 'https://bit.ly/3gaZpwt',
    },
    {
      referencia:
        'Meetmaps (2020). <em>Nueve tips para la acreditación de tu evento o congreso</em>.',
      link: 'https://bit.ly/3EaaENI',
    },
    {
      referencia:
        'Villavicencio, J. y Genner, P. (2013). <em>Implementación de equipos de monitoreo y seguridad basado en cámaras ip en el almacén Lindón García representaciones del cantón Tosagua</em>. [Tesis de grado]. Escuela Superior Politécnica Agropecuaria de Manabí Manuel Félix López, Calceta',
      link:
        'http://190.15.136.145/bitstream/42000/82/1/TESIS%20JENNIFFER%20VILLAVICENCIO%20Y%20GENNER%20PALADINES.pdf',
    },
    {
      referencia:
        'Dirección de Prevención y Atención de Emergencias [DPAE] (2011). <em>Señalización y plan de evacuación</em>. DPAE.',
      link: 'https://bit.ly/3Utz3ot',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
