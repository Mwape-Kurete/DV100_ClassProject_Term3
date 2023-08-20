//----------------------------------------------------------------------
// plants array 
// ---------------------------------------------------------------------

const arrPlant = [
    {
        name: "Fiscus Tree",
        price: 350,
        description: "Graceful and lush, this charming indoor plant boasts",
        image: "plant1.png",
        lightAmount: "low",
        addedDate: "2022-09-12"
    }, // pos 0
    {
        name: "White Sprite Succulent",
        price: 350,
        description: "Graceful and lush, this charming indoor plant boasts",
        image: "plant2.png",
        lightAmount: "bright",
        addedDate: "2023-03-25"
    }, // pos 1
    {
        name: "Snake Plant",
        price: 350,
        description: "Graceful and lush, this charming indoor plant boasts",
        image: "plant3.png",
        lightAmount: "low",
        addedDate: "2023-05-15"
    }, // pos 2
    {
        name: "Parlour Palm",
        price: 350,
        description: "Graceful and lush, this charming indoor plant boasts",
        image: "plant4.png",
        lightAmount: "low",
        addedDate: "2023-01-25"
    }, // pos 3
    {
        name: "Japanese Maple",
        price: 350,
        description: "Graceful and lush, this charming indoor plant boasts",
        image: "plant5.png",
        lightAmount: "bright",
        addedDate: "2023-04-20"
    }, // pos 4
];

//----------------------------------------------------------------------
// globals for filter & sort 
// ---------------------------------------------------------------------

let appliedFilter = "";
let appliedSort = "date added";

// ------------------------------------------------------------------------
// when the document loads 
// ---------------------------------------------------------------------

$(document).ready(function () {

    console.log("working");

    // --------------------------------------------
    // Home Page
    // when the hero loads animate it upwards

    $(".hero-image").animate({ top: '-=100px' });
    $(".hero-image2").animate({ top: '-=25px' });


    // ----------------------------------------------
    // browse 

    filterSortPlants();


});

//---------------------------------------------------------------------
// Load All Plants 
// --------------------------------------------------------------------

function loadPlants(plantsToShow) {

    // clearing elements 
    $("#plantsContainer").empty();

    // loop thtough the list of plants 
    for (let i = 0; i < plantsToShow.length; i++) {
        const plant = plantsToShow[i];

        console.log(plant);

        // 1. want to select the plants container and add current array plant to it 
        $("#plantsContainer").append($("#plantCardTemplate").html());

        // 2. create a variable containing the most recently add plant card
        let currentChild = $("#plantsContainer").children().eq(i);

        // 3. set the content for the current plant card from plants list array

        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text(plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);
        $(currentChild).find(".card-img-top").attr('src', '../assets/Plants/' + plant.image);

        // 4. Hide Description Text 
        $(currentChild).find("#descriptionText").hide();

    }
}

//----------------------------------------------------------------------
// when Filter / sort is clicked
// ---------------------------------------------------------------------
$("input[name='filterRadio']").click(function () {
    appliedFilter = $(this).attr('value');

    console.log(appliedFilter);
    filterSortPlants();

});

$("input[name='sortRadio']").click(function () {
    appliedSort = $(this).attr('value');

    console.log(appliedFilter);
    filterSortPlants();

});

function filterSortPlants() {

    let filteredSortedArrPlants = [];

    // filtering the plants 
    if (appliedFilter) {
        filteredSortedArrPlants = arrPlant.filter(plant => plant.lightAmount == appliedFilter);
    } else {
        filteredSortedArrPlants = arrPlant
    }

    // Sort Plants 
    if (appliedSort == "low to high") {

        // Sort plants from the lowest to highest price
        filteredSortedArrPlants = filteredSortedArrPlants.sort((a, b) => {
            return a.price - b.price;
        });

    } else if (appliedSort == "date added") {

        // Sort plants from the newest to oldest
        filteredSortedArrPlants = filteredSortedArrPlants.sort((a, b) => {
            let da = new Date(a.addedDate);
            let db = new Date(b.addedDate);

            return db - da;
        });
    }

    loadPlants(filteredSortedArrPlants);
}

//----------------------------------------------------------------------
// when the card is clicked
// ---------------------------------------------------------------------

$("#plantsContainer").on('click', '.card', function () {

    // TOGGLE PRICE AND DESCRIPT TEXT

    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();

    // resize image to fit added text 
    $(this).find(".card-img-top").toggleClass("small");

});


$("#del1").click(function () {
    // -----------------------------------------------
    // wishlist
    $("#plant1").remove();
});

$("#del2").click(function () {
    // -----------------------------------------------
    // wishlist
    $("#plant2").remove();
});

$("#del3").click(function () {
    // -----------------------------------------------
    // wishlist
    $("#plant3").remove();
});

$(documen.ready(function(){
    
}))