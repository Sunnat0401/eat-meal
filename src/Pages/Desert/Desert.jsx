import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import desert1 from '../../assets/desert1.jpg'
import desert2 from '../../assets/desert2.jpg'
import desert3 from '../../assets/desert3.jpg'
import desert4 from '../../assets/desert4.jpg'
import desert5 from '../../assets/desert5.jpg'
import desert6 from '../../assets/desert6.jpg'
import desert7 from '../../assets/desert7.jpg'
import desert8 from '../../assets/desert8.jpg'
import desert9 from '../../assets/desert9.jpg'
import ds from '../../assets/ds1.webp'
import ds2 from '../../assets/ds2.webp'
import ds3 from '../../assets/ds3.webp'
import ds4 from '../../assets/ds4.webp'
import ds5 from '../../assets/ds5.webp'
import ds6 from '../../assets/ds6.webp'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Desert.css'
import Footer from '../../Components/Footer/Footer'
import TemporaryDrawer from '../Hamburger/Hamburger'
import MyCarousel from '../../Components/Carousel/Carousel'
const HomePages = ({changeLang}) => {
  const changeLangHandler = (e) =>{
    changeLang(e.target.value)
 }
 const {t} = useTranslation()
  return (
    <div className="desert">
     <div className="navbar-wrap">
<div className="navbar">
        <div className="container">
            <div className="hamburger">
            <TemporaryDrawer changeLang={{changeLang}}/>
            </div>
            <ul className="navbar-left">
                <li className="navbar-item logo">
                    <Link to="/" className="navbar-link logo">SFood</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/" className="navbar-link active">{t("main")}</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/fillial" className="navbar-link">{t("filial")} </Link>
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

     {/* Carusel */}
  <MyCarousel/>
{/* Carusell */}


      {/* Menu */}
      <div className="menu">
        <div className="wrapper">
        <div className="container">
        <ul className="menu-meal">
          <li className="meal"><Link to="/" className="menu-link ">Menu</Link></li>
            <li className="meal actives"><Link to="/desert" className="menu-link ">Desert</Link></li>
            <li className="meal"><Link to="/set" className="menu-link ">Gazaklar</Link></li>
            <li className="meal"><Link to="/haggi" className="menu-link ">To'plamlar</Link></li>
            <li className="meal"><Link to="/burger" className="menu-link">Burger</Link></li>
            <li className="meal"><Link to="/pizza" className="menu-link">Pizza</Link></li>
            <li className="meal"><Link to="/sendwich" className="menu-link ">Sendvich</Link></li>
            <li className="meal"><Link to="/donar" className="menu-link ">Donar</Link></li>
            <li className="meal"><Link to="/xot-dog" className="menu-link">Xot-dog</Link></li>
            <li className="meal"><Link to="/free" className="menu-link ">Free</Link></li>
            <li className="meal "><Link to="/drink" className="menu-link ">Drink</Link></li>
            <li className="meal"><Link to="/salad" className="menu-link">Salad</Link></li>
            <li className="meal"><Link to="/bread" className="menu-link">Bread</Link></li>
            <li className="meal"><Link to="/sauce" className="menu-link">Sauce</Link></li>
          </ul>
        </div>
        </div>
      </div>
      {/* Menu */}

  {/* Foods */}
  <div className="foods">
    <div className="container">
      <div className="foods-lists">
             <img src={ds} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Tiramisu</h4>
             <p className='foods-text'>Savoyardi pechene, mascarpone, qahv...</p>
             <div className="foods-info">
              <span className="foods-sum">22 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={ds2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Qulupnayli donat</h4>
             <p className='foods-text'>Savoyardi pechene, mascarpone, qahv...</p>
             <div className="foods-info">
              <span className="foods-sum">16 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={ds3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Karamel donat</h4>
             <p className='foods-text'>Savoyardi pechene, mascarpone, qahv...</p>
             <div className="foods-info">
              <span className="foods-sum">16 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={ds4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Yong'oqli donat</h4>
             <p className='foods-text'>Savoyardi pechene, mascarpone, qahv...</p>
             <div className="foods-info">
              <span className="foods-sum">22 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={ds5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Brauni</h4>
             <p className='foods-text'>Qora shokalad, va shokaladli ...</p>
             <div className="foods-info">
              <span className="foods-sum">22 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={ds6} alt="foods" className="foods-img" />
             <h4 className="foods-title">San-sebastian</h4>
             <p className='foods-text'>Savoyardi kukunlari, mascarpone, qahv...</p>
             <div className="foods-info">
              <span className="foods-sum">18 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert7} alt="foods" className="foods-img" />
             <h4 className="foods-title">Mevali Perojni</h4>
             <p className='foods-text'>Savoyardi pechene, mascarpone, qahv...</p>
             <div className="foods-info">
              <span className="foods-sum">21 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert8} alt="foods" className="foods-img" />
             <h4 className="foods-title">Shokladli perojni</h4>
             <p className='foods-text'>Savoyardi pechene, mascarpone, qahv...</p>
             <div className="foods-info">
              <span className="foods-sum">24 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert9} alt="foods" className="foods-img" />
             <h4 className="foods-title">Sutli perojni</h4>
             <p className='foods-text'>Savoyardi pechene, mascarpone, qahv...</p>
             <div className="foods-info">
              <span className="foods-sum">25 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
    </div>
  </div>
  {/* Foods */}

  {/* Footer */}
    <Footer/>
  {/* Footer */}
    </div>
  )
}

export default HomePages