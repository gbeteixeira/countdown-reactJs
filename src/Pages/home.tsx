import React from 'react';

import './styles/home.css';

import Button from '../Components/Button';
import Countdown from '../Components/Countdown';
//@ts-ignore
import rocket from '../assets/imagens/rocket.svg';
//@ts-ignore
import topImage from '../assets/imagens/top-image.svg';
//@ts-ignore
import bottomImage from '../assets/imagens/bottom-image.svg';

export default function Home() {
  return (
    <>
      <div className="top">
        <img src={topImage} alt="topImage" />
      </div>

      <div className="container">

        <div className="countdown">

          <h2 className="title">
            READY TO LUNCH IN...
          </h2>

          <div className="countdownDisplay">
            <Countdown />
          </div>

          <p className="description">
            Inscreva-se para saber mais sobre o lançamento
          </p>

          <Button>Inscreva-se</Button>

        </div>

        <div className="imageRocket">
          <img src={rocket} alt="Rocket" />
        </div>

      </div>

      <div className="bottom">
        <img src={bottomImage} alt="bottomImage" />
      </div>
    </>
  );
}