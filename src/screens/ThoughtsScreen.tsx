import React from 'react';
import { View, FlatList, Text, Button } from 'react-native';

const ThoughtsScreen = () => {
  const thoughts = require('../data/thoughts.json');

  return (<View>
      <FlatList
      data={thoughts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.thought}</Text>
          <Text>{`- ${item.doctor}`}</Text>
          <Button title={`Like (${item.likes})`} onPress={() => {}} />
        </View>
      )}
    />
  </View>
  
  );
};

export default ThoughtsScreen;
