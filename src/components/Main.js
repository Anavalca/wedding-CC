import { Countdown } from './Countdown';

export const Main = () => {

  return (
    <main id='home'>
      <div className='background' />
      {/* <div className='titleContainer'>
        <img src={logo} alt='logo boda' />
      </div> */}
      <div className='titleContainer2'>
        <span className='date'>2 | septiembre | 2023</span>
        <h1 className='title'>Cristina & Curro</h1>
        <Countdown />
      </div>
    </main>
  );
}