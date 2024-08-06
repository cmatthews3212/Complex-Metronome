const beatPlus = document.getElementById('beat-plus');
const beatMinus = document.getElementById('beat-minus');
const notePlus = document.getElementById('note-plus');
const noteMinus = document.getElementById('note-minus');
const beatNum = document.getElementById('beatNum');
const noteNum = document.getElementById('noteNum');

let beatNoteVal = 4;
function incrementCount() {
    beatNoteVal++;
}
function decrementCount() {
    if (beatNoteVal > 0 ) {
        beatNoteVal--;
    }
}

beatPlus.addEventListener('click', () => {
    incrementCount();
    beatNum.innerText = beatNoteVal;
    
});

beatMinus.addEventListener('click', () => {
    decrementCount();
    beatNum.innerText = beatNoteVal;
    
});

notePlus.addEventListener('click', () => {
    incrementCount();
    noteNum.innerText = beatNoteVal;
    
});

noteMinus.addEventListener('click', () => {
    decrementCount();
    noteNum.innerText = beatNoteVal;
    
});