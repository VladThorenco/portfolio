window.onload = function () {
    var menuHead = document.querySelector('#menu-h'),
        menuActive = document.querySelector('.menu-all');

    menuHead.onclick = function () {
        if (this.checked) {
            menuActive.style.display = 'flex';
        } else {
            menuActive.style.display = 'none';
        }
    };
};

$(function () {
     var menu = $('menu-all');
    // gets height
    var about = $('.about-me-personal').offset().top;
    var portfolio = $('.nav-portfolio').offset().top;
    var contactMe = $('.my-link').offset().top;

    // scroll mobile-phone
    var linkPhoneAbout = $('.menu-head-active li:first');
    var linkPhonePortfolio = $('#linkPortfolio');
    var linkPhoneContact = $('.menu-head-active li a:last');


    var linkAbout = $('.item-menu a:first');
    var linkPortfolio = $('.port');
    var linkContact = $('.item-menu a:last');

    $(linkAbout).on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about
        });
    });

    $(linkPortfolio).on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: portfolio
        })
    });

    $(linkContact).on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contactMe
        })
    });

    /*Click and Scroll for Phone*/
    $(linkPhoneAbout).on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: about
        });
    });
    $(linkPhonePortfolio).on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: portfolio
        })
    });
    $(linkPhoneContact).on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contactMe
        })
    })
});