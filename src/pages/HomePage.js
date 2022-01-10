import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';

export default function HomePage() {
  return (
    <>
      <style>{'body { background-color: white; }'}</style>
      <Header pageType={'main'} />
      <About />
      <HowItWorks />
      <Reviews />
      <Footer />
    </>
  );
}
