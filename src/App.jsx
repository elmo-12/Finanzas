import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Introduccion from './components/Introduccion'
import FuncionesExcel from './components/FuncionesExcel'
import AnalisisHorizontalVertical from './components/AnalisisHorizontalVertical'
import RatiosFinancieros from './components/RatiosFinancieros'
import Pagination from './components/Pagination'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
      <div>
        <Pagination />
        <Routes>
          <Route path="/introduccion" element={<Introduccion />} />
          <Route path="/funciones" element={<FuncionesExcel />} />
          <Route path="/analisis" element={<AnalisisHorizontalVertical />} />
          <Route path="/ratios" element={<RatiosFinancieros />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
