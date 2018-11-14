$(document).ready(function()
	{
		// var images = ["https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/goldie.jpg",
  //   "https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/10/goldies.jpg"];
		var images = ["img/1.jpg",
                  "img/2.jpg",
                  "img/3.jpg",
                  "img/4.jpg",
                  "img/5.jpg",
      		        "img/6.jpg",
          		    "img/7.jpg",
                  "img/8.jpg",
                  "img/9.jpg"];

		var image = $(".fader");
    
    var d = new Date();

    var count = d.getSeconds() % images.length;

    image.css({"background-image":"url("+ images[count++] + ")",
                // "background-size" : "cover",
                "background-repeat" : "no-repeat",
                "-webkit-background-size":"cover",
                "-moz-background-size":"cover",
                "-o-background-size":"cover",
                "background":"cover",
                "background-position":"center"
              });


		setInterval(function(){
      if(count == images.length)
      {
        count = 0;
      }
    			image.fadeOut(500, function()
			{
			    image.css({"background-image":"url("+ images[count++] + ")"
              // "background-size" : "cover",
              // "background-repeat" : "no-repeat",
              // "-webkit-background-size":"cover",
              // "-moz-background-size":"cover",
              // "-o-background-size":"cover",
              // "background":" cover"
            });
				image.fadeIn();
			});
		}, 2000);
	}
);

jQuery(document).ready(function($) {
  $(".owl-carousel-1564653685bd7a2bf313f0").owlCarousel(
    {"items":1,"loop":true,"margin":0,"autoplay":true,"autoplaySpeed":1500,
    "autoplayHoverPause":false,"nav":false,"dots":false,"smartSpeed":8000,
    "mouseDrag":false,"touchDrag":false,"autoplayTimeout":8000});
});