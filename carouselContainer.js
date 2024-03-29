$(document).ready(function(){
    $('.carousel').slick({
      autoplay: true, // activa la reproducción automática del carrusel
      autoplaySpeed: 2000, // establece la velocidad de cambio de imagen en milisegundos
      arrows: false, // oculta las flechas de navegación del carrusel
      dots: false, // oculta los puntos de navegación del carrusel
      infinite: true, // establece el carrusel en un ciclo infinito
      responsive: [
        {
          breakpoint: 768, // ajusta las opciones de configuración para dispositivos móviles
          settings: {
            slidesToShow: 2, // muestra dos imágenes a la vez en dispositivos móviles
            slidesToScroll: 1, // desplaza una imagen a la vez en dispositivos móviles
          }
        },
        {
          breakpoint: 480, // ajusta las opciones de configuración para dispositivos muy pequeños
          settings: {
            slidesToShow: 1, // muestra una imagen a la vez en dispositivos muy pequeños
            slidesToScroll: 1, // desplaza una imagen a la vez en dispositivos muy pequeños
          }
        }
      ],
      slidesToShow: 4, // muestra cuatro imágenes a la vez en pantallas de escritorio
      slidesToScroll: 1 // desplaza una imagen a la vez en pantallas de escritorio
    });
  });
  
