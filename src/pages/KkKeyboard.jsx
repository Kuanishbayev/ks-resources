import qoshqarMuyizIcon from '../assets/img/qoshqar-muyiz-nagis-karakalpak-national-pattern.png'
import shanaraqIcon from '../assets/img/shanaraq.png'
import kkFlagIcon from '../assets/img/kk-flag.png'
import hariplerdinJaylasqanOrni from '../assets/files/kk_klaviatura_háriplerdiń_jaylasqan_ornı.pdf'

const kkKeyboard = () => {
  return (
    <div className='h-screen bg-gradient-to-br from-orange-500 via-purple-500 to-blue-500 flex justify-center items-center'>
      <div className="w-1/2">
        <div className='flex justify-center'>
          <img src={shanaraqIcon} className='w-32' alt="KK-keyboard icon" />
        </div>
        <div className='mt-4 flex gap-4 items-center justify-center mb-10'>
          <p className="text-white text-3xl text-center font-bold">Qaraqalpaqsha klaviatura</p>
          <img className='w-12 object-contain' src={kkFlagIcon} alt="KK flag icon" />
        </div>
        <ul className='flex flex-col gap-4'>
          <a href='https://kk-keyboard.netlify.app' target='_blank'>
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">latin_qr</span>
              <div className='h-10'>
                <img src={qoshqarMuyizIcon} alt="Brain icon" className='h-full' />
              </div>
            </li>
          </a>
          <a href={hariplerdinJaylasqanOrni} download>
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Háriplerdiń jaylasqan ornı</span>
              <div className='h-10'>
                <img src={qoshqarMuyizIcon} alt="Brain icon" className='h-full' />
              </div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default kkKeyboard