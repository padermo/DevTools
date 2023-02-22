import React from 'react'

function Favorite({ name, description, url, deleteFavorite, docId }) {
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
        <button
          className="card__favorite"
          onClick={() => deleteFavorite(docId)}
        >
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}

export default Favorite