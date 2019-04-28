$(document).ready(function(){
    var carousel = $(".owl-carousel");
    carousel.owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout:5000,
    autoplaySpeed:3000});
});

menu.onclick = function muFunction() {
    var x = document.getElementById('myTopnav');

    if (x.className === "topnav"){
        x.className += " responsive";
    } else {
        x.className= "topnav"
    }
    
}
jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
      elementClick = jQuery(this).attr("href")
      destination = jQuery(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
      return false;
    });
  });


jQuery(document).ready(function(){
                                
    $(function() {
    $("#menus").click(function() {
    $("#myTopnas").toggleClass(" responsive");
        })
    
    });
    });

    jQuery(document).ready(function(){
                                
        $(function() {
        $("#menus").click(function() {
            $(".icons").toggleClass("fa-angle-down fa-angle-up");
            })
        
        });
        });

        jQuery(document).ready(function(){
                                
            $(function() {
            $("#menu").click(function() {
                $(".iconss").toggleClass("fa-align-justify fa-times");
                })
            
            });
            });
            $(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 800);

    });

});
    
    