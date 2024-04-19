import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import free1 from '../../assets/free1.jpg'
import free2 from '../../assets/free2.jpg'
import free3 from '../../assets/free3.jpg'
import free4 from '../../assets//free4.webp'
import free5 from '../../assets/free5.jpg'
import free6 from '../../assets/free6.jpg'
import free7 from '../../assets/free7.png'
import free8 from '../../assets/free8.jpg'
import free9 from '../../assets/free9.jpg'
import {Link} from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from '../Hamburger/Hamburger'
import MyCarousel from '../../Components/Carousel/Carousel'

const Free = ({changeLang}) => {
  const changeLangHandler = (e) =>{
    changeLang(e.target.value)
 }
 const {t} = useTranslation()
  return (
    <div className="set">
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
            <li className="meal"><Link to="/desert" className="menu-link ">Desert</Link></li>
            <li className="meal"><Link to="/set" className="menu-link ">Gazaklar</Link></li>
            <li className="meal"><Link to="/haggi" className="menu-link ">To'plam</Link></li>
            <li className="meal"><Link to="/burger" className="menu-link">Burger</Link></li>
            <li className="meal"><Link to="/pizza" className="menu-link">Pizza</Link></li>
            <li className="meal"><Link to="/sendwich" className="menu-link ">Sendvich</Link></li>
            <li className="meal"><Link to="/donar" className="menu-link ">Donar</Link></li>
            <li className="meal"><Link to="/xot-dog" className="menu-link">Xot-dog</Link></li>
            <li className="meal actives"><Link to="/free" className="menu-link ">Free</Link></li>
            <li className="meal"><Link to="/drink" className="menu-link">Drink</Link></li>
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
             <img src={free1} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Free</h4>
             <p className='foods-text'>Non, ranch sousi, qizil karam salati, Doner go'shti, ay...</p>
             <div className="foods-info">
              <span className="foods-sum">20 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={free2} alt="foods" className="foods-img" />
             <h4 className="foods-title">x owls available</h4>
             <p className='foods-text'>Non, ranch sousi, qizil karam salati, Doner go'shti, ay...</p>
             <div className="foods-info">
              <span className="foods-sum">23 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={free3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Free</h4>
             <p className='foods-text'>Non, ranch sousi, qizil karam salati, Doner go'shti, ay...</p>
             <div className="foods-info">
              <span className="foods-sum">25 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={free4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Free</h4>
             <p className='foods-text'>Non, ranch sousi, qizil karam salati, Doner go'shti, ay...</p>
             <div className="foods-info">
              <span className="foods-sum">24 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={free5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Free</h4>
             <p className='foods-text'>Non, ranch sousi, qizil karam salati, Doner go'shti, ay...</p>
             <div className="foods-info">
              <span className="foods-sum">29 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={free6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Free</h4>
             <p className='foods-text'>Non, ranch sousi, qizil karam salati, Doner go'shti, ay...</p>
             <div className="foods-info">
              <span className="foods-sum">30 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={free7} alt="foods" className="foods-img" />
             <h4 className="foods-title">Free</h4>
             <p className='foods-text'>Non, ranch sousi, qizil karam salati, Doner go'shti, ay...</p>
             <div className="foods-info">
              <span className="foods-sum">26 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={free8} alt="foods" className="foods-img" />
             <h4 className="foods-title">Free</h4>
             <p className='foods-text'>Non, ranch sousi, qizil karam salati, Doner go'shti, ay...</p>
             <div className="foods-info">
              <span className="foods-sum">33 000 so'm</span>
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

export default Free