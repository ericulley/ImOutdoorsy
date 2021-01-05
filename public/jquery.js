$(() => {

$('#delete-button').click(() => {
    $('#delete-modal').toggleClass('none')
    $('#delete-no').click(() => {
        $('#delete-modal').toggleClass('none')
    })
})


$('.back').click(() => {
    window.history.back()
})

})
