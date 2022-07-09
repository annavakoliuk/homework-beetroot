import React, { useState, useEffect } from "react";
import Loader from "./Loader";

export default function SeriesInfo(props) {
  const [data, setData] = useState({}); //data about the series
  const [loading, setLoading] = useState(false); //loading status

  //fetches data when id is changed (user clicks on a new card) and if modal window is clicked to be active
  useEffect(() => {
    const request = async () => {
      setLoading(true);
      const response = await fetch(
        `http://gateway.marvel.com/v1/public/series/${props.id}?apikey=33b2880ac2ee9e48c673b864b1d138c6`
      );
      const json = await response.json();
      setData(json.data.results[0]);
      setLoading(false);
    };

    if (props.modalClicked === true) {
      request();
    }
  }, [props.id]);

  //makes an info window visible when modal window is clicked and loading is done
  useEffect(() => {
    if (props.modalClicked === true && !loading) {
      document.getElementById("info-window").classList.add("active");
    }
  }, [loading]);

  //hides info window on click and sets window clicked status to false
  const handleCLick = () => {
    document.getElementById("info-window").classList.remove("active");
    props.changeModalStatus(false);
  };

  //checks if loading of data is done, if not - shows loader
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div id="info-window" className="info-window">
        <div className="image-holder">
          <img
            src={
              data.thumbnail
                ? `${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`
                : "#"
            }
            alt="1"
          />
        </div>
        <ul className="info-list">
          <li className="info-item">
            <span className="info-bold">{data.title}</span>
          </li>
          <li className="info-item">
            <p>
              {data.description
                ? data.description
                : `There is no description yet`}
            </p>
          </li>
          <li className="info-item">
            <span className="info-bold">Rating: </span>
            <span>{data.rating === "" ? "Not specified" : data.rating}</span>
          </li>
          <li className="info-item">
            <span className="info-bold">Start Year: </span>
            <span>
              {data.startYear === "" || data.startYear === null
                ? "Not specified"
                : data.startYear}
            </span>
          </li>
          <li className="info-item">
            <span className="info-bold">End Year: </span>
            <span>
              {data.endYear === "" || data.endYear === null
                ? "Not specified"
                : data.endYear}
            </span>
          </li>
        </ul>
        <button className="close" onClick={handleCLick}></button>
      </div>
    );
  }
}
