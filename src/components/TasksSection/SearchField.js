import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/search.svg";
import { useAppSelector } from "../../store/hooks";

const SearchField = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const searchResultsRef = useRef(null);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [matchedTasks, setMatchedTasks] = useState([]);

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => {
      return task.title.toLowerCase().includes(searchInputValue);
    });
    if (searchInputValue.trim().length) {
      setMatchedTasks(filteredTasks);
    } else {
      setMatchedTasks([]);
    }
  }, [searchInputValue, tasks]);

  useEffect(() => {
    const checkClick = (e) => {
      if (!searchResultsRef.current) return;
      if (
        e.target !== searchResultsRef.current &&
        !searchResultsRef.current.contains(e.target)
      ) {
        setSearchInputValue("");
      }
    };

    document.addEventListener("click", checkClick);
    return () => {
      document.removeEventListener("click", checkClick);
    };
  }, []);

  return (
    React.createElement("form", { className: "flex-1 relative" },
      React.createElement("label", { htmlFor: "search", className: "sr-only" }),
      React.createElement("input", {
        type: "search",
        id: "search",
        placeholder: "Search",
        ref: searchResultsRef,
        value: searchInputValue,
        onChange: ({ target }) => setSearchInputValue(target.value),
        className: "inputStyles w-full"
      }),
      React.createElement(Search, { className: "absolute w-5 right-4 top-3.5 text-slate-400" }),
      matchedTasks.length > 0 && (
        React.createElement("ul", { className: "absolute bg-slate-100 rounded-md w-full top-14 p-3 divide-y-2 divide-slate-200" },
          matchedTasks.map((task) => (
            React.createElement("li", { key: task.id, className: "py-2" },
              React.createElement(Link, {
                to: "/",
                className: "flex justify-between transition hover:text-rose-500"
              },
                React.createElement("span", null, task.title),
                " ",
                React.createElement("span", { className: "text-slate-400" }, task.date)
              )
            )
          ))
        )
      )
    )
  );
};

export default SearchField;