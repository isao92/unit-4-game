


// JavaScript function that wraps everything
$(document).ready(function () {

    var diamon1 = 0;
    var diamon2 = 0;
    var diamon3 = 0;
    var diamon4 = 0;

    //random target number bigger than 20
    function randomNumber() {
        return (Math.floor(Math.random() * 40 + 20));
    }

    //random number for Diamond smaller than 20
    function randomNumberDiamond() {
        return (Math.floor(Math.random() * 10 + 1));
    }

    //show random number
    var targetNumber = randomNumber();
    document.getElementById("random-number").innerHTML = targetNumber;

    function newRandomforDiamond() {
        diamond1 = randomNumberDiamond();
        diamond2 = randomNumberDiamond();
        diamond3 = randomNumberDiamond();
        diamond4 = randomNumberDiamond();
    }

    newRandomforDiamond();
    var totalScore = 0;
    var wins = 0;
    var loses = 0;

    // Diamond1 button
    $(".crystal-1").on("click", function () {

        totalScore = diamond1 + totalScore;
        document.getElementById("total-score").innerHTML = totalScore;
        //show wins
        if (totalScore == targetNumber) {
            wins += 1;
            document.getElementById("wins").innerHTML = wins;
            totalScore = 0;
            document.getElementById("total-score").innerHTML = totalScore;

            newRandomforDiamond();

            //show random number
            targetNumber = randomNumber();
            document.getElementById("random-number").innerHTML = targetNumber;

        }


        //show loses
        if (totalScore > targetNumber) {
            loses += 1;
            document.getElementById("loses").innerHTML = loses;
            totalScore = 0;
            document.getElementById("total-score").innerHTML = totalScore;
            newRandomforDiamond();

            //show random number
            targetNumber = randomNumber();
            document.getElementById("random-number").innerHTML = targetNumber;
        }


    });

    // Diamond2 button
    $(".crystal-2").on("click", function () {

        totalScore = diamond2 + totalScore;
        document.getElementById("total-score").innerHTML = totalScore;

        //show wins
        if (totalScore == targetNumber) {
            wins += 1;
            document.getElementById("wins").innerHTML = wins;
            totalScore = 0;
            document.getElementById("total-score").innerHTML = totalScore;
            newRandomforDiamond();
            //show random number
            targetNumber = randomNumber();
            document.getElementById("random-number").innerHTML = targetNumber;
        }


        //show loses
        if (totalScore > targetNumber) {
            loses += 1;
            document.getElementById("loses").innerHTML = loses;
            totalScore = 0;
            document.getElementById("total-score").innerHTML = totalScore;
            newRandomforDiamond();
            //show random number
            targetNumber = randomNumber();
            document.getElementById("random-number").innerHTML = targetNumber;
        }


    });

    // Diamond3 button
    $(".crystal-3").on("click", function () {

        totalScore = diamond3 + totalScore;
        document.getElementById("total-score").innerHTML = totalScore;


        //show wins
        if (totalScore == targetNumber) {
            wins += 1;
            document.getElementById("wins").innerHTML = wins;
            totalScore = 0;
            document.getElementById("total-score").innerHTML = totalScore;
            newRandomforDiamond();
            //show random number
            targetNumber = randomNumber();
            document.getElementById("random-number").innerHTML = targetNumber;

        }


        //show loses
        if (totalScore > targetNumber) {
            loses += 1;
            document.getElementById("loses").innerHTML = loses;
            totalScore = 0;
            document.getElementById("total-score").innerHTML = totalScore;
            newRandomforDiamond();
            //show random number
            targetNumber = randomNumber();
            document.getElementById("random-number").innerHTML = targetNumber;
        }

    });

    // Diamond4 button
    $(".crystal-4").on("click", function () {

        totalScore = diamond4 + totalScore;
        document.getElementById("total-score").innerHTML = totalScore;

        //show wins
        if (totalScore == targetNumber) {
            wins += 1;
            document.getElementById("wins").innerHTML = wins;
            totalScore = 0;
            document.getElementById("total-score").innerHTML = totalScore;
            newRandomforDiamond();
            //show random number
            targetNumber = randomNumber();
            document.getElementById("random-number").innerHTML = targetNumber;
        }


        //show loses
        if (totalScore > targetNumber) {

            loses += 1;
            document.getElementById("loses").innerHTML = loses;
            totalScore = 0;
            document.getElementById("total-score").innerHTML = totalScore;
            newRandomforDiamond();
            //show random number
            targetNumber = randomNumber();
            document.getElementById("random-number").innerHTML = targetNumber;
        }




    });



});

