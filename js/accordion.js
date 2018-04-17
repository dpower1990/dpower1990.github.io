jQuery(document).ready(function($){

var is_mobile = false;

if( $('#some-element').css('display')=='none') {
    is_mobile = true;       
}

// now i can use is_mobile to run javascript conditionally

if (is_mobile == true) {
    //Conditional script here
}

}
