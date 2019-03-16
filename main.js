const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', buttonClick);
    document.getElementById('clearBtn').addEventListener('click', buttonClick);
  };

const input = document.querySelector('input');

input.addEventListener('keydown', ?);

const init = () => {
    buttonEvents();
    
}

init();
