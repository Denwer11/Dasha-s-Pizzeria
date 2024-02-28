import React, { useCallback, useContext, useRef, useState } from "react";
import styles from "./Search.module.scss";
import SearchIcon from "../../assets/img/search.svg";
import CrossIcon from "../../assets/img/cross.svg";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

const Search = () => {
  const [value, setValue] = useState("");
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputRef = useRef();

  const searchClear = () => {
    setSearchValue("");
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 150),
    []
  );

  const changeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <img src={SearchIcon} alt="search" className={styles.icon} />
      <input
        ref={inputRef}
        value={value}
        onChange={changeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img
          onClick={searchClear}
          src={CrossIcon}
          alt="cross"
          className={styles.cross}
        />
      )}
    </div>
  );
};

export default Search;
