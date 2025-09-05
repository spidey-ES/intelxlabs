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
      className='group flex flex-col items-center bg-black rounded-lg shadow-xl p-2 w-[15vw] 
                 transition-transform duration-500 hover:scale-105 overflow-hidden'>
      <div
        className='flex flex-col items-center relative w-full h-[48vh] rounded-md overflow-hidden 
                   transition-all duration-500'
        style={{ backgroundColor: 'black' }}>
        <div
          className='absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-100 
                     transition-opacity duration-500 group-hover:scale-110'
          style={{ backgroundImage: `url(${bg})` }}
        />

        <div className='relative z-10 flex flex-col items-center p-2 transition-transform duration-500 group-hover:scale-105'>
          <Image
            src={img}
            alt='img'
            width={50}
            height={50}
            className='rounded-md'
          />
          <h1 className='text-center font-semibold mt-2 text-gray-400'>
            {title}
          </h1>
          <p className='text-white text-xs font-semibold text-center'>
            Belong together with consistency, balanced and structured
            connections, strong and steady movement ahead, support that prevents
            difficulties, and a stable foundation is formed
          </p>
          <Link
            href='./tour'
            className='text-gray-400 text-sm font-semibold hover:underline hover:text-amber-200 mt-2'>
            {' '}
            {`Read more ->`}
          </Link>
        </div>
      </div>
    </div>
  );
}
