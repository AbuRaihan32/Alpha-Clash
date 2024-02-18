function continueGame(){
    const getAlphabet = getRandomAlphabet();
    
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = getAlphabet;

    setBgColor(getAlphabet);
}

document.addEventListener('keyup', getKeyUpValue);

function playE(){
    hideElementById('home');
    showElementById('play')
    hideElementById('final')

    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);
    continueGame();
}

