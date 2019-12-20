$(document).ready(function () {

    $(".eat-button").on("click", function (event) {
        let id = $(this).data("id")
        
        $.ajax({
            url: `/api/${id}`,
            method: "PUT"
        }).then(function(res) {
            location.reload();
        })
    })

    $("#submit").on("click", function (event) {
        event.preventDefault();
        const burger = {
            name: $('#burger-name').val()
        }
        
        $.ajax({
            url: `/api/burger`,
            method: "POST",
            data: burger
        }).then(function(res) {
            location.reload()
        })
    })

})