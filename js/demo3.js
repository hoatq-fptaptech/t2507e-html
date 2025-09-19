function demoOne(){
    alert("One two three...");
}
function demoTwo(){
    alert("Two to too...");
}
var flag = false;
var fanbox = null;
function startFan(e){
    if(flag == false){
        var fan = document.getElementById("fan");
        var dg = 0;
        fanbox = setInterval(function(){
            fan.style.transform = `rotate(${dg}deg)`;
            dg+=2;
        },1);
        // var btn = document.getElementById("btn-fan");
        // btn.innerText = "Stop";
        e.innerText = "Stop";
        flag = true;
    }else{
        clearInterval(fanbox);
        e.innerText = "Start";
        flag = false;
    }
}