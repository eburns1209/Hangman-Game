Main = {};
Main.WordArray = [];
Main.WordUArray = [];

Main.Lives = 4;

Main.numInWordBank = Words.Length;
Main.Word = "test";
Main.WordU ="";

Main.PullWord = function(){
    Main.Word = Words.List[(Math.floor(Math.random() * Main.numInWordBank))];
}

Main.SetUnderline = function (){
    Main.PullWord();
    for(i=0; i < Main.Word.Length; i ++){
        Main.WordArray[i] = Main.Word.charAt(i);
        Main.WordUArray[i] = "_";
    }
    Main.WordU = Main.WordUArray.join("");
    document.getElementById("WORD").innerHTML = Main.WordU;

    document.getElementById("numLetters").innerHTML = Main.Word.Length;
}

Main.UpdateLetter = function(letter){
    Main.Changes = 0;
    for(i=0; i < Main.Word.Length; i ++){
        Main.WordArray[i] = Main.Word.charAt(i);
        if(Main.Word.charAt(i) == letter ){
            Main.WordUArray[i] = letter;
            Main.Changes + = 1;
        }
    }
    if(Main.Changes < 1){
        Main.Lives - = 1;
        document.getElementById("Lives").innerHTML = Main.Lives;
    }
    Main.WordU = Main.WordUArray.join("");
    document.getElementById("WORD").innerHTML = Main.WordU;

    Main.Word1 = Main.WordArray.join("");
    Main.Word2 = Main.WordUArray.join("");

    if(Mian.Word1 == Main.Word2){
        alert ("You Won! Loading New Word");
        window.location.reload();
    }
    if (Main.Lives < 1){
        document.getElementById("WORD").innerHTML = Main.Word1;
        alert ("You have run out of lives, please try again!");
        window.location.reload();
    }
}
    
    Main.PullWord();
    Main.SetUnderline();
//     var randomWordArr = ["bike","run", "swim", "shoes", "beer"];
//     var randomWord = 
//     // var = [];
//     var chosenWord = "";
//     var lettersinChosenWord = [];
//     var numBlanks = 0;
//     var blanksAndSucesses = [];
//     var wrongGuess = [];

//     var winCounter = 0;
//     var lossCounter = 0;
//     var numGuesses = 9;

//     var s;
//     var count = 0;
//     var answerArray = [];

//     function startGame ()
//     {
//         randomWord = [randomWordArr[Math.floor(Math.random() * randomWordArr)]];

//         {
//         for (var i = 0; i < randomWordArr.length; i++)
//         }

//         { randomWordArr[i] = "_ _ _ _ _";}
//                 s = answerArray.join(" ");
//             document.getElementById("answer").innerHTML = s;
//         }
//     }

//     // function startUp()
    

    

//     //  }

//     function Letter()
//         {
//         var letter = document.getElementById("letter").value;

//         if (letter.length > 0)
//         { for (var i = 0; i < randomWordArr.length; i++)
//             if (randomWordArr[i]=== letter)
//                 // {answerArray[i] = letter;
//                 // }
//         }
//     }

//     count++{
//     document.getElementById("counter").innerHTML = "No of clicks: " + count;

//     document.getElementById("answer").innerHTML = randomWordArr.join(" ");
// }

    
    
//         if (count > 5)
//     {
//         document.getElementById("stat").innerHTML = "Come on - you should have guessed it by now";
//     }
// }
//     