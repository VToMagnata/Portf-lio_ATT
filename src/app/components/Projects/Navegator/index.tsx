"use client";

import { Monitor } from "lucide-react";
import { Smartphone } from "lucide-react";
import { useState } from "react";

type NavegatorProps = {
  nowValue: string;
  changeValue: (name: string) => void;
};

const Navegator = ({ changeValue, nowValue }: NavegatorProps) => {
  const [hover, setHover] = useState<string | null>(null);

  const active = hover ?? nowValue;

  return (
    <>
      <div className="absolute -top-6 right-30 flex bg-black px-8 py-2 rounded-full gap-16">
        <button
          onClick={() => changeValue("web")}
          className={`p-1.5 rounded-full transition-all duration-300 cursor-pointer ${
            active === "web" ? "bg-white" : "bg-black"
          }`}
          onMouseEnter={() => setHover("web")}
          onMouseLeave={() => setHover(null)}
        >
          <Monitor color={active === "web" ? "black" : "white"} />
        </button>
        <button
          onClick={() => changeValue("mobile")}
          className={`p-1.5 rounded-full transition-all duration-300 cursor-pointer ${
            active === "mobile" ? "bg-white" : "bg-black"
          }`}
          onMouseEnter={() => setHover("mobile")}
          onMouseLeave={() => setHover(null)}
        >
          <Smartphone color={active === "mobile" ? "black" : "white"} />
        </button>
      </div>
    </>
  );
};

export { Navegator };
