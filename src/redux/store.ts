import { configureStore } from '@reduxjs/toolkit'
import filmsReducer from './slices/filmsSlice';

export default configureStore({
    reducer: {
        films: filmsReducer
    },
});