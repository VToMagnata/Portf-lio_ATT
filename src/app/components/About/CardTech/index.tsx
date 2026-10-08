import { Unica_One } from "next/font/google";
import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJest,
  SiPrisma,
} from "react-icons/si";
import { Stars } from "./Stars";
import { useBreakpoint } from "@/hooks/SizePicker";

const unica = Unica_One({
  weight: "400",
  subsets: ["latin"],
});

const CardTech = () => {
  const { isMobile, isTablet } = useBreakpoint();

  const iconSize = isMobile ? 13 : isTablet ? 30 : 35;

  return (
    <div className="relative flex h-[12rem] w-[10em] items-center justify-center gap-2 lg:gap-12 rounded-3xl bg-black p-2 pt-10 text-center shadow-2xl shadow-black sm:h-[16em] sm:w-[18em] md:h-[18em] md:w-full xl:h-[18em] xl:w-[30em]">
      <span className="absolute -top-0 left-1/2 -translate-x-2/4">
        <h1 className={`${unica.className} text-2xl text-[#98AAB9]`}>
          Tecnologias
        </h1>
      </span>

      <div className="flex w-auto flex-col gap-4 sm:gap-6">
        <span className="flex items-center gap-0.5 sm:gap-3">
          <FaReact size={iconSize} color="#61DAFB" />
          <Stars quantity={5} />
        </span>

        <span className="flex items-center gap-0.5 sm:gap-3">
          <SiNextdotjs size={iconSize} color="white" />
          <Stars quantity={4} />
        </span>

        <span className="flex items-center gap-0.5 sm:gap-3">
          <SiTypescript size={iconSize} color="#3178C6" />
          <Stars quantity={4} />
        </span>

        <span className="flex items-center gap-0.5 sm:gap-3">
          <SiTailwindcss size={iconSize} color="#38BDF8" />
          <Stars quantity={5} />
        </span>
      </div>

      <div className="flex w-auto  flex-col gap-4 sm:gap-6">
        <span className="flex items-center gap-1.5 sm:gap-3">
          <SiJest size={iconSize} color="#C21325" />
          <Stars quantity={2} />
        </span>

        <span className="flex items-center gap-1.5 sm:gap-3">
          <SiPrisma size={iconSize} color="#2D3748" />
          <Stars quantity={2} />
        </span>

        <span className="flex items-center gap-1.5 sm:gap-3">
          <FaGitAlt size={iconSize} color="#F1502F" />
          <Stars quantity={4} />
        </span>

        <span className="flex items-center gap-1.5 sm:gap-3">
          <FaGithub size={iconSize} color="white" />
          <Stars quantity={5} />
        </span>
      </div>
    </div>
  );
};

export { CardTech };
