"use client";

import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaUniversity,
  FaCode,
  FaGlobe,
  FaDatabase,
  FaTools,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Home() {
        const nome = "Marcela Cantalice";
  const caracteres = "!@#$%&*<>?/";

  const [nomeExibido, setNomeExibido] = useState(nome);

  useEffect(() => {
    let posicao = 0;

    const intervalo = setInterval(() => {
      if (posicao < nome.length) {
        const parteCorreta = nome.slice(0, posicao);
        const proximoCaractere =
          nome[posicao] === " "
            ? " "
            : caracteres[Math.floor(Math.random() * caracteres.length)];

        setNomeExibido(parteCorreta + proximoCaractere);
        posicao++;
      } else {
        setNomeExibido(nome);
        clearInterval(intervalo);
      }
    }, 120);

    return () => clearInterval(intervalo);
  }, []);
  return (
    <main>
      <header className="cabecalho">
        <a className="logo" href="#">
          MC.
        </a>

        <nav className="menu">
          <a href="#sobre">Sobre</a>
          <a href="#formacao">Formação</a>
          <a href="#experiencia">Experiência</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#atividades">Extracurriculares</a>
          <a href="#formacao-complementar">Formação Complementar</a>
          <a href="#contato">Contato</a>

          <a className="link-forca" href="/forca">
            Jogo da Forca
          </a>
        </nav>
      </header>

      <section className="inicio">
        <div className="inicio-texto">
          <p className="apresentacao">Olá, eu sou</p>

          <h1>
  {nomeExibido}
  <span className="cursor-terminal"></span>
</h1>

          <h2>Estudante de Ciência da Computação</h2>

          <p className="frase">
            Entre ideias, códigos e projetos, construindo meu caminho na
            tecnologia.
          </p>

          <div className="botoes">
            <a className="botao-principal" href="#projetos">
              Conheça meus projetos
            </a>

            <a className="botao-secundario" href="#contato">
              Entre em contato
            </a>
          </div>
        </div>

        <div className="foto-container">
          <img
            className="foto-perfil"
            src="/perfil.jpg"
            alt="Foto de Marcela Cantalice"
          />
        </div>
      </section>

      <section className="sobre" id="sobre">
        <div className="sobre-titulo">
          <p>Conheça um pouco</p>
          <h2>Sobre mim</h2>
        </div>

        <div className="sobre-conteudo">
          <p>
            Sou estudante do 5º período de Ciência da Computação na
            Universidade Católica de Pernambuco (UNICAP). Ao longo da
            graduação, venho participando de projetos que envolvem diferentes
            áreas da tecnologia, desde desenvolvimento de software até
            robótica.
          </p>

          <p>
            Tenho interesse em continuar aprendendo e explorando áreas como
            Robótica, Desenvolvimento de Software, Inteligência Artificial e
            Cibersegurança, buscando minha primeira oportunidade profissional
            na área de tecnologia.
          </p>

          <div className="sobre-destaques">
            <div>
              <FaGraduationCap className="icone-destaque" />
              <strong>5º</strong>
              <span>Período</span>
            </div>

            <div>
              <FaLaptopCode className="icone-destaque" />
              <strong>Ciência da Computação</strong>
              <span>Graduação</span>
            </div>

            <div>
              <FaUniversity className="icone-destaque" />
              <strong>UNICAP</strong>
              <span>Universidade</span>
            </div>
          </div>
        </div>
      </section>

      <section className="formacao" id="formacao">
        <div className="formacao-titulo">
          <p>Minha trajetória</p>
          <h2>Formação Acadêmica</h2>
        </div>

        <div className="formacao-conteudo">
          <div className="linha-formacao">
            <div className="ponto-formacao"></div>
          </div>

          <div className="formacao-informacoes">
            <span className="formacao-data">2024 — Atualmente</span>

            <h3>Ciência da Computação</h3>

            <p className="universidade">
              Universidade Católica de Pernambuco — UNICAP
            </p>

            <p className="periodo">5º período</p>
          </div>
        </div>
      </section>

      <section className="experiencia" id="experiencia">
        <div className="experiencia-titulo">
          <p>Minha trajetória profissional</p>
          <h2>Experiência Profissional</h2>
        </div>

        <div className="experiencia-conteudo">
          <div className="status-estagio">
            <span></span>
            Disponível para estágio
          </div>

          <h3>Em busca da primeira oportunidade de estágio</h3>

          <p>
            Busco minha primeira oportunidade de estágio na área de tecnologia,
            onde possa aplicar os conhecimentos adquiridos durante a graduação
            e desenvolver novas habilidades. Tenho interesse em desenvolvimento
            de software, ainda explorando áreas como front-end e back-end, e
            também em gestão de projetos de tecnologia e metodologias ágeis.
            Além disso, tenho interesse em robótica, inteligência artificial e
            cibersegurança.
          </p>

          <div className="areas-interesse">
            <span>Desenvolvimento de Software</span>
            <span>Gestão de Projetos</span>
            <span>Robótica</span>
            <span>Inteligência Artificial</span>
            <span>Cibersegurança</span>
          </div>
        </div>
      </section>

      <section className="habilidades" id="habilidades">
        <div className="habilidades-titulo">
          <p>Conhecimentos e tecnologias</p>
          <h2>Habilidades</h2>
        </div>

        <div className="habilidades-cards">
          <div className="habilidade-card">
            <FaCode className="habilidade-icone" />
            <h3>Linguagens</h3>

            <div className="habilidade-itens">
              <span>C</span>
              <span>Java</span>
              <span>JavaScript</span>
              <span>Python</span>
            </div>
          </div>

          <div className="habilidade-card">
            <FaGlobe className="habilidade-icone" />
            <h3>Desenvolvimento Web</h3>

            <div className="habilidade-itens">
              <span>HTML</span>
              <span>CSS</span>
              <span>React</span>
              <span>Next.js</span>
            </div>
          </div>

          <div className="habilidade-card">
            <FaDatabase className="habilidade-icone" />
            <h3>Banco de Dados</h3>

           <div className="habilidade-itens">
    <span>SQL</span>
    <span>MySQL</span>
  </div>
</div>
          <div className="habilidade-card">
            <FaTools className="habilidade-icone" />
            <h3>Ferramentas</h3>

            <div className="habilidade-itens">
              <span>Git</span>
              <span>GitHub</span>
              <span>Figma</span>
            </div>
          </div>
        </div>
      </section>

      <section className="projetos" id="projetos">
        <div className="projetos-titulo">
          <p>Trabalhos que desenvolvi</p>
          <h2>Projetos</h2>
        </div>

        <div className="projetos-cards">
          <div className="projeto-card projeto-com-imagem">
            <img
              className="projeto-imagem"
              src="/andador-inteligente.png"
              alt="Andador Inteligente"
            />

            <div className="projeto-conteudo">
              <h3>Andador Inteligente</h3>

              <p>
                Projeto de robótica inclusiva desenvolvido em equipe para
                auxiliar na segurança e no monitoramento de idosos. O protótipo
                integra sensores e uma aplicação web, oferecendo recursos como
                detecção de quedas e obstáculos, localização por GPS, lembretes
                de medicamentos e envio de alertas ao cuidador.
              </p>

              <div className="projeto-tecnologias">
                <span>Robótica</span>
                <span>Sensores</span>
                <span>Aplicação Web</span>
              </div>
              <a
              className="projeto-link"
              href="https://github.com/andadorInteligente/projeto-andador"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>
            </div>
          </div>

          <div className="projeto-card projeto-com-imagem">
            <img
              className="projeto-imagem"
              src="/ocupacional3d.png"
              alt="Site da Ocupacional 3D"
            />

            <div className="projeto-conteudo">
              <h3>Ocupacional 3D</h3>

              <p>
                Desenvolvimento, em equipe, do site institucional da empresa
                Ocupacional 3D utilizando a plataforma Wix, com foco na
                apresentação da empresa, de seus produtos e serviços. O site
                desenvolvido encontra-se atualmente em uso pela empresa.
              </p>

              <div className="projeto-tecnologias">
                <span>Wix</span>
                <span>Desenvolvimento Web</span>
              </div>

              <a
                className="projeto-link"
                href="https://www.ocupacional3d.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Visitar site
              </a>
            </div>
          </div>

          <div className="projeto-card projeto-com-imagem">
            <img
              className="projeto-imagem imagem-carrinho"
              src="/carrinho-robo.jpeg"
              alt="Carrinho seguidor de linha e desvio de obstáculos"
            />

            <div className="projeto-conteudo">
              <h3>Carrinho Seguidor de Linha e Desvio de Obstáculos</h3>

              <p>
                Projeto de robótica desenvolvido para seguir um percurso de
                forma autônoma utilizando sensores de linha e identificar
                obstáculos durante o trajeto, realizando o desvio quando
                necessário.
              </p>

              <div className="projeto-tecnologias">
                <span>Robótica</span>
                <span>Sensores</span>
              </div>
            </div>
          </div>

          <div className="projeto-card projeto-com-imagem">
            <img
              className="projeto-imagem"
              src="/jogo-dados.png"
              alt="Jogo de Dados"
            />

            <div className="projeto-conteudo">
              <h3>Jogo de Dados</h3>

              <p>
                Jogo desenvolvido em Next.js para dois jogadores, com
                lançamento de dados, rodadas, contagem de vitórias e exibição
                do vencedor da partida.
              </p>

              <div className="projeto-tecnologias">
                <span>JavaScript</span>
                <span>React</span>
                <span>Next.js</span>
              </div>

              <div className="projeto-links">
                <a
                  className="projeto-link"
                  href="https://jogo-dados-inky.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkAlt />
                  Ver projeto
                </a>

                <a
                  className="projeto-link"
                  href="https://github.com/MarcelaCantalice/jogo-dados"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-conteudo">
              <FaCode className="projeto-icone" />

              <h3>Sistema de Biblioteca</h3>

              <p>
                Sistema desenvolvido em equipe utilizando Java e Programação
                Orientada a Objetos para gerenciamento de uma biblioteca, com
                funcionalidades de cadastro, empréstimo, devolução, consulta e
                renovação de livros.
              </p>

              <div className="projeto-tecnologias">
                <span>Java</span>
                <span>POO</span>
              </div>

              <a
                className="projeto-link"
                href="https://github.com/NextCoffeeJ/sistema_biblioteca"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                Ver no GitHub
              </a>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-conteudo">
              <FaCode className="projeto-icone" />

              <h3>Chat via UDP</h3>

              <p>
                Aplicação desenvolvida em Python para simular a comunicação
                entre remetente e receptor utilizando o protocolo UDP,
                incluindo confirmação de entrega, mensagens pendentes e
                simulação de perda de pacotes.
              </p>

              <div className="projeto-tecnologias">
                <span>Python</span>
                <span>UDP</span>
                <span>Sockets</span>
              </div>

              <a
                className="projeto-link"
                href="https://github.com/MarcelaCantalice/atividade-pratica-chat-udp"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                Ver no GitHub
              </a>
            </div>
          </div>

          <div className="projeto-card">
            <div className="projeto-conteudo">
              <FaCode className="projeto-icone" />

              <h3>Next Car</h3>

              <p>
                Sistema desenvolvido em equipe para gerenciamento e venda de
                carros seminovos, utilizando Java, Spring Boot e MySQL.
              </p>

              <div className="projeto-tecnologias">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
              </div>

              <a
                className="projeto-link"
                href="https://github.com/NextCar-Project/projeto-next-car"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                Ver no GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
            <section className="atividades" id="atividades">
        <div className="atividades-titulo">
          <p>Além da sala de aula</p>
          <h2>Extracurricular e Extensão</h2>
        </div>

        <div className="atividades-conteudo">
          <div className="atividade">
            <div className="atividade-linha">
              <div className="atividade-ponto"></div>
            </div>

            <div className="atividade-informacoes">
              <span>Robótica Competitiva</span>
              <h3>Equipe de Drones da UNICAP</h3>
              <p>
                Participação em uma equipe de robótica competitiva voltada ao
                desenvolvimento de drones e à preparação para futuras
                competições. A equipe está em fase inicial de desenvolvimento e
                organização.
              </p>
            </div>
          </div>

          <div className="atividade">
            <div className="atividade-linha">
              <div className="atividade-ponto"></div>
            </div>

            <div className="atividade-informacoes">
              <span>Mentoria Acadêmica</span>
              <h3>Projeto Padawan</h3>
              <p>
                Atuação como veterana em um projeto de mentoria voltado ao
                acolhimento de alunos calouros, oferecendo suporte e orientação
                durante a adaptação à graduação.
              </p>
            </div>
          </div>

          <div className="atividade">
            <div className="atividade-linha">
              <div className="atividade-ponto"></div>
            </div>

            <div className="atividade-informacoes">
              <span>Projeto de Extensão</span>
              <h3>SWITAB — Supporting Women in Technology Across Borders</h3>
              <p>
                Participação em projeto de extensão voltado ao desenvolvimento
                de mulheres nas áreas STEM, atuando como mentora de estudantes
                e, ao mesmo tempo, recebendo mentoria de uma profissional do
                mercado de tecnologia por meio de encontros de acompanhamento.
              </p>
            </div>
          </div>
        </div>
      </section>
            <section id="formacao-complementar" className="formacao-complementar">
        <div className="formacao-complementar-titulo">
          <p>Aprendizado contínuo</p>
          <h2>Formação Complementar</h2>
        </div>

        <div className="formacoes-complementares">
          <div className="formacao-extra">
            <span>Formação para Mentoras</span>
            <h3>Technovation Girls Brasil</h3>
            <p>
              Participação e conclusão de formação voltada à preparação de
              mentoras do Technovation Girls Brasil, abordando mentoria,
              tecnologia e desenvolvimento de projetos.
            </p>
          </div>

          <div className="formacao-extra">
            <span>Programa de Mentorias 2025</span>
            <h3>Avanade</h3>
            <p>
              Participação em programa de mentoria voltado ao desenvolvimento
              de mulheres na área de tecnologia, com acompanhamento profissional
              e orientação sobre possibilidades de carreira no setor.
            </p>
          </div>

          <div className="formacao-extra">
            <span>Jornada de Tecnologia — UNICAP 2026</span>
            <h3>Boas práticas e produção de jogos numa Jam</h3>
            <p>
              Participação em palestra voltada à produção de jogos e às
              práticas utilizadas durante uma Game Jam.
            </p>
          </div>
        </div>
      </section>
            <section className="contato" id="contato">
        <div className="contato-titulo">
          <p>Entre em contato</p>
          <h2>Contato</h2>
        </div>

        <div className="contato-cards">
          <a
            className="contato-card"
            href="mailto:marcelacantalicesantos@gmail.com"
          >
            <span>✉</span>
            <div>
              <h3>E-mail</h3>
              <p>marcelacantalicesantos@gmail.com</p>
            </div>
          </a>

          <a
            className="contato-card"
            href="https://github.com/MarcelaCantalice"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <div>
              <h3>GitHub</h3>
              <p>github.com/MarcelaCantalice</p>
            </div>
          </a>
          <a
            className="contato-card"
            href="https://www.linkedin.com/in/marcela-cristine-cantalice-santos-994309410/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <div>
        <h3>LinkedIn</h3>
      <p>Marcela Cantalice</p>
  </div>
</a>
        </div>
      </section>
    </main>
  );
}