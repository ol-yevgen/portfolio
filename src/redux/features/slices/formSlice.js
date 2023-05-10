import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    form: [],
    messageSending: false,
    messageSent: false,
    submitClickStatus: false,
    errorStatus: false
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        formCreated: (state, action) => {
            state.form.push(action.payload)
        },
        isMessageSending: (state) => {
            state.messageSending = !state.messageSending
        },
        isMessageSent: (state) => {
            state.messageSent = !state.messageSent
        },
        isSubmitClickStatus: (state) => {
            state.submitClickStatus = !state.submitClickStatus
        },
        isErrorStatus: (state) => {
            state.errorStatus = !state.errorStatus
        }
    }
})

export const {
    formCreated,
    isMessageSending,
    isMessageSent,
    isSubmitClickStatus,
    isErrorStatus } = formSlice.actions

export default formSlice;