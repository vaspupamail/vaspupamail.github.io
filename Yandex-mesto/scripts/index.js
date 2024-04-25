const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const formEditProfile = document.querySelector("#edit");
const formAddCard = document.querySelector("#add");
const elementEdit = formEditProfile.querySelector(".popup__form");
const elementAdd = formAddCard.querySelector(".popup__form");
const closeEditProfile = formEditProfile.querySelector(".popup__close");
const closeAddCard = formAddCard.querySelector(".popup__close");
const nameInput = elementEdit.querySelector(".popup__input-name");
const jobInput = elementEdit.querySelector(".popup__input-job");
const titleInput = elementAdd.querySelector(".popup__input-title");
const linkInput = elementAdd.querySelector(".popup__input-link");
const photoPopup = document.querySelector("#photo");
const photoPopupImage = photoPopup.querySelector(".popup__photo");
const closePhoto = photoPopup.querySelector(".popup__close");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const placesElement = document.querySelector('.places');
const cardTemplate = document.querySelector('.card-template'); 
const likeButton = document.querySelector(".place__like-button");

function openPopup (popup) {
    popup.classList.add("popup_opened");
}

function closePopup (popup) {
    popup.classList.remove("popup_opened");
}

function handleEditSubmit (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(formEditProfile);
}

function handleAddSubmit (evt) {
evt.preventDefault();
linkInput.value = "";
titleInput.value = "";
addCard({link: linkInput.value, name: titleInput.value});
closePopup(formAddCard);
}

function handleLikeButton (e) {
  e.target.classList.toggle('place__like-button_active');
}

function handleDeleteButton (e) {
  e.target.closest('.place').remove();
}

function handleEditSubmit (evt) {
    evt.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopup(formEditProfile);
}

function handleAddSubmit (evt) {
  evt.preventDefault();
  addCard({link: linkInput.value, name: titleInput.value});
  linkInput.value = "";
  titleInput.value = "";
  closePopup(formAddCard);
}

function initialLoad (initialArray) {
  initialArray.forEach((item) => { 
    addCard(item);
  });
}

function addCard (cardInfo) {
  placesElement.prepend(createCard(cardInfo));
}

initialLoad(initialCards);

function createCard (cardInfo) {
  const cardElement = cardTemplate.content.querySelector('.place').cloneNode(true);
  const elementPlaceImage = cardElement.querySelector('.place__image');
  elementPlaceImage.src = cardInfo.link;
  elementPlaceImage.alt = cardInfo.name;
  cardElement.querySelector('.place__name').textContent = cardInfo.name;
  cardElement.querySelector('.place__like-button').addEventListener('click', handleLikeButton);
  cardElement.querySelector('.place__delete-button').addEventListener('click', handleDeleteButton);
  elementPlaceImage.addEventListener("click", () => {
    photoPopupImage.src = cardInfo.link;
    photoPopupImage.alt = cardInfo.name;
    photoPopup.querySelector('.popup__signature').textContent = cardInfo.name;
    openPopup(photoPopup);
  });
  return cardElement;
}


editButton.addEventListener('click', () => {
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  openPopup(formEditProfile);
});
closeEditProfile.addEventListener("click", () => closePopup(formEditProfile));
addButton.addEventListener("click", () => openPopup(formAddCard));
closeAddCard.addEventListener("click", () => closePopup(formAddCard));
closePhoto.addEventListener('click', () => closePopup(photoPopup));
elementEdit.addEventListener("submit", handleEditSubmit);
elementAdd.addEventListener("submit", handleAddSubmit);

//https://avatars.mds.yandex.net/i?id=648806e92a3b668384c45059e51905fa_l-5302823-images-thumbs&n=13
