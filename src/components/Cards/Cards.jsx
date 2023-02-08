import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDocuments, getResources } from "../../redux/actions";
import Card from "./Card";

function Cards({ documents, resources }) {
  // guardamos los estados cambiantes de redux
  const [datos, setDatos] = useState();
  // estado del paginado
  const [newData, setNewData] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState();
  let itemsPage = 8;
  let total = datos?.length;

  const stateDocuments = useSelector((state) => state.documents);
  const stateResources = useSelector((state) => state.resources);
  const dispatch = useDispatch();

  useEffect(() => {
    if (documents === true) {
      dispatch(getDocuments());
      setDatos(stateDocuments);
    }

    if (resources === true) {
      dispatch(getResources());
      setDatos(stateResources);
    }
  }, [dispatch, documents, resources, datos]);

  useEffect(() => {
    if (datos) {
      setNewData([...datos].slice(0, 8));
      setTotalPage(parseInt(total / itemsPage));
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
                key={e.id}
                id={e.id}
                name={e.name}
                description={e.description}
                url={e.url}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Cards;
