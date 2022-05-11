import '../stylesheets/App.scss';
import { Location } from './Location';
import { Galery } from './Galery';
import { FormSection } from './FormSection';

export const Main = () => {

  return (
    <>
      <Location />
      <Galery />
      <FormSection />
    </>
  );
}
