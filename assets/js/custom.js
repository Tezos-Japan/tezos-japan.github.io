// preloader
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
    	offset: 70
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');

        if (!$('.navbar-collapse').hasClass('in')){
            $('.navbar-toggle').find('.nav-custom-close').hide();
            $('.navbar-toggle').find('.icon-bar').show();
            $('.navbar-toggle').css({ 'background-color': '#2C7DF7', 'padding': ' 30px 25px' });
            $('.navbar-header').css({ 'background-color': '#fff' });
            $('.navbar-brand').html('<img src="assets/images/logo.jpg" alt="" style="">');

            $('.navbar-default').css({ 'background': '#fff', 'border-color': '#e7e7e7' });
        }
    });
})