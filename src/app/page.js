import Background from './components/background';
import CanvasCursor from './components/CanvasCursor';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Projects from './components/Project';


export default function Home() {
  return (
    <div>
      
<CanvasCursor/>
      <Background />
      <Navbar />
      <HeroSection />
      <Projects/>
    </div>
  );
}