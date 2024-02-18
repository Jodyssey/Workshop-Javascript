var adView;
const timer = 2500;

window.onload = function () {
    var demo = document.getElementById("demo");
    demo.style.border = "5px solid blue";
    demo.style.borderRadius = "25px";
    //demo.setAttribute("style", "border:5px solid blue; border-radius:25px;")

    setupClick();
    runAdView();

};

function runAdView() {
    adView = setInterval(setUpInterval, timer);
}

function setupClick() {
    demo.onclick = function () {
        alert("image on click");
    }

    var btn_stop = document.getElementById("btn-stop");
    btn_stop.onclick = function () {
        if (btn_stop.innerHTML == "Start") {
            runAdView();
            btn_stop.innerHTML = "Stop";
            return;
        }

        var result = confirm("Are You Stop ???");
        if (result == true) {
            alert("Stop OK");
            clearInterval(adView);
            btn_stop.innerHTML = "Start";
        }
    };


}

var pic = ["spon 1.jpg", "spon 2.jpg"];
const sizePic = pic.length;
var index = 0;

function setUpInterval() {
    demo.src = "images/" + pic[index];
    index++;

    if (index >= sizePic) {
        index = 0;
    }
}