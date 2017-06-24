$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.navmenu').toggleClass('slide-down');
});

$('.sec1').on('click', function(){
    $('.sec1').toggleClass('current-section');
});

$(window).scroll(function (event){
    var scroll = $(window).scrollTop();
    if(scroll>400 && scroll <1201){
        $('.sec1').addClass('current-section');
    }else{
        $('.sec1').removeClass('current-section');
    }
    if(scroll>1200 && scroll <1801){
        $('.sec2').toggleClass('current-section');
    }else{
        $('.sec2').removeClass('current-section');
    }
    if(scroll>1800 && scroll <2401){
        $('.sec3').toggleClass('current-section');
    }else{
        $('.sec3').removeClass('current-section');
    }
    if(scroll>2400 && scroll <3001){
        $('.sec4').toggleClass('current-section');
    }else{
        $('.sec4').removeClass('current-section');
    }
    if(scroll>3000 && scroll <3601){
        $('.sec5').toggleClass('current-section');
    }else{
        $('.sec5').removeClass('current-section');
    }
});