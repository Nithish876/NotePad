import { configureStore } from '@reduxjs/toolkit'
import NoteReducer from '../appRedux/features/Notes/NoteSlce'


export const store = configureStore({
    reducer: {
        Notes: NoteReducer
    }
})


