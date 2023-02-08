import React, { useEffect, useState } from "react";
import { getFavorites } from "../../firebase/firebase_config";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Favorite from "./Favorite";
import { removeFavorite, auth } from "../../firebase/firebase_config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import Empty from '../Empty/Empty';

function Favorites() {
  const [card, setCard] = useState([]);

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        // si existe una sesion iniciada
        setUsuarioGlobal(usuarioFirebase);
      } else {
        // en caso que no exista una sesion iniciada
        setUsuarioGlobal(null);
        navigate("/");
      }
    });
  }, [usuarioGlobal]);

  let resCards;

  async function obtener() {
    resCards = await getFavorites(localStorage.getItem("uid"));
    setCard([...resCards]);
  }

  const deleteFavorite = async (docId) => {
    await removeFavorite(docId);
    const temp = card.filter((e) => e.docId !== docId);
    setCard([...temp]);
  };

  useEffect(() => {
    obtener();
  }, [removeFavorite]);

  return (
    <>
      {usuarioGlobal ? (
        <div className="favorites">
          <Navbar />
          <div className="favorites__elements">
            {card.length
              ? card.map((e) => (
                  <Favorite
                    key={e.id}
                    name={e.name}
                    description={e.description}
                    url={e.url}
                    id={e.id}
                    docId={e.docId}
                    deleteFavorite={deleteFavorite}
                  />
                ))
              : (<div className='favorites__empty'><Empty message="No tiene favoritos agregados"/></div>)}
          </div>
          <Footer />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Favorites;
