import Hero from '../../components/home/home';
import PopActivites from '../../components/pop-act/popAct';
import FloatingTab from '../../components/floatingWindow/page';
export default function Home() {
  return (
    <div className='relative'>
      <Hero />
      <div className='hidden md:block '>
        <FloatingTab />
      </div>

      <PopActivites />
    </div>
  );
}
