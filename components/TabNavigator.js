import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { MaterialCommunityIcons, Ionicons, FontAwesome} from '@expo/vector-icons';
import { Platform } from 'react-native'
const RouteConfigs =
{
  DeckList:{
    screen: DeckList,
    navigationOptions :{
      tabBarLabel: 'DeckList',
      tabBarIcon: ({ tintcolor  })=><Ionicons name='ios-bookmarks' size={30} color={tintcolor}/>
    },
  },

  NewDeck:{
    screen: NewDeck,
    navigationOptions:{
      tabBarLabel: 'Add Entery',
      tabBarIcon:({ tintcolor })=><FontAwesome name= 'plus-square' size={30} color={tintcolor}/>
    },
  },
} 
const TabNavigatorConfig = {
  navigationOptions:{
    header: null
  },
  tabBarOptions: {
    activeTintColor : Platform.OS === 'ios' ? purple : white,
    style : {
      height : 56,
      backgroundColor : Platform.OS === 'ios' ? white  : purple,
      shadowColor : 'rgba(0,0,0,0.24)',
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



