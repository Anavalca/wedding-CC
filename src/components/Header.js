import { Countdown } from './Countdown';
import { Menu } from './Menu';

export const Header = () => {

  return (
      <div className='background' id="home">
        <Menu />
        <div className='titleContainer'>
          <h1 className='titleSubContainer'>
            <p className='title'>Cristina</p>
            <p className='title and'>&</p>
            <p className='title'>Curro</p>
          </h1>
          <span className='date'> 2 de septiembre de 2023 </span>
          <span className='hashtag'> #MiGranBodaJienense</span>
          <Countdown />
        </div>
        <div className='scrollContainer'>
          <div className="icon"/>
        </div>
    </div>
  );
}