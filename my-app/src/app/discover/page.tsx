import Link from 'next/link';

export default function Discover() {
  return (
    <div>
      <div className='h-screen flex flex-col items-center justify-center bg-[url("/tourAssests/beaches.png")] bg-cover'>
        <div>
          <h1 className='font-bold text-4xl text-white'>Discover More</h1>
          <ul className='flex'>
            <li className='text-white text-xl mt-2'>
              <Link href='/'>{`Home >`}</Link>
            </li>
            <li className='text-white text-xl mt-2 ml-2 underline'>Discover</li>
          </ul>
        </div>
      </div>
      <div className=' flex flex-col   bg-white py-20'>
        <div>
          <div>
            <h1 className='bg-amber-400'>Hello this is Discover page</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
