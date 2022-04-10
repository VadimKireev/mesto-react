import React from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((response) => {
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
    })
    .catch((err) => {
      alert(err);
    });
  });

  React.useEffect(() => {
    api.getCards()
    .then((response) => {
      setCards(response);
    })
    .catch((err) => {
      alert(err);
    });
  }, []);

  return (
    <main>
      <section className="profile">
      <div className="profile__avatar-group">
        <img className="profile__avatar" src={userAvatar} alt="Ваш аватар" />
        <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
      </div>
      <div className="profile__editor">
        <div className="profile__info">
        <h1 className="profile__title">{userName}</h1>
        <button type="button" aria-label="edit profile" className="profile__edit-button" onClick={props.onEditProfile}></button>
        <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </div>
      </section>
      <ul className="elements">
        {
          cards.map((card) => (
              <Card key={card._id} card={card} onCardClick={props.onCardClick} onClose={props.onClose} isOpen={props.isOpen} selectedCard={props.selectedCard} />
          ))
        }
      </ul>
    </main>
  );
}

export default Main;
