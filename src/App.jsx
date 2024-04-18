import React from 'react'
import HomePages from './Pages/HomePages/HomePages'
import './App.css'
import {Route ,Routes} from "react-router-dom";
import Fillial from './Pages/Fillial/Fillial';
import Info from './Pages/Info/Info'
import Contact from './Pages/Contact/Contact';
import Desert from './Pages/Desert/Desert'
import Set from './Pages/Set/Set';
import Burger from './Pages/Burger/Burger';
import Haggi from './Pages/Haggi/Haggi';
import Pizza from './Pages/Pizza/Pizza';
import Sendwich from './Pages/Sendwich/Sendwich';
import Donar from './Pages/Donar/Donar';
import XotDog from './Pages/XotDog/XotDog';
import Free from './Pages/Free/Free';
import Drink from './Pages/Drink/Drink';
import Salad from './Pages/Salad/Salad';
import Bread from './Pages/Bread/Bread';
import Sauce from './Pages/Sauce/Sauce';
import Connect from './Pages/Connect/Connect'
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translationEn from './locale/translationEn';
import translationUz from './locale/translationUz';
i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: translationEn
      },
      uz: {translation: translationUz}
    },
    lng: "uz", 
    fallbackLng: "uz",

    interpolation: {
      escapeValue: false 
    }
  });
const App = () => {
  const changeLang = (value) =>{
    i18n.changeLanguage(value)
  }
  const { t } = useTranslation();
  return (
    <div>
      <Routes>
        <Route path="/connect" element={<Connect changeLang={changeLang}/>}/>
        <Route path="/contact" element={<Contact changeLang={changeLang}/>}/>
        <Route path="/info" element={<Info changeLang={changeLang}/>}/>
        <Route path="/fillial" element={<Fillial changeLang={changeLang} />}/>
        <Route path="/" element={<HomePages changeLang={changeLang}/>}/>
        <Route path="/desert" element={<Desert changeLang={changeLang}/>}/>
        <Route path="/set" element={<Set changeLang={changeLang}/>}/>
        <Route path="/burger" element={<Burger changeLang={changeLang}/>}/>
        <Route path="/pizza" element={<Pizza changeLang={changeLang}/>}/>
        <Route path="/sendwich" element={<Sendwich changeLang={changeLang}/>}/>
        <Route path="/haggi" element={<Haggi changeLang={changeLang}/>}/>
        <Route path="/donar" element={<Donar changeLang={changeLang}/>}/>
        <Route path="/xot-dog" element={<XotDog changeLang={changeLang}/>}/>
        <Route path="/free" element={<Free/>} changeLang={changeLang}/>
        <Route path="/drink" element={<Drink  changeLang={changeLang}/>}/>
        <Route path="/salad" element={<Salad changeLang={changeLang}/>}/>
        <Route path="/bread" element={<Bread changeLang={changeLang}/>}/>
        <Route path="/sauce" element={<Sauce changeLang={changeLang}/>}/>
        
      </Routes>

    </div>
  )
}

export default App