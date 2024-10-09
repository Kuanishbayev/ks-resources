import PDFIcon from '../assets/img/pdf.png'
import BirinshiAmeliyJumis from '../assets/files/ks-resources/1-ameliy-jumis.pdf'
import Dizimler from '../assets/files/ks-resources/dizimler.pdf'
import Obyektivka from '../assets/files/ks-resources/obyektivka.pdf'
import OzBetinsheJumis from '../assets/files/ks-resources/oz-betinshe-jumis.pdf'
import SabaqtinTexnologiyaliqKartasi from '../assets/files/ks-resources/sabaqtin-texnologiyaliq-kartasi.pdf'
import TestDuziw from '../assets/files/ks-resources/test-duziw.pdf'

const KSResources = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center'>
      <div className="w-3/4 md:w-1/2">
        <p className="text-white text-3xl text-center font-bold mb-10">Materiallar</p>
        <ul className='flex flex-col gap-4'>
          <a href={BirinshiAmeliyJumis} download title="Fayldı júklew">
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">1-ámeliy jumıs</span>
              <div className='w-10'>
                <img src={PDFIcon} alt="PDF icon" />
              </div>
            </li>
          </a>
          <a href={Dizimler} download title="Fayldı júklew">
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Dizimler</span>
              <div className='w-10'>
                <img src={PDFIcon} alt="PDF icon" />
              </div>
            </li>
          </a>
          <a href={Obyektivka} download title="Fayldı júklew">
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Test dúziw</span>
              <div className='w-10'>
                <img src={PDFIcon} alt="PDF icon" />
              </div>
            </li>
          </a>
          <a href={OzBetinsheJumis} download title="Fayldı júklew">
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Sabaqtıń texnologiyalıq kartası</span>
              <div className='min-w-10 max-w-10'>
                <img src={PDFIcon} alt="PDF icon" />
              </div>
            </li>
          </a>
          <a href={SabaqtinTexnologiyaliqKartasi} download title="Fayldı júklew">
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Óz-betinshe jumıs (titul)</span>
              <div className='w-10'>
                <img src={PDFIcon} alt="PDF icon" />
              </div>
            </li>
          </a>
          <a href={TestDuziw} download title="Fayldı júklew">
            <li className="bg-white p-4 rounded-md cursor-pointer hover:bg-orange-200 shadow active:scale-95 transition-all active:bg-white flex justify-between items-center gap-4">
              <span className="text-indigo-600 text-lg font-semibold">Obyektivka</span>
              <div className='w-10'>
                <img src={PDFIcon} alt="PDF icon" />
              </div>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default KSResources