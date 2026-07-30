// Possivelmente esse codigo está feio e cheio de coisa inútil, perdão!

"use client";

import { useHeaderViwer } from "@/store/Controler";
import { useState } from "react";

type Viwer = {
  home: boolean;
  about: boolean;
  projects: boolean;
};

const Header = () => {
  const changeValueHeader = useHeaderViwer((state) => state.ChangeValueHeader);
  const HeaderControl = useHeaderViwer((state) => state.HeaderControl);
  const [hover, setHover] = useState<keyof Viwer | null>(null);
  const active =
    hover ??
    Object.keys(HeaderControl).find(
      (item) => HeaderControl[item as keyof Viwer],
    );

  return (
    <header className="h-[5em] flex justify-center items-center gap-6 box-border">
      <div className="flex gap-2 w-auto bg-black rounded-3xl">
        <button
          className={`text-[1.7em] font-bold rounded-full px-3 py-2 transition-all duration-400 cursor-pointer ${
            active === "home" ? "text-black bg-white" : ""
          }`}
          onClick={() => changeValueHeader(true, "home")}
          onMouseEnter={() => setHover("home")}
          onMouseLeave={() => setHover(null)}
        >
          Home
        </button>
        <button
          className={`text-[1.7em] font-bold rounded-full px-3 py-2 transition-all duration-400 cursor-pointer ${
            active === "about" ? "text-black bg-white" : ""
          }`}
          onClick={() => changeValueHeader(true, "about")}
          onMouseEnter={() => setHover("about")}
          onMouseLeave={() => setHover(null)}
        >
          Sobre
        </button>
        <button
          className={`text-[1.7em] font-bold rounded-full px-3 py-2 transition-all duration-400 cursor-pointer ${
            active === "projects" ? "text-black bg-white" : ""
          }`}
          onClick={() => changeValueHeader(true, "projects")}
          onMouseEnter={() => setHover("projects")}
          onMouseLeave={() => setHover(null)}
        >
          Projetos
        </button>
      </div>
    </header>
  );
};

export { Header };
