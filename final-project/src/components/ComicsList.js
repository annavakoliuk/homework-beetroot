import React from "react";
import { useState, useEffect, useRef } from "react";
import SeriesInfo from "./SeriesInfo";
import Loader from "./Loader";

export default function ComicsList(props) {
  const [comics, setComics] = useState([]); //list of data about each comic series
  const [loading, setLoading] = useState(false); //checks if fetch is done
  const [activeId, setActiveId] = useState(0); //active series
  const [offset, setOffset] = useState(0); //offset for fetch request
  const [searchQuery, setSearchQuery] = useState(""); //query param for search
  const [sortQuery, setSortQuery] = useState(""); //query param for sort

  const numOfResults = useRef(0); //total number of results
  const numOfDisplayedResults = useRef(0); //number of dispayed results
  const activeModal = useRef(false); //is info window is cliked to be active (passed as a prop to SeriesInfo component to make info window visible)

  //fetches data and reruns when query params change
  useEffect(() => {
    const request = async () => {
      setLoading(true);
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/series?limit=20&offset=${offset}${searchQuery}${sortQuery}&apikey=33b2880ac2ee9e48c673b864b1d138c6`
      );
      const json = await response.json();

      //sets total number of results for a particular query
      numOfResults.current = json.data.total;
      const data = json.data.results;

      //checks if it's a first page of loading (offset=0)
      if (offset === 0) {
        //sets comics list to first page of results
        setComics(data);
      } else {
        //adds new page of results to the list of existing ones
        setComics((prev) => [...prev, ...data]);
      }
      setLoading(false);
    };

    request();
  }, [offset, searchQuery, sortQuery]);

  //sets number of dispayed results when list of comics change
  useEffect(() => {
    numOfDisplayedResults.current = comics.length;
  }, [comics]);

  //loads more results (used on click)
  const loadMore = () => {
    setOffset((prev) => prev + 20);
  };

  //checks if there is more results to load and changes 'load more' button to some text
  const checkMoreLoadings = () => {
    //if no results found for a search query
    if (numOfResults.current === 0) {
      return (
        <span className="list-results-text">
          No series found. Try different name.
        </span>
      );
    } else if (numOfResults.current - numOfDisplayedResults.current < 20) {
      //if number of results left to load is less than a limit
      return <span className="list-results-text">End of results</span>;
    } else {
      //if number of results left to load is bigger than a limit
      return (
        <button className="btn" onClick={loadMore}>
          Load more
        </button>
      );
    }
  };

  //gets search value from App component using props, checks it and creates a query param for search
  useEffect(() => {
    //sets offset to default to clear previous results
    setOffset(0);
    //checks if anything is typed into the input field
    if (props.searchValue.length) {
      setSearchQuery(`&titleStartsWith=${props.searchValue}`);
    } else {
      setSearchQuery("");
    }
  }, [props.searchValue]);

  //gets search value from App component using props and creates a query param for sort
  useEffect(() => {
    //sets offset to default to clear previous results
    setOffset(0);
    setSortQuery(`&orderBy=${props.sortValue}`);
  }, [props.sortValue]);

  //sets status of info window (passed to InfoWindow component as a prop)
  const changeModalStatus = (status) => {
    activeModal.current = status;
  };

  //sets status of an activeModal to true on click. if clicked on the same card twice (=the data for this series is already fetched), it makes the info window visible
  const handleClick = (item) => {
    return function (e) {
      e.preventDefault();
      activeModal.current = true;
      if (item.id === activeId) {
        document.getElementById("info-window").classList.add("active");
      } else {
        setActiveId(item.id);
      }
    };
  };

  //checks if loading of data is done, if not - shows loader instead of the 'loading more' button
  if (loading) {
    return (
      <div className="container comics-list-container">
        <ul className="comics-list">
          {comics.map((item) => (
            <li key={item.id} className="comics-item">
              <a
                href="#"
                className="comics-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.id === activeId) {
                    document
                      .getElementById("info-window")
                      .classList.add("active");
                  } else {
                    setActiveId(item.id);
                  }
                }}
              >
                <div className="img-holder">
                  <img
                    className="comics-img"
                    src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                    alt={`cover of ${item.title}`}
                  />
                </div>
                <span className="comics-title">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <SeriesInfo id={activeId} />
        <Loader />
      </div>
    );
  } else {
    return (
      <div className="container comics-list-container">
        <ul className="comics-list">
          {comics.map((item) => (
            <li key={item.id} className="comics-item">
              <a href="#" className="comics-link" onClick={handleClick(item)}>
                <div className="img-holder">
                  <img
                    className="comics-img"
                    src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                    alt={`cover of ${item.title}`}
                  />
                </div>
                <span className="comics-title">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <SeriesInfo //this is modal window
          id={activeId}
          modalClicked={activeModal.current}
          changeModalStatus={changeModalStatus}
        />
        {checkMoreLoadings()}
      </div>
    );
  }
}
