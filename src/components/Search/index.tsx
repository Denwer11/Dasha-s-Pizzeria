import React, { useCallback, useRef, useState } from "react";
import styles from "./Search.module.scss";
import SearchIcon from "../../assets/img/search.svg";
import CrossIcon from "../../assets/img/cross.svg";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const searchClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 150),
    []
  );

  const changeInput = (e: any) => {
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
      {value && (
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
