/**
* TOP SPLIDE
*/

declare var Splide: any;

const splide = () => {
  const splideFeatures = document.querySelector('.js-slider-features');

  if (splideFeatures) {
    const slider = new Splide( splideFeatures, {
      type: 'loop',
      focus: 'center',
      pagination: false,
      arrows: true,
      pauseOnHover: false,
      pauseOnFocus: false,
      autoplay: true,
      fixedWidth: 295,
      gap: '15px',
    });

    slider.mount();
  }
};

export default splide;
