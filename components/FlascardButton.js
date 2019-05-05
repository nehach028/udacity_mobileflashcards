import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
const FlashcardButton = ({onPress, styles, text, color})=>{
  return (
    <TouchableOpacity onPress = {onPress} 
                      style= {[styles.submitBtn, { backgroundColor : color}]}>
      <Text style= {styles.submitBtnText}>{text}</Text>
    </TouchableOpacity>
  )
}
export default FlashcardButton