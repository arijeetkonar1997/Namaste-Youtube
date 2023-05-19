import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
export { YOUTUBE_SEARCH_API } from "../utils/constants";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else getSearchSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API Call-" + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxWzc3zQIw57gdf7ykiYLna0jQrW9v07WTg&usqp=CAU"
          alt="burger-icon"
        />
        <a href="/">
          <img
            className="h-12 mx-2"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="youtube-icon"
          />
        </a>
      </div>
      <div className="col-span-10 pt-2">
        <input
          className="w-1/2 content-center border rounded-l-full ml-20 mr-0 border-gray-400"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="border rounded-r-full border-gray-400 px-2 ml-0">
          🔍
        </button>
        {showSuggestions && (
          <div className="absolute ml-12 bg-white py-2 px-2 w-[33rem] shadow-lg rounded-lg border border-gray">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-7 pt-3"
          src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
