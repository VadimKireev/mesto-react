function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return(
    <li className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-group">
          <button className="element__like-button" type="button"></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="element__trash-button" type="button"></button>
    </li>
  );
}

export default Card;
