import { useState, useEffect } from "react";

export const Countdown = () => {

  const [today, setToday] = useState(new Date())

  const weddingDay = new Date(2023, 8, 2, 19, 0, 0).getTime();
  let countdown = (weddingDay - today.getTime());

  const days = Math.floor(countdown / (1000 * 3600 * 24));
  countdown = countdown - (days * (1000 * 3600 * 24))
  const hours = Math.floor(countdown / (1000 * 3600));
  countdown = countdown - (hours * (1000 * 3600))
  const minutes = Math.floor(countdown / (1000 * 60));
  countdown = countdown - (minutes * (1000 * 60))
  const seconds = Math.floor(countdown / (1000));


  useEffect(() => {
    setInterval(() => setToday(new Date()), 1000);
    return function cleanup() {
      clearInterval()
    };
  }, [])

  return (
    <div className='countdownContainer'>
      <div className='dateContainer'>
        <p className="numberDate">{days}</p>
          <p className='titleDate'>días</p>
      </div>
      <div className='dateContainer'>
        <p className="numberDate">{hours}</p>
          <p className='titleDate'>horas</p>
      </div>
      <div className='dateContainer'>
        <p className="numberDate">{minutes}</p>
          <p className='titleDate'>minutos</p>
      </div>
      <div className='dateContainer'>
        <p className="numberDate">{seconds}</p>
          <p className='titleDate'>segundos</p>
      </div>
    </div>
  );
}