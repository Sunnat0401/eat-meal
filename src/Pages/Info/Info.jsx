import './Info.css'
import info from '../../assets/infooo.png'
import '../../Components/Navbar/Navbar.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import TemporaryDrawer from '../Hamburger/Hamburger'
import { useTranslation } from 'react-i18next'

import { Link } from 'react-router-dom'
const Info = ({changeLang}) => {
    const changeLangHandler = (e) =>{
        changeLang(e.target.value)
     }
     const {t} = useTranslation()
  return (
    <div className='info'>
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
                    <Link to="/" className="navbar-link ">{t("main")}</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/fillial" className="navbar-link">{t("filial")} </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/info" className="navbar-link active">{t("about")}</Link>
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
        <div className="info-wrapper">
        <div className="container">
            <img className='info-image' src={info} alt="info" />
            <h1 className='info-title'>О компании</h1>
            <p className='info-text'>Компания была основана в феврале 2005 года в Ташкенте. На сегодняшний момент у компании 11 филиалов в Ташкенте. Меню состоит в основном из клаб сендвичей, хот-догов, бургеров, лавашей и донаров. Наши приоритеты – свежесть и качество ингредиентов, разнообразие начинок, доступные цены и внимание к просьбам гостей. Ежедневно в MaxWay заказывают большое количество самых разных людей. И мы стараемся увеличивать как число посетителей, так и число филиалов. С каждым приготовленным блюдом мы оттачиваем детали фирменных рецептов и ищем идеальный баланс цены и качества, чтобы и дальше оставаться вашим любимым брендом. Если вдруг вы столкнулись с плохим обслуживанием или низким качеством приготовленной еды с нашей стороны, обязательно напишите нам на Мы с радостью принимаем как положительные, так и отрицательные отзывы. Жалоба гостя – подарок, благодаря которому нам есть куда расти.</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Info