import '../stylesheets/App.scss';
import { Main } from './Main';
import { Location } from './Location';
import { Map } from './Map';
import { Galery } from './Galery';
import { FormSection } from './FormSection';
import { Footer } from './Footer';

export const App = () => {

  return (
    <>

      <Main />
      <Location />
      <Map />
      <Galery />
      <FormSection />
      <Footer />
    </>
  );
}
