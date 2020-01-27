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

