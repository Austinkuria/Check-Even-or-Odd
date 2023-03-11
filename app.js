// const numberInput = document.getElementById('number-input');
// const checkOutputText = document.getElementsByClassName('check-output-text');
// const checkButton = document.getElementsByClassName('check-btn');

//  function checkEvenorOdd() {
//     let number = parseInt(numberInput.value);
//     if(number = ""){
//         checkOutputText.innerText = "Please provide a number!"
//     }
//     else if(number % 2 === 0){
//         checkOutputText.innerText=`${number} is Even`
//     }
//     else{
//      checkOutputText.innerText=`${number} is Odd`
//     }
// };

// checkButton.addEventListener('click',checkEvenorOdd);

const numberInput = document.getElementById('number-input');
const checkOutputText = document.getElementsByClassName('check-output-text')[0];
const checkButton = document.getElementsByClassName('check-btn')[0];
const provideNumber = document.getElementById('wrong-answer-high-sound');
const  answer = document.getElementById('correct-answer-sound');

function checkEvenorOdd() {
    let number = numberInput.value;
    if(number === ""){
        checkOutputText.innerText = "Please provide a number!"
        provideNumber.play();
    }
    else if(number % 2 === 0){
        checkOutputText.innerText = `${number} is Even`;
        answer.play()
    }
    else{
        checkOutputText.innerText =` ${number} is Odd`;
        answer.play()
    }
    
    numberInput.value = "";
}

checkButton.addEventListener('click', checkEvenorOdd);

document.addEventListener('keydown',function(e){
    console.log(e)
    if(e.key == "Enter"){
        checkEvenorOdd();
    }
})