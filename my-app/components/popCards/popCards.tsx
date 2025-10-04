import Image from 'next/image';
import Link from 'next/link';

interface DataofCards {
  id: number;
  img: string;
  title: string;
  bg: string;
}

export default function PopCards({ id, img, title, bg }: DataofCards) {
  return (
    <div
      className='group flex flex-col items-center bg-black rounded-lg shadow-lg 
              w-full max-w-[240px]  
             mt-2 transition-transform duration-500 hover:scale-105 overflow-hidden'>
      <div
        className='flex flex-col items-center relative w-full 
                   h-[280px] sm:h-[340px] md:h-[360px] lg:h-[350px]
                   rounded-md overflow-hidden transition-all duration-500'
        style={{ backgroundColor: 'black' }}>
        <div
          className='absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-100 
                     transition-all duration-500 group-hover:scale-110'
          style={{ backgroundImage: `url(${bg})` }}
        />

        <div
          className='mt-2 relative z-10 flex flex-col items-center p-3 
                        transition-transform duration-500 group-hover:scale-105'>
          <Image
            src={img}
            alt={title}
            width={60}
            height={60}
            className='rounded-md'
          />
          <h1 className='text-center font-semibold mt-2 text-gray-300 text-lg'>
            {title}
          </h1>
          <p className='text-gray-200 text-xs sm:text-sm font-light text-center mt-2 leading-relaxed'>
            Belong together with consistency, balanced and structured
            connections, strong and steady movement ahead, support that prevents
            difficulties.
          </p>
          <Link
            href='/tour'
            className='text-amber-300 text-sm font-semibold hover:underline hover:text-amber-200 mt-3'>
            {`Read more →`}
          </Link>
        </div>
      </div>
    </div>
  );
}
