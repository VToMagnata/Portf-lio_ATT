"use client";

import { useState } from "react";
import { Card } from "./Card";
import { CardTech } from "./CardTech";
import { Modal } from "./Modal";

type ModalData = {
  name: string;
  value?: string;
};

const About = () => {
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const openModal = (name: string, value: string) => {
    setModalData({ name, value });
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-10 md:gap-x-20 pt-8 md:px-[5em] 2xl:px-[20em] w-full place-items-center p-4 mt-16 lg:mt-2 ">
        <Card
          name="Sobre Mim"
          value="Olá! Prazer, meu nome é Vitor Losina Trevisan. Tenho 18 anos e atualmente estou cursando Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento de páginas e aplicações web. Estudo programação há aproximadamente 1 ano e iniciei minha faculdade em junho, onde venho aprofundando ainda mais meus conhecimentos na área de tecnologia. Além da faculdade, também concluí o curso de Front-End da EBAC, onde tive contato prático com conceitos importantes do desenvolvimento web moderno. Sou uma pessoa curiosa, dedicada e sempre disposta a aprender novas linguagens, ferramentas e diferentes formas de resolver problemas através da programação. Atualmente trabalho no Mercado Livre e estou em busca de uma oportunidade como desenvolvedor júnior ou estagiário na área de desenvolvimento web, onde eu possa continuar evoluindo profissionalmente, contribuir com projetos e ganhar experiência no mercado de tecnologia."
          openModal={openModal}
        />

        <CardTech />

        <Card
          name="Formação"
          value="Atualmente estou cursando Análise e Desenvolvimento de Sistemas, onde venho aprendendo e aprofundando meus conhecimentos em programação e desenvolvimento de software. A faculdade tem sido uma etapa importante da minha formação, pois me ajuda a entender melhor os fundamentos da tecnologia e a lógica por trás do desenvolvimento. Além da graduação, também concluí o curso de Front-End da EBAC, onde tive a oportunidade de aprender e praticar diversas tecnologias utilizadas no desenvolvimento web moderno. Durante o curso trabalhei com ferramentas como React e Next.js para construção de interfaces e aplicações web, integração com APIs e também tive contato com testes utilizando Jest. Estou sempre buscando aprender mais, estudar novas tecnologias e evoluir como desenvolvedor, acreditando que a prática constante e a curiosidade são fundamentais para crescer na área de tecnologia."
          openModal={openModal}
        />

        <Card
          name="Objetivo"
          value="Meu objetivo é conseguir entrar na área da programação e poder contribuir com meus conhecimentos, ao mesmo tempo em que continuo aprendendo e evoluindo profissionalmente. Quero fazer parte de uma equipe onde eu possa ganhar experiência prática, desenvolver minhas habilidades e participar da construção de projetos reais. Busco uma oportunidade como desenvolvedor júnior ou estagiário, onde eu possa crescer dentro da área de tecnologia, aprender com profissionais mais experientes e contribuir da melhor forma possível com dedicação, curiosidade e vontade constante de melhorar."
          openModal={openModal}
        />
      </div>

      {modalData && (
        <Modal
          name={modalData.name}
          value={modalData.value}
          close={closeModal}
        />
      )}
    </>
  );
};

export { About };
