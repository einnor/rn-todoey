import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Todo = ({ name }) => {
  return (
    <View style={[styles.item, styles.align]}>
      <Text>{name}</Text>
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
