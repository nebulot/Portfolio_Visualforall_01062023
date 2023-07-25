//scroll top retour en haut de page //

$('#scrolltop').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 'slow')
});

$(window).scroll(function() {
    if ($(window).scrollTop() < 500) {
        $('#scrolltop').fadeOut()
    } else {
        $("#scrolltop").fadeIn()
    }
});


//tarte au citron cookie 
