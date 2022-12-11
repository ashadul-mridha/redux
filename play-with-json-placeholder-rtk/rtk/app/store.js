const { configureStore } = require('@reduxjs/toolkit');
const postReducer = require("../features/getPost/getPostSlice")
const postSearchReducer = require("../features/getSearchPost/getSearchPost")
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = configureStore({
    reducer: {
        post : postReducer,
        postSearch : postSearchReducer
    },
    middleware : (byDefaultMiddleWare) => byDefaultMiddleWare().concat(logger)
})

module.exports = store