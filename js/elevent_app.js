// product detalse elevent zoom

//initiate the plugin and pass the id of the div containing gallery images
$(".zoom").elevateZoom({
    constrainType:"height",
    constrainSize:676, 
    zoomType: "lens",
    containLensZoom: true,
    gallery:'gall', 
    cursor: 'pointer', 
    galleryActiveClass: "active"
}); 

//pass the images to Fancybox
$(".zoom").bind("click", function(e) {  
  var ez =   $('.zoom').data('elevateZoom');	
	$.fancybox(ez.getGalleryList());
  return false;
});
// owl carosul


$('.owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  margin:25,
  navText:['BACK','NEXT'],
  // autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
});

