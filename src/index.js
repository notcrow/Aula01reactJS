import React, { useState } from "react";
import ReactDOM from "react-dom";

function Game() {
  //entrada game
  const [estado, setEstado] = useState("Entrada");

  //palpites
  const [palpite, setPalpite] = useState(150);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  //iniciar jogo
  const iniciarJogo = () => {
    setEstado("Rodando");
  };

  if (estado === "Entrada") {
    return <button onClick={iniciarJogo}>Começar a Jogar</button>;
  }

  //calcula o menor
  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  //calcula o maior
  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };
  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertou o numero! {palpite} com {numPalpites} chutes!!
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente</button>
      </div>
    );
  }
  // 0 <> 300
  //palpites que a maquina deu
  return (
    <div className="Game">
      <p>O seu numero é: {palpite}? </p>
      <p>
        {" "}
        Min:{min} / Max:{max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Game />, rootElement);
