import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    burgerMenu: false
}

export const burgerSlice = createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        openCloseMenu: (state) => {
            state.burgerMenu = !state.burgerMenu
        }
    }
})

export const { openCloseMenu } = burgerSlice.actions

export default burgerSlice;