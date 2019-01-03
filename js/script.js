console.log("READY")

const feedbackButton = document.querySelector(".contact-us .button");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackModalClose = document.querySelector(".modal-feedback .close-button");
const overlay = document.querySelector(".overlay");

feedbackButton.addEventListener("click",(e)=>{
    e.preventDefault();
    feedbackModal.classList.add("visible");
    overlay.classList.add("visible");
})

feedbackModalClose.addEventListener("click",(e)=>{
    e.preventDefault();
    feedbackModal.classList.remove("visible");
    overlay.classList.remove("visible");
})