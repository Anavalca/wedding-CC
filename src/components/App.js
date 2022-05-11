import '../stylesheets/App.scss';
import { BurgerMenu } from './BurguerMenu';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

export const App = () => {

  return (
    <>
      <BurgerMenu/>
      <Header />
      <Main/>
      <Footer />
    </>
  );
}
