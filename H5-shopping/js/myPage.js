$(function () {
    var h = $(window).height();

    $("#fullpage").fullpage({
        navigation: true,
        scrollingSpeed: 1200,
        afterLoad: function (anchorLink, index) {
            if (2 === index) {
                $('.search').show().animate({'right': 400}, 800, function () {
                    $('.search-words').animate({'opacity': 1}, 500, function () {
                        $('.search').hide();
                        $('.goods-441').show().animate({'height': 200, 'left': 100, 'top': 70}, 1000);
                        $('.words-02').animate({'opacity': 1}, 500);
                        $('.search-words-02').show().animate({'height': 30, 'top': 20, 'left': 500}, 500);
                    });
                });
            }
        },
        onLeave: function (index, nextIndex, direction) {
            if (2 === index && 3 === nextIndex) {
                $('.sofa-01').show().animate({'bottom': -(h - 250), 'width': 207, 'left': 70}, 2000, function () {
                    $('.img-3-2').animate({'opacity': 1}, 500, function () {
                        $('.btn-3-2').animate({'opacity': 1}, 500, function () {

                        });
                    });
                });
                $('.cover').show();
            }

            if (3 === index && 4 === nextIndex) {
                $('.sofa-01').hide();
                $('.t1f').show().animate({'bottom': -(h - 180), 'left': 260}, 2000, function () {
                    $(this).hide();
                    $('.car-sofa').show();
                    $('.car').animate({'left': "150%"}, 3000, 'easeInElastic', function () {
                        $('.note').show();
                        $('.note-img,.words-4-02').animate({'opacity': 1}, 1000, function () {

                        });
                    });
                });
            }

            if (4 === index && 5 === nextIndex) {
                $('.hand-05').animate({'bottom': 0}, 2000, function () {
                    $('.mouse-05-a').animate({'opacity': 1}, 1000, function () {
                        $('.t1f-05').show().animate({'top': '75%'}, 2000, function () {
                            $('.order-05').animate({'bottom': '45%'}, 2000, function () {
                                $('.words-05').addClass('words-05-a');
                            });
                        });
                    });
                });
            }
        }
    });
});