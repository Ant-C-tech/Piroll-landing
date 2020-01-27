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

//Получение передаваемого параметра и настройки слайдера с учетом параметра

$(document).ready(function () {

    var params = window
        .location
        .search
        .replace('?', '')
        .split('&')
        .reduce(
            function (p, e) {
                var a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            }, {}
        );

    // console.log( params['v']);
    // alert(params['v']);

    $(document).ready(function () {

        $('.projects__flexslider').flexslider({
            animation: "fade",
            controlNav: false,
            animationLoop: true,
            slideshow: false,
            startAt: (params['v']),
            prevText: "",
            nextText: "",
            animationSpeed: 1000, 
            thumbCaptions: true,
        });

    });

});