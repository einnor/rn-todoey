import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

import Todo from './Todo';

const TodoList = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([
    'Milk the cow',
    'Herd the goats',
  ]);

  const onAddItem = () => {
    if (!text) {
      return;
    }

    setList([...list, text]);
    setText('');
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.align, styles.font]}>Todo List</Text>
      <ScrollView>
        {list.map((item, index) => (
          <Todo key={index} item={item} />
        ))}
      </ScrollView>
      <View>
        <TextInput style={styles.input} value={text} onChangeText={setText} />
        <Button title="Add item" onPress={onAddItem} />
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
