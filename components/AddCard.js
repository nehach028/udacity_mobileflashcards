import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, KeyboardAvoidingView,TextInput, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { white, teal, lightTeal, silver } from '../utils/colors' 
import { connect } from 'react-redux'
import { addCardToDeck}  from '../utils/api'
import { addCard } from '../actions' 

class AddCard extends React.Component{
  state = {
    question : '',
    answer : '',
    disabled : true
  }
  submitCard = (title)=>{
    const { question, answer } = this.state
    const { navigation } = this.props
    
    this.props.dispatch(addCard({ question, answer, title}))
    addCardToDeck(title,{ question, answer })
    this.setState({
        question : '',
        answer : '',
        disabled :  true
        
    })
    navigation.dispatch(NavigationActions.back({key : null}))
  }
  render(){
    const deckTitle = this.props.navigation.state.params.entryId
    const buttonDisable = (
            <TouchableOpacity style={ styles.diableButton} >
                <Text style= {{fontSize : 20,color: white}}>Submit</Text>
            </TouchableOpacity>
        );
    const button = this.state.disabled
        ? buttonDisable
        : (
            <TouchableOpacity disabled= {this.state.disabled}
              style={Platform.OS==='ios'? styles.iosSubmitBtn :styles.andriodSubmitBtn }
              onPress={()=>this.submitCard(deckTitle)}
            >
              <Text style= {styles.submitBtnText}>Submit</Text>
            </TouchableOpacity>
        );
    return (
      <KeyboardAvoidingView  behaviour = 'padding ' style = {styles.container}>
        <View style = {styles.container} >
          <Text style= {styles.title}>Question</Text>
          <TextInput style= {styles.inputText}
                    onChangeText = {(question)=>this.setState({question,disabled: false })}
                    value= {this.state.question}
                    placeholder = "Enter your question.">
          </TextInput>
          <TextInput style= {styles.inputText}
                    onChangeText = {(answer)=>this.setState({answer, disabled: false})}
                    value= {this.state.answer} 
                    placeholder = "Enter your Answer.">
          </TextInput>
          {button}
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
  submitBtnText : {
    color : white,
    textAlign : 'center',
    fontSize : 20,
  },
  title : {
    fontSize : 30,
      color : teal,
  },
  iosSubmitBtn:{
    backgroundColor: teal,
    padding: 10,
    borderRadius: 7,
    borderColor : lightTeal,
    borderWidth : 0.5,
    height: 45,
    marginLeft: 5,
    marginRight: 5,
    width : 170,
    overflow : 'hidden'
  },
  andriodSubmitBtn:{
    backgroundColor: teal,
    padding: 10,
    borderRadius: 7,
    borderColor : lightTeal,
    borderWidth : 0.5,
    height: 45,
    width : 170,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow : 'hidden'
  },
  inputText : {
    width : 250,
    height : 40,
    padding : 8,
    borderWidth : 1,
    borderColor : teal,
    borderRadius :7,
    margin : 20,
  },
  diableButton :{
    backgroundColor: silver,
    padding: 10,
    borderRadius: 7,
    borderColor : silver,
    borderWidth : 0.5,
    height: 45,
    width : 170,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow : 'hidden'
  }
});

export default connect()(AddCard)