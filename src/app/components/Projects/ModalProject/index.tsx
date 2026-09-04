import { Globe, X, ChevronDown, ChevronUp, Braces } from "lucide-react";
import { Bebas_Neue, Jost, Fjalla_One, Roboto } from "next/font/google";
import { useState } from "react";
import { CardTec } from "./CardTec";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const fjalla = Fjalla_One({ subsets: ["latin"], weight: "400" });

type ModalProps = {
  title: string;
  value?: { descricao: string; objetivo: string };
  close: () => void;
  images: { img1: string; img2: string };
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

type Focus = { a: boolean; o: boolean };

const Modal = ({
  title,
  value,
  close,
  images,
  links,
  tecnologias,
}: ModalProps) => {
  const resumoD =
    value?.descricao && value.descricao.length > 96
      ? value.descricao.slice(0, 96) + "..."
      : value?.descricao;

  const resumoO =
    value?.objetivo && value.objetivo.length > 96
      ? value.objetivo.slice(0, 96) + "..."
      : value?.objetivo;

  const [focus, setFocus] = useState<Focus>({ a: true, o: true });

  return (
    <main className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="overflow-x-auto relative flex h-[95%] w-full max-w-5xl sm:overflow-hidden rounded-3xl border border-white/10 bg-[url('/rrt1.jpg')] bg-cover bg-center shadow-2xl">
        {/* BOTÃO FECHAR */}
        <button
          onClick={close}
          className="absolute right-3 top-3 z-20 text-white/80 transition hover:text-white cursor-pointer"
        >
          <X size={32} strokeWidth={1.5} />
        </button>

        {/* LADO ESQUERDO */}
        <aside className="min-w-0 w-full text-start sm:w-1/2">
          {/* TÍTULO */}
          <h1
            className={`${bebas.className} pl-14 pt-8 text-8xl tracking-wide ${
              title === "VT FLIX" ? "text-red-500" : "text-white"
            }`}
          >
            {title}
          </h1>

          {/* IMAGENS */}
          <figure className="flex items-center justify-center gap-16 px-8 py-8">
            <img
              src={images.img1}
              alt=""
              className="w-[10em] sm:w-[14em] object-contain drop-shadow-2xl"
            />
            <img
              src={images.img2}
              alt=""
              className="w-[4.5em] sm:w-[6em] object-contain drop-shadow-2xl"
            />
          </figure>

          {/* TIMELINE */}
          <div className="flex flex-col gap-10 pl-24 pr-8">
            {/* APRESENTAÇÃO */}
            {focus.a ? (
              <div className="relative border-b border-white/10 pb-8">
                <span className="absolute -left-[78px] top-1 h-3 w-3 rounded-full bg-[#d8dce2] shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                <div className="absolute -left-[72px] top-4 h-[calc(100%+40px)] w-px bg-gradient-to-b from-white/40 via-white/15 to-transparent" />

                <h2
                  className={`${bebas.className} mb-2 flex justify-between pr-4 text-2xl tracking-wider text-white`}
                >
                  APRESENTAÇÃO
                  {focus.o ? (
                    <ChevronDown
                      size={20}
                      className="cursor-pointer"
                      onClick={() => {
                        setFocus((prev) => ({ ...prev, o: false, a: true }));
                      }}
                    />
                  ) : (
                    <ChevronUp
                      size={20}
                      className="cursor-pointer"
                      onClick={() => {
                        setFocus((prev) => ({ ...prev, o: true, a: true }));
                      }}
                    />
                  )}
                </h2>

                <p
                  className={`${roboto.className} pl-0 text-base leading-7 text-[#989ba2] break-words whitespace-normal`}
                >
                  {focus.a && focus.o ? resumoD : value?.descricao}
                </p>
              </div>
            ) : null}

            {/* OBJETIVO */}
            {focus.o ? (
              <div className="relative border-b border-white/10 pb-8">
                <span className="absolute -left-[78px] top-1 h-3 w-3 rounded-full bg-[#d8dce2] shadow-[0_0_10px_rgba(255,255,255,0.5)]" />

                <div className="absolute -left-[72px] top-4 h-[calc(100%+40px)] w-px bg-gradient-to-b from-white/40 via-white/15 to-transparent" />

                <h2
                  className={`${bebas.className} mb-2 flex justify-between pr-4 text-2xl tracking-wider text-white`}
                >
                  OBJETIVO
                  {focus.a ? (
                    <ChevronDown
                      size={20}
                      className="cursor-pointer"
                      onClick={() => {
                        setFocus((prev) => ({ ...prev, o: true, a: false }));
                      }}
                    />
                  ) : (
                    <ChevronUp
                      size={20}
                      className="cursor-pointer"
                      onClick={() => {
                        setFocus((prev) => ({ ...prev, o: true, a: true }));
                      }}
                    />
                  )}
                </h2>

                <p
                  className={`${roboto.className} text-base leading-7 text-[#989ba2] break-words whitespace-normal`}
                >
                  {focus.a && focus.o ? resumoO : value?.objetivo}
                </p>
              </div>
            ) : null}
          </div>
        </aside>

        <main className="sm:hidden absolute top-[130%] right-0 flex p-2 gap-2">
          {/* BOTÃO */}
          <button
            onClick={() => window.open(links.web, "_blank")}
            className={`${fjalla.className} cursor-pointer flex items-center gap-3 rounded-full border-2 border-white/80 bg-black/40 px-5 py-2 text-lg font-serif text-white backdrop-blur-sm transition hover:bg-white hover:text-black`}
          >
            Abrir
            <Globe size={25} strokeWidth={1.5} />
          </button>
          <button
            className={`${fjalla.className} cursor-pointer flex items-center gap-3 rounded-full border-2 border-white/80 bg-black/40 px-5 py-2 text-lg font-serif text-white backdrop-blur-sm transition hover:bg-white hover:text-black`}
            onClick={() => window.open(links.code, "_blank")}
          >
            Code
            <Braces />
          </button>
        </main>

        {/* LADO DIREITO */}
        <aside className="relative hidden w-1/2 items-center justify-center px-12 py-24 sm:flex">
          {/* PAINEL */}
          <div
            className="overflow-x-auto h-full w-full p-8 flex flex-col gap-4 rounded-3xl border-2 border-[#cfd3da] bg-[radial-gradient(ellipse_at_top_left,rgba(115,113,123,0.35)_0%,rgba(41,44,48,0.18)_45%,transparent_100%)] shadow-[0_0_25px_rgba(255,255,255,0.08)] [&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-white/20
  [&::-webkit-scrollbar-thumb]:rounded-full
  hover:[&::-webkit-scrollbar-thumb]:bg-white/40"
          >
            {tecnologias.map((tec) => (
              <CardTec
                key={tec.name}
                name={tec.name}
                description={tec.description}
                icon={tec.icon}
                color={tec.color}
              />
            ))}
          </div>

          {/* BOTÃO */}
          <button
            onClick={() => window.open(links.web, "_blank")}
            className={`${fjalla.className} cursor-pointer absolute bottom-5 right-8 flex items-center gap-3 rounded-full border-2 border-white/80 bg-black/40 px-5 py-2 text-lg font-serif text-white backdrop-blur-sm transition hover:bg-white hover:text-black`}
          >
            Abrir
            <Globe size={25} strokeWidth={1.5} />
          </button>
          <button
            className={`${fjalla.className} cursor-pointer absolute bottom-5 right-42 flex items-center gap-3 rounded-full border-2 border-white/80 bg-black/40 px-5 py-2 text-lg font-serif text-white backdrop-blur-sm transition hover:bg-white hover:text-black`}
            onClick={() => window.open(links.code, "_blank")}
          >
            Code
            <Braces />
          </button>
        </aside>
      </div>
    </main>
  );
};

export { Modal };
