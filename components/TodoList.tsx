import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Todo } from '../types/Todo'
import { SwipeListView } from 'react-native-swipe-list-view'
import TodoItem from './TodoItem'

interface TodoListProps {
    todos: Todo[]
    done: (id: string) => void
    remove: (id: string) => void
}

export default function TodoList({ todos, done, remove }: TodoListProps) {
    return (
        <View>
            <SwipeListView
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TodoItem todo={item} done={done} remove={remove} />
                )}
                renderHiddenItem={({ item }) => (
                    <View style={styles.hiddenContainer}>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => remove(item.id)}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                rightOpenValue={-75}
                disableRightSwipe
            />
        </View>
    )
}

const styles = StyleSheet.create({
    hiddenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 16,
        backgroundColor: '#f41a0f',
    },
    deleteButton: {
        paddingHorizontal: 20,
    },
    deleteText: { 
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
        paddingLeft: 8,
    },
})
