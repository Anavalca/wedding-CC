import '../stylesheets/App.scss';
import { Confirmation } from './Confirmation';
import { Location } from './Location';
import { PhotoShare } from './PhotoShare';
import { Galery } from './Galery';
import { FormSection } from './FormSection';

export const Main = () => {

  return (
    <>
      <Confirmation/>
      <Location />
      <PhotoShare/>
      <Galery />
      <FormSection />
    </>
  );
}
