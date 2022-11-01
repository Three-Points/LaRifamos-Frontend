import { useContext } from "react";
import { SearchRaffleContext } from "../rafflesPage";

function SearchButton() {
  const { search, setSearch } = useContext(SearchRaffleContext);

  let handleKeyDown = (e) => {
    let input = document.getElementById("rifas-search");
    if (e.key === "Enter") {
      setSearch(input.value);
    }
  };

  let handleClick = (e) => {
    let input = document.getElementById("rifas-search");
    setSearch(input.value);
  };

  return (
    <div className="rifas-search px-3 d-flex align-content-center align-items-center">
      <input
        id="rifas-search"
        className="mx-2"
        type="text"
        name=""
        placeholder="Buscar productos..."
        onKeyDown={handleKeyDown}
      />
      <span
        className="rifas-search-button d-flex align-items-center justify-content-center"
        onClick={handleClick}
      >
        <img src="./imgs/Lupa.svg" alt="" className="img-lupa" />
      </span>
    </div>
  );
}

export default SearchButton;
