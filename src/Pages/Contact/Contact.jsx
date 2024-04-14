import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import './Contact.css'
const Contact = () => {
  return (
    <div className='contact'>
        <Navbar/>   
        <div className="contact-info">
        <div className="container">
            <div className="contact-top">
                <h3 className="contact-title">
                Телефоны контактных центров
                </h3>
                <p className="contact-text">Круглосуточно, без выходных</p>
                <ul className="contact-list">
                    <li className="contact-item">
                        <p className='contact-text'>Ташкент</p>
                        <a className='contact-to' href="tel:+998901249484">+998901246484</a>
                    </li>
                    <li className="contact-item">
                        <p className='contact-text'>Наманган</p>
                        <a className='contact-to' href="tel:+998936689974">+998936689974</a>
                    </li>
                    <li className="contact-item">
                        <p className='contact-text'>Алмалык</p>
                        <a className='contact-to' href="tel:+998333472770">+998 33 3472470</a>
                    </li>
                </ul>
            </div>
            <div className="contact-middle">
                <h3 className="contact-title">Отдел поддержки клиентов</h3>
                <ul className="contact-lists">
                    <li className="contact-items">
                    <p className='contact-texts'>Электронная почта</p>
                          <a href="mailto:sunnattoxtaqulov4444@gmail.com">sunnattoxtaqulov4444@gmail.com</a>
                    </li>
                    <li className="contact-items">
                    <p className='contact-texts'>Контактный телефон</p>
                          <a href="mailto:sunnattoxtaqulov4444@gmail.com">+998936689974@gmail.com</a>
                    </li>
                </ul>
            </div>
            <div className="contact-bottom">
                <h3 className="contact-title">Правообладателям</h3>
                <p className="contact-subtext">По вопросам, возникшим в связи с предположительным неправомерным использованием товарных знаков, логотипов и иных материалов, просим обращаться по е-мейлу с приложением подтверждающих документов</p>
                <div className="contact-footer">
                    <p>Электронная почта</p>
                    <a href="mailtosunnattoxtaqulov4444@gmail.com" className="contact-">sunnattoxtaqulov4444@gmail.com</a>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact