import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import pizza1 from '../../assets/pizz2.jpg'
import pizza2 from '../../assets/pizza2.jpg'
import pizza3 from '../../assets/pizza3.jpg'
import pizza4 from '../../assets/pizza4.jpg'
import pizza5 from '../../assets/pizza5.jpg'
import pizza6 from '../../assets/pizza6.webp'
import pizza7 from '../../assets/pizza7.jpg'
import pizza8 from '../../assets/pizza8.jpg'
import pizza9 from '../../assets/pizza9.jpg'
import {Link} from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from '../Hamburger/Hamburger'
import MyCarousel from '../../Components/Carousel/Carousel'

const Pizza = ({changeLang}) => {
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
            <li className="meal actives"><Link to="/pizza" className="menu-link ">Pizza</Link></li>
            <li className="meal"><Link to="/sendwich" className="menu-link">Sendvich</Link></li>
            <li className="meal"><Link to="/donar" className="menu-link">Donar</Link></li>
            <li className="meal"><Link to="/xot-dog" className="menu-link">Xot-dog</Link></li>
            <li className="meal"><Link to="/free" className="menu-link">Free</Link></li>
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
             <img src={pizza1} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Pitsa go'shtli</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl...</p>
             <div className="foods-info">
              <span className="foods-sum">300 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={pizza2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Pitsa sabzavotli</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl...</p>
             <div className="foods-info">
              <span className="foods-sum">100 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={pizza3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Pitsa qiyomli</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl...</p>
             <div className="foods-info">
              <span className="foods-sum">70 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={pizza4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Maxsus Pitsa</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl...</p>
             <div className="foods-info">
              <span className="foods-sum">120 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={pizza6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Pitsa Retro</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl...</p>
             <div className="foods-info">
              <span className="foods-sum">55 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={pizza7} alt="foods" className="foods-img" />
             <h4 className="foods-title">Pitsa An'anaviy</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl...</p>
             <div className="foods-info">
              <span className="foods-sum">150 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={pizza8} alt="foods" className="foods-img" />
             <h4 className="foods-title">Pitsa German</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl...</p>
             <div className="foods-info">
              <span className="foods-sum">90 000 so'm </span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={pizza9} alt="foods" className="foods-img" />
             <h4 className="foods-title">Mini Pitsa</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl...</p>
             <div className="foods-info">
              <span className="foods-sum">120 000 so'm</span>
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

export default Pizza