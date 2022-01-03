import Footer from '../components/Footer';
import Header from '../components/Header';
import Routes from '../components/Routes';

export default function HomePage() {
  return (
    <>
      <Header pageType={'routes'} />
      <Routes />
      <Footer />
    </>
  );
}
