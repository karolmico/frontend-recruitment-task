var popup = document.getElementById('popup');
var popup_title = document.getElementById('popup_title');
var popup_content = document.getElementById('popup_content');
var main_button = document.getElementById("button");
var clicks_text = document.getElementById("clicks");
var button_reset = document.getElementById("button_reset");
var cross = document.getElementById("cross");
var popup_background = document.getElementById("popup_background");



function show_popup() {
    popup.style.display = "block";
    popup_background.style.display = "block"
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
    popup_background.style.display = "none";
}


window.onclick = function(event) {
    if (event.target !== popup && event.target !== main_button){
        if (event.target !== popup_title) {
            if (event.target !== popup_content) {
                if (event.target !== button_reset){
                    popup.style.display = "none";
                    popup_background.style.display = "none";
                }
            }
        }        
    }
}
