"use client";

import { useEffect, useState } from "react";

export function useBreakpoint() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth); // Criamos uma função que setA a nossa variavel "WIDTH" com o valor atual da janela do usuario

    resize();

    window.addEventListener("resize", resize); // Adicionamos um ouvinte na window (JANELA{Tamanho!}) toda vez que acontecer um resize
    // ou seja o tamanho da janela mudar ele reezecuta a function resize

    return () => window.removeEventListener("resize", resize); // Quando esse componente desaparecer pare de ouvir o EventListener
  }, []);

  return {
    // Retorna como valor do nosso hook dizendo se é mobile, tablet ou destok
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
  };
}
