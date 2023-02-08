import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import Alert from '../Alert/Alert';
import Cards from '../Cards/Cards'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Empty from '../Empty/Empty';

function Tools() {
  const state = useSelector(state => state.alert);

  const [viewCard, setViewCard] = useState();

  const handleDocuments = () => {
    setViewCard(<Cards documents={true} resources={false} page={'0'}/>)
  }

  const handleResources = () => {
    setViewCard(<Cards documents={false} resources={true} page={'0'}/>)
  }

  return (
    <div className='tools'>
      <Navbar/>
      <div className="tools__content">
        <div className="tools__buttons">
          <button onClick={handleDocuments} className="tools__btn">Documents</button>
          <button onClick={handleResources} className="tools__btn">Resources</button>
        </div>
        <div>
          {viewCard ? viewCard : (<div className='tools__empty'><Empty message="Seleccione una opcion"/></div>)}
        </div>
      </div>
      {!state ? "" : <div className={`tools__alert ${state.clase}`}><Alert message={state.message}/></div>}
      <Footer/>
    </div>
  )
}

export default Tools