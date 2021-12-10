// move the planets

$(document).ready(function () {
    var movementStrength = 70;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("body").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('#planet').css("margin-top", newvalueX + "px");
        $('#planet').css("margin-left", newvalueY + "px");
    });
});

$(document).ready(function () {
    var movementStrength = 70;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("body").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;

        $('#planet2').css("margin-top", newvalueX + "px");
        $('#planet2').css("margin-left", newvalueY + "px");
    });
});