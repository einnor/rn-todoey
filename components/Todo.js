import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Todo = ({ item, onDelete }) => {
  return (
    <View style={[styles.item, styles.align]}>
      <Text>{item}</Text>
      <Button title="Delete" color="red" onPress={() => onDelete(item)} />
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'whitesmoke',
  },
  align: {
    margin: 8,
    padding: 8,
  },
});

export default Todo;
