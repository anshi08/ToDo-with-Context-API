import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo : [
        {
            id:1,
            todo: "Some To do",
            completed: false
        }
    ],
    //Only name of the functionality not definition
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}

});

//Use Context
export const useTodo = () => {
    return useContext(TodoContext);
}

//Context Provider with value prop
export const TodoProvider = TodoContext.Provider