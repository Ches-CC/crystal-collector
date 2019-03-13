// alert("My page is connected");
// #1 Assign Global Variables
var winsCounter = 0;
var lossCounter = 0;
var winningNumber = 0;
var currentScore = 0;

// #2 Assign Random Numbers to Variables
var winningRanNum = Math.floor(Math.random() * 101) + 20;
winningNumber = winningRanNum;
$("#winning-number").text(winningRanNum);
// console.log(winningNumber);
//other random number setup below



// wait for the document to load up, then use the anonymous function to run the game
$(document).ready(function() {
    
    //set random numbers to the crystal images
    $(".crystal-image").each(function() {
        var crystalRanNum = Math.floor(Math.random() * 12) + 1;
        console.log(crystalRanNum);
        $(this).attr('crystal-value', crystalRanNum);
 
    })

    // setup the onclick event & all that follows
    $(".crystal-image").on("click", function() {
        var crystalVal = ($(this).attr("crystal-value"));
        crystalVal = parseInt(crystalVal);
        currentScore += crystalVal;
        // console.log(currentScore);
        $("#current-score").text(currentScore);

        if (currentScore === winningNumber) {
            alert("Congrats--you win!! Press OKAY to collect MORE CRYSTALS!!");
            winsCounter++;
            // console.log(winCounter);
            // ratchet reset!?------------------------------------------
            var winningRanNum = Math.floor(Math.random() * 101) + 20;
            winningNumber = winningRanNum;
            $("#winning-number").text(winningRanNum);
            var crystalVal = ($(this).attr("crystal-value"));
            crystalVal = parseInt(crystalVal);
            // reset the Current Score Counter
            currentScore = 0;
            $("#current-score").text(currentScore);
        }
        else if (currentScore > winningNumber) {
            alert("How did you lose this game!? It's not even that hard. Press OKAY to give it another go...")
            lossCounter++;
            // console.log(lossCounter);
            // Ratchet-reset!?--------------------------------------------
            var winningRanNum = Math.floor(Math.random() * 101) + 20;
            winningNumber = winningRanNum;
            $("#winning-number").text(winningRanNum);
            var crystalVal = ($(this).attr("crystal-value"));
            crystalVal = parseInt(crystalVal);
            // reset the Current Score Counter
            currentScore = 0;
            $("#current-score").text(currentScore);

        }
        // don't forget to tally up these bad boys
        $("#total-wins").text(winsCounter);
        $("#total-losses").text(lossCounter);
    })

})