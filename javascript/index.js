//scroll top retour en haut de page //

function scrollToTop(){
    //window.scrollTo(0,0);
    window.scrollTo(0, 'slow');     
};

/*///////////////////////navbar/////////////////////////////*/
/*hamburger */
const hamburger = document.getElementById("hamburger");
hamburger.onclick = () => {
  hamburger.classList.toggle("open");
  const navbar = document.getElementsByClassName("navbar");
    navbar.classList.toggle("slide");  
  document.body.classList.toggle("noScroll");
}







/*
$('#scrolltop').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 'slow')
});

$(window).scroll(function() {
    if ($(window).scroll() < 500) {
        $('.scrollTop').fadeOut()
    } else {
        $(".scrollTop").fadeIn()
    }
});
*/

//tarte au citron cookie 
