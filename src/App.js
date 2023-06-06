import React from "react";
import AccountData from "./components/AccountData";
import Menu from "./components/Menu";
import TasksSection from "./components/TasksSection/TasksSection";
import Modal from "./components/Utilities/Modal";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const isModalOpen = useAppSelector((state) => state.modal.modalIsOpen);

  return React.createElement(
    "div",
    { className: "bg-slate-200 min-h-screen text-slate-600 dark:bg-slate-900 dark:text-slate-300" },
    isModalOpen && React.createElement(Modal, null),
    React.createElement(Menu, null),
    React.createElement(TasksSection, null),
    React.createElement(AccountData, null)
  );
};

export default App;