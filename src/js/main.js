var popup = document.getElementById('container_popup');
var main_button = document.getElementsByClassName("button");
var clicks_text = document.getElementById("clicks");
var button_reset = document.getElementById("button_reset");
var cross = document.getElementsByClassName("cross");


function show_popup() {
    popup.style.display = "block";
    var clicks = localStorage.getItem("clicks");
    if (clicks == null) {
        clicks = 1;
    }   else clicks++;
    localStorage.setItem("clicks", clicks);
    clicks_text.innerHTML = clicks;
    if (clicks < 5) {
        button_reset.style.display = "none"
    } else button_reset.style.display = "block"

}

function counter_reset() {
    localStorage.setItem("clicks", 0);
    clicks_text.innerHTML = localStorage.getItem("clicks");
    button_reset.style.display = "none"
}

function close_popup_cross() {
    popup.style.display = "none";
}

