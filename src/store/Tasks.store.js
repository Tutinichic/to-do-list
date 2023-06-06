import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      title: "Test 1",
      dir: "TestTest",
      description: "This is the description for this task.",
      date: "2023-08-14",
      completed: false,
      important: false,
      id: "dY7aN",
    },
    {
      title: "Test 2",
      dir: "Test",
      description: "This is the description for this task.",
      date: "2023-11-08",
      completed: true,
      important: true,
      id: "hYsk8",
    },
    {
      title: "Test 3",
      dir: "Test",
      description: "This is the description for this task.",
      date: "2023-10-08",
      completed: true,
      important: false,
      id: "hd5aS",
    },
    {
      title: "Test 4",
      dir: "Test",
      description: "This is the description for this task.",
      date: "2023-10-08",
      completed: true,
      important: false,
      id: "hdg9M",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addNewTask(state, action) {
      const newTasks = [...state.tasks, action.payload];
      state.tasks = newTasks;
    },
    removeTask(state, action) {
      const taskId = action.payload;
      const newTasksList = state.tasks.filter((task) => task.id !== taskId);
      state.tasks = newTasksList;
    },
    markAsImportant(state, action) {
      const taskId = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.important = !taskToUpdate.important;
      }
    },
    deleteAllTasks(state) {
      state.tasks = [];
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;