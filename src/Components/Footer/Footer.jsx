
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
                <div className="footer-top">
                    <ul className="footer-lists">
                        <li className="footer-list"><Link to="/" className="footer-link footer-logo">Sfood</Link></li>
                        <li className="footer-list"><Link to="/" className="footer-link">Главная</Link></li>
                        <li className="footer-list"><Link to="/fillial" className="footer-link">Филиалы</Link></li>
                        <li className="footer-list"><Link to="/info" className="footer-link">О нас</Link></li>
                        <li className="footer-list"><Link  to="/contact" className="footer-link">Контакты</Link></li>
                    </ul>
                    <div className="footer-info">
                        <h2 className="footer-subtitle">Присоединяйтесь к нам</h2>
                        <ul className="footer-items">
                            <li className="footer-item"><i className="fa-brands fa-telegram icons "></i></li>
                            <li className="footer-item"><i className="fa-brands fa-instagram icons"></i></li>
                            <li className="footer-item"><i className="fa-brands fa-youtube icons"></i></li>
                        </ul>
                    </div>
                    <div className="footer-connect">
                            <h2 className="footer-title">
                            Заказывайте по номеру
                            </h2>
                            <a href="tel:+998931487733" className="footer-sublink">+998931487733</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-adress">© 2020–2022, ООО «IT-TIME», официальный сайт</p>
                    <a href="https://t.me/Sunnat_04_01" className="dev-link">Developer by Sunnatjon</a>
                </div>
        </div>
    </div>
  )
}

export default Footer