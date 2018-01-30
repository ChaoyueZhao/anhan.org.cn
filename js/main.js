$('nav .toggle-button').click(function(){
  $('#navbar-list').toggleClass('hidden');
});

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

//启动翻页插件，及设置属性
// $(document).ready(function(){
//   $('.bxslider').bxSlider({
//     auto: false,
//     autoHover: true,
//     pause: 5000,
//     pager: true,
//     caption: true,
//     controls: true,
//   });
// })

$(document).ready(function(){
  $('.slider').slider({
    height: 540
  });
});



//星空背景插件
particlesJS("particles-js",{
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
})

// 滚动动画效果

$(document).ready(function(){
  $(function() {
    var $dangAnOne = $('#dangAn-one');
    var $dangAnTwo = $('#dangAn-two');
    var $dangAnThree = $('#dangAn-three');
    var $dangAnFour = $('#dangAn-four');
    var $dangAnFive = $('#dangAn-five');
    var $dangAnSix = $('#dangAn-six');
    var sectionTwoLeft = $('.section-2-left');
    var $oneTop = $dangAnOne.offset().top;
    var $threeTop = $dangAnThree.offset().top;
    var $fourTop = $dangAnFour.offset().top;
    var $fiveTop = $dangAnFive.offset().top;
    var sectionTwoLeftTop = sectionTwoLeft.offset().top;
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
  
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (windowWidth < 992) {
          if ( scroll >= ( $oneTop - windowHeight )) {
            $dangAnOne.addClass("animated fadeInLeft");
            $dangAnTwo.addClass("animated fadeInRight");
          }
          if ( scroll >= ( $threeTop - windowHeight )) {
            $dangAnThree.addClass("animated fadeInLeft");
            $dangAnFour.addClass("animated fadeInRight");
          }
          if ( scroll >= ( $fiveTop - windowHeight )) {
            $dangAnFive.addClass("animated fadeInLeft");
            $dangAnSix.addClass("animated fadeInRight");
          }
          if ( scroll >= ( sectionTwoLeftTop - windowHeight )) {
            sectionTwoLeft.addClass("animated bounceIn");
          }
        }
        if (windowWidth >= 992) {
          if ( scroll >= ( $oneTop - windowHeight )) {
            $dangAnOne.addClass("animated fadeInLeft");
            $dangAnTwo.addClass("animated fadeInUp");
            $dangAnThree.addClass("animated fadeInRight");
          }
          if ( scroll >= ( $fourTop - windowHeight )) {
            $dangAnFour.addClass("animated fadeInLeft");
            $dangAnFive.addClass("animated fadeInUp");
            $dangAnSix.addClass("animated fadeInRight");
          }
        }
  
        if ( scroll >= ( sectionTwoLeftTop - windowHeight )) {
          sectionTwoLeft.addClass("animated slideInLeft");
        }
    });
  });
})


$(document).ready(function(){
  $('#dang-an-shi-liao').hover(function(){
    $(this).find('i').attr("class", "fa fa-unlock-alt fa-4x");
  },function(){
    $(this).find('i').attr("class", "fa fa-lock fa-4x");
  });
})

$(document).ready(function(){
  $('#li-ping-lv-you').hover(function(){
    $(this).find('i').attr("class", "fa fa-plane fa-4x");
  },function(){
    $(this).find('i').attr("class", "fa fa-location-arrow fa-4x");
  });
})

$(document).ready(function(){
  $('#xiang-guan-wen-xian').hover(function(){
    $(this).find('i').attr("class", "fa fa-pencil-square-o fa-4x");
  },function(){
    $(this).find('i').attr("class", "fa fa-pencil fa-4x");
  });
})