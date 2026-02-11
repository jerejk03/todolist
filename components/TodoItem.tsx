import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Todo } from '../types/Todo'

interface TodoItemProps {
    todo: Todo
    done: (id: string) => void
    remove: (id: string) => void
}

export default function TodoItem({todo, done}: TodoItemProps) {
  return (
    <TouchableOpacity onPress={() => done(todo.id)}>
        <Text style={todo.done ? styles.done : styles.undone}>
            {todo.title}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
done: {
    textDecorationLine: 'line-through',
    backgroundColor: 'white',
    fontSize: 24,
},
undone: {
    textDecorationLine: 'none',
    backgroundColor: 'white',
    fontSize: 24,
},
});