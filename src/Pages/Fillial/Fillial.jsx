import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import '../../Components/Navbar/Navbar.css'
import { useTranslation } from 'react-i18next'
import './Fillial.css'
import TemporaryDrawer from '../Hamburger/Hamburger'
const Fillial = ({changeLang}) => {
    const changeLangHandler = (e) =>{
        changeLang(e.target.value)
     }
     const {t} = useTranslation()
  return (
      <div className="fillial">
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
                    <Link to="/fillial" className="navbar-link active">{t("filial")} </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/info" className="navbar-link">{t("about")}</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/contact" className="navbar-link">{t("contact")}</Link>
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
        <div className="container">
        <div className="fillial-wrapper">
               <ul className="fillial-lists">
                    <li className="fillial-list">
                        <a href="#link" className="fillial-link">
                            <div className="fillial-left">
                                <h3 className="fillial-title">MaxWay Magic City</h3>
                                <p className="fillial-text">Magic City,ул. babura, 174, Toshkent, O'zbekiston</p>
                            </div>
                            <div className="fillial-right">
                                <p className="fillial-info">{t("fillial1")}</p>
                                <p className="fillial-clock">10:00-03:00</p>
                            </div>
                        </a>
                    </li>
                    <li className="fillial-list">
                        <a href="#link" className="fillial-link">
                            <div className="fillial-left">
                                <h3 className="fillial-title">MaxWay Tashlent City</h3>
                                <p className="fillial-text">Magic City, st Navoiy , 26 Toshkent, O'zbekiston</p>
                            </div>
                            <div className="fillial-right">
                                <p className="fillial-info">{t("fillial1")}</p>
                                <p className="fillial-clock">10:00-03:00</p>
                            </div>
                        </a>
                    </li>
                    <li className="fillial-list">
                        <a href="#link" className="fillial-link">
                            <div className="fillial-left">
                                <h3 className="fillial-title">MaxWay Chilonzor City</h3>
                                <p className="fillial-text">Magic City,st. Chilonzor, 3, Toshkent, O'zbekiston</p>
                            </div>
                            <div className="fillial-right">
                                <p className="fillial-info">{t("fillial1")}</p>
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