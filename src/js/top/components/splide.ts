/**
* TOP SPLIDE
*/

declare var Splide: any;

const splide = () => {
  const splideMV = document.querySelector('.js-slider');

  if (splideMV) {
    const slider = new Splide( splideMV, {
      type: 'fade',
      fixedHeight: 1180,
      focus: 'center',
      pagination: false,
      arrows: false,
      drag: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      autoplay: true,
      rewind: true,
    });

    slider.mount();
  }

  const splidePopup = document.querySelectorAll('.js-slider-popup');

  if (splidePopup) {
    splidePopup.forEach(item => {
      const sliderPopup = new Splide( item, {
        type: 'fade',
        fixedWidth: 506,
        fixedHeight: 781,
        focus: 'center',
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplay: true,
        rewind: true,
      });
  
      sliderPopup.mount();
    });
  }
};

export default splide;
