import Link from 'next/link';
import ContactCards from '../../../components/contactUs/contactCard';
import FadeContent from '../../../components/fade-content/fade';
interface DataofCards {
  id: number;
  img: string;
  title: string;
  about: string;
}

export default async function Booking() {
  const PromiseObj = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('3000');
    }, 3000);
  });
  const cardsData: DataofCards[] = [
    {
      id: 1,
      img: '/maps.png',
      title: 'Office Location',
      about: '14th Floor, Tech Park, Whitefield, Bengaluru, India',
    },
    {
      id: 2,
      img: '/Mail.png',
      title: 'Mail',
      about: 'bengalurutechhub@gmail.com',
    },
    {
      id: 3,
      img: '/call.png',
      title: 'Call',
      about: '+ 91 98765 43210',
    },
  ];

  return (
    <div>
      <FadeContent
        blur={true}
        duration={2000}
        easing='ease-out'
        initialOpacity={0}>
        <div className='h-screen flex flex-col items-center justify-center bg-[url("/hotairballon.png")] bg-cover'>
          <div>
            <h1 className='font-bold text-4xl text-white'>Contact Us</h1>
            <ul className='flex'>
              <li className='text-white text-xl mt-2'>
                <Link href='/'>{`Home >`}</Link>
              </li>
              <li className='text-white text-xl mt-2 ml-2 underline'>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </FadeContent>
      <FadeContent
        blur={true}
        duration={2000}
        easing='ease-out'
        initialOpacity={0}>
        <div className='bg-white py-20 flex flex-col  items-center'>
          <div className='flex flex-col w-full items-center'>
            <button className='bg-green-100 rounded-md px-4 py-1 text-xs font-medium text-green-600 w-[150px] h-[30px]'>
              Contact us
            </button>
            <h1 className='mt-2 text-xl font-bold'>
              Ready to Get Our Best Services!<br></br>{' '}
              <span className='flex flex-col items-center'>
                Feel Free To Contact With Us
              </span>
            </h1>
          </div>
          <div className='flex  gap-4 mt-6 '>
            {cardsData.map((each) => (
              <ContactCards
                key={each.id}
                id={each.id}
                img={each.img}
                title={each.title}
                about={each.about}
              />
            ))}
          </div>
        </div>
      </FadeContent>
    </div>
  );
}
