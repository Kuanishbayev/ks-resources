import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quizzes from './pages/Quizzes'
import KkKeyboard from './pages/KkKeyboard'
import KSResources from './pages/KSResources'
import QuizzesPack1 from './pages/QuizzesPack1'
import QuizzesPack2 from './pages/QuizzesPack2'
import QuizzesPack3 from './pages/QuizzesPack3'
import Other from './pages/Other'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/quizzes' element={<Quizzes />} />
          <Route path='/quizzes-pack-1' element={<QuizzesPack1 />} />
          <Route path='/quizzes-pack-2' element={<QuizzesPack2 />} />
          <Route path='/quizzes-pack-3' element={<QuizzesPack3 />} />
          <Route path='/kk-keyboard' element={<KkKeyboard />} />
          <Route path='/ks-resources' element={<KSResources />} />
          <Route path='/other' element={<Other />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
