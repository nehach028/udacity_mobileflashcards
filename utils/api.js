import { AsyncStorage } from 'react-native';

const MOBILE_FLASHCARDS_STORAGE_KEY = 'MobileFlashCard:decks'
const initialData={
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
  Java: {
    title: 'Java',
    questions: [
      {
        question: 'What is Java?',
        answer: 'Java is a high-level programming language and is platform independent.'
      }
    ]
  }
}

export function getData(){
  return initialData;
}

export function getDecks(decks){
  return AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY)
  .then(results=>{
    if(results === null){
      AsyncStorage.setItem(MOBILE_FLASHCARDS_STORAGE_KEY,JSON.stringify(initialData))
      return initialData
    }else{
      return JSON.parse(results)
    }
  })
}

export function saveDeckTitle(title){
  return AsyncStorage.mergeItem(MOBILE_FLASHCARDS_STORAGE_KEY,JSON.stringify(
    {
      [title] : {
        title,
        questions: [],
      }
    }
  ))
}
export const addCardToDeck = (title, card) => {
    return AsyncStorage.getItem(MOBILE_FLASHCARDS_STORAGE_KEY)
        .then(results => {
            return JSON.parse(results)[title]
        })
        .then(data => {
            const {question, answer} = card;
            const questions = data.questions.concat({
                question,
                answer
            })
            AsyncStorage.mergeItem(MOBILE_FLASHCARDS_STORAGE_KEY, JSON.stringify({
                [title]: {
                    title,
                    questions
                }
            }));
        })
}

