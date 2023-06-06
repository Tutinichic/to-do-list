import React from "react";
import { ReactComponent as IconBell } from "../../assets/bell.svg";
import Tooltip from "../Utilities/Tooltip";
import SearchField from "./SearchField";

const classHasNotification =
  "after:content-[''] after:w-2 after:h-2 after:bg-rose-500 block after:rounded-full after:absolute after:bottom-3/4  after:left-3/4";

const HeaderTasks = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const todayDate = `${year}, ${monthName[month].slice(0, 3)} ${day
    .toString()
    .padStart(2, "0")}`;

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  return (
    React.createElement("header", { className: "flex items-center" },
      React.createElement(SearchField, null),
      React.createElement("time", { dateTime: dateTimeFormat, className: "flex-1 text-center" },
        todayDate
      ),
      React.createElement("div", { className: "flex flex-1" },
        React.createElement(Tooltip, { txt: "see notifications", className: "mr-6 ml-auto" },
          React.createElement("button", {
            className: `relative ${classHasNotification}`,
            title: "notifications"
          },
            React.createElement(IconBell, { className: "fill-orange-600 w-6 h-6 dark:fill-orange-800" })
          )
        )
      )
    )
  );
};

export default HeaderTasks;