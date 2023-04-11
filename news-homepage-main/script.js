const menuBar = document.getElementById('menu-bar');
const menuBarClose = document.getElementById('menu-bar-closed');
const navBar = document.getElementById('navbar');
const overlay = document.createElement('div');


function enableNavbar(){
    navBar.classList.add('navbar-mobile');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
}
function disableNavbar(){
    navBar.classList.remove('navbar-mobile');
    document.body.removeChild(overlay);
}

menuBar.addEventListener('click', enableNavbar);
menuBarClose.addEventListener('click', disableNavbar);