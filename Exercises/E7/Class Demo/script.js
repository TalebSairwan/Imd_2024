console.log("hey")

$('body').css('background-color', 'white');

for (let i = 0; i < 500; i++) {
    let block = '<div style="width:100%; height: 20px;"></div>';
    $('.foreground').append(block);
};

$('div').each(function () {

    $(this).on('mouseenter', function () {
        // $(this).delay(2000).fadeIn(400).addClass('no-width');
    })
})

$('body').on('keypress', function () {
    $('div').removeClass('no-width');
})
