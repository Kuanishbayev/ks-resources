import QuizIcon from '../assets/img/speech-bubble.png'
import KeyboardIcon from '../assets/img/keyboard.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen bg-indigo-400 flex justify-center items-center'>
        <ul className='flex gap-4'>
            <li className='hover:scale-150 transition-all active:scale-100' title='Quizzes'>
                <Link to='/quizzes'>
                    <div className='size-20 bg-white rounded-md p-4'>
                        <img src={QuizIcon} alt="Quiz icon" className='h-full' />
                    </div>
                </Link>
            </li>
            <li className='hover:scale-150 transition-all active:scale-100' title='KK-Keyboard'>
                <a to='https://kk-keyboard.netlify.app' target='_blank'>
                    <div className='size-20 bg-white rounded-md p-4'>
                        <img src={KeyboardIcon} alt="Quiz icon" className='h-full' />
                    </div>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Home