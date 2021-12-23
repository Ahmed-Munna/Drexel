$(document).ready(function(){

// menu bar

$(".fa-bars").on({
    click : function(){
        $(".slide").addClass("side_bar_active");
        $(".fa-times").addClass("close_bar");
        $(".overlay").addClass("add_overlay")
    }
});
$(".fa-times").on({
    click : function(){
        $(".slide").removeClass("side_bar_active");
        $(".overlay").removeClass("add_overlay")
    }
});
$(".overlay").on({
    click : function(){
        $(this).removeClass("add_overlay");
        $(".slide").removeClass("side_bar_active");
    }
});
$(".feature").on({
    click : function(){
        $(".megamenu").toggleClass("megamenu_slide");
        // $(".megamenu").slideToggle(1000);
    }
})






// owl carousel

$('.slider_container').owlCarousel({
    loop:true,
    nav:true,
    navText:['BACK','NEXT'],
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// filture

$.autofilter({
     
      // CSS class when shown
      showClass:'show',
     
      // use HTML as filter string
      htmlAsFilter:false,
     
      // filter string as substring
      subString:false,     
      // is case sensitive?
      caseSensitive:false,
     
      // enable animation
      animation:true,
      // duration in ms
      duration: 0       
    });
    
// prodact slider
$('.product_container').owlCarousel({
    loop:true,
    nav:true,
    margin:30,
    navText:['BACK','NEXT'],
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:2,
        },
        768:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
});
// Brand logo area

$('.brand_logo_container').owlCarousel({
    loop:true,
    margin:110,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:4,
            margin:50
        },
        850:{
            items:5,
            margin:50
        },
        1000:{
            items:6
        }
    }
});


// sidebar_list_page Accordion

    $(".acc_btn").on({

        click : function(){
            $(".furniture").toggleClass("fa-plus");
        }

    });
    $(".acc_bttn").on({

        click : function(){
            $(".sofas").toggleClass("fa-plus");
            $(".sofas").toggleClass("fa-minus");
        }

    });
    $(".acc_buttn").on({

        click : function(){
            $(".Lighting").toggleClass("fa-plus");
            $(".Lighting").toggleClass("fa-minus");
        }

    });
    $(".acc_bttno").on({

        click : function(){
            $(".All").toggleClass("fa-plus");
            $(".All").toggleClass("fa-minus");
        }

    });

// jquery nice select activation

    $('Select').niceSelect('update');





})

// home page 02
// catagory section

$('.catagory_slider_area').owlCarousel({
    loop:true,
    nav:true,
    margin:30,
    navText:['BACK','NEXT'],
    responsive:{
        0:{
            items:2,
        },
        768:{
            items:3,
        },
        1000:{
            items:4,
        }
    }
});