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

  const splidePopup = document.querySelector('.js-slider-popup');

  if (splidePopup) {
    const sliderPopup = new Splide( splidePopup, {
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
  }
};

export default splide;
