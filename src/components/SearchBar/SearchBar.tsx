import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const searchBtn = useRef<HTMLButtonElement>(null);

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    if (searchBtn.current) {
      searchBtn.current.disabled = inputValue === "" ? true : false;
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const query = (form.elements.namedItem("query") as HTMLInputElement)?.value;
    if (query === "") {
      toast.error("Please enter search term!", { position: "top-right" });
      return;
    }
    onSearch(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          onChange={handleUserInput}
        />
        <button
          className={css.searchBtn}
          ref={searchBtn}
          type="submit"
          disabled
        >
          <FaSearch />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
