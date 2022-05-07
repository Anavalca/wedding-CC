import '../stylesheets/App.scss';
import { Menu } from './Menu';
import { Main } from './Main';
import { Location } from './Location';
// import { Map } from './Map';
import { Galery } from './Galery';
import { FormSection } from './FormSection';
import { Footer } from './Footer';

export const App = () => {

  return (
    <>
      <Menu />
      <Main />
      <Location />
      {/* <Map /> */}
      <Galery />
      <FormSection />
      <Footer />
    </>
  );
}
