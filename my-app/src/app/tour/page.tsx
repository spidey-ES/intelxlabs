import Link from 'next/link';
import TourCards from './cards';

interface DataofCards {
  id: number;
  img: string;
  title: string;
}

export default function Tour() {
  const cardsData: DataofCards[] = [
    { id: 1, img: '/tourAssests/maldives.png', title: 'Resorts' },
    {
      id: 2,
      img: '/tourAssests/mountain-trekking.png',
      title: 'Mountain Trek',
    },
    { id: 3, img: '/fishing.png', title: 'Fishing' },
    { id: 4, img: '/kayaking.png', title: 'Kayaking' },
    { id: 5, img: '/tourAssests/paraglaiding.png', title: 'Paragliding' },
    { id: 6, img: '/tourAssests/beaches.png', title: 'Beaches' },
  ];

  return (
    <div>
      <div className='h-[60vh] md:h-screen flex flex-col items-center justify-center bg-[url("/greenMountions.png")] bg-cover bg-center px-4 text-center'>
        <div>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-white'>
            Explore Tour Places
          </h1>
          <ul className='flex flex-wrap justify-center mt-2'>
            <li className='text-white text-sm sm:text-lg md:text-xl'>
              <Link href='/'>{`Home >`}</Link>
            </li>
            <li className='text-white text-sm sm:text-lg md:text-xl ml-2 underline'>
              Tour
            </li>
          </ul>
        </div>
      </div>

      <div className='flex items-center justify-center bg-white py-10 sm:py-16 md:py-20 px-4'>
        {/* 👇 ADDED lg:grid-cols-3 FOR LAPTOPS 👇 */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full justify-items-center'>
          {cardsData.map((each) => (
            <TourCards
              key={each.id}
              id={each.id}
              img={each.img}
              title={each.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
