import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import { addDeck } from '../actions';
import { connect } from 'react-redux';
import { saveDeckTitle } from '../utils/api'
import { lightTeal,teal, white, silver } from '../utils/colors' 

class NewDeck extends React.Component{
  
  state={
    text: '',
    disabled: true,
  }
  submitNewDeck = ()=>{
    const { text } = this.state
    saveDeckTitle(text)
    this.props.addDeck(text)
    this.props.navigation.navigate('DeckView', { entryId: text})
    this.setState({
      text: '',
      disabled : true
      })
  }
  render(){
    return(
       <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View  style={styles.container}>
          <Text style= { styles.title }>What is the title of your new Deck</Text>
          <TextInput 
            style={styles.textInput}
            onChangeText = {(text)=>this.setState({ text : text, disabled: false})} 
            value = {this.state.text}>
          </TextInput>
          <Button title = "Submit"
                  color = 'teal'  
                  style = { styles.submitBtn}
                  onPress={this.submitNewDeck} >
          </Button>
        </View>
      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' ,
  },
  textInput :{
    height: 44,
    width : 300,
    padding : 8,
    borderWidth : 1,
    margin : 50,
    borderColor: 'lightTeal', 
    borderRadius: 8,
    },
  title :{
    fontSize : 30,
    color : '#333',
    margin : 10,
    textAlign : 'center'
  },
  submitBtn : {
    borderWidth : 0.5,
    borderColor : 'lightTeal',
    padding : 10,
    borderRadius : 7,
    overflow : 'hidden',
    
  },

})
function mapDispatchToProps(dispatch){
  return {
        addDeck: (title) => dispatch(addDeck(title))
    }
}
function mapStateToProps(decks){
  return {
        deckList: Object.keys(decks)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)