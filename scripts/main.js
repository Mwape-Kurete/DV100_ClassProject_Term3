$(document).ready(function(){

    console.log("working"); 
    
    // --------------------------------------------
    // Home Page
    // when the hero loads animate it upwards
    
    $(".hero-image").animate({top: '-=100px'});
    $(".hero-image2").animate({top: '-=25px'});


    // ----------------------------------------------
    // browse 
    
    loadPlants();


});

//---------------------------------------------------------------------
// Load All Plants 
// --------------------------------------------------------------------

function loadPlants(){

    // loop thtough the list of plants 
    for (let i = 0; i < arrPlant.length; i++) 
    {
        const plant = arrPlant[i];

        console.log(plant);
        
        // 1. want to select the plants container and add current array plant to it 
        $("#plantsContainer").append($("#plantCardTemplate").html());

        // 2. create a variable containing the most recently add plant card
        let currentChild = $("#plantsContainer").children().eq(i+1);

        // 3. set the content for the current plant card from plants list array
        $(currentChild).find(".card-img-top").attr('src', '../assets/Plants/' + plant.image);
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text(plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);

        // 4. Hide Description Text 
        $(currentChild).find("#descriptionText").hide();

    }
}


// --------------------------------------------------------------------------
// when the card is clicked
// ---------------------------------------------------------------------

$("#plantsContainer").on('click', '.card', function(){
    
    // TOGGLE PRICE AND DESCRIPT TEXT
    
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();

    // resize image to fit added text 
    $(this).find(".card-img-top").toggleClass("small");

});


$("#del1").click(function(){
    // -----------------------------------------------
    // wishlist
    $("#plant1").remove();
});

$("#del2").click(function(){
    // -----------------------------------------------
    // wishlist
    $("#plant2").remove();
});

$("#del3").click(function(){
    // -----------------------------------------------
    // wishlist
    $("#plant3").remove();
});

