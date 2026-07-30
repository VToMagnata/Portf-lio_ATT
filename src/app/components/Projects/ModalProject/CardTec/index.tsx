import { FaReact } from "react-icons/fa";
import { Bebas_Neue, Jost, Fjalla_One } from "next/font/google";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
        <p className={`${fjalla.className} text-[0.8em] break-words`}>
          {description}
        </p>
      </section>
    </main>
  );
};

export { CardTec };
