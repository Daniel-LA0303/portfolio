import { useState } from "react";
import rocket from "./rocket.svg";
import smoke from "./smoke.svg";
import "./styles.css";
import CVFile from '../../assets/Luis_Alberto_Zacarias_Daniel_CV.pdf';

const Button = () => {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleClick = async () => {
    setIsLaunching(true);
    await new Promise(resolve => setTimeout(resolve, 3000));

    setIsLaunching(false);

    downloadCV();
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = CVFile;
    link.setAttribute('download', 'Luis_Alberto_Zacarias_Daniel.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }     


  return (
    <div className="flex justify-center">
    <button onClick={handleClick} className={` hover:bg-green-400 ${isLaunching ? 'launching' : ''}`}>
      <img className="rocket" src={rocket} alt="Rocket" />
      <span>Launch</span>
      <img className="smoke" src={smoke} alt="Smoke" />
    </button>
    </div>

  );
};

export default Button;
