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
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePages/>}/>
        <Route path="/fillial" element={<Fillial/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/desert" element={<Desert/>}/>
        <Route path="/set" element={<Set/>}/>
        <Route path="/haggi" element={<Haggi/>}/>
        <Route path="/burger" element={<Burger/>}/>
        <Route path="/pizza" element={<Pizza/>}/>
        <Route path="/sendwich" element={<Sendwich/>}/>
        <Route path="/donar" element={<Donar/>}/>
        <Route path="/xot-dog" element={<XotDog/>}/>
        <Route path="/free" element={<Free/>}/>
        <Route path="/drink" element={<Drink/>}/>
        <Route path="/salad" element={<Salad/>}/>
        <Route path="/bread" element={<Bread/>}/>
        <Route path="/sauce" element={<Sauce/>}/>
        <Route path="/connect" element={<Connect/>}/>
        
      </Routes>

    </div>
  )
}

export default App