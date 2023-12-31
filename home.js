let startbutn = document.querySelector("#startbutn");
let audio = document.getElementById("Audio");

audio.volume = 100.0;

function openNewPage() {
    window.location.href = 'input.html';
}



startbutn.addEventListener("click", openNewPage);
