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
import './Haggi.css'
import Footer from '../../Components/Footer/Footer'
const Haggi = () => {
  return (
    <div className="set">
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
            <li className="meal"><Link to="/desert" className="menu-link ">Desert</Link></li>
            <li className="meal"><Link to="/set" className="menu-link ">Set</Link></li>
            <li className="meal actives"><Link to="/haggi" className="menu-link ">Xaggi</Link></li>
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
             <img src={haggi1} alt="tfoods" className="foods-img" />
             <h4 className="foods-title">Spicy seasoned seafood noodles</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">2.29 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={haggi2} alt="foods" className="foods-img" />
             <h4 className="foods-title">x owls available</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">3.29 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={haggi3} alt="foods" className="foods-img" />
             <h4 className="foods-title">Salted Pasta with mushroom sauce</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">5.29 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={haggi4} alt="foods" className="foods-img" />
             <h4 className="foods-title">Beef dumpling in hot soup</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">7.09 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={haggi5} alt="foods" className="foods-img" />
             <h4 className="foods-title">Hot spicy fried rice with omelet</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">9.29 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={haggi6} alt="foods" className="foods-img" />
             <h4 className="foods-title">Spicy instant noodle with</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">7.56 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={haggi7} alt="foods" className="foods-img" />
             <h4 className="foods-title">constant noodle special omelette</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">9.21 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={haggi3} alt="foods" className="foods-img" />
             <h4 className="foods-title">noodle with spinach</h4>
             <p className='foods-text'>Информация: лаваш мясной classic, картофель-фри, пеп</p>
             <div className="foods-info">
              <span className="foods-sum">6.43 сум</span>
              <button className="foods-btn">Заказать</button>
             </div>
      </div>
      <div className="foods-lists">
             <img src={haggi8} alt="foods" className="foods-img" />
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

export default Haggi