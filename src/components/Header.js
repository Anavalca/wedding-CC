import { Countdown } from './Countdown';
import { Menu } from './Menu';

export const Header = () => {

  return (
    <section id='home'>
      <div className='background' />
      <Menu />
      <div className='titleContainer'>
        {/* <span className='date'>- 2 · 9 · 2023 -</span> */}
        <h1 className='titleSubContainer'>
          <p className='title'>Cristina</p>
          <p className='title and'>&</p>
          <p className='title'>Curro</p>
        </h1>
        <Countdown />
      </div>
      <div className='scrollContainer'>
        <div className="icon"/>
      </div>
    </section>
  );
}