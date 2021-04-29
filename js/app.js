function create_gallery(carousel_id) {
  var elements = [];
  $(carousel_id + " .carousel-item").each((idx, item) => {
    var href=$(item).children("img").attr('data-src');
    var description = $(item).children('.carousel-caption').html();
    elements.push({
      'href': href,
      'type': 'image',
      'title': '',
      'description': description
    });
  });
  const myGallery = GLightbox({
    openEffect: 'zoom',
    closeEffect: 'fade',
    elements: elements,
  });
  $(".carousel-item").each((idx, item) => {
    $(item).click(() => {
      myGallery.settings.startAt=idx;
      myGallery.open()
    });
  });
}

$(document).ready(() => {
  $(".author-block a.anylink").hover(
    (e) => $(e.target).parent().children("img").css('filter', 'unset'), 
    (e) => $(e.target).parent().children("img").css('filter', 'sepia(0.5) grayscale(1)')
  );
});
