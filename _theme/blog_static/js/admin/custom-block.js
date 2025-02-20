document.addEventListener("DOMContentLoaded", () => {
  if (document.body.dataset.hasCompiledHtml){ return; }
  
  const mv = document.querySelectorAll('.top__mv-image img');

  const output = `
    <div class="top__mv">
      <img class="top__mv-logo" src="/public/img/key_title.png">
      <div class="splide js-slider">
        <div class="splide__track">
          <div class="splide__list">
            <div class="splide__slide"><img class="top__mv-image image" src="${mv[0].src}"></div>
            <div class="splide__slide"><img class="top__mv-image image" src="${mv[1].src}"></div>
            <div class="splide__slide"><img class="top__mv-image image" src="${mv[2].src}"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  MTBlockEditorSetCompiledHtml(output, true);
});
