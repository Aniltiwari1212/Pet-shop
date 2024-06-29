var owl = $('.productSlide');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


var owl = $('.owl-carouseltesti');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

