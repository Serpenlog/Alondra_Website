import { useState } from 'react';
import stamp from './assets/Alondra_stamp.png';
import topImg from './assets/alondra_sobre4.png';
import bottomImg from './assets/alondra_sobre3.png';

export default function Envelope({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    if (!opened) {
      setOpened(true);
      setTimeout(() => {
        onOpen?.();
      }, 700); // match CSS animation duration
    }
  };

  return (
    <div className={`envelope-overlay ${opened ? 'opened' : ''}`} onClick={handleClick}>
      <img src={bottomImg} className="envelope-bottom" alt="envelope bottom" />
      <img src={topImg} className="envelope-top" alt="envelope top" />
      <img src={stamp} className="envelope-stamp" alt="stamp" />
    </div>
  );
}
