import { createSlice } from "@reduxjs/toolkit";
import filtersData from "../../../data/filtersData";

const initialState = {
    filters: filtersData,
    activeFilter: 'all',
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersChanged: (state, action) => {
            state.activeFilter = action.payload;
        },
    }
})

const { actions } = filtersSlice;

export default filtersSlice;
export const {
    filtersChanged,
} = actions;
