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
lightbox.option({
    "alwaysShowNavOnTouchDevices" : true,
    "showImageNumberLabel" : false,
    "wrapAround" : true
});

$(document).ready(function () {
    $('.calc select').change(function () {
        $edition = $('select#card_edition').val();
        $paper = $('select#card_paper').val();
        $color = $('select#card_color').val();
        $print_file = $('select#card_color option:selected').attr('data-print-file');
        $paper_ratio = $('select#card_paper option:selected').attr('data-paper-ratio');
        $color_format = $('select#card_color option:selected').attr('data-color');
        $print = $('select#card_color option:selected').attr('data-print')
        $division = 30;
        $final_edition = $edition / $division;
        $price = $final_edition * $paper_ratio + parseInt($print_file) + $final_edition *
            $print;
        console.log($price);
        $('span#final_price').text($price);
        if ($color_format == 1) {
            $('.card-images img').hide();
            $('#card_1_0').show('slow');
        }
        if ($color_format == 2) {
            $('.card-images img').hide();
            $('#card_1_1').show('slow');
        }
        if ($color_format == 3) {
            $('.card-images img').hide();
            $('#card_4_0').show('slow');
        }
        if ($color_format == 4) {
            $('.card-images img').hide();
            $('#card_4_1').show('slow');
        }
        if ($color_format == 5) {
            $('.card-images img').hide();
            $('#card_4_4').show('slow');
        }
    })
});
