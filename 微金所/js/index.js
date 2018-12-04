$(function () {
    //轮播图
    banner();


});

var banner = function () {
    var getData = function (callback) {
        if (window.data) {
            callback && callback(window.data);
        } else {
            $.ajax({
                type: 'get',
                url: 'js/data.json',
                dataType: 'json',
                data: '',
                success: function (data) {
                    window.data = data;
                    callback && callback(window.data);
                }
            });
        }
    };

    var render = function () {
        getData(function (data) {
            var isMobile = $(window).width() < 768;
            var pointHtml = template('pointTemplate', {data: data});
            var imgHtml = template('imgTemplate', {data: data, isMobile: isMobile});
            $('.carousel-indicators').html(pointHtml);
            $('.carousel-inner').html(imgHtml);
        })
    };

    //测试用的,正式可以去掉
    $(window).on('resize', function () {
        render();
    }).trigger('resize');


    //手势切换,不是滑动切换
    var startX = 0;
    var distanceX = 0;
    var isMove = false;
    //originalEvent 代表js原生事件
    $('.wjs_banner').on('touchstart', function (e) {
        startX = e.originalEvent.touches[0].clientX;
    }).on('touchmove', function (e) {
        var moveX = e.originalEvent.touches[0].clientX;
        distanceX = moveX - startX;
        isMove = true;
    }).on('touchend', function (e) {
        //距离足够50px
        if (isMove && Math.abs(distanceX) > 50){

            if (distanceX < 0){
                //左滑
                $('.carousel').carousel('next');
            } else{
                //右滑
                $('.carousel').carousel('prev');
            }
            //重置
            startX = 0;
            distanceX = 0;
            isMove = false;
        }
    })
};