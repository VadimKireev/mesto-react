import React from 'react';
import logo from '../images/header-logo.svg';
import '../index';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
  <div className="page">
    <Header logo={logo} />
    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick} />
    <Footer />
    <PopupWithForm
      title='Редактировать профиль'
      name='profile'
      isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''}
      onClose={closeAllPopups}
      buttonText='Сохранить'>
      <fieldset className="popup__fieldset">
        <label className="popup__label">
          <input className="popup__input" type="text" name="name" id="name" placeholder="Ваше имя" required minLength="2" maxLength="40" />
          <span className="popup__error" id="name-error"></span>
        </label>
        <label className="popup__label">
          <input className="popup__input" type="text" name="about" id="about" placeholder="Ваша работа" required minLength="2" maxLength="200" />
          <span className="popup__error" id="about-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
    <PopupWithForm
      title='Обновить аватар'
      name='avatar'
      isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''}
      onClose={closeAllPopups}
      buttonText='Сохранить'>
      <fieldset className="popup__fieldset">
        <label className="popup__label">
          <input className="popup__input" type="url" name="avatar" id="input-avatar-link" placeholder="Ссылка на фотографию" required />
          <span className="popup__error" id="input-avatar-link-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
    <PopupWithForm
      title='Новое место'
      name='add-card'
      isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''}
      onClose={closeAllPopups}
      buttonText='Создать'>
      <fieldset className="popup__fieldset">
        <input className="popup__input" type="text" name="name" id="input-place" placeholder="Название места" required minLength="2" maxLength="30" />
        <span className="popup__error" id="input-place-error"></span>
        <input className="popup__input" type="url" name="link" id="input-link" placeholder="Ссылка на фотографию" required />
        <span className="popup__error" id="input-link-error"></span>
      </fieldset>
    </PopupWithForm>
    <PopupWithForm
      title='Вы уверены?'
      name='confirm'
      buttonText='Сохранить' />
    <ImagePopup
     isOpen={isImagePopupOpen ? 'popup_opened' : ''}
     onClose={closeAllPopups}
     card={selectedCard} />
  </div>
  );
}

export default App;
