$("#depression").click(function() {
    $(".d-t").fadeToggle();
    $(".anxiety").fadeToggle();
    $(".EatingDisorders").fadeToggle();
    $(".ADHD").fadeToggle();
    $(".OCD").fadeToggle();
});

$("#anxiety").click(function() {
    $(".a-t").fadeToggle();
    $(".depression").fadeToggle();
    $(".EatingDisorders").fadeToggle();
    $(".ADHD").fadeToggle();
    $(".OCD").fadeToggle();
});

$("#EatingDisorders").click(function() {
    $(".e-t").fadeToggle();
    $(".depression").fadeToggle();
    $(".anxiety").fadeToggle();
    $(".ADHD").fadeToggle();
    $(".OCD").fadeToggle();
});

$("#ADHD").click(function() {
    $(".adhd-t").fadeToggle();
    $(".depression").fadeToggle();
    $(".anxiety").fadeToggle();
    $(".EatingDisorders").fadeToggle();
    $(".OCD").fadeToggle();
});

$("#OCD").click(function() {
    $(".o-t").fadeToggle();
    $(".depression").fadeToggle();
    $(".anxiety").fadeToggle();
    $(".EatingDisorders").fadeToggle();
    $(".ADHD").fadeToggle();
});

$(".start").click(function() {
    $(".everything").fadeIn();
    $(".title-page").hide();
    $("body").css("background-color", "#E9C3F7");
    $("body").css("color", "black");
});