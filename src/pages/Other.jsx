import MSIcon from '../assets/img/microsoft.png'

const Other = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center'>
      <div className="w-3/4 md:w-1/2">
        <p className="text-white text-3xl text-center font-bold mb-10">Basqa kerekli fayllar</p>
        <ul className='flex flex-col gap-4'>
          <a href='./KMSAuto-password-kmsauto.zip' download title="Fayldı júklew">
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Activator</span>
              <div className='w-10'>
                <img src={MSIcon} alt="MS icon" />
              </div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Other