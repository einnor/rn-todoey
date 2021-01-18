import React from 'react';
import { View, Text } from 'react-native';

import Todo from './Todo';

const TodoList = () => {
  return (
    <View>
      <Text>Todo List</Text>
      <Todo name="Milk the cow" />
      <Todo name="Herd the goats" />
    </View>
  )
}

export default TodoList;
