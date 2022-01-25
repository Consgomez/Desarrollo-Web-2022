$(document).ready(function() {

    let temas = ["animales", "dog", "cats", "birds", "sloths", "seals", "wolves", "mouse"]
    let api_key = "DJHo0kXI9xoTBJP6c7jSBZf2wgNQR9Kg"

    addAnimal()

    function addAnimal()
    {
        $("#animal-buttons").empty()
           
        for(let i = 0; i < temas.length; i++)
        {
            $("#animal-buttons").append(
                $("<button>").text(temas[i]).addClass("animal-button").attr("data-type", temas[i])
            )
        }
    }

    $("body").on("click", ".animal-button", function(e) {
        e.preventDefault();

        $("#animals").empty()

        $.get(`https://api.giphy.com/v1/gifs/search?q=${$(this).attr("data-type")}&api_key=${api_key}&limit=10`, (res) => {
            res.data.forEach(gif => {
                let animalDiv = $("<div class= \"animal-item\">")

                let rating = gif.rating
                let p = $("<p>").text("Rating: " + rating)

                let animalImage = $("<img>")
                animalImage.addClass("animal-image")
                animalImage.attr("src", gif.images.fixed_height_still.url)
                animalImage.attr("data-still", gif.images.fixed_height_still.url)
                animalImage.attr("data-animate", gif.images.fixed_height.url)
                animalImage.attr("data-state", "still")

                animalDiv.append(p)
                animalDiv.append(animalImage)

                $("#animals").append(animalDiv)
            })
        })
    })

    //checar si esta en estado still, cambiar a url
    $("#animals").on("click", ".animal-image", function() {

        let still = $(this).attr("data-still")
        let animated = $(this).attr("data-animate")

        if($(this).attr("data-state") == "still")
        {
            $(this).attr("data-state", "animated")
            $(this).attr("src", animated)
        }
        else if($(this).attr("data-state") == "animated")
        {
            $(this).attr("data-state", "still")
            $(this).attr("src", still)
        }
    })

    $("#add-animal").on("click", function(e) {

        e. preventDefault()

        let value = $("#animal-input").val()

        temas.push(value)
        addAnimal()
    })
});
