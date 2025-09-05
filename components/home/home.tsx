// import bghome from '';
import FadeContent from '../fade-content/fade';
import Image from 'next/image';
export default function Hero() {
  return (
    <FadeContent
      blur={true}
      duration={2000}
      easing='ease-out'
      initialOpacity={0}>
      <div className=' bg-[url(/house.png)] w-full bg-center  h-screen  bg-no-repeat bg-content'>
        <div className='flex justify-center items-center h-screen'>
          <div className='flex flex-col items-center'>
            <button className=' bg-amber-500 rounded-md px-4 py-1 text-xs font-medium text-white w-[120px] h-[40px]'>
              Tour & Travels
            </button>
            <h1 className='mt-2 text-6xl font-semibold text-white'>
              Tour Travel & Adventure <br></br>
              <span className='flex flex-col items-center'>Camping</span>
            </h1>
            <div className='relative inline-block mt-4'>
              <button className='text-start  bg-green-600 rounded-2xl px-4 py-1 text-sm  font-medium text-white hover:bg-amber-500 w-[150px] h-[40px]'>
                Explore More
              </button>
              <div className='bg-gray-100 rounded-full w-[30px] h-[30px] flex items-center justify-center absolute top-1 right-1.5'>
                <Image src='/send.png' alt='send' height={14} width={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeContent>
  );
}
