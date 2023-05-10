import { createSlice } from "@reduxjs/toolkit";
import projectsData from '../../../data/projectsData';

const initialState = {
    projects: projectsData
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {

    }
})


export default projectsSlice