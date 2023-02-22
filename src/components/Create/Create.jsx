import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { addDocuments, addResources } from "../../firebase/firebase_config";
import Animation from "../Animation/Animation";
import { useNavigate } from "react-router";

function Create() {
  const [captureInputs, setCaptureInputs] = useState({
    name: "",
    url: "",
    description: "",
  });

  const [captureSelect, setCaptureSelect] = useState();
  const [viewAlert, setViewAlert] = useState();

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("uid") !== "NXPoNyiw07eayLCIo51aNz3RZbW2") {
      setTimeout(()=>{
        navigate('/')
      },2000)
    }
  },[])

  const handleOnChange = (e) => {
    setCaptureInputs({ ...captureInputs, [e.target.name]: e.target.value });
  };

  const handleOnChangeSelect = (e) => {
    setCaptureSelect(e.target.value);
  };

  const handleCreateCard = (e) => {
    e.preventDefault();
    if (
      !captureInputs.name ||
      !captureInputs.url ||
      !captureInputs.description
    ) {
      setViewAlert(<p className="error">Uno o mas campos vacios.</p>);
      setTimeout(() => {
        setViewAlert();
      }, 2000);
    }

    if (!captureSelect) {
      setViewAlert(<p className="error">Seleccione una opcion.</p>);
      setTimeout(() => {
        setViewAlert();
      }, 2000);
    }

    if (captureSelect === "document") {
      addDocuments(captureInputs);
      setCaptureInputs({
        name: "",
        url: "",
        description: "",
      });
      setViewAlert(<p className="success">Documento creado con exito.</p>);
      setTimeout(() => {
        setViewAlert();
      }, 2000);
    }

    if (captureSelect === "resource") {
      addResources(captureInputs);
      setCaptureInputs({
        name: "",
        url: "",
        description: "",
      });
      setViewAlert(<p className="success">Recurso creado con exito.</p>);
      setTimeout(() => {
        setViewAlert();
      }, 2000);
    }
  };

  return (
    <>
      {localStorage.getItem("uid") === "NXPoNyiw07eayLCIo51aNz3RZbW2" ? (
        <div className="create">
          <Navbar />
          <section className="create__content">
            <h1 className="create__title">Create Element</h1>
            <form className="create__form">
              <div className="create__inputs">
                <select
                  className="create__input"
                  name="option"
                  id="option"
                  onChange={handleOnChangeSelect}
                >
                  <option value="default" selected disabled>
                    Select Option
                  </option>
                  <option value="document">Document</option>
                  <option value="resource">Resource</option>
                </select>
              </div>

              <div className="create__inputs">
                <label htmlFor="name" className="create__lbl">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Name..."
                  id="name"
                  name="name"
                  onChange={handleOnChange}
                  value={captureInputs.name}
                  className="create__input"
                />
              </div>

              <div className="create__inputs">
                <label htmlFor="url" className="create__lbl">
                  Url
                </label>
                <input
                  type="url"
                  placeholder="Url..."
                  id="url"
                  name="url"
                  onChange={handleOnChange}
                  value={captureInputs.url}
                  className="create__input"
                />
              </div>

              <div className="create__inputs">
                <label htmlFor="description" className="create__lbl">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  onChange={handleOnChange}
                  value={captureInputs.description}
                  placeholder="Description..."
                  className="create__textarea create__input"
                ></textarea>
              </div>

              <button className="create__btn" onClick={handleCreateCard}>
                Create
              </button>
              <div className="create__alert">{viewAlert && viewAlert}</div>
            </form>
          </section>
          <Footer />
        </div>
      ) : (
        <Animation/>
      )}
    </>
  );
}

export default Create;
