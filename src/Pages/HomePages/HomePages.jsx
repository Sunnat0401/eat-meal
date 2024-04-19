import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import foods1 from '../../assets/foods1.jpg'
import foods2 from '../../assets/foods2.jpg'
import foods3 from '../../assets/foods3.jpg'
import foods4 from '../../assets/foods4.jpg'
import foods5 from '../../assets/foods5.jpg'
import foods6 from '../../assets/foods6.jpg'
import foods7 from '../../assets/foods7.jpg'
import foods8 from '../../assets/foods8.png'
import foods9 from '../../assets/foods9.png'
import lavash1 from '../../assets/lvsh1.webp'
import lavash2 from '../../assets/lvsh2.webp'
import shurma from '../../assets/shurma.webp'
import panini from '../../assets/panini.webp'
import dott1 from '../../assets/xtd1.webp'
import dott2 from '../../assets/xtd2.webp'
import dott3 from '../../assets/xtd3.webp'
import kebab from '../../assets/kebab.webp'
import non from '../../assets/non.webp'

import {Link} from 'react-router-dom'
import './HomePages.css'
import '../../index.css'
import Footer from '../../Components/Footer/Footer'
import MyCarousel from '../../Components/Carousel/Carousel'

const HomePages = ({changeLang}) => {
  return (
    <div className="homepage">
     <Navbar changeLang={changeLang}/>   

     {/* Carusel */}/
<MyCarousel/>
{/* Carusell */}

      {/* Menu */}
      <div className="menu">
        <div className="wrapper">
        <div className="container">
          <ul className="menu-meal">
          <li className="meal actives"><Link to="/" className="menu-link  ">Menu</Link></li>
            <li className="meal"><Link to="/desert" className="menu-link ">Desert</Link></li>
            <li className="meal"><Link to="/set" className="menu-link ">Gazaklar</Link></li>
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
             <img src={lavash1} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Lavash</h4>
             <p className='foods-text'>Lavash, donar mol go'shti, pomidor,...
</p>
             <div className="foods-info">
              <span className="foods-sum">30 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={lavash2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Lavash mini </h4>
             <p className='foods-text'>Pita, mol go'shti-donar, pomidor, c...</p>
             <div className="foods-info">
              <span className="foods-sum">25 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={panini} alt="foods" className="foods-img" />
             <h4 className="foods-title">Panini</h4>
             <p className='foods-text'>Bulochka, mol go'shti-donar, pomido...</p>
             <div className="foods-info">
              <span className="foods-sum">30 000 so'm</span>
              <button className="foods-btn"><a href="#">Buyurtma</a></button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={shurma} alt="foods" className="foods-img" />
             <h4 className="foods-title">Shaurma</h4>
             <p className='foods-text'>Donor bulochka, mol go'shti-donar, ...</p>
             <div className="foods-info">
              <span className="foods-sum">28 000 so'mdan </span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={dott1} alt="foods" className="foods-img" />
             <h4 className="foods-title">Gamburger</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodrin...</p>
             <div className="foods-info">
              <span className="foods-sum">25 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={dott2} alt="foods" className="foods-img" />
             <h4 className="foods-title">Chizburger</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodrin...</p>
             <div className="foods-info">
              <span className="foods-sum">28 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={dott3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Bigburger</h4>
             <p className='foods-text'>Burger bulochkasi, tuzlangan bodrin...</p>
             <div className="foods-info">
              <span className="foods-sum">40 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={foods8} alt="foods" className="foods-img" />
             <h4 className="foods-title">Donar kebab</h4>
             <p className='foods-text'>Mol go'shti donari-go'sht, makkajo'...</p>
             <div className="foods-info">
              <span className="foods-sum">43 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={non} alt="foods" className="foods-img" />
             <h4 className="foods-title">Non</h4>
             <p className='foods-text'>Mol go'shti donari-go'sht, makkajo'...</p>
             <div className="foods-info">
              <span className="foods-sum">32 000 so'm</span>
              <button className="foods-btn">Buyurtma</button>
             </div>
      </div>
    </div>
  </div>
  {/* Foods */}

  {/* Footer */}
    <Footer changeLang={changeLang}/>
  {/* Footer */}
    </div>
  )
}

export default HomePages