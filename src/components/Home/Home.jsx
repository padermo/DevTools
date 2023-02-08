import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Home() {

  return (
    <div className='home'>
      <Navbar/>
      <div className="home__content">
        <section className="home__cabecera">
          <h1 className="home__title">Las mejores herramientas para tu web</h1>
        </section>

        <div className="home__encabezado">
          <h2 className='home__subtitle'>Documentacion</h2>
        </div>

        <figure className="home__picture home__picture--uno"></figure>

        <div className="home__encabezado">
          <h2 className='home__subtitle'>Herramientas</h2>
        </div>

        <figure className="home__picture home__picture--dos"></figure>
      </div>
      <Footer/>
    </div>
  )
}

export default Home