import './Connect.css'
import qrcode from '../../assets/qr.png'
import Footer from '../../Components/Footer/Footer'
import TemporaryDrawer from '../Hamburger/Hamburger'
import { Link } from 'react-router-dom'
import '../../Components/Navbar/Navbar.css'
import { useTranslation } from 'react-i18next'

const Connect = ({changeLang}) => {
    const changeLangHandler = (e) =>{
        changeLang(e.target.value)
     }
     const {t} = useTranslation()
  return (
    <div className="connect">
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
                    <Link to="/contact" className="navbar-link ">{t("contact")}</Link>
                </li>
            </ul>
            <div className="navbar-right">
                                 <select onClick={changeLangHandler}  className="navbar-select">
                                       <option value="uz">Uz</option>
                                       <option value="en">En</option>
                                    </select>                     
                <button className="navbar-btn active">
                    <Link to="/connect" className="navbar-sublink ">{t("connect")}</Link>
                </button>
            </div>
        </div>
    </div>
</div>
        <div className="container">
            <div className="connect-group">
            <h1 className="connect-title">{t("connect1")}</h1>
                 <div className="connect-wrapper">
                    <img src={qrcode} alt="qrcode " className="connect-img"   />
                    <p className="connect-text">{t("connect2")}</p>
                    <a href="@maxwaymasterfood_bot" className="connect-link"><i className="fa-brands fa-telegram"></i> @maxwaymasterfood_bot</a>
                 </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Connect