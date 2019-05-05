import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput,TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux'
import FlashcardBtn from './FlascardButton'
import { white, gray, teal, lightTeal, silver, orange} from '../utils/colors'

class DeckView extends React.Component{
  render(){
    const deck = this.props.navigation.state.params.entryId
    const { decks }= this.props
    const totalQuestions = decks[deck].questions.length
    const buttonDisable = (
            <TouchableOpacity style={ styles.diableButton} >
                <Text style= {{fontSize : 20,color: white}}>Submit</Text>
            </TouchableOpacity>
          );
    const startQuizButton = 
            totalQuestions === 0 ? buttonDisable : 
            (
            <TouchableOpacity 
              style={[Platform.OS==='ios'? styles.iosSubmitBtn :styles.andriodSubmitBtn,{ backgroundColor : 'orange'}]} 
              onPress = { () => this.props.navigation.navigate('QuizView', { entryId:deck})}>                                    
              <Text style = { styles.submitBtnText} >
                Start Quiz 
              </Text>
            </TouchableOpacity>
            );
    return (
      <View style= {styles.container}>
        <View style = {styles.card}>
          <Text style= {styles.title}>{decks[deck].title}</Text>
          <Text style= {styles.subTitle}>{totalQuestions} cards</Text>
          <TouchableOpacity 
            style={[Platform.OS==='ios'? styles.iosSubmitBtn :styles.andriodSubmitBtn,{ backgroundColor : 'teal'}] } 
            onPress = { () => this.props.navigation.navigate('AddCard', { entryId:deck})}>
            <Text style ={ styles.submitBtnText} >Add Card</Text>
          </TouchableOpacity>
          { startQuizButton }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch' ,
    backgroundColor : white,
    padding : 10,
  },
  iosSubmitBtn:{
    backgroundColor: teal,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 5,
    marginRight: 5,
    marginTop : 10,
    width : 170,
  },
  andriodSubmitBtn:{
    backgroundColor: teal,
    padding: 10,
    borderRadius: 7,
    height: 45,
    width : 170,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText : {
    color: white,
    fontSize : 20,
    textAlign : 'center',
  },
  diableButton :{
    backgroundColor: silver,
    padding: 10,
    borderRadius: 7,
    borderColor : silver,
    height: 45,
    width : 170,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  card : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : white,
    margin : 8,
    height : 200,
    borderRadius: 10,
    borderColor: teal,
    shadowRadius : 4,
    shadowOpacity : 0.8,
    shadowColor : teal,
    shadowOffset :{
      width : 0,
      height : 3,
    }
  },
  title : {
    fontSize : 40,
    color : teal
  },
   subTitle : {
    fontSize : 30,
    color : teal,
    marginBottom : 50,
  }
  
})
function mapStateToProps(decks){
  return {
    decks
  }
}
export default connect(mapStateToProps)(DeckView);