import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/DevTools.svg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase_config";

function Navbar() {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        // si existe una sesion iniciada
        setUsuarioGlobal(usuarioFirebase);
      } else {
        // en caso que no exista una sesion iniciada
        setUsuarioGlobal(null);
      }
    });
  }, [usuarioGlobal]);

  const close = () => {
    signOut(auth);
    localStorage.removeItem("uid");
  };

  return (
    <div className="navbar">
      <div className="navbar__content">
        <figure className="navbar__picture">
          <img src={logo} alt="logo" className="navbar__img" />
        </figure>

        <section className="navbar__menu">
          <Link to={"/"} className="navbar__link">
            Home
          </Link>
          <Link to={"/tools"} className="navbar__link">
            Tools
          </Link>
          {localStorage.getItem("uid") ? (
            <Link to={"/favorite"} className="navbar__link">
              Favorites
            </Link>
          ) : (
            ""
          )}
          {localStorage.getItem("uid") === "NXPoNyiw07eayLCIo51aNz3RZbW2" ? (
            <Link to={"/create"} className="navbar__link">
              Create
            </Link>
          ) : (
            ""
          )}
        </section>

        {usuarioGlobal ? (
          <>
            <button onClick={close} className="navbar__signout">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </>
        ) : (
          <Link to={"/login"} className="navbar__login">
            <span className="material-symbols-outlined">login</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
