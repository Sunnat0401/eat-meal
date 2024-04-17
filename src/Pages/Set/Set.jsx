import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import set1 from '../../assets/set1.jpg'
import set2 from '../../assets/set2.jpg'
import set3 from '../../assets/set3.png'
import set4 from '../../assets/set4.jpg'
import set5 from '../../assets/set5.jpg'
import set6 from '../../assets/set6.jpg'
import set7 from '../../assets/set7.png'
import set8 from '../../assets/set8.jpg'
import set9 from '../../assets/set9.jpg'
import gz1 from '../../assets/gz1.webp'
import gz2 from '../../assets/gz2.webp'
import gz3 from '../../assets/gz3.webp'
import gz4 from '../../assets/gz4.webp'
import gz5 from '../../assets/gz5.webp'
import gz6 from '../../assets/gz6.webp'
import xal from '../../assets/xal1.webp'
import xal2 from "../../assets/xal2.webp"
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import './Set.css'
import Footer from '../../Components/Footer/Footer'
import TemporaryDrawer from '../Hamburger/Hamburger'
const Set = ({changeLang}) => {
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
            <li className="meal actives"><Link to="/set" className="menu-link ">Gazaklar</Link></li>
            <li className="meal"><Link to="/haggi" className="menu-link">To'plam</Link></li>
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
             <img src={gz1} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Fri kartoshkasi</h4>
             <p className='foods-text'>Qovurlilgan barra kartoshkalar , juda ...</p>
             <div className="foods-info">
              <span className="foods-sum">9 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={gz2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Kraft paket</h4>
             <p className='foods-text'>Xarid uchun ajoyib paket , unda ...</p>
             <div className="foods-info">
              <span className="foods-sum">2 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={gz3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Box</h4>
             <p className='foods-text'>Strips (2 dona), kartoshka fri...</p>
             <div className="foods-info">
              <span className="foods-sum">22 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={gz4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Strips</h4>
             <p className='foods-text'>Juda mazzali bo'lgan strips....</p>
             <div className="foods-info">
              <span className="foods-sum">17 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={gz5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Naggest</h4>
             <p className='foods-text'>Juda mazzali bo'lgan naggest...</p>
             <div className="foods-info">
              <span className="foods-sum">9.29 сум</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={gz6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Po derevenskiy</h4>
             <p className='foods-text'>Juda mazzali bo'lgan derevenskiy...</p>
             <div className="foods-info">
              <span className="foods-sum">15 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={xal} alt="foods" className="foods-img" />
             <h4 className="foods-title">Xalapeno</h4>
             <p className='foods-text'>Juda mazzali bo'lgan xalapeno...</p>
             <div className="foods-info">
              <span className="foods-sum">3 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={xal2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Sarimsoqli sous</h4>
             <p className='foods-text'>Juda mazzali bo'lgan derevenskiy...</p>
             <div className="foods-info">
              <span className="foods-sum">5 000 so'm</span>
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

export default Set