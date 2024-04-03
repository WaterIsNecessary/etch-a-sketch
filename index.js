const sketchpad = document.querySelector('.sketchpad');

for (let i = 0; i < 16; i ++) {    

    const row = document.createElement('div');

    row.setAttribute('class', `row ${i}`)

    for (let j = 0; j < 16; j ++) {

        const rowEntry = document.createElement('div');

        rowEntry.addEventListener('mouseover', event =>  {

            event.target.setAttribute('class', 'mouseover');

        })

        rowEntry.setAttribute('class', `rowEntry ${j}`);

        row.appendChild(rowEntry);
        

    }

    sketchpad.appendChild(row);

}





