import Hero from '../../components/home/home';
import PopActivites from '../../components/pop-act/popAct';
import FloatingTab from '../../components/floatingWindow/page';
export default function Home() {
  return (
    <div className='retaltive'>
      <Hero />
      <FloatingTab />
      <PopActivites />
    </div>
  );
}
