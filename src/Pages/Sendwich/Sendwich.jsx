import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import sendwichi1 from '../../assets/sendwich1.jpeg'
import sendwichi2 from '../../assets/sendwich2.jpg'
import sendwichi3 from '../../assets/sendwich3.jpg'
import sendwichi4 from '../../assets/sendwich4.jpg'
import sendwichi5 from '../../assets/sendwich5.jpg'
import sendwichi6 from '../../assets/sendwich6.jpg'
import sendwichi7 from '../../assets/sendwich7.jpg'
import sendwichi8 from '../../assets/sendwich8.jpg'
import sendwichi9 from '../../assets/sendwich9.jpg'
import sendv from '../../assets/snd1.webp'
import sendv2 from '../../assets/sendv2.webp'
import {Link} from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from '../Hamburger/Hamburger'

const Sendwich = ({changeLang}) => {
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
            <li className="meal actives"><Link to="/sendwich" className="menu-link ">Sendvich</Link></li>
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
             <img src={sendv} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Klab sendvich</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl..</p>
             <div className="foods-info">
              <span className="foods-sum">36 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sendv2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Sendvich Original</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl..</p>
             <div className="foods-info">
              <span className="foods-sum">30 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sendwichi3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Big sendwich</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl..</p>
             <div className="foods-info">
              <span className="foods-sum">50 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sendwichi4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Sendwich</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl..</p>
             <div className="foods-info">
              <span className="foods-sum">45 000 so'm </span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sendwichi5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Sendwich</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl..</p>
             <div className="foods-info">
              <span className="foods-sum">35 000 so'm </span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sendwichi6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Sendwich</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl..</p>
             <div className="foods-info">
              <span className="foods-sum">100 000 so'm </span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sendwichi7} alt="foods" className="foods-img" />
             <h4 className="foods-title">Sendwich</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl..</p>
             <div className="foods-info">
              <span className="foods-sum">55 000 so'm </span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sendwichi8} alt="foods" className="foods-img" />
             <h4 className="foods-title">Sendwich</h4>
             <p className='foods-text'>Toster non, tovuq shnitseli, yangi bodring, pomidor, kl..</p>
             <div className="foods-info">
              <span className="foods-sum">90 000 so'm </span>
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

export default Sendwich