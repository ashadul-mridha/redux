const  store = require("./rtk/app/store")
const {getPosts} = require("./rtk/features/getPost/getPostSlice")
const {searchRelateds} = require("./rtk/features/getSearchPost/getSearchPost")

store.subscribe( () => {

})

store.dispatch(getPosts())
store.dispatch(searchRelateds())