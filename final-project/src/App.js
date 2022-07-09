import React from "react";
import { useState } from "react";
import ComicsList from "./components/ComicsList";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import "./style/main.scss";

function App() {
  //values of states are taken from Search component and passed here using props
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState(`title`);

  //sets searchValue (use in props)
  const changeSearchValue = (value) => {
    setSearchValue(value);
  };

  //sets sortValue (use in props)
  const changeSortValue = (value) => {
    setSortValue(value);
  };

  return (
    <div>
      <Header changeSearch={changeSearchValue} changeSort={changeSortValue} />
      <main className="main">
        <Hero />
        <section className="comics-section" id="comics-section">
          <Search
            changeSearch={changeSearchValue}
            changeSort={changeSortValue}
            sortValue={sortValue}
            searchValue={searchValue}
          />
          <ComicsList searchValue={searchValue} sortValue={sortValue} />
        </section>
      </main>
    </div>
  );
}

export default App;
