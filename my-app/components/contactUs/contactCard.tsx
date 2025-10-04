import Image from 'next/image';

interface DataofCards {
  id: number;
  img: string;
  title: string;
  about: string;
}

export default function ContactCards({ id, img, title, about }: DataofCards) {
  return (
 
    <div className='flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-lg p-6 sm:p-8 w-full lg:w-80 hover:scale-105 transition-transform duration-300'>
      <div className='flex flex-col items-center justify-start w-full h-full rounded-md overflow-hidden'>
        <Image
          src={img}
          alt={title}
          height={60}
          width={60}
          className='rounded-md'
        />
        <h1 className='text-xl text-center font-semibold mt-4 text-black'>
          {title}
        </h1>
        <p className='text-base text-gray-600 text-center mt-2'>{about}</p>
      </div>
    </div>
  );
}
