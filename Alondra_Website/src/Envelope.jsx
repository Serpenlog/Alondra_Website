import { useState } from 'react';
import stampImg from './assets/Alondra_stamp.png';
import bottomImg from './assets/alondra_sobre3.png';
import topImg from './assets/alondra_sobre4.png';
import './Envelope.css';

export default function Envelope({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => {
      if (onOpen) onOpen();
    }, 700);
  };

  return (
    <div className={`envelope-overlay ${opened ? 'fade-out' : ''}`}>
      <div className="relative">
        <img src={bottomImg} alt="Envelope bottom" className="block" />
        <img
          src={topImg}
          alt="Envelope top"
          className={`envelope-top ${opened ? 'open' : ''}`}
        />
        <img
          src={stampImg}
          alt="Stamp"
          className="envelope-stamp"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
