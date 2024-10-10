import { Link } from 'react-router-dom'
import quizIcon from '../assets/img/cross.png'
import examIcon from '../assets/img/exam.png'

const Quizzes = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center'>
      <div className="w-3/4 md:w-1/2">
        <p className="text-white text-3xl text-center font-bold mb-10">Testler</p>
        <ul className='flex flex-col gap-4'>
          <Link to='/quizzes-pack-1'>
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Testler toplamı 1</span>
              <div className='h-10'>
                <img src={quizIcon} alt="Quiz icon" className='h-full' />
              </div>
            </li>
          </Link>
          <Link to='/quizzes-pack-2'>
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Testler toplamı 2</span>
              <div className='h-10'>
                <img src={quizIcon} alt="Quiz icon" className='h-full' />
              </div>
            </li>
          </Link>
          <Link to='/quizzes-pack-3'>
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Testler toplamı 3</span>
              <div className='h-10'>
                <img src={quizIcon} alt="Quiz icon" className='h-full' />
              </div>
            </li>
          </Link>
          <a href='/test-files/imtixan.exe' download>
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Juwmaqlawshı test</span>
              <div className='h-10'>
                <img src={examIcon} alt="Exam icon" className='h-full' />
              </div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Quizzes