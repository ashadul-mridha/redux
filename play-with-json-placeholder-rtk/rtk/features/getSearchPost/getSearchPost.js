const {  createSlice  , createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// initial state
const initialState = {
    loading : false,
    post : [],
    error : ''
}

// create async function
const searchRelateds = createAsyncThunk("fetch/search/post",  async () => {
    const josnPost = await fetch('https://jsonplaceholder.typicode.com/posts?title_like=repellat')
    const post = await josnPost.json();

    return post;
})

const searchPostSlice = createSlice({
    name : 'searchPost',
    initialState,
    reducers: {

    },
    extraReducers : (builder) => {
        builder.addCase(searchRelateds.pending , (state , action) => {
            state.loading = true
        })
        builder.addCase(searchRelateds.fulfilled , (state , action) => {
            state.loading = false,
            state.post =  action.payload
        })
        builder.addCase(searchRelateds.rejected , (state , action) => {
            state.post =  {},
            state.error = action.error.message
        })
    }
})

module.exports = searchPostSlice.reducer
module.exports.searchRelateds = searchRelateds