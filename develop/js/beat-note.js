const beatPlus = document.getElementById('beat-plus');
const beatMinus = document.getElementById('beat-minus');
const notePlus = document.getElementById('note-plus');
const noteMinus = document.getElementById('note-minus');
const beatNum = document.getElementById('beatNum');
const noteNum = document.getElementById('noteNum');

let beatNoteVal = 4;
function incrementValue() {
    beatNoteVal++;
}
function decrementValue() {
    if (beatNoteVal > 0 ) {
        beatNoteVal--;
    }
}

beatPlus.addEventListener('click', () => {
    incrementValue();
    beatNum.innerText = beatNoteVal;
    
});

beatMinus.addEventListener('click', () => {
    decrementValue();
    beatNum.innerText = beatNoteVal;
    
});

notePlus.addEventListener('click', () => {
    incrementValue();
    noteNum.innerText = beatNoteVal;
    
});

noteMinus.addEventListener('click', () => {
    decrementValue();
    noteNum.innerText = beatNoteVal;
    
});