import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiAxios,
  SiThemoviedatabase,
} from "react-icons/si";
import { Fjalla_One, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const fjalla = Fjalla_One({ subsets: ["latin"], weight: "400" });

type CardTecProps = {
  name: string;
  description: string;
  icon: string;
  color: string;
};

const icons = {
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  axios: SiAxios,
  tmdb: SiThemoviedatabase,
};

const CardTec = ({ name, description, icon, color }: CardTecProps) => {
  const Icon = icons[icon as keyof typeof icons];

  return (
    <main className="flex w-full h-auto border-1 border-white rounded-2xl bg-white/10 p-2">
      <figure className="h-full flex items-center mr-3">
        <Icon size={50} color={color} />
      </figure>
      <section className="flex flex-col min-w-0">
        <h1 className={`${fjalla.className} text-xl pb-2`}>{name}</h1>
        <p className={`${roboto.className} text-[0.8em] break-words`}>
          {description}
        </p>
      </section>
    </main>
  );
};

export { CardTec };
