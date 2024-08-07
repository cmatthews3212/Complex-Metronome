const subDiv = document.getElementsByClassName('sect');
const groupNumber = document.getElementsByClassName('number');

console.log(subDiv)

let selectedSubdiv = 0;

for(let i = 0; i < groupButtons.length; i++) {
    for(let i = 0; i < subDiv.length; i++) {
            subDiv[i].addEventListener('click', () => {
                if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked1 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red3);');
                    selectedSubdiv = 1
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked2 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red4);');
                    selectedSubdiv = 2
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked3 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red3);');
                    selectedSubdiv = 3
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked4 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red4);');
                    selectedSubdiv = 4
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked5 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red3);');
                    selectedSubdiv = 5
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked6 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red4);');
                    selectedSubdiv = 6
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked7 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red3);');
                    selectedSubdiv = 7
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked8 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red4);');
                    selectedSubdiv = 8;
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked9 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red3);');
                    selectedSubdiv = 9;
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked10 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red4);');
                    selectedSubdiv = 10;
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked11 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red3);');
                    selectedSubdiv = 11;
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked12 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red4);');
                    selectedSubdiv = 12;
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked13 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red3);');
                    selectedSubdiv = 13;
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked14 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red4);');
                    selectedSubdiv = 14;
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked15 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red3);');
                    selectedSubdiv = 15
                } else if (groupButtons[i].getAttribute('style', 'background-Color: var(--red1);') && btnClicked16 === true) {
                    subDiv[i].setAttribute('style', 'background-color: var(--red4);');
                    selectedSubdiv = 16;
                }
            }) 

        }
    }

        

