import logo from '../images/logoBoda.png'
import { Menu } from './Menu';

export const Main = () => {

  return (
    <main id='home'>
      <Menu />
      <div className='background' />
        <div className='titleContainer'>
          <img src={logo} alt='logo boda' />
        </div>
    </main>
  );
}