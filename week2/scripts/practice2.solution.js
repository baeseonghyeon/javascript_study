function select(obj){
    $('.nav-link').removeClass("active");
    $(obj).find('.nav-link').addClass("active");
    var currentEq = $(obj).attr("data-nav-eq");
    $('.jumbotron').removeClass("hide").addClass("hide");
    $(".jumbotron[data-box-eq=" + currentEq+ ']').removeClass("hide");
}