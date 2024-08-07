const subDiv = document.getElementsByClassName('sect');

// console.log(subDiv)


for(let i = 0; i < subDiv.length; i++) {
    subDiv[i].addEventListener('click', () => {
        console.log('clicked')
    }) 
}