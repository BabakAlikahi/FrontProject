var promise = document.getElementById("myAudio");
var flag=true;
var flag1=true
var timeElapsed = 0;
$('.show_support').on('click',function () {
    if (flag==true){
        $('.support_team').fadeIn(200);
        flag=false;
    }else if(flag==false){
        $('.support_team').fadeOut(200);
        flag=true;
    }
    promise.play();

});
window.addEventListener("scroll", function (event) {
    timeElapsed = 0;
});
window.addEventListener("click", function (event) {
    timeElapsed = 0;
});
setInterval(function () {
    timeElapsed=timeElapsed+1;
    if (timeElapsed==120 && flag==true && flag1==true) {
        $('.support_team').fadeIn(200);
        flag=false;
        flag1=false;
        promise.play();
    }
}, 1000);
$('.close_support').on('click',function () {
    $('.support_team').fadeOut(200);
    flag=true;
})