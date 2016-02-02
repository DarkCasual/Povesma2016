/**
 * Created by goldenmelon on 15.09.15.
 */
jQuery(document).ready(function (){
    var amount=Math.max.apply(Math,$(".inline-block li").map(function(){return $(this).outerWidth(true);}).get());
    //jQuery("span").css("color","red");
    $(".scroll-bar").mCustomScrollbar({
        axis:"x",
        theme:"dark",
        advanced:{
            autoExpandHorizontalScroll:true
        },
        scrollButtons:{
            enable:true,
            scrollType:"stepped"
        },
        keyboard:{scrollType:"stepped"},
        /**snapAmount:amount,
         mouseWheel:{scrollAmount:amount}*/
    });

});