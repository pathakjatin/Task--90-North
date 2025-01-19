//Javascript function for collapsable left menu
document.getElementById('toggle-menu').addEventListener('click', function() {
    const leftMenu = document.getElementById('left-menu');
    leftMenu.classList.toggle('collapsed');
});


//Javascrip function for page scale
function adjustPageScale() {
    const screenWidth = window.innerWidth;
    let scale;

    if (screenWidth >= 992 && screenWidth <= 1600) {
        scale = '90%';
    } else if (screenWidth >= 700 && screenWidth <= 767) {
        scale = '80%';
    } else if (screenWidth >= 600 && screenWidth < 700) {
        scale = '75%';
    } else if (screenWidth <= 600) {
        scale = '50%';
    } else {
        scale = '100%'; 
    }

    document.body.style.transform = `scale(${scale})`;
    document.body.style.transformOrigin = '0 0'; 
}

adjustPageScale();

window.addEventListener('resize', adjustPageScale);
