<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-around.align-items-center.mt-5
      
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='Texto que describa la imagen') 

      .col-lg-4
        p.mt-3 Estimado aprendiz, en este componente formativo comprenderá que en todo evento debe primar la señalización informativa y preventiva, lo cual contribuye al buen desarrollo y fluidez de lo establecido en la planeación. Este tema es de gran importancia para el cuidado de los asistentes y de la instalación sede del evento; además, permite mantener la actualización de todos los procesos de producción y gestión del mismo. 

      .col-lg-5.bgr1-intro.p-4
        p Este componente formativo se enfoca en desarrollar habilidades para comprender los conceptos y la relación entre el registro, control de asistentes, mercadeo y promoción. 

        p #[b El siguiente video amplía esta interesante temática. ¡Muchos éxitos!]


    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/-1cISLDdlyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
