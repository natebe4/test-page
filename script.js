// HAMBURGER MENU 

// to show/hide the hamburger menu

function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('show');
}

// showing hamburger menu, and then hiding the buttons if screensize shows hamburger menu

function toggleMenu() {
    var menuItems = document.querySelector('.menu-items');
    var content = document.querySelector('.content');
    menuItems.classList.toggle('show');
    content.classList.toggle('hide');
}

// END

// CODING/DESIGNS BUTTONS

// to click the get in touch button to show form and add a dim to background

document.addEventListener('DOMContentLoaded', function () {
    var getInTouchButton = document.getElementById('get-in-touch');
    var form = document.getElementById('myForm');
    var dimOverlay = document.querySelector('.dim-overlay');


    // adding click evnt listener to the button
    getInTouchButton.addEventListener('click', function () {
        // Toggle the display of the form
        form.style.display = 'block';
        // Show the dim overlay
        dimOverlay.style.display = 'block';
    });

    // adding click event listener to the dim over lay so you can click outside the form to exit
    dimOverlay.addEventListener('click', function () {
        // youre hiding the form and diming the overlay when clicked.
        form.style.display = 'none';
        dimOverlay.style.display = 'none';
    });
});

// toggling between coding/designs being shown, and keeps whichever you are on - highlighted.

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('designs').style.display = 'none';

    var codingButton = document.getElementById('codingButton');
    codingButton.addEventListener('click', function () {
        document.getElementById('coding').style.display = 'grid';
        document.getElementById('designs').style.display = 'none';
        codingButton.classList.add('default-button');
        document.getElementById('designButton').classList.remove('default-button');
    });

    var designButton = document.getElementById('designButton');
    designButton.addEventListener('click', function () {
        document.getElementById('designs').style.display = 'block';
        document.getElementById('coding').style.display = 'none';
        designButton.classList.add('default-button');
        codingButton.classList.remove('default-button');
    });
});

// END

// pop up image of screenshot 

document.getElementById('designScreenshot').addEventListener('click', function () {
    document.getElementById('popupOverlay').style.display = 'block';
});

document.getElementById('popupOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// END

