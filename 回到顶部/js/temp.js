var toTop = document.getElementById('totop');
var header = document.getElementById('header');

// window.onscroll = function(){
//     var scrollTop = document.documentElement.scrollTop;
//     if(scrollTop >= 10){
//         toTop.style.display = 'block';
//         header.className = 'header fixed';
//     }else{
//         toTop.style.display = 'none';
//         header.className = 'header';
//     }
// }

// var target = 0;
// var setp = 10;
// toTop.onclick = function(){
//     var current = document.documentElement.scrollTop;
//     var timerId = setInterval(()=>{
//         if(current <= target){
//             clearInterval(timerId);
//             timerId = null;
//         }

//         if(Math.abs(current - target) > Math.abs(setp)){
//             setp = -Math.abs(setp);
//         }

//         document.documentElement.scrollTop = current+=setp;
//     },1)
// }

window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop > 10){
        header.className  = 'header fixed';
        toTop.style.display = 'block';
    }else{
        header.className = 'header';
        toTop.style.display = 'none';
    }
}


var target = 0;
var setp = 10;
var timerId = null;
toTop.onclick = function(){
    if(timerId){
        clearInterval(timerId);
        timerId = null;
    }

    var timerId = setInterval(() => {
        
        var current = document.documentElement.scrollTop;
    
        if(current >  target){
            setp = -Math.abs(setp);
        }
    
        if(Math.abs(current - target) <= Math.abs(setp)){
            document.documentElement.scrollTop = target;
            clearInterval(timerId);
            return;
        }

        document.documentElement.scrollTop = current += setp;
    }, 1);



}