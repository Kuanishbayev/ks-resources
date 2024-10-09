import QuizIcon from '../assets/img/speech-bubble.png'
import KeyboardIcon from '../assets/img/kk-keyboard.png'
import ProgrammingIcon from '../assets/img/programing.png'
import TelegramIcon from '../assets/img/telegram.png'
import KSResourcesIcon from '../assets/img/resources.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen bg-indigo-400 flex justify-center items-center'>
        <ul className='flex gap-4 flex-wrap justify-center'>
            <li className='hover:scale-150 transition-all active:scale-100' title='Testler'>
                <Link to='/quizzes'>
                    <div className='size-20 bg-white rounded-md p-4'>
                        <img src={QuizIcon} alt="Quiz icon" className='h-full' />
                    </div>
                </Link>
            </li>
            <li className='hover:scale-150 transition-all active:scale-100' title='Qaraqalpaqsha klaviatura'>
                <Link to='/kk-keyboard'>
                    <div className='size-20 bg-white rounded-md p-4'>
                        <img src={KeyboardIcon} alt="Keyboard icon" className='h-full' />
                    </div>
                </Link>
            </li>
            <li className='hover:scale-150 transition-all active:scale-100' title='Kompyuter sawatxanlıǵı kursı boyınsha materiallar'>
                <Link to='/ks-resources'>
                    <div className='size-20 bg-white rounded-md p-4'>
                        <img src={KSResourcesIcon} alt="Resource icon" className='h-full' />
                    </div>
                </Link>
            </li>
            <li className='hover:scale-150 transition-all active:scale-100' title='Programmalastırıw'>
                <a href='https://resurs.netlify.app'>
                    <div className='size-20 bg-white rounded-md p-4'>
                        <img src={ProgrammingIcon} alt="Programming icon" className='h-full' />
                    </div>
                </a>
            </li>
        </ul>
        <a href="https://t.me/Ernazar_Kuanishbaev">
            <div className='size-14 cursor-pointer hover:scale-125 transition active:scale-100 fixed bottom-10 right-10' title='Baylanısıw ushın telegram akkountım'>
                <img src={TelegramIcon} alt="Telegram icon" />
            </div>
        </a>
    </div>
  )
}

export default Home