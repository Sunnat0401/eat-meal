import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import haggi1 from '../../assets/haggi1.jpg'
import haggi2 from '../../assets/haggi2.jpg'
import haggi3 from '../../assets/haggi3.jpg'
import haggi4 from '../../assets/haggi4.jpg'
import haggi5 from '../../assets/haggi5.jpg'
import haggi6 from '../../assets/haggi6.jpg'
import haggi7 from '../../assets/haggi7.jpg'
import haggi8 from '../../assets/haggi9.jpg'
import {Link} from 'react-router-dom'
import max from '../../assets/max1.webp'
import max2 from '../../assets/max2.webp'
import max3 from '../../assets/max3.webp'
import max4 from '../../assets/max4.webp'
import max5 from '../../assets/max5.webp'
import max6 from '../../assets/max6.webp'

import './Haggi.css'
import Footer from '../../Components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from '../Hamburger/Hamburger'

const Haggi = ({changeLang}) => {
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
            <li className="meal actives"><Link to="/haggi" className="menu-link ">To'plam</Link></li>
            <li className="meal"><Link to="/burger" className="menu-link">Burger</Link></li>
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
             <img src={max} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Maxi BOX An'anaviy</h4>
             <p className='foods-text'>Original sendvich, kartoshka fri, 0,4 l coca cola, tanl..</p>
             <div className="foods-info">
              <span className="foods-sum">42 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={max2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Maxi BOX Taniqli</h4>
             <p className='foods-text'>Original sendvich, kartoshka fri, 0,4 l coca cola, tanl..</p>
             <div className="foods-info">
              <span className="foods-sum">42 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={max3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Maxi BOX Retro</h4>
             <p className='foods-text'>Original sendvich, kartoshka fri, 0,4 l coca cola, tanl..</p>
             <div className="foods-info">
              <span className="foods-sum">40 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={max4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Max BOX German</h4>
             <p className='foods-text'>Original sendvich, kartoshka fri, 0,4 l coca cola, tanl..</p>
             <div className="foods-info">
              <span className="foods-sum">40 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={max5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Maxi BOX Trend</h4>
             <p className='foods-text'>Original sendvich, kartoshka fri, 0,4 l coca cola, tanl..</p>
             <div className="foods-info">
              <span className="foods-sum">38 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={max6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Mini BOX</h4>
             <p className='foods-text'>Original sendvich, kartoshka fri, 0,4 l coca cola, tanl..</p>
             <div className="foods-info">
              <span className="foods-sum">38 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={max6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Mini BOX sevimli</h4>
             <p className='foods-text'>Original sendvich, kartoshka fri, 0,4 l coca cola, tanl..</p>
             <div className="foods-info">
              <span className="foods-sum">38 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={max4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Mini BOX hamyonbop</h4>
             <p className='foods-text'>Original sendvich, kartoshka fri, 0,4 l coca cola, tanl..</p>
             <div className="foods-info">
              <span className="foods-sum">36 000 so'm</span>
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

export default Haggi