import { useRef, useEffect } from "react";

function Header({ handleClick }) {
  const inputRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  const onSearch = () => {
    handleClick(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div className="header">
      <div className="logo itim-regular">Breeze</div>
      <div className="search sen">
        <input type="text" placeholder="Search for cities..." ref={inputRef} />
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
}

export default Header;
