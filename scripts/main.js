$(document).ready(function(){

    console.log("working"); 
    
    // --------------------------------------------
    // Home Page
    // when the hero loads animate it upwards
    
    $(".hero-image").animate({top: '-=100px'});


    // ----------------------------------------------
    // browse 
    $("#descriptionText").hide();
});

// When card is clicked 

$(".card").click(function(){
    
    // TOGGLE PRICE AND DESCRIPT TEXT

    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // resize image to fit added text 
    $(".card-img-top").toggleClass("small");
})