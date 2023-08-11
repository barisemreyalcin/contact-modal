let openModal = document.getElementById("open-modal");
let closeModal = document.getElementById("close-modal");
let overlayEl = document.getElementById("overlay")

openModal.addEventListener("click", function() {
    overlayEl.style.display = "block";
})

closeModal.addEventListener("click", function() {
    overlayEl.style.display = "none";
})