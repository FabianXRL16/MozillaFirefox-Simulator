let buttonMenu = document.getElementById("button_menu")

function upMenu(){
    let menu = document.querySelector("#menu_up")
    menu.setAttribute("style", "display:flex")
}

function downMenu(){
    let menu = document.querySelector("#menu_up")
    menu.setAttribute("style", "display:none")
}