import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import TemporaryDrawer from '../Hamburger/Hamburger'
import { useTranslation } from 'react-i18next'

import './Contact.css'
import '../../Components/Navbar/Navbar.css'
const Contact = ({changeLang}) => {
    const changeLangHandler = (e) =>{
        changeLang(e.target.value)
     }
     const {t} = useTranslation()
  return (
    <div className='contact'>
<div className="navbar-wrap">
<div className="navbar">
        <div className="container">
            <div className="hamburger">
            <TemporaryDrawer changeLang={changeLang}/>
            </div>
            <ul className="navbar-left">
                <li className="navbar-item logo">
                    <Link to="/" className="navbar-link logo">SFood</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link ">{t("main")}</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/fillial" className="navbar-link">{t("filial")} </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/info" className="navbar-link">{t("about")}</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="navbar-link active">{t("contact")}</Link>
                </li>
            </ul>
            <div className="navbar-right">
                                 <select onClick={changeLangHandler}  className="navbar-select">
                                       <option value="uz">Uz</option>
                                       <option value="en">En</option>
                                    </select>                     
                <button className="navbar-btn">
                    <Link to="/connect" className="navbar-sublink">{t("connect")}</Link>
                </button>
            </div>
        </div>
    </div>
</div>
        <div className="contact-info">
        <div className="container">
            <div className="contact-top">
                <h3 className="contact-title">
              {t("contact1")}
                </h3>
                <p className="contact-text">{t("contact2")}</p>
                <ul className="contact-list">
                    <li className="contact-item">
                        <p className='contact-text'>Toshkent</p>
                        <a className='contact-to' href="tel:+998901249484">+998901246484</a>
                    </li>
                    <li className="contact-item">
                        <p className='contact-text'>Namangan</p>
                        <a className='contact-to' href="tel:+998936689974">+998936689974</a>
                    </li>
                    <li className="contact-item">
                        <p className='contact-text'>Almaliq</p>
                        <a className='contact-to' href="tel:+998333472770">+998 33 3472470</a>
                    </li>
                </ul>
            </div>
            <div className="contact-middle">
                <h3 className="contact-title">{t("contact3")}</h3>
                <ul className="contact-lists">
                    <li className="contact-items">
                    <p className='contact-texts'>{t("contact4")}</p>
                          <a href="mailto:sunnattoxtaqulov4444@gmail.com" className="contact-to">sunnattoxtaqulov4444@gmail.com</a>
                    </li>
                    <li className="contact-items">
                    <p className='contact-texts'>{t("contact5")}</p>
                          <a href="tel : +998936689974" className="contact-to">+998936689974</a>
                    </li>
                </ul>
            </div>
            <div className="contact-bottom">
                <h3 className="contact-title">{t("contact6")}</h3>
                <p className="contact-subtext">{t("contact6")}</p>
                <div className="contact-footer">
                    <p>{t("contact4")}</p>
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