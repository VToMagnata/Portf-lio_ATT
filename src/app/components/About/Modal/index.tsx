type ModalProps = {
  name: string;
  value?: string;
  close: () => void;
};

const Modal = ({ name, value, close }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm"
      onClick={close}
    >
      <main
        className="overflow-x-auto w-[50em] max-w-[90%] h-[90%] bg-black p-10 rounded-3xl text-center origin-center animate-[modalOpen_0.7s_ease-out_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-3xl mb-6">{name}</h1>

        <p>{value}</p>

        <button
          className="mt-6 px-6 py-2 bg-white text-black rounded-lg cursor-pointer"
          onClick={close}
        >
          Fechar
        </button>
      </main>
    </div>
  );
};

export { Modal };
