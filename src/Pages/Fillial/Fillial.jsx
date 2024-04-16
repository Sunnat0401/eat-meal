import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import '../../Components/Navbar/Navbar.css'
import './Fillial.css'
import TemporaryDrawer from '../Hamburger/Hamburger'
const Fillial = () => {
  return (
      <div className="fillial">
        
        <div className="navbar-wrap">
<div className="navbar">
        <div className="container">
            <div className="hamburger">
            <TemporaryDrawer/>
            </div>
            <ul className="navbar-left">
                <li className="navbar-item logo">
                    <Link to="/" className="navbar-link logo">SFood</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link ">Главная</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/fillial" className="navbar-link active">Филиалы </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/info" className="navbar-link">О нас</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="navbar-link">Контакты</Link>
                </li>
            </ul>
            <div className="navbar-right">
                <button className="navbar-btn navbar-icons">
                    <Link to="" className="navbar-icon"><i className="fa-solid fa-cart-shopping"></i></Link>
                </button>
                <button className="navbar-btn">
                    <Link to="/connect" className="navbar-sublink">Войти</Link>
                </button>
            </div>
        </div>
    </div>
</div>
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