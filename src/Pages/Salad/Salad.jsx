import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import salad1 from '../../assets/salad1.jpg'
import salad2 from '../../assets/salad2.jpg'
import salad3 from '../../assets/salad3.jpg'
import salad4 from '../../assets/salad4.jpg'
import salad5 from '../../assets/salad5.jpg'
import salad6 from '../../assets/salad6.jpg'
import salad7 from '../../assets/salad7.webp'
import salad8 from '../../assets/salad8.jpg'
import salad9 from '../../assets/salad9.jpg'
import ss1 from '../../assets/ss1.webp'
import ss2 from '../../assets/ss2.webp'
import ss3 from '../../assets/ss3.webp'
import ss4 from '../../assets/ss4.webp'
import ss5 from '../../assets/ss5.webp'
import {Link} from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from '../Hamburger/Hamburger'

const Salad = ({changeLang}) => {
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
            <li className="meal"><Link to="/set" className="menu-link ">Gazaklar</Link></li>
            <li className="meal"><Link to="/haggi" className="menu-link ">To'plam</Link></li>
            <li className="meal"><Link to="/burger" className="menu-link">Burger</Link></li>
            <li className="meal"><Link to="/pizza" className="menu-link">Pizza</Link></li>
            <li className="meal"><Link to="/sendwich" className="menu-link ">Sendvich</Link></li>
            <li className="meal"><Link to="/donar" className="menu-link ">Donar</Link></li>
            <li className="meal"><Link to="/xot-dog" className="menu-link">Xot-dog</Link></li>
            <li className="meal"><Link to="/free" className="menu-link">Free</Link></li>
            <li className="meal"><Link to="/drink" className="menu-link">Drink</Link></li>
            <li className="meal actives"><Link to="/salad" className="menu-link ">Salad</Link></li>
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
             <img src={ss1} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Ketchup </h4>
             <p className='foods-text'>Siz istagan barcha sabzavot va s.....</p>
             <div className="foods-info">
              <span className="foods-sum"> 3 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={ss2} alt="foods" className="foods-img" />
             <h4 className="foods-title">x owls available</h4>
             <p className='foods-text'>Siz istagan barcha sabzavot va s.....</p>
             <div className="foods-info">
              <span className="foods-sum">3 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={ss3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Sarimsoqli sous</h4>
             <p className='foods-text'>Siz istagan barcha sabzavot va s.....</p>
             <div className="foods-info">
              <span className="foods-sum">3 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={ss4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Xalapeno</h4>
             <p className='foods-text'>Siz istagan barcha sabzavot va s.....</p>
             <div className="foods-info">
              <span className="foods-sum">3 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={ss4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Shirin va nordon sous</h4>
             <p className='foods-text'>Siz istagan barcha sabzavot va s.....</p>
             <div className="foods-info">
              <span className="foods-sum">3 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={salad6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Mevali salad</h4>
             <p className='foods-text'>Siz istagan barcha sabzavot va s.....</p>
             <div className="foods-info">
              <span className="foods-sum">5 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={salad7} alt="foods" className="foods-img" />
             <h4 className="foods-title">Karamli salad</h4>
             <p className='foods-text'>Siz istagan barcha sabzavot va s.....</p>
             <div className="foods-info">
              <span className="foods-sum">5 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={salad8} alt="foods" className="foods-img" />
             <h4 className="foods-title">Ko'katli salad</h4>
             <p className='foods-text'>Siz istagan barcha sabzavot va s.....</p>
             <div className="foods-info">
              <span className="foods-sum">4 000 so'm</span>
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

export default Salad