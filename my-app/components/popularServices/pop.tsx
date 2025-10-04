import PopCards from '../popCards/popCards';

interface cardsdataType {
  id: number;
  img: string;
  title: string;
  bg: string;
}

export default function PopServices() {
  const cardsData: cardsdataType[] = [
    {
      id: 1,
      img: '/campfire-white.png',
      title: 'Tent Camping',
      bg: '/bg-house.png',
    },
    {
      id: 2,
      img: '/tramway.png',
      title: 'Glamping cabin',
      bg: '/bg-house.png',
    },
    { id: 3, img: '/mobiHome.png', title: 'Rv Home', bg: '/bg-house.png' },
    { id: 4, img: '/tent.png', title: 'Tent Camping', bg: '/bg-house.png' },
    { id: 5, img: '/skiing.png', title: 'Skiing', bg: '/bg-house.png' },
    { id: 6, img: '/trekking.png', title: 'Trekking', bg: '/bg-house.png' },
  ];

  return (
    <div className='bg-[#1D231F] flex flex-col items-center'>
      <div className='flex flex-col items-center justify-center py-20 w-full max-w-7xl xl:max-w-none px-4'>
        <button className='bg-orange-200 rounded-md px-4 py-1 text-xs font-medium text-orange-500 w-[150px] h-[30px]'>
          Popular Activities
        </button>
        <h1 className='text-white font-bold text-2xl mt-3 text-center'>
          Amazing Adventure and Camping Services <br />
          <span className='block'>to enjoy</span>
        </h1>

        <div
          className='
        mt-2 
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6
        gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-10
        w-full justify-items-center
      '>
          {cardsData.map((each) => (
            <PopCards
              key={each.id}
              id={each.id}
              img={each.img}
              title={each.title}
              bg={each.bg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
