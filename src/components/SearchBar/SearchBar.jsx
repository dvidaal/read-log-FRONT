import { useState } from "react";
import Button from "../Button/Button";
import Books from "../Books/Books";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(inputValue);
  };

  return (
    <div className="flex items-center justify-center">
      <input
        className="bg-white border-2 border-black rounded-lg text-black focus:outline-none px-4 py-2"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleButtonClick} />
      <Books>{displayText}</Books>
    </div>
  );
};

export default SearchBar;
