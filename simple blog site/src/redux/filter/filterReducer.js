import { SEARCHBYAUTHOR, SEARCHBYBAR, SEARCHBYCATEGORY } from "./actionsTypes";
import initialState from "./initialState";



const filterReducer = (state = initialState , action) => {
    switch (action.type) {
        case  SEARCHBYBAR:
            return state.filter( (blog) => blog.name.includes(action.payload))

        
        case  SEARCHBYAUTHOR:
            return state.filter( (blog) => blog.author.id === action.payload)
            
        case  SEARCHBYCATEGORY:

            return state.filter( (blog) => {
                return blog.category.some( (category) => category.id === action.payload)
            })
    
        default:
            return state;
    }
}

export default filterReducer;