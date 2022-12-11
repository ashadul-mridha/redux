const {  createSlice  , createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
const {searchRelateds} = require("../getSearchPost/getSearchPost")

const store = require("../../app/store");

// initial state
const initialState = {
    loading : false,
    post : {

    },
    error : ''
}

// create async function
const getPosts = createAsyncThunk("fetch/post/id",  async () => {
    const josnPost = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const post = await josnPost.json();
    return post;
    
    store.dispatch(searchRelateds())
})

const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers: {

    },
    extraReducers : (builder) => {
        builder.addCase(getPosts.pending , (state , action) => {
            state.loading = true
        })
        builder.addCase(getPosts.fulfilled , (state , action) => {
            state.loading = false,
            state.post =  action.payload
        })
        builder.addCase(getPosts.rejected , (state , action) => {
            state.post =  {},
            state.error = action.error.message
        })
    }
})

module.exports = postSlice.reducer
module.exports.getPosts = getPosts