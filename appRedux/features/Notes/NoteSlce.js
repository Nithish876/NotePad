import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import { getJsonValue, setJsonValue } from '../../../hooks/useStorage'

const SaveNote = createAsyncThunk( 
    "notes/SaveNote",
    async (Note,thunkAPI)=>{
          // save notes locally 
          // get the whole notes before saving induvidual note 
          const oldNotes = getJsonValue("notes").then((value)=>value)
          setJsonValue({...oldNotes,Note},'notes')
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
