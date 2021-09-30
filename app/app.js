
function toShowMenu(){
    let downMenuContainer = document.querySelector('#downMenuContainer')
    downMenuContainer.classList.remove('container__menu-hidden')
    downMenuContainer.classList.add('container__menu-content')
    downMenuContainer.classList.add('animationAdd')
}

function hiddenMenu(){
    let downMenuContainer = document.querySelector('#downMenuContainer')
    downMenuContainer.classList.remove('container__menu-content')
    downMenuContainer.classList.add('container__menu-hidden')

}
