import { combineReducers } from '@reduxjs/toolkit';

import burgerSlice from './slices/burgerSlice';
import projectsSlice from './slices/projectsSlice';
import filtersSlice from './slices/projectsFilterSlice'
import formSlice from './slices/formSlice';

const reducer = combineReducers({
    burgerMenu: burgerSlice.reducer,
    projects:  projectsSlice.reducer,
    filters: filtersSlice.reducer,
    form: formSlice.reducer
})

export default reducer;