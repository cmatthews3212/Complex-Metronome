const groupButtons = document.getElementsByClassName('button');
const addGroup = document.getElementById('add-group');
const removeGroup = document.getElementById('remove-group');
const groupPlus = document.getElementsByClassName('groupPlus');
const groupMinus = document.getElementsByClassName('groupMinus');
const groupValue = document.getElementsByClassName('btn-value');

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

let groupCount = 0;

let groupCount1 = 0;
let groupCount2 = 0;
let groupCount3 = 0;
let groupCount4 = 0;
let groupCount5 = 0;
let groupCount6 = 0;
let groupCount7 = 0;
let groupCount8 = 0;
let groupCount9 = 0;
let groupCount10 = 0;
let groupCount11 = 0;
let groupCount12 = 0;
let groupCount13 = 0;
let groupCount14 = 0;
let groupCount15 = 0;
let groupCount16 = 0;


function incrementGroupCount1() {
    groupCount1++;



}
function incrementGroupCount2() {
    groupCount2++;


}
function incrementGroupCount3() {

    groupCount3++;



}
function incrementGroupCount4() {

    groupCount4++;


}
function incrementGroupCount5() {

    groupCount5++;



}
function incrementGroupCount6() {

    groupCount6++;



}
function incrementGroupCount7() {

    groupCount7++;



}
function incrementGroupCount8() {

    groupCount8++;



}
function incrementGroupCount9() {

    groupCount9++;
 


}
function incrementGroupCount10() {

    groupCount10++;
 


}
function incrementGroupCount11() {

    groupCount11++;



}
function incrementGroupCount12() {

    groupCount12++;



}
function incrementGroupCount13() {

    groupCount13++;
 


}
function incrementGroupCount14() {

    groupCount14++;
  


}
function incrementGroupCount15() {

    groupCount15++;



}
function incrementGroupCount16() {
    groupCount16++;


}

function decrementGroupCount1() {
    if (groupCount1 > 0) {
        groupCount1--;

    }
}
function decrementGroupCount2() {
    if (groupCount2 > 0) {
        groupCount2--;

    }
}function decrementGroupCount3() {
    if (groupCount3 > 0) {
        groupCount3--;

    }
}function decrementGroupCount4() {
    if (groupCount4 > 0) {
        groupCount4--;

    }
}function decrementGroupCount5() {
    if (groupCount5 > 0) {
        groupCount5--;

    }
}function decrementGroupCount6() {
    if (groupCount6 > 0) {
        groupCount6--;

    }
}function decrementGroupCount7() {
    if (groupCount7 > 0) {
        groupCount7--;

    }
}function decrementGroupCount8() {
    if (groupCount8 > 0) {
        groupCount8--;

    }
}function decrementGroupCount9() {
    if (groupCount9 > 0) {
        groupCount9--;

    }
}function decrementGroupCount10() {
    if (groupCount10 > 0) {
        groupCount10--;

    }
}function decrementGroupCount11() {
    if (groupCount11 > 0) {
        groupCount11--;

    }
}function decrementGroupCount12() {
    if (groupCount12 > 0) {
        groupCount12--;

    }
}function decrementGroupCount13() {
    if (groupCount13 > 0) {
        groupCount13--;

    }
}function decrementGroupCount14() {
    if (groupCount14 > 0) {
        groupCount14--;

    }
}function decrementGroupCount15() {
    if (groupCount15 > 0) {
        groupCount15--;

    }
}function decrementGroupCount16() {
    if (groupCount16 > 0) {
        groupCount16--;

    }
}

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

for (let i = 0; i < groupPlus.length; i++) {
    groupPlus[i].addEventListener('click', () => {
        if(groupPlus[i] === groupButtons[0].children[3]) {
            incrementGroupCount1();
            groupButtons[0].children[2].innerText = groupCount1;
        } else if (groupPlus[i] == groupButtons[1].children[3]) {
            incrementGroupCount2();
            groupButtons[1].children[2].innerText = groupCount2;
        } else if (groupPlus[i] == groupButtons[2].children[3]) {
            incrementGroupCount3();
            groupButtons[2].children[2].innerText = groupCount3;
        } else if (groupPlus[i] == groupButtons[3].children[3]) {
            incrementGroupCount4();
            groupButtons[3].children[2].innerText = groupCount4;
        }else if (groupPlus[i] == groupButtons[4].children[3]) {
            incrementGroupCount5();
            groupButtons[4].children[2].innerText = groupCount5;
        }else if (groupPlus[i] == groupButtons[5].children[3]) {
            incrementGroupCount6();
            groupButtons[5].children[2].innerText = groupCount6;
        }else if (groupPlus[i] == groupButtons[6].children[3]) {
            incrementGroupCount7();
            groupButtons[6].children[2].innerText = groupCount7;
        }else if (groupPlus[i] == groupButtons[7].children[3]) {
            incrementGroupCount8();
            groupButtons[7].children[2].innerText = groupCount8;
        }else if (groupPlus[i] == groupButtons[8].children[3]) {
            incrementGroupCount9();
            groupButtons[8].children[2].innerText = groupCount9;
        }else if (groupPlus[i] == groupButtons[9].children[3]) {
            incrementGroupCount10();
            groupButtons[9].children[2].innerText = groupCount10;
        }else if (groupPlus[i] == groupButtons[10].children[3]) {
            incrementGroupCount11();
            groupButtons[10].children[2].innerText = groupCount11;
        }else if (groupPlus[i] == groupButtons[11].children[3]) {
            incrementGroupCount12();
            groupButtons[11].children[2].innerText = groupCount12;
        }else if (groupPlus[i] == groupButtons[12].children[3]) {
            incrementGroupCount13();
            groupButtons[12].children[2].innerText = groupCount13;
        }else if (groupPlus[i] == groupButtons[13].children[3]) {
            incrementGroupCount14();
            groupButtons[13].children[2].innerText = groupCount14;
        }else if (groupPlus[i] == groupButtons[14].children[3]) {
            incrementGroupCount13();
            groupButtons[14].children[2].innerText = groupCount13;
        }else if (groupPlus[i] == groupButtons[14].children[3]) {
            incrementGroupCount15();
            groupButtons[14].children[2].innerText = groupCount15;
        }else if (groupPlus[i] == groupButtons[15].children[3]) {
            incrementGroupCount16();
            groupButtons[15].children[2].innerText = groupCount16;
        }
        
    })
}

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



