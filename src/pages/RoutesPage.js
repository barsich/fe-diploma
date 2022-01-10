import Footer from '../components/Footer';
import Header from '../components/Header';
import Routes from '../components/Routes';

export default function RoutesPage({ type }) {
  return (
    <>
      <Header pageType={'routes'} />
      <Routes type={type} />
      <Footer />
    </>
  );
}
