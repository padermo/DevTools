import React from 'react'
import img1 from '../../assets/color1.png';
import img2 from "../../assets/color2.png";
import img3 from "../../assets/color3.png";


function Animation() {
  return (
    <div className="animation">
      <section className="animation__content">
        <figure className="animation__picture">
          <img src={img1} alt="" className="animation__img animation__img--uno" />
        </figure>
        <figure className="animation__picture">
          <img src={img2} alt="" className="animation__img animation__img--dos" />
        </figure>
        <figure className="animation__picture">
          <img src={img3} alt="" className="animation__img animation__img--tres" />
        </figure>
      </section>
    </div>
  );
}

export default Animation