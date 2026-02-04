import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Todo } from '../types/Todo'
import { SwipeListView } from 'react-native-swipe-list-view'
import TodoItem from './TodoItem'

interface TodoListProps {
    todos: Todo[]
    done: (id: string)  => void
}

export default function TodoList({ todos, done }: TodoListProps) {
    return (
        <View>
            <SwipeListView
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                <TodoItem todo={item} done={done} />
                )}
                renderHiddenItem={() => <View />}
                rightOpenValue={-75}
                disableRightSwipe
            />
        </View>
    )
}
