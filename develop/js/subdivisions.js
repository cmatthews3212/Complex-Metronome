const subDiv = document.getElementsByClassName('sect');

for(let i = 0; i < subDiv.length; i++) {
    subDiv[i].addEventListener('click', () => {
        subDiv[i].setAttribute('style', 'background-color: var(--red2);');
    }) 
}