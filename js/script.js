const feedbackButton = document.querySelector(".contact-us .button");
const feedbackModal = document.querySelector(".modal-feedback");
const feedbackModalClose = document.querySelector(".modal-feedback .close-button");
const overlay = document.querySelector(".overlay");
const feedbackForm = document.querySelector(".feedback-form");
const inputName = feedbackForm.querySelector("input[name=name]");
const inputEmail = feedbackForm.querySelector("input[name=email]"); 
const inputMessage =  feedbackForm.querySelector("textarea");

function isEmpty(string){
    return !string || string.trim() === "";
}

feedbackButton.addEventListener("click",function(e){
    e.preventDefault();
    feedbackModal.classList.add("modal-visible");
    overlay.classList.add("visible");
    inputName.focus();
})

feedbackModalClose.addEventListener("click",function(e){
    e.preventDefault();
    feedbackModal.classList.remove("modal-visible");
    feedbackModal.classList.remove("modal-error");
    overlay.classList.remove("visible");
})

feedbackForm.addEventListener("submit",function(e){
    if(isEmpty(inputName.value) || isEmpty(inputEmail.value) || isEmpty(inputMessage.value)){
        e.preventDefault();
        feedbackModal.classList.remove("modal-error");
        feedbackModal.offsetWidth = feedbackModal.offsetWidth;
        feedbackModal.classList.add("modal-error");
    }
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedbackModal.classList.contains("modal-visible")) {
        feedbackModal.classList.remove("modal-visible");
        feedbackModal.classList.remove("modal-error");
        overlay.classList.remove("visible");
      }
    }
  });

