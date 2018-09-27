import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div onClick={props.characterClick} className="card">
    <div className="img-container">
      <img alt={props.name} id={props.name_id} src={props.image} />
    </div>
</div>
);

export default CharacterCard;
