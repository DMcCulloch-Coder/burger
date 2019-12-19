$(document).ready(() => {

    $(".eat-button").on("click", (event) => {
        event.preventDefault();
        alert('eat') //test
    })

    $("#submit").on("click", (event) => {
        event.preventDefault();
        alert('submit') //test
    })

})