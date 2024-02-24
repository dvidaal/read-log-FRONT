import Button from "../Button/Button";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <input
        className="bg-white border-2 border-black rounded-lg text-black focus:outline-none px-4 py-2"
        type="text"
      />
      <Button />
    </div>
  );
};

export default SearchBar;
