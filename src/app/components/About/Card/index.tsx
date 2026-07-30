"use client";

import { Expand } from "lucide-react";
import { Unica_One } from "next/font/google";
import { useBreakpoint } from "@/hooks/SizePicker";

const unica = Unica_One({
  weight: "400",
  subsets: ["latin"],
});

type CardProps = {
  name: string;
  value: string;
  openModal: (name: string, value: string) => void;
};

const Card = ({ name, value, openModal }: CardProps) => {
  const { isMobile, isTablet } = useBreakpoint();

  const limit = isMobile ? 72 : isTablet ? 120 : 180;

  const reduceValue =
    value.length > limit ? value.slice(0, limit) + "..." : value;

  return (
    <div
      className="
        relative
        flex flex-col items-center text-center
        w-[12em] sm:w-[18em] md:w-auto xl:w-[30em]
        h-[12rem] sm:h-[16em] md:h-[16rem] xl:h-[18rem]
        pt-8 md:pt-10 sm:mb-2
        p-4 md:p-6
        rounded-3xl
        bg-black
        shadow-2xl shadow-black
      "
    >
      <button
        onClick={() => openModal(name, value)}
        className="
          absolute
          -top-8 md:-top-10
          flex items-center justify-center
          w-14 h-14 md:w-16 md:h-16
          rounded-3xl
          bg-white
          transition-transform
          hover:scale-105
        "
      >
        <Expand className="w-8 h-8 md:w-10 md:h-10" color="black" />
      </button>

      <h1
        className={`
          ${unica.className}
          mb-3 md:mb-4
          text-2xl md:text-3xl xl:text-4xl
          text-[#98AAB9]
        `}
      >
        {name}
      </h1>

      <p
        className="
          text-sm
          md:text-base
          xl:text-lg
          leading-relaxed
          text-white
        "
      >
        {reduceValue}
      </p>
    </div>
  );
};

export { Card };
