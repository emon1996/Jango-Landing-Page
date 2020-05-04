// sidebar snippet

$(window).ready(function(){
    $(".snippet").hide();  
    $(".snippet-btn").click(function(){
    $(".snippet").toggle(500);
  });
});




// lightbox gallery

  lightGallery(document.getElementById('lightgallery'));
 



// animation on scroll config
    AOS.init({
        duration:1000,
        disable: function () {
        var maxWidth = 767;
        return window.innerWidth < maxWidth;
      }
    });

  

// tooltip init
    $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})






// banner slide
    $('.banner-slide').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:5000,
        smartSpeed:2800,
        items:1
    });



// client slide
    $('.client-slide').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1000,
        margin:10,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });



// letest upload slide
$('.letest-upload-slide').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1000,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });




// testimonial slide

$('.testimonial-slider').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:1000,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });




// client logo slide
$('.client-logo-slide').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1000,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
    });




// btn for scroll to top

$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrolltop').click(function(){
        $('html, body').animate({scrollTop : 0},2000);
        return false;
    });

});


