const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const determineConverter = () =>{

    
};

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
    document.getElementById('tempInput').addEventListener('keydown', determineConverter);
    document.getElementById('clearBtn').addEventListener('click', );
    document.getElementById('radio').addEventListener('submit', function(event)
    {
        let data = new FormData(form);
        let output = "";
        for (const entry of data) {
          output = entry[1];
        };
        console.log(output);
        event.preventDefault();
    }, false);
  };


const init = () => {
    buttonEvents();

}

init();
