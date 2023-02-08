import React from "react";
import { addFavorite } from '../../firebase/firebase_config'
import { useDispatch } from "react-redux";
import { setAlert } from '../../redux/actions'

function Card({ id, name, url, description }) {
  const dispatch = useDispatch()

  const addCard = () => {
    if(!localStorage.getItem("uid")){
      alert("Inicie sesion para agregar favoritos")
    }else{
      const card = {
        id: id,
        name: name,
        url: url,
        description: description,
        uid: localStorage.getItem("uid")
      }
      dispatch(setAlert({message: "Agregado a favoritos.", clase: "show"}))
      setTimeout(()=>{
        dispatch(setAlert({}))
      },2000)
      const res = addFavorite(card)
    }
  }
  return (
    <div className="card">
      <div className="card__texts">
        <h2 className="card__title">{name}</h2>
        <p className="card__description">{description}</p>
      </div>

      <div className="card__links">
        <a href={url} target="_blank" className="card__link">
          Ver sitio.
        </a>
        <button className="card__favorite" onClick={addCard}>
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </div>
    </div>
  );
}

export default Card;
