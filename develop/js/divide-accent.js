const divide = document.getElementById('divide');
const accent = document.getElementById('accent');
const divideText = document.getElementById('divide-text');
const accentText = document.getElementById('accent-text');

let count = 0
function incrementCount() {
    count++;
}

function decrementCount() {
    if (count > 0) {
        count--;
    }
}

divide.addEventListener("click", () => {
    incrementCount()
    if (count === 1) {
        divideText.innerText = "Divide by 2"
    } else if (count === 2) {
        divideText.innerText = "Divide by 4"
    } else if (count > 2){
        count = 0
        divideText.innerText = "Divide by 0"

    }
})