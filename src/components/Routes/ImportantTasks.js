import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const ImportantTasks = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [importantTasks, setImportantTasks] = useState([]);

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => task.important);
    setImportantTasks(filteredTasks);
  }, [tasks]);

  return (
    React.createElement(LayoutRoutes, { title: "Important tasks", tasks: importantTasks })
  );
};

export default ImportantTasks;