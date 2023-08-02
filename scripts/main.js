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

});


$("#plant1").click(function(){
    // -----------------------------------------------
    // wishlist
    $("#plant1").remove();
});

$("#plant2").click(function(){
    // -----------------------------------------------
    // wishlist
    $("#plant2").remove();
});

$("#plant3").click(function(){
    // -----------------------------------------------
    // wishlist
    $("#plant3").remove();
});

