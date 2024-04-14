import Navbar from '../../Components/Navbar/Navbar'
import corusel1 from '../../assets/carusel1.jpg'
import corusel2 from '../../assets/carusel2.jpg'
import corusel3 from '../../assets/carusel3.jpg'
import cardImg from '../../assets/card.png'
import desert1 from '../../assets/desert1.jpg'
import desert2 from '../../assets/desert2.jpg'
import desert3 from '../../assets/desert3.jpg'
import desert4 from '../../assets/desert4.jpg'
import desert5 from '../../assets/desert5.jpg'
import desert6 from '../../assets/desert6.jpg'
import desert7 from '../../assets/desert7.jpg'
import desert8 from '../../assets/desert8.jpg'
import desert9 from '../../assets/desert9.jpg'
import {Link} from 'react-router-dom'
import './Desert.css'
import Footer from '../../Components/Footer/Footer'
const HomePages = () => {
  return (
    <div className="desert">
     <Navbar/>   

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
            <li className="meal"><Link to="/" className="menu-link ">Lavash</Link></li>
            <li className="meal actives"><Link to="/desert" className="menu-link ">Desert</Link></li>
            <li className="meal"><Link to="/set" className="menu-link">Set</Link></li>
            <li className="meal"><a href="#" className="menu-link">Xaggi</a></li>
            <li className="meal"><a href="#" className="menu-link">Burger</a></li>
            <li className="meal"><a href="#" className="menu-link">Pizza</a></li>
            <li className="meal"><a href="#" className="menu-link">Sendvich</a></li>
            <li className="meal"><a href="#" className="menu-link">Donar</a></li>
            <li className="meal"><a href="#" className="menu-link">Xot-dog</a></li>
            <li className="meal"><a href="#" className="menu-link">Free</a></li>
            <li className="meal"><a href="#" className="menu-link">Drink</a></li>
            <li className="meal"><a href="#" className="menu-link">Salad</a></li>
            <li className="meal"><a href="#" className="menu-link">Bread</a></li>
            <li className="meal"><a href="#" className="menu-link">Sauce</a></li>
          </ul>
        </div>
        </div>
      </div>
      {/* Menu */}

  {/* Foods */}
  <div className="foods">
    <div className="container">
      <div className="foods-lists">
             <img src={desert1} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Spicy seasoned seafood noodles</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">2.29 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert2} alt="foods" className="foods-img" />
             <h4 className="foods-title">x owls available</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">3.29 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Salted Pasta with mushroom sauce</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">5.29 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Beef dumpling in hot soup</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">7.09 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Hot spicy fried rice with omelet</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">9.29 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Spicy instant noodle with</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">7.56 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert7} alt="foods" className="foods-img" />
             <h4 className="foods-title">constant noodle special omelette</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">9.21 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert8} alt="foods" className="foods-img" />
             <h4 className="foods-title">noodle with spinach</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">6.43 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={desert9} alt="foods" className="foods-img" />
             <h4 className="foods-title">Salted Pasta with mushroom sauce</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">5.59 сум</span>
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

export default HomePages