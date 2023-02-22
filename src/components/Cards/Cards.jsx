import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDocuments, getResources } from "../../redux/actions";
import {
  getDocumentsFirebase,
  getResourcesFirebase,
} from "../../firebase/firebase_config";
import Card from "./Card";
import Animation from "../Animation/Animation";

function Cards({ documents, resources, page }) {
  // guardamos los estados cambiantes de redux
  const [datos, setDatos] = useState();
  // estado del paginado
  const [newData, setNewData] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  let itemsPage = 8;
  let total = datos?.length;

  // const stateDocuments = useSelector((state) => state.documents);
  // const stateResources = useSelector((state) => state.resources);
  // const dispatch = useDispatch();

  useEffect(() => {
    if (documents === true) {
      const documents = async ()=>{
        let response = await getDocumentsFirebase();
        setDatos(response)
      }
      documents();
    }

    if (resources === true) {
      const resources = async () => {
        let response = await getResourcesFirebase();
        setDatos(response);
      }
      resources();
    }
  }, [documents, resources]);

  useEffect(() => {
    if (datos) {
      setCurrentPage(Number(page))
      setNewData([...datos].slice(0, 8));
      setTotalPage(Math.ceil(total / itemsPage));
    }
  }, [datos]);

  const next = () => {
    const totalElements = datos.length;
    const nextPage = currentPage + 1;
    const index = nextPage * itemsPage;
    if (index >= totalElements) return;
    setNewData([...datos].splice(index, itemsPage));
    setCurrentPage(nextPage);
  };

  const prev = () => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    const index = prevPage * itemsPage;
    setNewData([...datos].splice(index, itemsPage));
    setCurrentPage(prevPage);
  };

  return (
    <div className="cards">
      <section className="cards__paginado">
        <button onClick={prev} className="cards__btn">
          <span className="material-symbols-outlined">arrow_left</span>
        </button>
        <p className="cards__current">
          {currentPage + 1} de {totalPage}
        </p>
        <button onClick={next} className="cards__btn">
          <span className="material-symbols-outlined">arrow_right</span>
        </button>
      </section>

      <div className="cards__elements">
        {newData
          ? newData.map((e) => (
              <Card
                key={e.name}
                name={e.name}
                description={e.description}
                url={e.url}
              />
            ))
          : <Animation/>}
      </div>
    </div>
  );
}

export default Cards;
