import { useReducer } from "react";
import { Todo } from "../types/Todo";

type Action =
    | { type: 'ADD'; payload: string }
    | { type: 'TOGGLE'; payload: string }
    | { type: 'REMOVE'; payload: string }

const reducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: Date.now().toString(),
                    title: action.payload,
                    done: false,
                },
            ]
        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.payload)

        default:
            return state
    }
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(reducer, [])

    const addTodo = (text: string) => {
        if(!text.trim()) return
        dispatch({type: 'ADD', payload: text.trim()})
    }

    const toggleTodo = (id: string) => {
        dispatch({ type: 'TOGGLE', payload: id })
    }

    const removeTodo = (id: string) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    return {
        todos,
        addTodo,
        toggleTodo,
        removeTodo
    }
}

