import { configureStore } from '@reduxjs/toolkit'
import projectReducer from "../components/features/project/myProjects";

export const store = configureStore({
    reducer: {
        project: projectReducer,
    },
  })
