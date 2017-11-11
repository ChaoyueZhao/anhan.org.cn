// $(".scrolling").css("margin-top", "-820px");
// $(".scrolling").mouseover(function(){

  // var $marginTop = parseInt($( this ).css("margin-top"));
  // $( this ).css("margin-top", $marginTop+1+"px");

  // while ($marginTop > -820) {
  //   $marginTop--;
  //   $( this ).css("margin-top", $marginTop + 'px');
  //   if ($marginTop == -820) {
  //     $marginTop == 500;
  //   }
  // }
 // });

// {
// //   var $top = $( this ).css("top");
// //   while ($top > -820 ) {
// //     $top--;
// //     if ($top = -820) {
// //       $top = 500;
// //     };
// //    };
// // }));

// $('h1').css("color", "red");


// var $marginTop = parseInt($(".scrolling").css("margin-top"));
//
// var scrollingTop = function(){
//   $marginTop--;
//   $(".scrolling").css("margin-top", $marginTop + "px");
// };
//
// var rolling = setInterval(scrollingTop, 40);
//
// $(".scrolling").mouseover(function(){
//   clearInterval(rolling);
// });

// var rolling = setInterval(function(){
//   var $marginTop = parseInt($(".scrolling").css("margin-top"));
//   var isPause = false;
//   if (!isPause) {
//     $marginTop--;
//     $(".scrolling").css("margin-top", $marginTop + "px");
//   }
// }, 50);
//
// $(".scrolling-box").hover(function(){
//   isPause = false; isPause = true;
// });

  // for (i=0; i > -420; i--) {
  //   $marginTop-=i;
  //   $( this ).css("margin-top", $marginTop + "px");
  // };
  // while ($marginTop > -820) {
  //   $marginTop--;
  //   $(".scrolling").css("margin-top", $marginTop + "px");
  //   if ($marginTop == -820) {
  //     $marginTop == 500;
  //   };
  // };


// setInterval(scrollingTop(),500);


(function ($, undefined) {
    $.fn.loopScroll = function (p_options) {
        var options = $.extend({
            direction: "upwards",
            speed: 60
        }, p_options);

        return this.each(function () {
            var obj = $(this).find(".news");
            var text_height = obj.find(".text").height();
            var start_y, end_y;
            if (options.direction == "downwards") {
                start_y = -text_height;
                end_y = 0;
            } else if (options.direction == "upwards") {
                start_y = 0;
                end_y = -text_height;
            }

            var animate = function () {
                // setup animation of specified block "obj"
                // calculate distance of animation
                var distance = Math.abs(end_y - parseInt(obj.css("top")));

                //alert("animate " + obj.css("top") + "-> " + end_y + " " + distance);

                //duration will be distance / speed
                obj.animate({
                    top: end_y
                }, //scroll upwards
                1000 * distance / options.speed,
                    "linear",

                function () {
                    // scroll to start position
                    obj.css("top", start_y);
                    animate();
                });
            };

            obj.find(".text").clone().appendTo(obj);
            $(this).on("mouseover", function () {
                obj.stop();
            }).on("mouseout", function () {
                animate(); // resume animation
            });
            obj.css("top", start_y);
            animate(); // start animation

        });
    };
}(jQuery));

$("#example3").loopScroll({
    speed: 20
});
//$("#example4").loopScroll({ speed: 120 });
//$("#example1").loopScroll({ direction: "downwards" });
//$("#example2").loopScroll({ direction: "downwards", speed: 30 });
