/* للتحكم فى سرعة مرور الصور */
$(document).ready(function () {
    $('.carousel').carousel({
      
        interval: 5000
    });
    $(".gear-option").click(function () {
    
        $(".option-box").fadeToggle();
    });
    
    var colorLi = $(".option-box ul li");
    
    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "rgb(220, 23, 228)").end()
        .eq(2).css("backgroundColor", "rgb(202, 189, 27)").end()
        .eq(3).css("backgroundColor", "rgb(144, 144, 255)");
    
    colorLi.click(function () {
    
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });

    $(".loading-page").fadeToggle(20000);
    
});