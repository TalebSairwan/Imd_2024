$(document).ready(function () {
    $(".Button").click(function () {
        $(".Div").fadeOut(800, function () {
            $(this).text("Now I am a full Box :)").fadeIn(800);
        });
    });

    $(".resetButton").click(function () {
        // Reset the content and appearance
        $(".Div").fadeOut(800, function () {
            $(this).text("Hello I am an empty box").fadeIn(800);
        });
    });
});