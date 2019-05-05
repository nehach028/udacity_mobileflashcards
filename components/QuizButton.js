import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function  QuizButton ({onPress, style, text}){
  return (
     <TouchableOpacity onPress= {onPress}>
        <Text style = {style}>{text}</Text>
      </TouchableOpacity>
    
  )
}