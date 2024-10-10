import brainIcon from '../assets/img/brain.png'

const QuizzesPack3 = () => {
  return (
    <div className='py-20 min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center'>
      <div className="w-3/4 md:w-1/2">
        <p className="text-white text-3xl text-center font-bold mb-10">Testler toplamı 3</p>
        <ul className='flex flex-col gap-4'>
          <a href='/test-files/quizzes-pack-3/1-test.exe' download>
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">1-test</span>
              <div className='h-10'>
                <img src={brainIcon} alt="Brain icon" className='h-full' />
              </div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default QuizzesPack3