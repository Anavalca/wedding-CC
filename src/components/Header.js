import { Countdown } from './Countdown';
import { Menu } from './Menu';

export const Header = () => {

  return (
      <div className='background' id="home">
        <Menu />
        <div className='titleContainer'>
        <span className='date'> 2 · septiembre · 2023 </span>
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
    </div>
  );
}