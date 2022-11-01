import React, { useEffect, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import styles from "./SearchBar.module.css";

export default function SearchBar({
  search,
}: {
  search: (schoolName: string) => void;
}) {
  const [input, setInput] = useState("");

  useEffect(() => {
    search(input);
  }, [input]);

  return (
    <div className={styles.searchBar}>
      <div>
        <SearchIcon />
      </div>
      <input
        className={styles.searchBarInput}
        type="text"
        placeholder="Search for your school..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
