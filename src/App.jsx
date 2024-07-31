import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quizzes from './pages/Quizzes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizzes' element={<Quizzes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
