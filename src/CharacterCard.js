import React from "react";

const CharacterCard = ({ name, height, films, onClose }) => {
  return (
    <div className="card">
      <span className="close" onClick={onClose}>
        ×
      </span>
      <h2>Name : {name}</h2>
      <h3>Height: {height}</h3>
      <h5>Films: {films}</h5>
    </div>
  );
};

export default CharacterCard;
