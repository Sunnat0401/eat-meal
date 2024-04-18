import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import xotdog1 from '../../assets/xotdog1.jpg'
import xotdog2 from '../../assets/xotdog2.jpg'
import xotdog3 from '../../assets/xotdog3.jpg'
import xotdog4 from '../../assets/xotdog4.jpg'
import xotdog5 from '../../assets/xotdog5.jpg'
import xotdog6 from '../../assets/xotdog6.jpg'
import xotdog7 from '../../assets/xotdog7.jpg'
import xotdog8 from '../../assets/xotdog8.jpg'
import xotdog9 from '../../assets/xotdog9.jpg'
import xtd from '../../assets/xtd1.webp'
import xtd2 from '../../assets/xtd2.webp'
import xtd3 from '../../assets/xtd3.webp'
import xtd4 from '../../assets/xtd4.webp'
import xtd5 from '../../assets/xtd5.webp'
import {Link} from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from '../Hamburger/Hamburger'

const XotDog = ({changeLang}) => {
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
     <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={corusel1} className="d-block w-100" alt="img" />
    </div>
    <div className="carousel-item">
      <img src={corusel2} className="d-block w-100" alt="img" />
    </div>
    <div className="carousel-item">
      <img src={corusel3} className="d-block w-100" alt="img" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* Carusell */}

   {/* Cards */}
      <div className="card">
        <div className="container">
          <img className='card-imgs' src={corusel1} alt="text" />
          <img className='card-imgs' src={corusel2} alt="text" />
          <img className='card-imgs' src={corusel3} alt="text" />
          <img className='card-imgs' src={cardImg} alt="text" />
        </div>
      </div>
      {/* Cards */}

      {/* Menu */}
      <div className="menu">
        <div className="wrapper">
        <div className="container">
          <ul className="menu-meal">
          <li className="meal"><Link to="/" className="menu-link ">Menu</Link></li>
            <li className="meal"><Link to="/desert" className="menu-link ">Desert</Link></li>
            <li className="meal"><Link to="/set" className="menu-link ">Set</Link></li>
            <li className="meal"><Link to="/haggi" className="menu-link ">To'plam</Link></li>
            <li className="meal"><Link to="/burger" className="menu-link">Burger</Link></li>
            <li className="meal"><Link to="/pizza" className="menu-link">Pizza</Link></li>
            <li className="meal"><Link to="/sendwich" className="menu-link ">Sendvich</Link></li>
            <li className="meal"><Link to="/donar" className="menu-link ">Donar</Link></li>
            <li className="meal actives"><Link to="/xot-dog" className="menu-link ">Xot-dog</Link></li>
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
             <img src={xtd} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Hot Dog</h4>
             <p className='foods-text'>Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...</p>
             <div className="foods-info">
              <span className="foods-sum">12 000 so'm</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={xtd2} alt="foods" className="foods-img" />
             <h4 className="foods-title">King Dog</h4>
             <p className='foods-text'>Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...</p>
             <div className="foods-info">
              <span className="foods-sum">15 000 so'm </span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={xtd3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Salted Pasta with mushroom sauce</h4>
             <p className='foods-text'>Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...</p>
             <div className="foods-info">
              <span className="foods-sum">20 000 so'm </span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={xtd4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Beef dumpling in hot soup</h4>
             <p className='foods-text'>Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...</p>
             <div className="foods-info">
              <span className="foods-sum">15 000 so'm </span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={xtd5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Hot spicy fried rice with omelet</h4>
             <p className='foods-text'>Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...</p>
             <div className="foods-info">
              <span className="foods-sum">15 000 so'm </span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={xotdog6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Spicy instant noodle with</h4>
             <p className='foods-text'>Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...</p>
             <div className="foods-info">
              <span className="foods-sum">7.56 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={xotdog7} alt="foods" className="foods-img" />
             <h4 className="foods-title">constant noodle special omelette</h4>
             <p className='foods-text'>Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...</p>
             <div className="foods-info">
              <span className="foods-sum">9.21 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={xotdog8} alt="foods" className="foods-img" />
             <h4 className="foods-title">noodle with spinach</h4>
             <p className='foods-text'>Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...</p>
             <div className="foods-info">
              <span className="foods-sum">6.43 сум</span>
              <button className="foods-btn">Заказать</button>
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

export default XotDog