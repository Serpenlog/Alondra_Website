import stamp from './assets/Alondra_stamp.png';

export default function Envelope({ onStampClick }) {
  return (
    <div className="envelope-overlay">
      <button type="button" className="envelope-stamp-button" onClick={onStampClick}>
        <img src={stamp} className="envelope-stamp" alt="stamp" />
        <span className="sr-only">Open invitation</span>
      </button>
    </div>
  );
}
