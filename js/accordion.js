jQuery(document).ready(function($){

var is_mobile = false;

if( $('#some-element').css('display')=='none') {
    is_mobile = true;       
}

// now i can use is_mobile to run javascript conditionally

if (is_mobile == true) {
    //Conditional script here
    var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
}

)}
