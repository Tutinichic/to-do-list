import React from "react";
import useTodayTasks from "./hooks/useTodayTasks";

const AccountData = () => {
  const todaysTasks = useTodayTasks();

  const totalTodaysTasks = todaysTasks.length;

  const toggleDarkMode = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  };

  return (
    React.createElement("section", { className: "p-5 bg-slate-100 flex flex-col w-2/12 fixed top-0 right-0 h-screen dark:bg-slate-800/[.5]" },
      React.createElement("button", {
        className: "mt-8 text-left flex items-center justify-between",
        onClick: toggleDarkMode
      },
        React.createElement("span", null, "Darkmode"),
        React.createElement("div", { className: "w-10 h-5 bg-slate-200 rounded-full flex items-center px-0.5 dark:bg-slate-700" },
          React.createElement("div", { className: "w-4 h-4 rounded-full bg-orange-500" })
        )
      ),
      React.createElement("div", null,
        React.createElement("span", null, `Tasks today ${totalTodaysTasks}`),
        React.createElement("div", { className: "bg-slate-200 w-full h-2 rounded-full overflow-hidden dark:bg-slate-700" },
          React.createElement("div", { className: "bg-orange-500 h-full w-4" })
        )
      )
    )
  );
};

export default AccountData;