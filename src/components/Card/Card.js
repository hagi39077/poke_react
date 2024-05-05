import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ pokemon }) => {
  const [pokemoName, setPokemonName] = useState([]);
  // 複数個になると変わる部分
  let pokemonNameDetail = pokemon.species.url;

  const loadPokemoName = async (data) => {
    let response = await fetch(data);
    let result = await response.json();
    let jaName = result.names.find((name) => name.language.name === "ja").name;
    setPokemonName(jaName);
  };

  useEffect(() => {
    loadPokemoName(pokemonNameDetail);
  }, []);

  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} />
      </div>
      <h3 className="cardName">{pokemoName}</h3>
      <div className="cardTypes">
        <div>
          タイプ :
          {pokemon.types.map((type, i) => {
            return (
              <div key={i}>
                <span className="typeName">{type.type.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ : {pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ : {pokemon.height}</p>
        </div>{" "}
        <div className="cardData">
          <p className="title">
            アビリティ : {pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
