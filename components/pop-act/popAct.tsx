import Cards from '../cards/card';
import FadeContent from '../fade-content/fade';
import Image from 'next/image';
import PercentageCircle from '../percentage/page';
import PopServices from '../popularServices/pop';

interface cardsdataType {
  id: number;
  img: string;
  title: string;
}

export default function PopActivites() {
  const cardsData: cardsdataType[] = [
    { id: 1, img: '/tent-camping.png', title: 'Tent Camping' },
    { id: 2, img: '/mountain-biking-1.png', title: 'Mountain Biking' },
    { id: 3, img: '/fishing.png', title: 'Fishing' },
    { id: 4, img: '/kayaking.png', title: 'Kayaking' },
  ];

  return (
    <div>
      <div className='bg-white flex flex-col items-center'>
        {/* Popular Activities*/}
        <FadeContent
          blur={true}
          duration={2000}
          easing='ease-out'
          initialOpacity={0}>
          <div className='flex flex-col items-center justify-center py-20'>
            <button className='bg-green-100 rounded-md px-4 py-1 text-xs font-medium text-green-600 w-[150px] h-[30px]'>
              Popular Activities
            </button>
            <h1 className='text-black font-bold text-3xl mt-2'>
              Explore Real Adventure
            </h1>

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
        </FadeContent>

        {/* About Company Section */}
        <FadeContent
          blur={true}
          duration={2000}
          easing='ease-out'
          initialOpacity={0}>
          <div className='flex flex-col items-center'>
            <div className='flex  flex-row justify-between  w-full max-w-6xl  py-5 gap-10'>
              <div className='max-w-md'>
                <button className='bg-green-100 rounded-md px-4 py-1 text-xs font-medium text-green-600 mb-3 w-[150px] h-[30px]'>
                  About Company
                </button>
                <h1 className='text-3xl font-bold '>
                  We Are a Leading Company in Travel and Adventure Experiences
                </h1>
                <p className='text-sm mt-3'>
                  We focus on building strong connections. With precision and
                  balance, we transform challenges into opportunities, creating
                  growth and lasting impact.
                </p>
                <div className='flex gap-5 mt-3'>
                  <ul className='flex flex-col '>
                    <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 hover:-skew-6 shadow-xl'>
                      family Camping
                    </li>
                    <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 hover:-skew-3 shadow-xl'>
                      fishing
                    </li>
                    <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 hover:-skew-6 shadow-xl'>
                      luxury Camping
                    </li>
                  </ul>
                  <ul className='flex flex-col'>
                    <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 hover:skew-3 shadow-xl'>
                      wild Camping
                    </li>
                    <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 hover:skew-6 shadow-xl'>
                      mountain biking
                    </li>
                    <li className='bg-gray-100 p-3 font-semibold text-xs rounded-xl mb-2 hover:skew-3 shadow-xl'>
                      couple Camping
                    </li>
                  </ul>
                </div>
              </div>

              <div className=' relative h-[450px] w-[420px]'>
                <Image
                  src='/couple-dancing.png'
                  alt='img'
                  fill
                  className='object-cover border rounded-t-2xl'
                />
              </div>
            </div>
          </div>
        </FadeContent>
        <FadeContent
          blur={true}
          duration={2000}
          easing='ease-out'
          initialOpacity={0}>
          <div className='flex flex-col items-center mt-6'>
            <div className='flex  flex-row justify-between  w-full max-w-6xl  py-5 gap-10'>
              <div className=' relative h-[450px] w-[420px]'>
                <Image
                  src='/couple-selfie.png'
                  alt='img'
                  fill
                  className='object-cover border rounded-t-2xl'
                />
              </div>
              <div className='max-w-md'>
                <button className='bg-green-100 rounded-md px-4 py-1 text-xs font-medium text-green-600 mb-3 w-[150px] h-[30px]'>
                  Who we are
                </button>
                <h1 className='text-3xl font-bold '>
                  Great oppurtunites for Adventure and
                </h1>
                <p className='text-sm mt-3'>
                  We believe every challenge can be transformed into an
                  opportunity. Guided by vision and experience, we create
                  journeys that inspire, connect, and leave lasting memories.
                </p>
                <div className=''>
                  <div className='flex gap-8 mt-4 bg-wite p-6 w-60 shadow-xl rounded-md'>
                    <div>
                      <PercentageCircle percentage={75} />
                      <h1 className='text-center'> satisified clients</h1>
                    </div>

                    <div>
                      <PercentageCircle percentage={93} size={80} />
                      <h1 className='text-center'>Succes Rate</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>
      </div>
      <PopServices />
      <div className='bg-white flex flex-col items-center py-20'>
        <div className='w-full max-w-6xl '>
          <div className='flex justify-between gap-10'>
            <div className='max-w-lg'>
              <button className='bg-green-100 rounded-md px-4 py-1 text-sm font-medium text-green-600 mb-3 w-[150px] h-[30px] mt-2'>
                News & Blog
              </button>
              <h1 className='text-3xl font-bold mt-2'>
                Amazing News & Blog For <br /> Every Single Update Articles{' '}
                <br /> & Tips
              </h1>
              <h1 className='mt-2 text-sm text-gray-600'>
                Stay connected with the latest insights, trends, and expert
                tips.
                <br />
                From travel adventures to lifestyle updates, our blog brings you
                <br />
                fresh content that informs and inspires.
              </h1>
              <h1 className='hover:text-green-400 font-semibold underline mt-2 cursor-pointer'>
                {`View More News ->`}
              </h1>
            </div>

            <div className='flex gap-6  '>
              <div className='bg-gray-100 rounded-md shadow-lg p-4 max-w-xs '>
                <Image
                  src='/beautiful-tent.png'
                  width={250}
                  height={180}
                  alt='Tent'
                  className='rounded-md'
                />
                <div className='flex items-center mt-3 text-gray-500 text-sm'>
                  <Image
                    src='/calender.png'
                    alt='calendar'
                    width={18}
                    height={18}
                  />
                  <span className='ml-2'>November 24, 2025</span>
                </div>
                <h2 className='font-semibold text-md mt-2'>
                  Make it a beautiful life <br /> for you and your loved ones
                </h2>
                <button className='mt-3 text-sm bg-white rounded-2xl px-4 py-1 font-medium border hover:bg-green-600 hover:text-white transition'>
                  Read more
                </button>
              </div>

              <div className='bg-gray-100 rounded-md shadow-lg p-4 max-w-xs'>
                <Image
                  src='/mountains.png'
                  width={250}
                  height={180}
                  alt='Mountain'
                  className='rounded-md'
                />
                <div className='flex items-center mt-3 text-gray-500 text-sm'>
                  <Image
                    src='/calender.png'
                    alt='calendar'
                    width={18}
                    height={18}
                  />
                  <span className='ml-2'>December 02, 2025</span>
                </div>
                <h2 className='font-semibold text-md mt-2'>
                  Explore the mountains <br /> and find peace in nature
                </h2>
                <button className='mt-3 text-sm bg-white rounded-2xl px-4 py-1 font-medium border hover:bg-green-600 hover:text-white transition'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
