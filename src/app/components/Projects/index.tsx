"use client";

import { useState } from "react";
import { Navegator } from "./Navegator";
import { CardProject } from "./CardProject";
import { Modal } from "./ModalProject";
import webProjects from "@/data/web.json";

type ModalData = {
  name: string;
  about: string;
  imgFront: string;
  descricao: string;
  objetivo: string;
  img1: string;
  img2: string;
  links: {
    code: string;
    web: string;
  };
  tecnologias: {
    name: string;
    description: string;
    icon: string;
    color: string;
  }[];
};

export type x = {
  web: boolean;
  mobile: boolean;
};

const Projects = () => {
  const [y, setY] = useState<x>({
    web: true,
    mobile: false,
  });

  const [modalData, setModalData] = useState<ModalData | null>(null);

  const changeValue = (name: string) => {
    setY({
      web: false,
      mobile: false,
      [name]: true,
    });
  };

  const nowValue = Object.keys(y).find((key) => y[key as keyof x]) as string;

  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative grid h-auto w-[90%] grid-cols-1 place-items-start gap-10 rounded-xl bg-white/10 p-8 pt-20 backdrop-blur-sm sm:place-items-center lg:h-[90%] lg:grid-cols-2 lg:gap-20 lg:pt-0">
          <Navegator changeValue={changeValue} nowValue={nowValue} />

          {webProjects.map((item, pos) => (
            <CardProject
              key={pos}
              imgFront={item.imgFront}
              name={item.name}
              about={item.about}
              openModal={() => setModalData(item)}
            />
          ))}
        </div>
      </div>

      {modalData && (
        <Modal
          tecnologias={modalData.tecnologias}
          title={modalData.name}
          value={{
            descricao: modalData.descricao,
            objetivo: modalData.objetivo,
          }}
          images={{
            img1: modalData.img1,
            img2: modalData.img2,
          }}
          links={modalData.links}
          close={() => setModalData(null)}
        />
      )}
    </>
  );
};

export { Projects };
