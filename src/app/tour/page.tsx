import Link from 'next/link';
import Cards from './cards';
interface DataofCards {
  id: number;
  img: string;
  title: string;
}

export default function Tour() {
  const cardsData: DataofCards[] = [
    { id: 1, img: '/tourAssests/maldives.png', title: 'Maldives' },
    {
      id: 2,
      img: '/tourAssests/mountain-trekking.png',
      title: 'Mountain Trek',
    },
    { id: 3, img: '/fishing.png', title: 'Fishing' },
    { id: 4, img: '/kayaking.png', title: 'Kayaking' },
    { id: 5, img: '/tourAssests/paraglaiding.png', title: 'paragliding' },
    { id: 6, img: '/tourAssests/beaches.png', title: 'beaches' },
  ];
  return (
    <div>
      <div className='h-screen flex flex-col items-center justify-center bg-[url("/greenMountions.png")] bg-cover'>
        <div>
          <h1 className='font-bold text-4xl text-white'>Explore Tour Places</h1>
          <ul className='flex'>
            <li className='text-white text-xl mt-2'>
              <Link href='/'>{`Home >`}</Link>
            </li>
            <li className='text-white text-xl mt-2 ml-2 underline'>Contact</li>
          </ul>
        </div>
      </div>
      <div className='flex items-center justify-center bg-white py-20'>
        <div className='flex justify-center gap-6 mt-6 flex-wrap'>
          {cardsData.map((each) => (
            <Cards
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
