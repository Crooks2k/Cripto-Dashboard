import './App.css'
import "../src/App.css"
import "./components/Header/Header.css"
import "./components/PreHeader/PreHeader.css"
import "./components/Inicio/Ranking.css"
import Ranking from './components/Inicio/Ranking'
import Noticias from './components/Noticias/Noticias'
import {Route, Routes } from 'react-router-dom'
import Aprender from './components/Aprender/Aprender'
import Convertidor from './components/Convertidor/Convertidor'
import Informacion from './components/Informacion/Informacion'
function App() {
  return (
    <>
    <Routes>
     <Route path="/" element={<Ranking/>}/>
     <Route path="/components/Noticias/Noticias" element={<Noticias/>}/>
     <Route path="/components/Aprender/Aprender" element={<Aprender/>}/>
     <Route path="/components/Convertidor/Convertidor" element={<Convertidor/>}/>
     <Route path="/components/Informacion/Informacion" element={<Informacion/>}/>
    </Routes>
    </>
  )
}

export default App