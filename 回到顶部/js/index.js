var header = document.getElementById('header');
var toTop = document.getElementById('totop');

//当拖动滚动条的时候执行
window.onscroll = function () {
    //1.当滚动出去10px的时候,改变top的高度,并且显示会带顶部按钮
    //获取滚动条距离
    var scrollTop = document.documentElement.scrollTop;

    if (scrollTop > 10) {
        //改变top
        header.className = 'header fixed';
        //显示回到顶部
        toTop.style.display = 'block';

    } else {
        //改变top
        header.className = 'header';
        //显示回到顶部
        toTop.style.display = 'none';

    }
};

//2.当点击回到定位按钮的时候,动画的方式回到最上面
var timerId = null;
var setp = 10;
var target = 0;
toTop.onclick = function () {
    if (timerId) {
        clearInterval(timerId);
        timerId = null;
    }

    timerId = setInterval(() => {
        var current = document.documentElement.scrollTop;


        if (current > target){
           setp = -Math.abs(setp);
        }

        if (Math.abs(current - target) <= Math.abs(setp)){
            clearInterval(timerId);
            document.documentElement.scrollTop = target;
            return;
        }
        document.documentElement.scrollTop = current +=setp;
    }, 1)
};
