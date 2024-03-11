//Country
$('#country_p').on('click',function () {
    $('.show_another_country').slideToggle(500);
    $('.show_sign_part').slideUp(500);
});
$('.show_another_country').on('mouseleave',function () {
    $(this).slideUp(500);
});
//Sign
$('#sign_part').on('click',function () {
    $('.show_sign_part').slideToggle(500);
    $('.show_another_country').slideUp(500);
});
$('.show_sign_part').on('mouseleave',function () {
    $(this).slideUp(500);
});


//Show Top//
var st;
$(document).on("scroll",function () {
    st=$(this).scrollTop();
    if (st>80){
        $(".upper").fadeIn(300);
    }else {
        $(".upper").fadeOut(300);
    }
});
//End Show Top//

//Carousel
const slickTheCarouselSpecial = () => {
    $('.owl_carousel_special').slick({
        infinite: false,
        autoplay:true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {

                breakpoint: 1216,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
$('.owl_carousel_special').slick({
    infinite: false,
    autoplay:true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {

            breakpoint: 1216,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
const slickTheCarouselLast = () => {
    $('.owl_carousel_last').slick({
        infinite: false,
        autoplay:true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {

                breakpoint: 1216,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
$('.owl_carousel_last').slick({
    infinite: false,
    autoplay:true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {

            breakpoint: 1216,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
const slickTheCarouselSimillar = () => {
    $('.owl_carousel_simillar').slick({
        infinite: false,
        autoplay:true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {

                breakpoint: 1216,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
$('.owl_carousel_simillar').slick({
    infinite: false,
    autoplay:true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {

            breakpoint: 1216,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        },
        {

            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.owl_carousel_1').slick({
    infinite: true,
    autoplay:true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl:true,
    dots: true,
    arrows:false,
});
//Search
$('#search_form').on('keyup',function () {
    var Detail=$(this).val();
    var Check =Detail.length;
    if (Check!=0){
        $('.search_detail').fadeIn(300);
    }else {
        $('.search_detail').fadeOut(300);
    }
});

//Google Map
function loadMap() {

    var mapOptions = {
        center:new google.maps.LatLng(17.088291, 78.442383),
        zoom:12
    }

    var map = new google.maps.Map(document.getElementById("sample"),mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(17.088291, 78.442383),
        map: map
    });
}
function loadMap1() {

    var mapOptions1 = {
        center:new google.maps.LatLng(17.088291, 78.442383),
        zoom:12
    }

    var map1 = new google.maps.Map(document.getElementById("show_map"),mapOptions1);

    var marker1 = new google.maps.Marker({
        position: new google.maps.LatLng(17.088291, 78.442383),
        map: map1
    });
}


//Price Rage
$('.show_price').slider({
    min:1000,
    max:5000,
    step:50,
    values:[1000,5000],
    range:true,
    slide:function (event , ui) {
        $('#price_min').html(ui.values['0']);
        $('#price_max').html(ui.values['1']);
    }

});

//Filter List Product
var flag=true;
function ShowMenu() {

    if (flag==true){
        $('.list_product_filter_right').css({
            'right':'0',
            'transition':'all 0.5s ease'
        });
        flag=false;
    }else if (flag==false){
        $('.list_product_filter_right').css({
            'right':'-300px',
            'transition':'all 0.5s ease'
        });
        flag=true;
    }
}
$('.close_filter').on('click',function () {
        $('.list_product_filter_right').css({
            'right':'-300px',
            'transition':'all 0.5s ease'
        });
        flag=true;
    });









