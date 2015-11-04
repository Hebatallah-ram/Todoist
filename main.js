/**
 * Created by Heba on 11/4/2015.
 */
$(document).ready(function(){
    $('li').hover(function(){
        $(this).css("background-color","#E2E2E2");
        $(this).find('.onHover').css("background-color","crimson").fadeIn();
    },function(){
        $(this).css("background-color","");
        $(this).find('.onHover').css("background-color","").fadeOut();
    });
});
