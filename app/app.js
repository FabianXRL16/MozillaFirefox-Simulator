
function toShowMenu(){
    let downMenuContainer = document.querySelector('#downMenuContainer')
    downMenuContainer.classList.remove('container__menu-hidden')
    downMenuContainer.classList.add('container__menu-content')
}

function hiddenMenu(){
    let downMenuContainer = document.querySelector('#downMenuContainer')
    downMenuContainer.classList.add('container__menu-hidden')
    downMenuContainer.classList.remove('container__menu-content')
}
