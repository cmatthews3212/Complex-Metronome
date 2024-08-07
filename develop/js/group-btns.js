const groupButtons = document.getElementsByClassName('button');
const groupPlus = document.getElementsByClassName('')

console.log(groupButtons)

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
            }
        }
    })

    groupButtons[i].children[1].addEventListener('click', () => {

    })
}

