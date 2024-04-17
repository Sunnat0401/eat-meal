import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import burger1 from '../../assets/burder1.jpg'
import burger2 from '../../assets/burder2.jpg'
import burger3 from '../../assets/burder3.jpg'
import burger4 from '../../assets/burder4.jpg'
import burger5 from '../../assets/burder5.jpg'
import burger6 from '../../assets/burder6.jpg'
import burger7 from '../../assets/burder7.jpg'
import burger8 from '../../assets/burder8.jpg'
import burger9 from '../../assets/burder9.jpg'
import brg from "../../assets/burg1.webp"
import brg2 from '../../assets/burg2.webp'
import brg3 from '../../assets/burg3.webp'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './Burger.css'
import Footer from '../../Components/Footer/Footer'
import TemporaryDrawer from '../Hamburger/Hamburger'
const Burger = ({changeLang}) => {
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
            <TemporaryDrawer/>
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
            <li className="meal"><Link to="/set" className="menu-link ">Gazaklar</Link></li>
            <li className="meal"><Link to="/haggi" className="menu-link ">Xaggi</Link></li>
            <li className="meal actives"><Link to="/burger" className="menu-link ">Burger</Link></li>
            <li className="meal"><Link to="/pizza" className="menu-link">Pizza</Link></li>
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
             <img src={brg} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Gamburger</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...</p>
             <div className="foods-info">
              <span className="foods-sum">25 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={brg2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Chizburger</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...</p>
             <div className="foods-info">
              <span className="foods-sum">30 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={brg3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Bigburger</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...</p>
             <div className="foods-info">
              <span className="foods-sum">40 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={burger4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Gamburger and free</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...</p>
             <div className="foods-info">
              <span className="foods-sum">50 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={burger5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Xot-dog and free</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...</p>
             <div className="foods-info">
              <span className="foods-sum">9.29 сум</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={burger6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Gamburger Retro</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...</p>
             <div className="foods-info">
              <span className="foods-sum">72 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={burger8} alt="foods" className="foods-img" />
             <h4 className="foods-title">Gamburger and cofee</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...</p>
             <div className="foods-info">
              <span className="foods-sum">64 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={burger9} alt="foods" className="foods-img" />
             <h4 className="foods-title">Gamburger german</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...</p>
             <div className="foods-info">
              <span className="foods-sum">50 000 so'm</span>
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

export default Burger