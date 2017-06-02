require('../sass/style.scss');
//require('../sass/bootstrap.css');

import $ from 'JQuery';
window.$ = $;
console.log('Jquery', $);

$(".mob-menu-button").click(function(){
    $(".mob-menu").fadeToggle("700","swing");
});


$(".hideMobRightPane").click(function(){
    $(".mob-right-pane").fadeOut("700","swing");
    $(".hideMobRightPane").fadeOut("700","swing");
});
