//Menu
//Анимация кнопки

$(document).ready(function () {
    $('#header__menuIcon').click(function () {
        $(this).toggleClass('open');
    });
});

//Выпадение бургер-меню

$(function () {

    $('#header__menuIcon').on('click', function () {

        $('.header__menu').slideToggle(300, function () {

            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }

        });

    })

});

//Flexslider - подключение и настройки

$(document).ready(function () {

    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: true,
        animationLoop: true,
        slideshow: true,
        pauseOnHover: true,
        slideshowSpeed: 2500,
    });

});

//Logo
//Анимация кнопки по клику (добавляем класс по клику, 
//через 1200мс удаляем добавленный класс);

$(document).ready(function () {

    $(function () {

        $('#header__logo').click(function () {
            $(this).toggleClass("flip-scale-2-hor-top");
            setTimeout(function () {
                $('#header__logo').removeClass("flip-scale-2-hor-top");
            }, 1200);
        })

    });

});

// Появление кнопки навигации по скроллу

$(function () {

    var btn = $("#btn"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            btn.addClass("button__navigation_fixed");

        } else {
            btn.removeClass("button__navigation_fixed");

        }

    }
});

// Запуск анимации счетчиков по скроллу

$(function () {
    var time = 2,
        cc = 1;
    $(window).scroll(function () {
        $('#counter').each(function () {
            var cPos = $(this).offset().top,
                topWindow = $(window).scrollTop();

            if (cPos < topWindow + 750) {
                if (cc < 2) {
                    $('.statistic__number').each(function () {
                        var
                            i = 1,
                            num = $(this).data('num'),
                            step = 1000 * time / num,
                            that = $(this),
                            int = setInterval(function () {
                                if (i <= num) {
                                    that.html(i);
                                } else {
                                    cc = cc + 2;
                                    clearInterval(int);
                                }
                                i++;
                            }, step);
                    });
                }
            }
        });
    });
});

// Запуск анимации skill по скроллу

$(function () {

    var skills = $("#skills__containerInner"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            skills.addClass("skills__containerInner_anime");

        }

    }
});

// Запуск анимации счетчиков skill по скроллу

$(function () {
    var time2 = 2,
        cc2 = 1;
    $(window).scroll(function () {
        $('#skills__containerInner').each(function () {
            var topWindow2 = $(window).scrollTop(),
                 introH2 = $("#intro").innerHeight();
               

            if (topWindow2 >= introH2) {
                if (cc2 < 2) {
                    $('.skills__number').each(function () {
                        var
                            i2 = 1,
                            num2 = $(this).data('num2'),
                            step2 = 1000 * time2 / num2,
                            that2 = $(this),
                            int2 = setInterval(function () {
                                if (i2 <= num2) {
                                    that2.html(i2);
                                } else {
                                    cc2 = cc2 + 2;
                                    clearInterval(int2);
                                }
                                i2++;
                            }, step2);
                    });
                }
            }
        });
    });
});

// Запуск анимации partners по скроллу

$(function () {
    var partners__item1 = $(".partners__item1"),
        partners__item2 = $(".partners__item2"),
        partners__item3 = $(".partners__item3"),
        partners__item4 = $(".partners__item4"),
        partners__item5 = $(".partners__item5"),
        partners__item6 = $(".partners__item6"),
        partners__item7 = $(".partners__item7"),
        partners__item8 = $(".partners__item8");
    $(window).scroll(function () {
        $('#partners').each(function () {
            var cPos3 = $(this).offset().top,
                topWindow3 = $(window).scrollTop();

            if (cPos3 < topWindow3 + 380) {
                partners__item2.addClass("partners__item_anime"),
                setTimeout(function () {
                    partners__item1.addClass("partners__item_anime");
                }, 800),
                partners__item4.addClass("partners__item_anime"),
                setTimeout(function () {
                    partners__item3.addClass("partners__item_anime");
                }, 800),
                partners__item5.addClass("partners__item_anime"),
                setTimeout(function () {
                    partners__item6.addClass("partners__item_anime");
                }, 800),
                partners__item7.addClass("partners__item_anime"),
                setTimeout(function () {
                    partners__item8.addClass("partners__item_anime");
                }, 800);
                
            }
        });
    });
});