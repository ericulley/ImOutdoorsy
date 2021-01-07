$(() => {
// Delete Activity Modal Warning
$('#delete-button').click(() => {
    $('#delete-modal').toggleClass('none')
    $('#delete-no').click(() => {
        $('#delete-modal').toggleClass('none')
    })
})

// None hardcoded back button
$('.back').click(() => {
    window.history.back()
    console.log(window.history)
})

// Sort By Menu Event Handler
$('#sort-by-menu').on('change', (e) => {
    // $('#sort-by-menu').children().removeAttr('selected')
    // $('#sort-by-menu option:selected').attr('selected', true)
    if ($('#sort-by-menu option:selected').val() === 'recent') {
        $('.recent-acts-container').toggleClass('none')
        if (!$('.rating-acts-container').hasClass('none')) {
            $('.rating-acts-container').toggleClass('none')
        }
        if (!$('.popular-acts-container').hasClass('none')) {
            $('.popular-acts-container').toggleClass('none')
        }

    } else if ($('#sort-by-menu option:selected').val() === 'rating') {
        $('.rating-acts-container').toggleClass('none')
        if (!$('.recent-acts-container').hasClass('none')) {
            $('.recent-acts-container').toggleClass('none')
        }
        if (!$('.popular-acts-container').hasClass('none')) {
            $('.popular-acts-container').toggleClass('none')
        }

    } else if ($('#sort-by-menu option:selected').val() === 'popular') {
        $('.popular-acts-container').toggleClass('none')
        if (!$('.recent-acts-container').hasClass('none')) {
            $('.recent-acts-container').toggleClass('none')
        }
        if (!$('.rating-acts-container').hasClass('none')) {
            $('.rating-acts-container').toggleClass('none')
        }
    }
});








})
