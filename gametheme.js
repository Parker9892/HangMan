alert('is working')

console.log('sanity')
// function hangman(m,a,d,o,n,n,a) {
//     console.log(m + a + d + o + n + n + a)
// return m + a + d + o + n + n + a
// }

// const madonna = hangman('m','a','d','o','n','n','a');


// if(madonna===true){
//     console.log('Winner')
//   }else if(madonna==='m'){
//     console.log('lose')
//   }

//pseudo Code
//List of words
var words = ['madonna', 'sixers', 'titans']
let win = 0;
let lost = 0;
let guessesLeft ;
let letterGuess = []
var randIndex
var rand
var underscore
function restart(params) {
    letterGuess = []
    guessesLeft = 10
    randIndex = Math.floor(Math.random() * words.length)
    rand = words[randIndex];
    underscore = []
    for (var i = 0; i < rand.length; i++) {
        underscore.push('_')
        //  console.log(underscore)
    }
    document.getElementById("underscores").innerHTML = underscore.join(" ");
    document.getElementById('wins').innerHTML=win
    document.getElementById('lost').innerHTML=lost
    document.getElementById('letterGuess').innerHTML=letterGuess
    document.getElementById('guessesLeft').innerHTML=guessesLeft

}

restart()

//Take in user input
document.onkeyup = function (event) {
    let userInput = event.key.toLowerCase()
    if (rand.indexOf(userInput) >= 0) {

        for (let index = 0; index < rand.length; index++) {
            if (userInput === rand[index]) (
                underscore[index] = userInput
            )


        }
        document.getElementById("underscores").innerHTML = underscore.join(" ")
        if (underscore.indexOf('_') === -1) {
            win++
            restart()
        }
    } else {
        guessesLeft--
        if (guessesLeft === 0) {
            lost++
            restart()
        }
        else {
            letterGuess.push(userInput)
            document.getElementById('letterGuess').innerHTML = letterGuess.join(" ")
            document.getElementById('guessesLeft').innerHTML=guessesLeft

        }
    }
    console.log(event)
}
 //Is the later in the word
  //if yes replace underscore with the letter
    //if no count down the guesses remaining,display the wrong guesses