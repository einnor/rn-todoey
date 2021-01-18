import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Todo from './Todo';

const TodoList = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.align, styles.font]}>Todo List</Text>
      <Todo name="Milk the cow" />
      <Todo name="Herd the goats" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginBottom: 60,
  },
  align: {
    alignSelf: 'center',
  },
  font: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TodoList;
