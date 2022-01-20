$(".agregar").on("click", function(e) {
    
    e.preventDefault()

    let item = $("#newText").val()

    $(".Lista").append(
        $("<li>").addClass("lis").append(
            $("<p>").text(item).addClass("itemShop").append(
                $("<button>").text("Check").addClass("checar")
            ).append(
                $("<button>").text("Delete").addClass("del")
            )
        )
    )
})

$(document).on("click", ".checar", function() {

    let paragraph = $(this).parent()

    $(this).parent().toggleClass("check")
})

$(document).on("click", ".del", function() {
    
    $(this).parent().parent().remove()

})
