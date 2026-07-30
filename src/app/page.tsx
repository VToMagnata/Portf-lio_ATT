"use client";

import { Header } from "./components/Header";
import { Initial } from "./components/Initial";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { useHeaderViwer } from "@/store/Controler";

const Home = () => {
  const HeaderControl = useHeaderViwer((state) => state.HeaderControl);

  return (
    <div className="h-screen w-full bg-[url('/bora.png')] bg-cover bg-center flex flex-col pt-5 overflow-hidden">
      <Header />
      <main className="w-full h-full flex flex-col">
        {HeaderControl.home && <Initial />}
        {HeaderControl.about && <About />}
        {HeaderControl.projects && <Projects />}
      </main>
    </div>
  );
};

export default Home;
