import { component } from 'picoapp';
import $ from 'jquery';

export default component((node, ctx) => {
  // update main container margin for fixed header
  let headerHeight = $(node).height();
  $('main.main-content').css('padding-top', headerHeight);

  window.addEventListener('resize', () => {
    let headerHeight = $(node).height();
    $('main.main-content').css('padding-top', headerHeight);
  });

  const hamburger = $(node).find(".hamburger");
  if (hamburger.length > 0) {
    hamburger.addEventListener("click", function() {
      hamburger.toggle("is-active");
    }, false);
  }
})
