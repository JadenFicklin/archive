interface SearchProps {
  searchKey: string;
  onSearchChange: (key: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
}

export const Search = ({
  searchKey,
  onSearchChange,
  onSearchSubmit,
}: SearchProps) => {
  return (
    <form onSubmit={onSearchSubmit} className="my-4">
      <input
        type="text"
        value={searchKey}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for a song"
        className="rounded border px-2 py-1"
      />
      <button
        type="submit"
        className="ml-2 rounded bg-green-500 px-3 py-1 text-white"
      >
        Search
      </button>
    </form>
  );
};
