import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [ "Current Project", "React", "Rest API", "TypeScript" ]
}

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {}
})

export const selectProject = state => state.project.projects 

export default projectSlice.reducer