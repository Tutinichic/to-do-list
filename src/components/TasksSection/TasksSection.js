import React from "react";
import { Route, Routes } from "react-router-dom";
import DoneTasks from "../Routes/DoneTasks";
import Home from "../Routes/Home";
import ImportantTasks from "../Routes/ImportantTasks";
import TodaysTasks from "../Routes/TodaysTasks";
import HeaderTasks from "./HeaderTasks";

const TasksSection = () => {
  return (
    React.createElement("main", { className: "pt-5 pb-16 px-8 w-8/12 m-auto min-h-screen" },
      React.createElement(HeaderTasks, null),
      React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
        React.createElement(Route, { path: "/today", element: React.createElement(TodaysTasks, null) }),
        React.createElement(Route, { path: "/important", element: React.createElement(ImportantTasks, null) }),
        React.createElement(Route, { path: "/done", element: React.createElement(DoneTasks, { done: true, title: "Completed tasks" }) }),
        React.createElement(Route, { path: "/upcoming", element: React.createElement(DoneTasks, { done: false, title: "Uncompleted tasks" }) })
      )
    )
  );
};

export default TasksSection;