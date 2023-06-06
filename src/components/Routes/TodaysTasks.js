import React from "react";
import useTodayTasks from "../hooks/useTodayTasks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TodaysTasks = () => {
  const todaysTasks = useTodayTasks();

  return (
    React.createElement(LayoutRoutes, { title: "Today's tasks", tasks: todaysTasks })
  );
};

export default TodaysTasks;