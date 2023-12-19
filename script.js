const toggleButton = document.getElementsByClassName('navbar__toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');

toggleButton.addEventListener( 'click', function() {
    var i = 0;
    for( i; i<navbarLinks.length; i++ )
    navbarLinks[i].classList.toggle('active');
})