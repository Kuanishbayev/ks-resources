import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quizzes from './pages/Quizzes'
import KkKeyboard from './pages/KkKeyboard'
import KSResources from './pages/KSResources'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizzes' element={<Quizzes />} />
          <Route path='/kk-keyboard' element={<KkKeyboard />} />
          <Route path='/ks-resources' element={<KSResources />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
