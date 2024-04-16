import './Connect.css'
import qrcode from '../../assets/qr.png'
import Footer from '../../Components/Footer/Footer'
import TemporaryDrawer from '../Hamburger/Hamburger'
import { Link } from 'react-router-dom'
import '../../Components/Navbar/Navbar.css'
const Connect = () => {
  return (
    <div className="connect">
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
                    <Link to="/fillial" className="navbar-link ">Филиалы </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/info" className="navbar-link ">О нас</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="navbar-link ">Контакты</Link>
                </li>
            </ul>
            <div className="navbar-right">
                <button className="navbar-btn navbar-icons">
                    <Link to="" className="navbar-icon"><i className="fa-solid fa-cart-shopping"></i></Link>
                </button>
                <button className="navbar-btn active">
                    <Link to="/connect" className="navbar-sublink ">Войти</Link>
                </button>
            </div>
        </div>
    </div>
</div>
        <div className="container">
            <div className="connect-group">
            <h1 className="connect-title">Войти</h1>
                 <div className="connect-wrapper">
                    <img src={qrcode} alt="qrcode " className="connect-img"   />
                    <p className="connect-text">Комментарий в Телеграмме
оставьте комментарий или задайте вопрос</p>
                    <a href="@maxwaymasterfood_bot" className="connect-link"><i className="fa-brands fa-telegram"></i> @maxwaymasterfood_bot</a>
                 </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Connect