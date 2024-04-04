const sketchpad = document.querySelector('.sketchpad');
const pixelButton = document.querySelector('.btn');

createGrid();

pixelButton.addEventListener('click', event => {

    promptMessage();   

});

function promptMessage() {

    let pixelCount = window.prompt('How many squares per side would you like your new grid to be?', '50');    

    if (typeof pixelCount === 'string') {

        if (Number(pixelCount) <= 100 && Number(pixelCount >= 1)) {

            createGrid(pixelCount);

        } else {

            alert('Please enter a valid input (i.e. a number between 1 and 100).');

            promptMessage();

        }
    }

};

function createGrid(pixelCount = 16) {

    removeGrid();


    for (let i = 0; i < pixelCount; i ++) {    

        const row = document.createElement('div');
    
        row.setAttribute('class', `row ${i}`)
    
        for (let j = 0; j < pixelCount; j ++) {
    
            const rowEntry = document.createElement('div');
    
            rowEntry.addEventListener('mouseover', event =>  {
    
                event.target.setAttribute('class', 'mouseover');
    
            })
    
            rowEntry.setAttribute('class', `rowEntry ${j}`);
    
            row.appendChild(rowEntry);
            
    
        }
    
        sketchpad.appendChild(row);
    
    }



};

function removeGrid() {

    const rows = document.querySelectorAll('.row');
    const rowEntries = document.querySelectorAll('.rowEntry');

    rowEntries.forEach(ele => {

        ele.remove();

    });
    
    rows.forEach(ele => {

        ele.remove();

    });
};










