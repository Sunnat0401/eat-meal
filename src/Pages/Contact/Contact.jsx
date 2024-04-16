import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import TemporaryDrawer from '../Hamburger/Hamburger'
import './Contact.css'
import '../../Components/Navbar/Navbar.css'
const Contact = () => {
  return (
    <div className='contact'>
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
                    <Link to="/contact" className="navbar-link active">Контакты</Link>
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
        <div className="contact-info">
        <div className="container">
            <div className="contact-top">
                <h3 className="contact-title">
                Телефоны контактных центров
                </h3>
                <p className="contact-text">Круглосуточно, без выходных</p>
                <ul className="contact-list">
                    <li className="contact-item">
                        <p className='contact-text'>Ташкент</p>
                        <a className='contact-to' href="tel:+998901249484">+998901246484</a>
                    </li>
                    <li className="contact-item">
                        <p className='contact-text'>Наманган</p>
                        <a className='contact-to' href="tel:+998936689974">+998936689974</a>
                    </li>
                    <li className="contact-item">
                        <p className='contact-text'>Алмалык</p>
                        <a className='contact-to' href="tel:+998333472770">+998 33 3472470</a>
                    </li>
                </ul>
            </div>
            <div className="contact-middle">
                <h3 className="contact-title">Отдел поддержки клиентов</h3>
                <ul className="contact-lists">
                    <li className="contact-items">
                    <p className='contact-texts'>Электронная почта</p>
                          <a href="mailto:sunnattoxtaqulov4444@gmail.com" className="contact-to">sunnattoxtaqulov4444@gmail.com</a>
                    </li>
                    <li className="contact-items">
                    <p className='contact-texts'>Контактный телефон</p>
                          <a href="tel : +998936689974" className="contact-to">+998936689974</a>
                    </li>
                </ul>
            </div>
            <div className="contact-bottom">
                <h3 className="contact-title">Правообладателям</h3>
                <p className="contact-subtext">По вопросам, возникшим в связи с предположительным неправомерным использованием товарных знаков, логотипов и иных материалов, просим обращаться по е-мейлу с приложением подтверждающих документов</p>
                <div className="contact-footer">
                    <p>Электронная почта</p>
                    <a href="mailtosunnattoxtaqulov4444@gmail.com" className="contact-to">sunnattoxtaqulov4444@gmail.com</a>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact