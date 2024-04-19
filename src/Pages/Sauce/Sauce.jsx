import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import sauce1 from '../../assets/sauce1.jpg'
import sauce2 from '../../assets/sauce2.jpg'
import sauce3 from '../../assets/sauce3.jpg'
import sauce4 from '../../assets/sauce4.jpg'
import sauce5 from '../../assets/sauce6.jpg'
import sauce6 from '../../assets/sauce7.jpg'
import sauce7 from '../../assets/sauce8.jpg'
import sauce8 from '../../assets/sauce9.jpg'
import {Link} from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from '../Hamburger/Hamburger'
import MyCarousel from '../../Components/Carousel/Carousel'

const Sauce = ({changeLang}) => {
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
            <li className="meal"><Link to="/set" className="menu-link ">Gazlama</Link></li>
            <li className="meal"><Link to="/haggi" className="menu-link ">To'plam</Link></li>
            <li className="meal"><Link to="/burger" className="menu-link">Burger</Link></li>
            <li className="meal"><Link to="/pizza" className="menu-link">Pizza</Link></li>
            <li className="meal"><Link to="/sendwich" className="menu-link ">Sendvich</Link></li>
            <li className="meal"><Link to="/donar" className="menu-link ">Donar</Link></li>
            <li className="meal"><Link to="/xot-dog" className="menu-link">Xot-dog</Link></li>
            <li className="meal"><Link to="/free" className="menu-link">Free</Link></li>
            <li className="meal"><Link to="/drink" className="menu-link">Drink</Link></li>
            <li className="meal"><Link to="/salad" className="menu-link ">Salad</Link></li>
            <li className="meal"><Link to="/bread" className="menu-link ">Bread</Link></li>
            <li className="meal actives"><Link to="/sauce" className="menu-link ">Sauce</Link></li>
          </ul>
        </div>
        </div>
      </div>
      {/* Menu */}

  {/* Foods */}
  <div className="foods">
    <div className="container">
      <div className="foods-lists">
             <img src={sauce1} alt="tfoods" className="foods-img" />
             <h4 className="foods-title"> Ajoyib salad</h4>
             <p className='foods-text'>Barcha saladlar sifatli va ...</p>
             <div className="foods-info">
              <span className="foods-sum">5 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sauce2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Zig'ir yog'li salad</h4>
             <p className='foods-text'>Barcha saladlar sifatli va ...</p>
             <div className="foods-info">
              <span className="foods-sum">7 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sauce3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Quymali salad</h4>
             <p className='foods-text'>Barcha saladlar sifatli va ...</p>
             <div className="foods-info">
              <span className="foods-sum">5 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sauce4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Bodiringli salad </h4>
             <p className='foods-text'>Barcha saladlar sifatli va ...</p>
             <div className="foods-info">
              <span className="foods-sum">4 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sauce5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Mevali salad</h4>
             <p className='foods-text'>Barcha saladlar sifatli va ...</p>
             <div className="foods-info">
              <span className="foods-sum">9.29 сум</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sauce6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Uchlik salad</h4>
             <p className='foods-text'>Barcha saladlar sifatli va ...</p>
             <div className="foods-info">
              <span className="foods-sum">15 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sauce2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Zig'ir moyli salad</h4>
             <p className='foods-text'>Barcha saladlar sifatli va ...</p>
             <div className="foods-info">
              <span className="foods-sum">9 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={sauce8} alt="foods" className="foods-img" />
             <h4 className="foods-title">Achchiq salatlar</h4>
             <p className='foods-text'>Barcha saladlar sifatli va ...</p>
             <div className="foods-info">
              <span className="foods-sum"> 8 000 so'm</span>
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

export default Sauce