import React, {useState} from 'react'
import Cards from '../Cards/Cards'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Empty from '../Empty/Empty';

function Tools() {
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
          {viewCard ? viewCard : (<div className='tools__empty'><Empty/></div>)}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Tools