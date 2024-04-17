
import { Link } from 'react-router-dom'
import './Footer.css'
import { useTranslation } from 'react-i18next'
const Footer = ({changeLang}) => {
    const changeLangHandler = (e) =>{
        changeLang(e.target.value)
     }
     const {t} = useTranslation()
  return (
    <div className='footer'>
        <div className="container">
                <div className="footer-top">
                    <ul className="footer-lists">
                        <li className="footer-list" ><Link to="/" className="footer-link footer-logo" onClick={()=>{ window.scrollTo({top:0})}}>Sfood</Link></li>
                        <li className="footer-list"><Link to="/" className="footer-link" onClick={()=>{ window.scrollTo({top:0})}} >{t("main")}</Link></li>
                        <li className="footer-list"><Link to="/fillial" className="footer-link"  onClick={()=>{ window.scrollTo({top:0})}} >{t("filial")}</Link></li>
                        <li className="footer-list"><Link to="/info" className="footer-link"  onClick={()=>{ window.scrollTo({top:0})}} >{t("about")}</Link></li>
                        <li className="footer-list"><Link  to="/contact" className="footer-link"  onClick={()=>{ window.scrollTo({top:0})}} >{t("contact")}</Link></li>
                    </ul>
                    <div className="footer-info">
                        <h2 className="footer-subtitle">{t("footer1")}</h2>
                        <ul className="footer-items">
                            <li className="footer-item"><i className="fa-brands fa-telegram icons "></i></li>
                            <li className="footer-item"><i className="fa-brands fa-instagram icons"></i></li>
                            <li className="footer-item"><i className="fa-brands fa-youtube icons"></i></li>
                        </ul>
                    </div>
                    <div className="footer-connect">
                            <h2 className="footer-title">
                            {t("footer2")}
                            </h2>
                            <a href="tel:+998931487733" className="footer-sublink">+998931487733</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-adress">© 2020–2022, ООО «IT-TIME», {t("footer3")}</p>
                    <a href="https://t.me/Sunnat_04_01" className="dev-link">Developer by Sunnatjon</a>
                </div>
        </div>
    </div>
  )
}

export default Footer