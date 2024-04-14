import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Order.css'

const Order = () => {
  return (
    <div className="order">
        <Navbar/>
        <div className="container">
            <img src="" alt="" className="order-image" />
            <p className="order-sum">summa</p>
            <div className="order-buttons">
                <button className="order-button">-</button>
                <p className="order-number">111</p>
                <button className="order-button">+</button>
                 <p className="order-sum">summ</p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Order