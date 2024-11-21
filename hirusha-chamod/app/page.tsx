
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <main>
      <div className='bg-primary'>
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
