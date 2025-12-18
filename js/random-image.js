(function() {
  'use strict';

  var images = [
    'RossWhitaker_web.jpg',
    'IMG_4380_566_crop_web_sm.jpg',
    'Ross_1_crop_web.jpg',
    'Ross_2_crop_web.jpg',
    'Ross_1_double_crop_resize_web.jpg',
    'Ross_2_double_crop_resize_web.jpg'
  ];

  function setRandomImage() {
    var imgElement = document.querySelector('.shuffle');
    if (!imgElement) return;

    var randomIndex = Math.floor(Math.random() * images.length);
    var randomImage = images[randomIndex];

    imgElement.src = 'images/' + randomImage;
    imgElement.alt = 'Ross Whitaker performing';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setRandomImage);
  } else {
    setRandomImage();
  }
})();
