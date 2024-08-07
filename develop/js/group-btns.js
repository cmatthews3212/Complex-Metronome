const groupButtons = document.getElementsByClassName('button');
const addGroup = document.getElementById('add-group');
const removeGroup = document.getElementById('remove-group');

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
};




addGroup.addEventListener('click', () => {
    incrementCount()
    if (count === 1) {
        groupButtons[1].classList.remove('d-none')
        removeGroup.classList.remove('d-none')
    } else if (count === 2) {
        groupButtons[2].classList.remove('d-none')
    } else if (count === 3) {
        groupButtons[3].classList.remove('d-none')
    } else if (count === 4) {
        groupButtons[4].classList.remove('d-none')
    } else if (count === 5) {
        groupButtons[5].classList.remove('d-none')
    } else if (count === 6) {
        groupButtons[6].classList.remove('d-none')
    } else if (count === 7) {
        groupButtons[7].classList.remove('d-none')
    } else if (count === 8) {
        groupButtons[8].classList.remove('d-none')
    } else if (count === 9) {
        groupButtons[9].classList.remove('d-none')
    } else if (count === 10) {
        groupButtons[10].classList.remove('d-none')
    } else if (count === 11) {
        groupButtons[11].classList.remove('d-none')
    } else if (count === 12) {
        groupButtons[12].classList.remove('d-none')
    } else if (count === 13) {
        groupButtons[13].classList.remove('d-none')
    } else if (count === 14) {
        groupButtons[14].classList.remove('d-none')
    } else if (count === 15) {
        groupButtons[15].classList.remove('d-none')
        addGroup.classList.add('d-none')
    } 
})

removeGroup.addEventListener('click', () => {
    decrementCount()
    if (count === 0) {
        groupButtons[1].classList.add('d-none')
        removeGroup.classList.add('d-none')
    } else if (count === 1) {
        groupButtons[2].classList.add('d-none')
    } else if (count === 2) {
        groupButtons[3].classList.add('d-none')
    } else if (count === 3) {
        groupButtons[4].classList.add('d-none')
    } else if (count === 4) {
        groupButtons[5].classList.add('d-none')
    } else if (count === 5) {
        groupButtons[6].classList.add('d-none')
    } else if (count === 6) {
        groupButtons[7].classList.add('d-none')
    } else if (count === 7) {
        groupButtons[8].classList.add('d-none')
    } else if (count === 8) {
        groupButtons[9].classList.add('d-none')
    } else if (count === 9) {
        groupButtons[10].classList.add('d-none')
    } else if (count === 10) {
        groupButtons[11].classList.add('d-none')
    } else if (count === 11) {
        groupButtons[12].classList.add('d-none')
    } else if (count === 12) {
        groupButtons[13].classList.add('d-none')
    } else if (count === 13) {
        groupButtons[14].classList.add('d-none')
    } else if (count === 14) {
        groupButtons[15].classList.add('d-none')
        addGroup.classList.remove('d-none')
    }   

})

