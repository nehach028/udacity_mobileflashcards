import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { fetchDecks } from '../actions'
import { getDecks } from '../utils/api' 
import { connect } from 'react-redux';
import { white, gray, teal, lightTeal, silver, orange} from '../utils/colors'
import QuizButton from './QuizButton'
import FlipCard from 'react-native-flip-card'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers'
class QuizView extends React.Component {
  
  state = {
    index : 0,
    showQuestion : false,
    correctCount : 0
  }
  showAnswer = ()=>{
    const { showQuestion} = this.state
    !showQuestion ? this.setState ({ showQuestion : true}) : this.setState({showQuestion : false})
  }
  submitAnswer = (text) =>{
    const deck = this.props.navigation.state.params.entryId
    const { decks }= this.props
    const { correctCount,index} = this.state
    const totalQuestion = decks[deck].questions.length
    this.setState({index : index+1})
    if( text === "correct"){
      this.setState({correctCount :correctCount+1})
    }
    clearLocalNotification()
      .then(setLocalNotification)
  }
  restartQuiz = ()=>{
    this.setState({
      index : 0,
      showQuestion : false,
      correctCount : 0
    })
  }

  render(){
    const deck = this.props.navigation.state.params.entryId
    const { decks }= this.props
    const { index,correctCount } = this.state
    const questionCount = index+1
    const totalQuestion = decks[deck].questions.length
    
    if( totalQuestion === index){
      return(
      <View style = { styles.container} > 
          <View style={ styles.card}>
            <Text style={styles.title}>Hey!Your total Score is : {correctCount} out of {totalQuestion} </Text>
            <TouchableOpacity 
              style={[ Platform.OS==='ios'? 
              styles.iosSubmitBtn :styles.andriodSubmitBtn,styles.btnGreen] } 
              onPress = { () => this.restartQuiz()}>
              <Text style ={ styles.submitBtnText} >Restart Quiz</Text>
            </TouchableOpacity>
          
            <TouchableOpacity 
              style={[Platform.OS==='ios'? 
              styles.iosSubmitBtn :styles.andriodSubmitBtn, styles.btnOrange ] } 
              onPress={() => { this.props.navigation.goBack() }}>
              <Text style = { styles.submitBtnText} >
                Back to Deck
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }else {
    return (
    
    <View style = { styles.container} > 
      <FlipCard style={styles.card}
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
    
    >
      {/* Face Side */}
      <View style={[ Platform.OS === 'ios' ? styles.iosFlipCard : styles.andriodFlipCard]}>

        <Text style={ styles.count} >{questionCount}/{decks[deck].questions.length}</Text>
        <Text style={ styles.title }>{decks[deck].questions[index].question}</Text>    
        <Text style={styles.answer}>Show Answer</Text>
      </View>
      {/* Back Side */}
      <View style={[ Platform.OS === 'ios' ? styles.iosFlipCard : styles.andriodFlipCard]}>
      
        <Text style={ styles.count} >{questionCount}/{decks[deck].questions.length}</Text>
        <Text style={ styles.title }>{decks[deck].questions[index].answer}</Text>       
        <Text style={styles.answer}>Show Question</Text>
        
        <TouchableOpacity 
          style={[ Platform.OS==='ios'? 
          styles.iosSubmitBtn :styles.andriodSubmitBtn,styles.btnGreen] } 
          onPress = { () => this.submitAnswer("correct")} >
          <Text style ={ styles.submitBtnText} >Correct</Text>
        </TouchableOpacity>
              
        <TouchableOpacity 
          style={[Platform.OS==='ios'? 
          styles.iosSubmitBtn :styles.andriodSubmitBtn, styles.btnOrange ] } 
          onPress = { () => this.submitAnswer("incorrect")}>
          <Text style = { styles.submitBtnText} >
            Incorrect 
          </Text>
        </TouchableOpacity>
      </View>
    </FlipCard>
  </View>    
  ) 
  }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch' ,
    backgroundColor : white,
    padding : 10,
    marginLeft : 15,
  },
   iosSubmitBtn:{
    padding: 10,
    borderRadius: 7,
    borderColor : gray,
    height: 45,
    marginLeft: 5,
    marginRight: 5,
    marginTop : 10,
    width : 170,
  },
  andriodSubmitBtn:{
    padding: 10,
    borderRadius: 7,
    height: 45,
    width : 170,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGreen :{
    backgroundColor : teal,
  },
  btnOrange :{
    backgroundColor : orange,
  },
  card : {
    flex :1,
    justifyContent : 'center',
    alignItems : 'center',
    alignSelf: 'stretch' ,
    backgroundColor : white,
    margin : 8,
    marginLeft :10,
    height : 500,
    width: 320,
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
  iosFlipCard: {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : white,
    margin : 8,
    height :450,
    width:300,
    
  },
  andriodFlipCard :{
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : white,
    margin : 8,
    height :450,
    width:300,
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
    fontSize : 25,
    color : teal,
    left: 5,
    marginRight : 5,
    marginTop: 5,
    
  },
  count :{
    top : 0,
    left : 0,
    color : teal,
    fontSize : 20,
    margin : 5,
    position :'absolute',
    alignSelf : 'flex-start'
  },
  answer :{
    color : orange,
    fontSize : 20,
    margin : 20,
  },
  submitBtnText : {
    color: white,
    fontSize : 25,
    textAlign : 'center',
  },
})
function mapStateToProps(decks){
  return {
    decks
  }
}
export default connect(mapStateToProps)(QuizView)