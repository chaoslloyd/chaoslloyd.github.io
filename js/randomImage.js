(function($){
	
	$.randomImage = {
		defaults: {
			
			//you can change these defaults to your own preferences.
			path: 'images/', //change this to the path of your images
			myImages: ['RossWhitaker_web.jpg', 'IMG_4380_566_crop_web_sm.jpg', 'Ross_1_crop_web.jpg', 'Ross_2_crop_web.jpg', 'Ross_1_double_crop_resize_web.jpg', 'Ross_2_double_crop_resize_web.jpg'] //put image names in this bracket. ex: 'harold.jpg', 'maude.jpg', 'etc'
		}			
	}
	
	$.fn.extend({
			randomImage:function(config) {
				
				var config = $.extend({}, $.randomImage.defaults, config); 
				
				 return this.each(function() {
						
						var imageNames = config.myImages;
						
						//get size of array, randomize a number from this
						// use this number as the array index

						var imageNamesSize = imageNames.length;

						var lotteryNumber = Math.floor(Math.random()*imageNamesSize);

						var winnerImage = imageNames[lotteryNumber];

						var fullPath = config.path + winnerImage;
						
						
						//put this image into DOM at class of randomImage
						// alt tag will be image filename.
						$(this).attr( {
										src: fullPath,
										alt: winnerImage
									});
				
						
				});	
			}
			
	});
	
	
	
})(jQuery);