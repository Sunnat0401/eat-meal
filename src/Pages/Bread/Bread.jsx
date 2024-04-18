import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import bread1 from '../../assets/bread1.jpg'
import bread2 from '../../assets/bread2.jpg'
import bread3 from '../../assets/bread3.png'
import bread4 from '../../assets/bread4.png'
import bread5 from '../../assets/bread5.jpg'
import bread6 from '../../assets/bread6.jpg'
import bread7 from '../../assets/bread7.jpg'
import bread8 from '../../assets/bread8.jpg'
import bread9 from '../../assets/bread9.jpg'
import {Link} from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import { useTranslation } from 'react-i18next'
import TemporaryDrawer from '../Hamburger/Hamburger'

const Bread = ({changeLang}) => {
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
            <li className="meal"><Link to="/haggi" className="menu-link ">Xaggi</Link></li>
            <li className="meal"><Link to="/burger" className="menu-link">Burger</Link></li>
            <li className="meal"><Link to="/pizza" className="menu-link">Pizza</Link></li>
            <li className="meal"><Link to="/sendwich" className="menu-link ">Sendvich</Link></li>
            <li className="meal"><Link to="/donar" className="menu-link ">Donar</Link></li>
            <li className="meal"><Link to="/xot-dog" className="menu-link">Xot-dog</Link></li>
            <li className="meal"><Link to="/free" className="menu-link">Free</Link></li>
            <li className="meal"><Link to="/drink" className="menu-link">Drink</Link></li>
            <li className="meal"><Link to="/salad" className="menu-link ">Salad</Link></li>
            <li className="meal actives"><Link to="/bread" className="menu-link ">Bread</Link></li>
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
             <img src={bread1} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Sutli Non</h4>
             <p className='foods-text'>Tandirdan yangi uzilgan issiq ...</p>
             <div className="foods-info">
              <span className="foods-sum"> 7 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={bread2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Qaymoqli non</h4>
             <p className='foods-text'>Tandirdan yangi uzilgan issiq ...</p>
             <div className="foods-info">
              <span className="foods-sum">5 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={bread3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Kulcha non</h4>
             <p className='foods-text'>Tandirdan yangi uzilgan issiq ...</p>
             <div className="foods-info">
              <span className="foods-sum">8 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={bread4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Oq non</h4>
             <p className='foods-text'>Tandirdan yangi uzilgan issiq ...</p>
             <div className="foods-info">
              <span className="foods-sum">3 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={bread5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Sutli va qaymoqli non</h4>
             <p className='foods-text'>Tandirdan yangi uzilgan issiq ...</p>
             <div className="foods-info">
              <span className="foods-sum">6 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={bread6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Olchali non</h4>
             <p className='foods-text'>Tandirdan yangi uzilgan issiq ...</p>
             <div className="foods-info">
              <span className="foods-sum">9 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={bread7} alt="foods" className="foods-img" />
             <h4 className="foods-title">Tandir non</h4>
             <p className='foods-text'>Tandirdan yangi uzilgan issiq ...</p>
             <div className="foods-info">
              <span className="foods-sum">5 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={bread8} alt="foods" className="foods-img" />
             <h4 className="foods-title">Yog'li non</h4>
             <p className='foods-text'>Tandirdan yangi uzilgan issiq ...</p>
             <div className="foods-info">
              <span className="foods-sum">4 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={bread9} alt="foods" className="foods-img" />
             <h4 className="foods-title">Pishloqli non</h4>
             <p className='foods-text'>Tandirdan yangi uzilgan issiq ...</p>
             <div className="foods-info">
              <span className="foods-sum">8 000 so'm</span>
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

export default Bread