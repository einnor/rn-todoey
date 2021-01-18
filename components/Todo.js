import React from 'react';
import { View, Text } from 'react-native';

const Todo = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default Todo;
