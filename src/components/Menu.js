import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { tasksActions } from "../store/Tasks.store";
import BtnAddTask from "./Utilities/BtnAddTask";

const links = [
  {
    name: "Today's tasks",
    path: "/today",
  },
  {
    name: "All tasks",
    path: "/",
  },
  {
    name: "Important tasks",
    path: "/important",
  },
  {
    name: "Tasks done",
    path: "/done",
  },
  {
    name: "Upcoming tasks",
    path: "/upcoming",
  },
];

const classLinkActive =
  "text-rose-600 bg-orange-100 border-r-4 border-rose-400 dark:bg-slate-700 dark:text-rose-300 dark:border-rose-300";

const Menu = () => {
  const route = useLocation();
  const currentPath = route.pathname;
  const dispatch = useAppDispatch();

  const deleteAllTasksHandler = () => {
    dispatch(tasksActions.deleteAllTasks());
  };

  return (
    React.createElement("header", { className: "bg-slate-100 flex flex-col h-screen w-2/12 fixed left-0 dark:bg-slate-800/[.5]" },
      React.createElement("h1", { className: "font-bold uppercase text-center mt-8 text-lg tracking-wide" }, "TODO list"),
      React.createElement(BtnAddTask, { className: "my-8 mx-4" }),
      React.createElement("nav", null,
        React.createElement("ul", { className: "grid gap-2" },
          links.map((link) => (
            React.createElement("li", { key: link.path },
              React.createElement(NavLink, {
                to: link.path,
                className: `px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-rose-300 ${currentPath === link.path ? classLinkActive : ""}`
              },
                link.name
              )
            )
          ))
        )
      ),
      React.createElement("button", {
        className: "mx-4 mt-auto mb-8 text-left",
        onClick: deleteAllTasksHandler
      }, "Delete all tasks")
    )
  );
};

export default Menu;