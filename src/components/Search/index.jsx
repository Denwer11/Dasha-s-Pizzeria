import React, { useContext } from "react";
import styles from "./Search.module.scss";
import SearchIcon from "../../assets/img/search.svg";
import CrossIcon from "../../assets/img/cross.svg";
import { SearchContext } from '../../App';

const Search = () => {
  const {searchValue, setSearchValue} = useContext(SearchContext);

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
