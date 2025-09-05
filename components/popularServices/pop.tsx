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
    { id: 4, img: '/tent.png', title: 'tentcamping', bg: '/bg-house.png' },
    { id: 5, img: '/skiing.png', title: 'skiing', bg: '/bg-house.png' },
    { id: 6, img: '/trekking.png', title: 'trekking', bg: '/bg-house.png' },
  ];
  return (
    <div className='bg-[#1D231F] flex flex-col items-center'>
      <div className='flex flex-col items-center justify-center py-20'>
        <button className='bg-orange-200 rounded-md px-4 py-1 text-xs font-medium text-orange-500 w-[150px] h-[30px]'>
          Popular Activities
        </button>
        <h1 className='text-white font-bold text-2xl mt-3'>
          Amazing Adventure and Camping Services <br></br>
          <span className='flex flex-col items-center'>to enjoy</span>
        </h1>
        <div className='flex  gap-4 mt-6 '>
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
