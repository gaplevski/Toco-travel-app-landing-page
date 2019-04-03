// Look for .hamburger
var hamburger = document.querySelector('.hamburger');
// Look for #mainMenu
var mainMenu = document.querySelector('#main-menu');
// On click
hamburger.addEventListener('click', function() {
    // Toggle class "is-active"
    hamburger.classList.toggle('is-active');
    // Toggle open/close menu
    mainMenu.classList.toggle("nav-open")

});

var mainMenuItems = document.querySelectorAll('#main-menu li a');

mainMenuItems.forEach(function (item) {
    item.addEventListener('click', function() {
        //If this is mobile view, so the hamburger is visible
        if(hamburger.classList.contains('is-active')){
            // Toggle class "is-active"
            hamburger.classList.toggle('is-active');
            // Toggle open/close menu
            mainMenu.classList.toggle("nav-open")
        }


    });
});
