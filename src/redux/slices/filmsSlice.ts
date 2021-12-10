import { createAsyncThunk, createSlice }  from '@reduxjs/toolkit';
import { SWAPI_URL } from '../../constants/api';
import {
    FilmsResponse,
} from '../../types/sliceTypes';

export const getFilmsAsync = createAsyncThunk(
    'films/getFilmsAsync',
    async () => {
        const response = await fetch(`${SWAPI_URL}films`);
        const responseObject: FilmsResponse = await response.json();
        const films = responseObject.results.map((film) => ({
            id:(
                film.url.split('/').filter(Boolean).pop()
            ),
            title: film.title,
            description: film.opening_crawl
        }))

        return {films}
    }
)

export const filmsSlice = createSlice({
    name: 'films',
    initialState: [],
    reducers: {
        toggleFavourite: (state, action) => {
            // // @ts-ignore
            // const index = state.findIndex((film) => film?.id === action.payload.id);
            // // @ts-ignore
            // state[index]?.liked = action.payload.completed;
        },
    },
    extraReducers: {
        // @ts-ignore
        [getFilmsAsync.fulfilled]: (state, action) => {
            return action.payload.films;
        }
    }
})

export default filmsSlice.reducer;