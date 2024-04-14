import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Fillial.css'
const Fillial = () => {
  return (
      <div className="fillial">
        <Navbar/>
        <div className="container">
        <div className="fillial-wrapper">
               <ul className="fillial-lists">
                    <li className="fillial-list">
                        <a href="#link" className="fillial-link">
                            <div className="fillial-left">
                                <h3 className="fillial-title">MaxWay Magic City</h3>
                                <p className="fillial-text">Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>
                            </div>
                            <div className="fillial-right">
                                <p className="fillial-info">Часы работы</p>
                                <p className="fillial-clock">10:00-03:00</p>
                            </div>
                        </a>
                    </li>
                    <li className="fillial-list">
                        <a href="#link" className="fillial-link">
                            <div className="fillial-left">
                                <h3 className="fillial-title">MaxWay Tashlent City</h3>
                                <p className="fillial-text">Magic City,ул. Navoiy , 26, Ташкент, Узбекистан</p>
                            </div>
                            <div className="fillial-right">
                                <p className="fillial-info">Часы работы</p>
                                <p className="fillial-clock">10:00-03:00</p>
                            </div>
                        </a>
                    </li>
                    <li className="fillial-list">
                        <a href="#link" className="fillial-link">
                            <div className="fillial-left">
                                <h3 className="fillial-title">MaxWay Chilanzar City</h3>
                                <p className="fillial-text">Magic City,ул. Chilanzar, 3, Ташкент, Узбекистан</p>
                            </div>
                            <div className="fillial-right">
                                <p className="fillial-info">Часы работы</p>
                                <p className="fillial-clock">10:00-03:00</p>
                            </div>
                        </a>
                    </li>
               </ul>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Fillial