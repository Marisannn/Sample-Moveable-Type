/**
 * Add popup
 */
const popup = () => {
  const button = document.querySelectorAll('.js-popup');

  if (button) {
    button.forEach(item => {
      const container = item.closest('.js-popup-container');
      if (container) {
        const show = container.querySelector('.js-popup-show');
        const close = container.querySelector('.js-popup-close');

        item.addEventListener('click', () => {
          if (show) {
            show.classList.add('show');
          }
        });

        if (close) {
          close.addEventListener('click', () => {
            if (show) {
              show.classList.remove('show');
            }
          });
        }
      }
    });
  }
};

export default popup;
