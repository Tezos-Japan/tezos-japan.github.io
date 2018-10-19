$(function(){

    var width = $(window).width();

    $('#tezos-sns-riot-logo').on('mouseover', function(){
        $(this).prop('src', 'assets/images/tezos_SNS_Riot_orange=logo.png');
    }).on('mouseout', function(){
        $(this).prop('src', 'assets/images/tezos_SNS_Riot_logo.png');
    });

    $('#tezos-sns-github-logo').on('mouseover', function () {
        $(this).prop('src', 'assets/images/tezos_SNS_GitHub_orange_logo.png');
    }).on('mouseout', function () {
        $(this).prop('src', 'assets/images/tezos_SNS_GitHub_logo.png');
    });

    $('.navbar-toggle').on('click', function(){
        if (!$('.navbar-collapse').hasClass('in')){
            // $('.navbar-collapse').css({ 'background-color': '#2C7DF7', 'border-color': '#2C7DF7' });
            $('.navbar-collapse').css({ 'background': "url('assets/images/mobile_menu_bluebg.png') repeat", 'border-color': '#2C7DF7' });
            $('.navbar-header').css({ 'background-color': '#2C7DF7'});
            $(this).find('.nav-custom-close').show();
            $(this).find('.icon-bar').hide();
            $(this).css({ 'background-color': '#fff', 'padding':' 10px 15px'});
            
            // $('.navbar-brand').find('img').prop('src', 'assets/images/mobile_tezos_white_logo.png');
            $('.navbar-brand').html('<img src="assets/images/mobile_tezos_white_logo.png" alt="" style="width: 140px;">');
            $('.navbar-default').css({ 'background': 'none' });
        }else{
            $('.navbar-collapse').css({ 'background-color': '#fff', 'border-color': '#e7e7e7' });
            $('.navbar-header').css({ 'background-color': '#fff' });
            $(this).find('.nav-custom-close').hide();
            $(this).find('.icon-bar').show();
            $(this).css({ 'background-color': '#2C7DF7', 'padding': ' 30px 25px' });
            // $('.navbar-brand').find('img').prop('src', 'assets/images/logo.jpg');
            $('.navbar-brand').html('<img src="assets/images/logo.jpg" alt="" style="">');
            $('.navbar-default').css({ 'background': '#fff', 'border-color': '#e7e7e7' });
        }
    });

    console.log($('#nav-for-pc').find('ul').width());


    

    if (width <= 767){
        $('#main-img-top').prop('src', 'assets/images/mobile_main_image.png');

        var uiContactContainer = $('#about-us-content').find('.about-us-contact-container').html();
        $('#about-us-content').find('.about-us-contact-container').remove();

        $('#about-us-content').prepend(uiContactContainer);

        if(width <= 320){
            $('div.resources-sub-contents:not(:first)').addClass('mt-85');
        }else{
            $('div.resources-sub-contents:not(:first)').addClass('mt-140');
        }


    }

    $('.see-more').off('click').on('click', function(){
        var uiParent = $(this).closest('.resources-sub-contents');

        if($(this).hasClass('last-see-more-item')){
            $('.developer-resources-container').addClass('mt130')
        }

        if(width <= 320){
            uiParent.nextAll("div.resources-sub-contents:first").removeClass('mt-85');
        }else{
            uiParent.nextAll("div.resources-sub-contents:first").removeClass('mt-140')
        }

        uiParent.find('.for-cp').hide();
        uiParent.find('.for-pc').show();
        $(this).hide();
    });




});