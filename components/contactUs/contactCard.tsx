import Image from 'next/image';

interface DataofCards {
  id: number;
  img: string;
  title: string;
  about: string;
}

export default function ContactCards({ id, img, title, about }: DataofCards) {
  return (
    <div className='flex flex-col justify-cneter items-center bg-gray-100 rounded-lg shadow-lg p-2 w-[20vw] h-[40vh] hover:scale-105 transition-transform duration-300'>
      <div className='flex flex-col items-center justify-center w-full h-full  rounded-md overflow-hidden'>
        <Image
          src={img}
          alt='img'
          height={50}
          width={50}
          className=' rounded-md'
        />
        <h1 className='text-xs text-center font-semibold mt-2 text-black'>
          {title}
        </h1>
        <h1 className='text-sm text-black text-center mt-2'>{about}</h1>
      </div>
    </div>
  );
}
