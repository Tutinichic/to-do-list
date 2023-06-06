import React from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";

const Home = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  return React.createElement(LayoutRoutes, { title: "All tasks", tasks: tasks });
};

export default Home;