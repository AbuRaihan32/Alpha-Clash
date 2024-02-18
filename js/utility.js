// hider function
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// shower function 
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

// set bg color function
function setBgColor(element) {
    const getShowedElementById = document.getElementById(element);
    getShowedElementById.classList.add('bg-purple-400')
}
function removeBgColor(element) {
    const getShowedElementById = document.getElementById(element);
    getShowedElementById.classList.remove('bg-purple-400')
}
// get alphabet function
function getRandomAlphabet() {
    // get alphabet
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetes = alphabetString.split('');

    // get random number 
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    // get random alphabet
    const alphabet = alphabetes[index];
    return alphabet;
}
// 
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);

    return value;
}
// set element inner by id
function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}








// keyup eventHandler function
function getKeyUpValue(event) {
    const pressedKey = event.key;
    const lowerCaseKey = pressedKey.toLowerCase();

    const getAlphabet = document.getElementById('current-alphabet');
    const getInnerAlphabet = getAlphabet.innerText;
    
    if(pressedKey === "Escape"){
        gameOver();
    }
    if (getInnerAlphabet.toLowerCase() === lowerCaseKey) {
        const elementValue = getElementValueById('current-score');
        const newScore = elementValue + 1;
        setElementValueById('current-score', newScore)

        // ---------------------------------------------------------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        removeBgColor(lowerCaseKey);
        continueGame();
    } else {
        const elementValue = getElementValueById('current-life');
        const newLife = elementValue - 1;
        setElementValueById('current-life', newLife)
        if (newLife <= 0){
            gameOver();
        }



        // ____________________________________________________________________
        // // get current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // >>>>>>>>>>>>>>>>
        // const newLife = currentLife - 1;
        // // set the current life 
        // currentLifeElement.innerText = newLife;
        // console.log(newLife);
    }
}

function gameOver(){
    hideElementById('play');
    showElementById('final')
    const netScore = getElementValueById('current-score');
    setElementValueById('final-score', netScore);

    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetText =currentAlphabet.innerText;
    removeBgColor(currentAlphabetText);
}