console.log("JavaScript file loaded");

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('designs').style.display = 'none';
    document.getElementById('codingButton').addEventListener('click', function () {
        document.getElementById('coding').style.display = 'grid';
        document.getElementById('designs').style.display = 'none';
    });

    document.getElementById('designButton').addEventListener('click', function () {
        document.getElementById('designs').style.display = 'block';
        document.getElementById('coding').style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var getInTouchButton = document.getElementById('get-in-touch');
    var form = document.getElementById('myForm');
    getInTouchButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (form.style.display === 'none') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
});

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
