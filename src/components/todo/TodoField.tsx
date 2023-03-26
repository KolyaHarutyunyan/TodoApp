interface ITodoFieldProps {
  text: string;
  setValue: (value: string) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const TodoField: React.FC<ITodoFieldProps> = ({
  text,
  setValue,
  onAdd,
}) => {
  return (
    <form onSubmit={onAdd}>
      <label className="border rounded bg-white flex justify-between items-center">
        <input
          type="text"
          placeholder="Create Your Todo..."
          className="py-2 px-4 w-full h-full outline-none"
          value={text}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="py-2 px-4 text-xl bg-yellow-300 transition-all disabled:opacity-[0.5]"
          disabled={text.trim().length === 0}
        >
          ✚
        </button>
      </label>
    </form>
  );
};
