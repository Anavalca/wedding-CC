import { Countdown } from './Countdown';

export const Main = () => {

  return (
    <main id='home'>
      <div className='background' />
      <div className='titleContainer'>
        <h1 className='titleSubContainer'>
          <p className='title'>Cristina</p>
          <p className='title'>&</p>
          <p className='title'>Curro</p>
          {/* <span className='date'>2 | septiembre | 2023</span> */}
        </h1>
          <Countdown />
      </div>
    </main>
  );
}