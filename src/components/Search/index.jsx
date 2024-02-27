import React from "react";
import styles from "./Search.module.scss";
import SearchIcon from "../../assets/img/search.svg";
import CrossIcon from "../../assets/img/cross.svg";

const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div className={styles.root}>
      <img src={SearchIcon} alt="search" className={styles.icon} />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img
          src={CrossIcon}
          alt="cross"
          className={styles.cross}
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
};

export default Search;
