import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { fetchDecks } from '../actions'
import { getDecks } from '../utils/api' 
import { connect } from 'react-redux';
import { white, gray, teal, lightTeal, silver, yellow} from '../utils/colors'

class DeckList extends React.Component {
  
  componentDidMount() {
        getDecks()
        .then(decks=>this.props.getAllDecks(decks))
  }
  render() {
    const { decks } = this.props
    return (
      <ScrollView style={styles.container}>
        { Object.keys(decks).map((deck)=>{
          const { title, questions } = decks[deck]
          return(
            <View key={deck} style= { styles.card} >
              <Text style = {styles.cardTitle} >{title}</Text>
              <Text style = {styles.cardTitle}>{questions.length} card</Text>
              <Button style= {styles.cardBtn}
                onPress = {()=> this.props.navigation.navigate('DeckView', {entryId:                    deck})}               
                title = 'View Deck'>
              </Button>
            </View>
          )
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch' ,
    padding : 5,
  },
  card : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : yellow,
    margin : 8,
    height : 200,
    borderRadius: 10,
    borderColor: gray,
    shadowRadius : 4,
    shadowOpacity : 0.8,
    shadowColor : gray,
    shadowOffset :{
      width : 0,
      height : 3,
    }
  },
  cardTitle : {
    fontSize : 30,
    color : gray
  },
  cardBtn : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  }
});
function mapStateToProps(decks){
  return { decks }
}
function mapDispatchToProps( dispatch ){
  return {
        getAllDecks: (decks) => dispatch(fetchDecks(decks))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckList)