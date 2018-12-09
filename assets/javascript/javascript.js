//create variables
var objective = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["assets/images/bluegem.jpg","assets/images/redgem.jpg", "assets/images/greengem.jpg", "assets/images/yellowgem.jpg"];

// Functions

function randomTargetNumber () {//creates objective number
    objective = Math.floor(Math.random() * 102) + 19;
}

function resetGems () { //creates and reset the gems switching their random number each time
    for (var i = 0; i < images.length; i++) {
        var gem = $("<img>");
        gem.addClass("gem");
        gem.attr("src", images[i]);
        gem.attr("value", (Math.floor(Math.random() * 12) + 1));
        gem.attr("height", "100");
        $(".gem-images").append(gem);
    }
}

function resetHTML () {
    $(".Objective").html(objective);
    $(".WL").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".current").html(counter);
    $(".gem-images").empty();
}

function totalReset () {
    randomTargetNumber ();
    counter = 0;
    resetHTML ();
    resetGems ();
}

randomTargetNumber();
resetHTML ();
resetGems ();

function crystalClick () {
 
    counter += parseInt($(this).attr("value"));
    $(".current").html(counter);
    if (counter == objective) {
        wins++;
        totalReset();
    }
    else if (counter > objective) {
        losses++;
        totalReset();
    };
};

$(document).on("click", ".gem", crystalClick);
