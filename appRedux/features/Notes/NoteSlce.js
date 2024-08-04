import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'

const SaveNote = createAsyncThunk( 
    "notes/SaveNote",
    async (Note)=>{
          // save notes locally 
    }
 )

const initialState = {
    Notes:[]
}

export const NotesSlice = createSlice({
    name:"notes",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(
            SaveNote.fulfilled,(state,action)=>{
             state.Notes.push(action.payload)
            }
        )
    }
})

export const {  }  = NotesSlice.actions;
export default  NotesSlice.reducer
