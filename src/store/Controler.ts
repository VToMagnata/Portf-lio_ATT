import { create } from "zustand";

// O type HeaderCon... tem um variavel chamada HeaderControl que tem 3 valores
type HeaderControlType = {
  HeaderControl: {
    home: boolean;
    about: boolean;
    projects: boolean;
  };

  // Nossa função que recebe o valor boolean, e nossa key que indicara onde sera alterado
  ChangeValueHeader: (value: boolean, key: string) => void;
};

export const useHeaderViwer = create<HeaderControlType>((set) => ({
  // Nome da nossa viriavel que está la no type vitor burro TEM QUE SER O MESMO NOME CARAI
  HeaderControl: {
    home: true,
    about: false,
    projects: false,
  },

  ChangeValueHeader: (value: boolean, key: string) =>
    // A PORRA DAS () PRA NÃO PRECISAR DO RETURN
    set((state) => ({
      HeaderControl: {
        ...state.HeaderControl,
        home: false,
        about: false,
        projects: false,
        [key]: value,
      },
    })),
}));
