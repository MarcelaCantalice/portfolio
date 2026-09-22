"use client";

import { useEffect, useState } from "react";
import "./forca.css";

const palavras = [
  "GATO",
  "CACHORRO",
  "ELEFANTE",
  "GIRAFA",
  "LEAO",
  "TIGRE",
  "ZEBRA",
  "MACACO",
  "COELHO",
  "CAVALO",
  "TARTARUGA",
  "BORBOLETA",
  "PINGUIM",
  "GOLFINHO",
  "TUBARAO",
  "POLVO",
  "CAMELO",
  "RAPOSA",
  "LOBO",
  "URSO",
  "PANDA",
  "CANGURU",
  "CORUJA",
  "PAPAGAIO",
  "JACARE",
  "RINOCERONTE",
  "HIPOPOTAMO",
  "GORILA",
  "FORMIGA",
  "ABELHA",
];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function sortearPalavra() {
  return palavras[Math.floor(Math.random() * palavras.length)];
}

export default function Forca() {
  const [palavra, setPalavra] = useState("");
  const [letrasTentadas, setLetrasTentadas] = useState([]);
  const [tentativas, setTentativas] = useState(6);

  useEffect(() => {
    setPalavra(sortearPalavra());
  }, []);

  if (palavra === "") {
    return <main className="pagina-forca"></main>;
  }

  const palavraEscondida = palavra
    .split("")
    .map((letra) =>
      letrasTentadas.includes(letra) ? letra : "_"
    )
    .join(" ");

  const venceu = palavra
    .split("")
    .every((letra) => letrasTentadas.includes(letra));

  const perdeu = tentativas === 0;
  const erros = 6 - tentativas;

  function tentarLetra(letra) {
    if (
      letrasTentadas.includes(letra) ||
      venceu ||
      perdeu
    ) {
      return;
    }

    setLetrasTentadas([...letrasTentadas, letra]);

    if (!palavra.includes(letra)) {
      setTentativas(tentativas - 1);
    }
  }

  function reiniciar() {
    let novaPalavra = sortearPalavra();

    while (novaPalavra === palavra) {
      novaPalavra = sortearPalavra();
    }

    setPalavra(novaPalavra);
    setLetrasTentadas([]);
    setTentativas(6);
  }

  return (
    <main className="pagina-forca">
      <a className="voltar" href="/">
        ← Voltar ao portfólio
      </a>

      <div className="jogo-forca">
        <h1>Jogo da Forca</h1>
        <p className="categoria">Categoria: Animais</p>

        <div className="area-jogo">
          <div className="lado-forca">
            <p className="numero-tentativas">
              Tentativas restantes: <strong>{tentativas}</strong>
            </p>

            <div className="desenho-forca">
              <div className="poste"></div>
              <div className="topo"></div>
              <div className="corda"></div>
              <div className="base"></div>

              {erros >= 1 && <div className="cabeca"></div>}
              {erros >= 2 && <div className="corpo"></div>}
              {erros >= 3 && <div className="braco-esquerdo"></div>}
              {erros >= 4 && <div className="braco-direito"></div>}
              {erros >= 5 && <div className="perna-esquerda"></div>}
              {erros >= 6 && <div className="perna-direita"></div>}
            </div>
          </div>

          <div className="lado-palavra">
            <h2 className="palavra">{palavraEscondida}</h2>

            <p className="escolha">Escolha uma letra:</p>

            <div className="teclado">
              {alfabeto.map((letra) => (
                <button
                  key={letra}
                  onClick={() => tentarLetra(letra)}
                  disabled={
                    letrasTentadas.includes(letra) ||
                    venceu ||
                    perdeu
                  }
                  className={
                    letrasTentadas.includes(letra)
                      ? palavra.includes(letra)
                        ? "letra-correta"
                        : "letra-incorreta"
                      : ""
                  }
                >
                  {letra}
                </button>
              ))}
            </div>

            <div className="letras-usadas">
              <div className="grupo-letras">
                <h3>Letras corretas</h3>

                <div className="lista-letras">
                  {letrasTentadas
                    .filter((letra) => palavra.includes(letra))
                    .map((letra) => (
                      <span className="correta" key={letra}>
                        {letra}
                      </span>
                    ))}
                </div>
              </div>

              <div className="grupo-letras">
                <h3>Letras erradas</h3>

                <div className="lista-letras">
                  {letrasTentadas
                    .filter((letra) => !palavra.includes(letra))
                    .map((letra) => (
                      <span className="errada" key={letra}>
                        {letra}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            {venceu && (
              <div className="resultado">
                <h2>Você venceu!</h2>
                <p>A palavra era: {palavra}</p>
              </div>
            )}

            {perdeu && (
              <div className="resultado">
                <h2>Você perdeu!</h2>
                <p>A palavra era: {palavra}</p>
              </div>
            )}

            <button className="botao-reiniciar" onClick={reiniciar}>
              Reiniciar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}