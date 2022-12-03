import { SEARCHBYAUTHOR, SEARCHBYBAR, SEARCHBYCATEGORY } from "./actionsTypes"


export const searchByBar = (text) => {
    return {
        type : SEARCHBYBAR,
        payload : text
    }
}


export const searchByCategory = (id) => {
    return {
        type : SEARCHBYCATEGORY,
        payload : id
    }
}

export const searchByAuthor = (id) => {
    return {
        type : SEARCHBYAUTHOR,
        payload : id
    }
}