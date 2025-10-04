import Image from 'next/image';

interface DataofCards {
  id: number;
  img: string;
  title: string;
}

export default function Cards({ id, img, title }: DataofCards) {
  return (
    <div
      className={`flex flex-col items-center  bg-gray-100 rounded-lg shadow-md p-2 
  w-64 sm:w-72 md:w-60 lg:w-78
  h-[40vh] hover:scale-105 transition-transform duration-300 `}>
      <div className='relative w-full h-3/4 rounded-md overflow-hidden'>
        <Image src={img} alt='img' fill className='rounded-md object-cover' />
        <div className='absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300'></div>
      </div>

      <h1 className='text-center font-semibold mt-2 text-black'>{title}</h1>
    </div>
  );
}
