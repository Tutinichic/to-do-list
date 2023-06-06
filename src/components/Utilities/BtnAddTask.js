import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { modalActions } from "../../store/Modal.store";

const BtnAddTask = ({ className }) => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    dispatch(modalActions.openModalHandler());
  };

  return (
    React.createElement(React.Fragment, null,
      React.createElement("button", { className: `btn ${className}`, onClick: onOpenModal },
        "Add task"
      )
    )
  );
};

export default BtnAddTask;