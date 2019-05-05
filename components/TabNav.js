import React, {PureComponent}   from 'react';
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { MaterialCommunityIcons, Ionicons, FontAwesome} from '@expo/vector-icons';
import { Platform } from 'react-native'
import  { white, teal, lightTeal} from '../utils/colors'
import DeckList from './DeckList'
import NewDeck from './NewDeck'
import DeckView from './DeckView'
import AddCard from './AddCard'
import QuizView from './QuizView'

const RouteConfigs =
{
  DeckList:{
    screen: DeckList,
    navigationOptions :{
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintcolor })=><MaterialCommunityIcons name='cards-outline' size={30} color={tintcolor}/>
    },
  },

  NewDeck:{
    screen: NewDeck,
    navigationOptions:{
      tabBarLabel: 'New Deck',
      tabBarIcon:({ tintcolor })=><FontAwesome name= 'plus-square' size={30} color={tintcolor}/>
    },
  },
} 
const TabNavigatorConfig = {
  navigationOptions:{
    header: null
  },
  tabBarOptions: {
    activeTintColor : Platform.OS === 'ios' ? teal : white,
    labelStyle: { fontSize: 25 },
    style : {
      height : 56,
      backgroundColor : Platform.OS === 'ios' ? white  : teal,
      shadowColor : 'rgba(178,216,216)',
      shadowOffset : {
        width: 0,
        height : 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};

const Tabs =  Platform.OS === 'ios' ? createBottomTabNavigator(RouteConfigs,TabNavigatorConfig)
                              : createMaterialTopTabNavigator(RouteConfigs,TabNavigatorConfig)
const MainNavigator = createStackNavigator({
  Home: {
    screen : Tabs,
    navigationOptions: {
      header : null
    }
  },
  DeckView : {
    screen : DeckView,
    navigationOptions: ({navigation})=>({
      title: 'DeckView',
      headerTintColor : white,
      headerStyle : {
        backgroundColor: teal,
      }
    })
  },
  AddCard : {
    screen : AddCard,
    navigationOptions: ({navigation})=>({
      title: 'Add Card',
      headerTintColor : white,
      headerStyle : {
        backgroundColor: teal,
      }
    })
  },
  QuizView : {
    screen : QuizView,
    navigationOptions: ({navigation})=>({
      title: 'Quiz',
      headerTintColor : white,
      headerStyle : {
        backgroundColor: teal,
      }
    })
  }
})                             
const AppContainer = createAppContainer(MainNavigator) 
export class TabNav extends PureComponent{
  render(){
  
    return (
      <AppContainer/>
    )
  }
}
export default TabNav
