generateRandom();

// the function getArea is an expression bevause it boils down to one value
function getArea(height, width) {
    return height * width;
}

function updateArea() {
    const height = document.getElementById('height').value;
    const width = document.getElementById('width').value;
    document.getElementById('area_result').textContent = "Area: " + getArea(height, width);
    // text content is used to update the text of the elements (p, h1, h2, span, em)
}

function updateTopNumber() {
    const min = document.getElementById('label-upper-number').textContent = 'Upper Number: '
        + document.getElementById('upper-number').value;

}

function generateRandom() {
    const upperNumber = Number(document.getElementById('upper-number').value);
    // from: https://www.w3schools.com/jsref/jsref_random.asp
    const ranNum = Math.floor((Math.random() * upperNumber) + 1);

    document.getElementById('random_result').textContent = 'Random Number: ' + ranNum;
}


let currentDate = new Date();

  function updateDateDisplay() {
    const dateDisplay = document.getElementById('dateDisplay');
    dateDisplay.textContent = currentDate.toDateString();
  }

  function getNextDate() {
    currentDate.setDate(currentDate.getDate() + 1);
    updateDateDisplay();
  }

  function getPrevDate() {
    currentDate.setDate(currentDate.getDate() - 1);
    updateDateDisplay();
  }

  function getTodaysDate() {
    currentDate = new Date();
    updateDateDisplay();
  }

  // Initialize the display with the current date
  updateDateDisplay();
