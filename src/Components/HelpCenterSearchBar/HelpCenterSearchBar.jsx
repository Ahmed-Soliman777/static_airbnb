import React, { useState, useEffect, useRef } from "react";
import "./HelpCenterSearchBar.css";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const containerRef = useRef(null);

  const topArticles = [
    "Cancel your home reservation as a guest",
    "Change the date or time of your service or experience reservation",
    "If your host cancels your home reservation",
  ];

  const filteredResults = query
    ? topArticles.filter((article) =>
        article.toLowerCase().includes(query.toLowerCase())
      )
    : topArticles;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="search-box" ref={containerRef}>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search how-tos and more"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowResults(true)}
          className="search-input"
        />
        <button className="search-btn">Search</button>
      </div>

      {showResults && (
        <div className="results-box">
          <h4 className="results-title">Top articles</h4>
          {filteredResults.length ? (
            filteredResults.map((item, i) => (
              <div key={i} className="result-item">
                <div className="article-icon-wrapper">
                  <i className="fa-regular fa-newspaper article-icon"></i>
                </div>
                <span>{item}</span>
              </div>
            ))
          ) : (
            <div className="no-results">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
