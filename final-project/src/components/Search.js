import React from "react";

export default function Search(props) {
  //passes search value from input to the state in App component
  const handleChangeSearch = (e) => {
    props.changeSearch(e.target.value);
  };

  //passes sort value from input to the state in App component
  const handleChangeSort = (e) => {
    props.changeSort(e.target.value);
  };

  return (
    <div className="browse-section-header">
      <div className="container">
        <div className="title-holder">
          <h2 className="h2">Browse comic series</h2>
        </div>
        <div className="search-sort-bar">
          <div className="search-bar">
            <div className="search-input-holder">
              <input
                //value is changing dynamically using state from App component and can be reset from other component
                value={props.searchValue}
                id="search-input"
                className="input search-input"
                type="search"
                placeholder="E.g. Spider-man"
                onChange={handleChangeSearch}
              />
              <span className="icon-search search-input-icon"></span>
            </div>
          </div>
          <div className="sort-input-holder">
            <label className="sort-label" htmlFor="sort">
              Sort by:
            </label>
            <select
              className="input sort-input"
              id="sort"
              name="sort"
              onChange={handleChangeSort}
              //value is changing dynamically using state from App component and can be reset from other component
              value={props.sortValue}
            >
              <option value="title">Name</option>
              <option value="-startYear">Start year (Newest)</option>
              <option value="startYear">Start year (Oldest)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
