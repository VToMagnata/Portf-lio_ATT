"use client";

import { Lilita_One } from "next/font/google";
import { Unica_One } from "next/font/google";
import { Poppins } from "next/font/google";
import {} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const lilita = Lilita_One({
  weight: "400",
  subsets: ["latin"],
});

const unica = Unica_One({
  weight: "400",
  subsets: ["latin"],
});

const Initial = () => {
  const link = "";

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col flex-row-reverse items-start justify-end pt-14 md:gap-14 xl:gap-20">
        <span className="pt-12">
          <h1 className={`${lilita.className} text-4xl text-white md:text-7xl`}>
            Front-End
          </h1>
          <h3
            className={`${unica.className} text-4xl text-[#98AAB9] pb-10 pl-2 md:text-5xl md:pl-6`}
          >
            DEVELOPER
          </h3>
        </span>
        <img
          src="/finaly.png"
          alt=""
          className="-scale-x-100 w-45 md:w-60 xl:w-65"
        />
      </div>
      <span className="bg-white/30 backdrop-blur-xl bg-transparent rounded-xl p-2 w-[90%] shadow-2xl shadow-black md:w-130 flex flex-col items-center gap-4">
        <p className={`${poppins.className} text-1xl text-center text-white`}>
          Prazer, meu nome é Vitor. Estudo desenvolvimento de software com foco
          em front-end e estou em busca da minha primeira oportunidade
          profissional.
        </p>

        <figure className="flex gap-12">
          <img
            src="/icons/github.png"
            className="w-12 cursor-pointer"
            onClick={() =>
              window.open("https://github.com/VToMagnata", "_blank")
            }
          />
          <img
            src="/icons/linkedin.png"
            className="w-12 cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vitor-trevisan-143467354/",
                "_blank",
              )
            }
          />
          <img
            src="/icons/cv.png"
            className="w-12 cursor-pointer"
            onClick={() => window.open(link, "_blank")}
          />
        </figure>
      </span>
    </main>
  );
};

export { Initial };
