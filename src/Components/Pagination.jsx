import React from "react";
import "../index.css";

const Pagination = ({ pageNumber, setPageNumber }) => {
  let next = () => {
    setPageNumber((prevValue) => prevValue + 1);
  };
  let prev = () => {
    if (pageNumber === 1) {
      return;
    }
    setPageNumber((prevValue) => prevValue - 1);
  };
  return (
    <div className="pgn-container">
      <button onClick={prev} className="pgn-btn">
        &lt;
      </button>
      <button onClick={next} className="pgn-btn">
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
