import {useEffect, useRef, useState} from 'react';
import {Animated, TouchableOpacity, View, Text} from 'react-native';
import {storyStyle} from '../styles/storyStyle';

export default function Accordion(props) {
  const openAnim = useRef(new Animated.Value(0)).current;
  const story = {
    id: props.id,
    title: props.title,
    content: props.content,
  };

  const openContent = () => {
    Animated.timing(openAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(({finished}) => {
      setTimeout(() => {
        Animated.timing(openAnim, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }).start();
      }, 8000);
    });
  };

  return (
    <>
      <TouchableOpacity style={storyStyle.storyContainer} onPress={openContent}>
        <Text style={storyStyle.storyContainer}>{story.title}</Text>
        <Animated.View style={[storyStyle.storyContainer, {opacity: openAnim}]}>
          <Text style={storyStyle.storyContentContainer}>{story.content}</Text>
        </Animated.View>
      </TouchableOpacity>
    </>
  );
}
