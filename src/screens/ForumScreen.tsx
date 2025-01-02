import React, { useEffect } from 'react';
import { View, FlatList, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { likePost, savePost, setPosts } from '../redux/postSlice';
import mockQuestions from '../data/questions.json';

const ForumScreen = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setPosts(mockQuestions));
  }, [dispatch]);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.question}</Text>
          <Button title={`Like (${item.likes})`} onPress={() => dispatch(likePost(item.id))} />
          <Button title={item.saved ? 'Saved' : 'Save'} onPress={() => dispatch(savePost(item.id))} />
        </View>
      )}
    />
  );
};

export default ForumScreen;
