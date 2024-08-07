const groupButtons = document.getElementsByClassName('button');
const groupPlus = document.getElementsByClassName('')

// console.log(groupButtons)

let btnClicked1 = false;
let btnClicked2 = false;
let btnClicked3 = false;
let btnClicked4 = false;
let btnClicked5 = false;
let btnClicked6 = false;
let btnClicked7 = false;
let btnClicked8 = false;
let btnClicked9 = false;
let btnClicked10 = false;
let btnClicked11 = false;
let btnClicked12 = false;
let btnClicked13 = false;
let btnClicked14 = false;
let btnClicked15 = false;
let btnClicked16 = false;
let btnClicked = false;


for(let i = 0; i < groupButtons.length; i++) {
    groupButtons[i].addEventListener('click', () => {
        groupButtons[i].setAttribute('style', 'background-color: var(--red1);')
        groupButtons[i].children[0].setAttribute('style', 'color: white;')
        groupButtons[i].children[1].setAttribute('style', 'background-color: white; color: var(--red1);')
        groupButtons[i].children[2].setAttribute('style', 'color: white;')
        groupButtons[i].children[3].setAttribute('style', 'background-color: white; color: var(--red1);')

        for (const btn of groupButtons) {
            if (btn !== groupButtons[i]) {
                btn.setAttribute('style', 'background-color: white;')
                btn.children[0].setAttribute('style', 'color: var(--red1);')
                btn.children[1].setAttribute('style', 'background-color: var(--red1); color: white;')
                btn.children[2].setAttribute('style', 'color: var(--red1);')
                btn.children[3].setAttribute('style', 'background-color: var(--red1); color: white;')
                btnClicked1 = false;
                btnClicked2 = false;
                btnClicked3 = false;
                btnClicked4 = false;
                btnClicked5 = false;
                btnClicked6 = false;
                btnClicked7 = false;
                btnClicked8 = false;
                btnClicked9 = false;
                btnClicked10 = false;
                btnClicked11 = false;
                btnClicked12 = false;
                btnClicked13 = false;
                btnClicked14 = false;
                btnClicked15 = false;
                btnClicked16 = false;
            }
        }

        if (groupButtons[i] === groupButtons[0]) {
            btnClicked1 = true;
        } else if (groupButtons[i] === groupButtons[1]) {
            btnClicked2 = true;
        } else if (groupButtons[i] === groupButtons[2]) {
            btnClicked3 = true;
        } else if (groupButtons[i] === groupButtons[3]) {
            btnClicked4 = true;
        } else if (groupButtons[i] === groupButtons[4]) {
            btnClicked5 = true;
        } else if (groupButtons[i] === groupButtons[5]) {
            btnClicked6 = true;
        } else if (groupButtons[i] === groupButtons[6]) {
            btnClicked7 = true;
        } else if (groupButtons[i] === groupButtons[7]) {
            btnClicked8 = true;
        } else if (groupButtons[i] === groupButtons[8]) {
            btnClicked9 = true;
        } else if (groupButtons[i] === groupButtons[9]) {
            btnClicked10 = true;
        } else if (groupButtons[i] === groupButtons[10]) {
            btnClicked11 = true;
        } else if (groupButtons[i] === groupButtons[11]) {
            btnClicked12 = true;
        } else if (groupButtons[i] === groupButtons[12]) {
            btnClicked13 = true;
        } else if (groupButtons[i] === groupButtons[13]) {
            btnClicked14 = true;
        } else if (groupButtons[i] === groupButtons[14]) {
            btnClicked15 = true;
        } else if (groupButtons[i] === groupButtons[15]) {
            btnClicked16 = true;
        }


    })
}

