const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const determineConverter = () =>{
  let domString = '';
  if (document.querySelector('input[name="temperature"]:checked').value === 'C'){

    let finalTemp = document.getElementById('tempInput').value * 1.8 + 32;

    if (finalTemp <= 32){
      document.getElementById('tempOutput').style.color = 'blue';
    }else if (finalTemp > 32 && finalTemp < 90){
      document.getElementById('tempOutput').style.color = 'green';
    }else if (finalTemp >= 90){
      document.getElementById('tempOutput').style.color = 'red';
    }

    domString += `<h3>${finalTemp} Degrees Fahrenheit</h3>`

  } else if (document.querySelector('input[name="temperature"]:checked').value === 'F'){
    
    let finalTemp = (document.getElementById('tempInput').value - 32) / 1.8;
    if (finalTemp <= 0){
      document.getElementById('tempOutput').style.color = 'blue';
    }else if (finalTemp > 0 && finalTemp < 32){
      document.getElementById('tempOutput').style.color = 'green';
    }else if (finalTemp >= 32){
      document.getElementById('tempOutput').style.color = 'red';
    }
    domString += `<h3>${finalTemp} Degrees Celsius</h3>`

  }

    printToDom('tempOutput', domString);
};

const clearInput = () =>{
document.getElementById('tempInput').value = '';
};

const buttonEvents = () => {
    document.getElementById('convertBtn').addEventListener('click', determineConverter);
    document.getElementById('tempInput').addEventListener('keydown', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
        determineConverter();
      }
  });
    document.getElementById('clearBtn').addEventListener('click', clearInput);
    
  };


const init = () => {
    buttonEvents();

}

init();
