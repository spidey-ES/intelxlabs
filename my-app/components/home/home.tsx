import FadeContent from '../fade-content/fade';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <FadeContent
      blur={true}
      duration={2000}
      easing='ease-out'
      initialOpacity={0}>
      <div className='bg-[url(/house.png)] w-full bg-center min-h-screen bg-no-repeat bg-cover'>
        <div className='flex justify-center items-center min-h-screen px-4 text-center'>
          <div className='flex flex-col items-center max-w-2xl w-full'>
            <button className='bg-amber-500 rounded-md px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-white'>
              Tour & Travels
            </button>

            <h1 className='mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-snug'>
              Tour Travel & Adventure
              <br />
              <span className='block'>Camping</span>
            </h1>

            <div className='mt-6'>
              <Link href='/tour'>
                {' '}
                <button className='flex items-center gap-3 bg-green-600 rounded-2xl px-5 py-2 text-sm sm:text-base font-medium text-white hover:bg-amber-500'>
                  <span>Explore More</span>
                  <span className='inline-flex items-center justify-center w-7 h-7 bg-white rounded-full'>
                    <Image src='/send.png' alt='send' width={14} height={14} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeContent>
  );
}
