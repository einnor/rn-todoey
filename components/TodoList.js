import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

import Todo from './Todo';

const TodoList = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.align, styles.font]}>Todo List</Text>
      <ScrollView>
        <Todo name="Milk the cow" />
        <Todo name="Herd the goats" />
      </ScrollView>
      <View>
        <TextInput style={styles.input} />
        <Button title="Add item" onPress={() => {}} />
      </View>
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
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 8,
  },
});

export default TodoList;
