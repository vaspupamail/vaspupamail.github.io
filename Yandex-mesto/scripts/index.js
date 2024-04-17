let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close");
let popupForm = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector(".popup__input-name");
let jobInput = formElement.querySelector(".popup__input-job");
let title = document.querySelector(".profile__title");
let subtitle = document.querySelector(".profile__subtitle");


function openPopup() {
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
    popupForm.classList.add("popup_opened");
}

function closePopup () {
    popupForm.classList.remove("popup_opened");
}

function handlerFormSubmit (evt) {
    evt.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopup();
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", handlerFormSubmit);
