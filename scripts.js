$( ".cross" ).hide();
$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
    $('.navmenu').toggleClass('slide-down');
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
});

$( ".cross").click(function(e){
    e.preventDefault();
    $('.navmenu').toggleClass('slide-down');
    $(".cross").hide();
    $(".hamburger").show();
});

/*
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
});
});

$( ".cross" ).click(function() {

});
});*/

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

$('.espreso').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr('src','images/raznorazne kafe/espreso.svg');
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Jaka koncentracija crne kafe napravljena u espreso masini pomocu vodene pare i zrna kafe pod visokim pritiskom.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.double-espreso').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/espreso dupli.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Dupla doza jake koncentracije crne kafe napravljena u espreso masini pomocu vodene pare i zrna kafe pod visokim pritiskom.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.triple-espreso').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/espreso trostruki.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Trostruka doza jake koncentracije crne kafe napravljena u espreso masini pomocu vodene pare i zrna kafe pod visokim pritiskom.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.espreso-with-cream').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/espreso sa šlagom.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Jaka koncentracija crne kafe napravljena u espreso masini pomocu vodene pare i zrna kafe pod visokim pritiskom. Dovršeno sa masnim ili bezmasnim šlagom.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.cappucino').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/kapucino.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Jednake kolicine espresa, kuvanog mleka i penastog mleka. Moze se zasladiti sa vanilom, karamelom ili lesnikom.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.macchiato').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/makijato.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("4 dela espresa i jedan deo kuvanog mleka.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.moka').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/moka.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Jedan deo espresa, dva dela kuvanog mleka i jedan deo čokoladnog sirupa ili čokoladnog praha.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.americana').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/amerikano.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Jedan kratki espreso u solji kipuće vode.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.flat-white').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/bela.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Dupli espreso u šolji punoj kuvanog mleka.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.late').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/late.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Jedan espreso sa tri dela kuvanog mleka sa penom na vrhu.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.ice-coffee').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/ledena.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Crna kafa sa mlekom, šecerom i ledom.");
        $(this).removeClass('slide-right');
        next();
    });
});

$('.coffee-to-go').on('click',function(e) {
    e.preventDefault();
    $('.coffee-image').addClass('slide-left').delay(500).queue(function(next){
        $('.coffee-image > img').attr("src","images/raznorazne kafe/za poneti.svg");
        $(this).removeClass('slide-left');
        next();
    });
    $('.coffee-desc').addClass('slide-right').delay(500).queue(function(next){
        $(this).text("Crna kafa u zgodnoj ambalaži za poneti.");
        $(this).removeClass('slide-right');
        next();
    });
});

