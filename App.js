import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { TabNaigator }  from 'react-navigation'
import { Platform, StatusBar } from 'react-native'
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './reducers'
import { teal } from './utils/colors'
import { setLocalNotification } from './utils/helpers'

import NewDeck from './components/NewDeck';
import DeckList from './components/DeckList';
import TabNav from './components/TabNav';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
// stattus bar 
function FlashCardStatusBar ({backgroundColor,...props}){
  return(
    <View style= {{ backgroundColor, height : Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor = {backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
    
  }
  render() {
    return (
      <Provider store = {createStore(reducer)}>
        <View style={{flex:1}}>
          <FlashCardStatusBar backgroundColor = {teal} barStyle = 'light-content'/>
          <TabNav/>
        </View>
      </Provider>
    )
  }
}
