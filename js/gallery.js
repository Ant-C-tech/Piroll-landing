var $links = $('.works__flexWrapper').find('> a'),
    $lightbox = $('.lightbox'),
    $overlay = $('.overlay'),
    targetImg;

$links.click(function (event) {
    event.preventDefault();
    targetImg = $(this).attr('href');
    $lightbox.find('img').attr('src', targetImg);
    $lightbox.fadeIn();

});

$overlay.click(function () {
    $lightbox.fadeOut();
});