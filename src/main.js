const ratingContainer = document.getElementById('ratingcontainer');
const rating = document.getElementById('rating');
const submit = document.getElementById('submit');
const numSelected = document.querySelector(".num-selected");

function setActive(butn) {
    var buttons = document.getElementsByName('rating');
    for (let i=0; i<buttons.length;i++) {
        buttons[i].classList.remove("active")
    }

    var activeBtn = document.getElementById(butn);
    activeBtn.classList.add('active');
}
