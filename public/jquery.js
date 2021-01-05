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
})

// Sort Listener

})
