import { DM_Serif_Display, Jost } from "next/font/google";
import { MoveRight } from "lucide-react";
import { useBreakpoint } from "@/hooks/SizePicker";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type CardProps = {
  imgFront: string;
  name: string;
  about: string;
  openModal: () => void;
};

const CardProject = ({ imgFront, name, about, openModal }: CardProps) => {
  const { isMobile, isTablet } = useBreakpoint();

  const summary = isMobile
    ? about.slice(0, 35) + "..."
    : isTablet
      ? about.slice(0, 60) + "..."
      : about.slice(0, 120) + "...";

  return (
    <div className="flex h-[10em] w-full sm:w-[80%] lg:w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#757677] to-[#E5E7EB] p-4 shadow-2xl shadow-black sm:h-[15em]">
      <img
        src={imgFront}
        className="mr-5 h-full w-[5em] sm:w-[10em] lg:w-[15em] object-contain"
      />

      <div className="flex min-w-0 flex-1 flex-col sm:pt-6">
        {/* TÍTULO */}
        <h1
          className={`${dmSerif.className} truncate pt-2 sm:pt-4 text-lg text-[#4b0f06] sm:text-3xl`}
        >
          {name}
        </h1>

        {/* TEXTO */}
        <p className={`${jost.className} sm:mt-2 text-sm text-[#6B7280]`}>
          {summary}
        </p>

        {/* BOTÃO */}

        {isMobile ? (
          <button
            onClick={openModal}
            className="mt-auto flex w-auto items-center gap-4 self-end rounded-md bg-black px-4 py-1.5 text-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] cursor-pointer"
          >
            <MoveRight size={20} />
          </button>
        ) : (
          <button
            onClick={openModal}
            className="mt-auto flex w-auto items-center gap-4 self-end rounded-md bg-black px-4 py-1.5 text-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] cursor-pointer"
          >
            Ver mais
            <MoveRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export { CardProject };
