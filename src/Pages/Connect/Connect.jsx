import './Connect.css'
import qrcode from '../../assets/qr.png'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
const Connect = () => {
  return (
    <div className="connect">
        <Navbar/>
        <div className="container">
            <div className="connect-group">
            <h1 className="connect-title">Войти</h1>
                 <div className="connect-wrapper">
                    <img src={qrcode} alt="qrcode " className="connect-img"   />
                    <p className="connect-text">Комментарий в Телеграмме
оставьте комментарий или задайте вопрос</p>
                    <a href="@maxwaymasterfood_bot" className="connect-link"><i className="fa-brands fa-telegram"></i> @maxwaymasterfood_bot</a>
                 </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Connect