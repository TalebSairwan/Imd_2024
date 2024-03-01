$(document).ready(function () {
    $(".Button").click(function () {
        $(".Div").fadeOut(800, function () {
            $(this).text("Content changed!").fadeIn(800);
        });
    });

    $(".resetButton").click(function () {
        // Reset the content and appearance
        $(".Div").fadeOut(800, function () {
            $(this).text("Hello I am an empty box").fadeIn(800);
        });
    });
});