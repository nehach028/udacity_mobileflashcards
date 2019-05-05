import {
    getDecks,
    saveDeckTitle,
    addCardToDeck
} from '../utils/api'

export const ADD_DECK = 'ADD_DECK'
export const GET_DECKS = 'GET_DECKS'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function addDeck(title){
  return {
    type : ADD_DECK,
    title
  }
}
export function addCard(card){
  return {
    type : ADD_CARD_TO_DECK,
    card
  }
}
export const fetchDecks = () => dispatch => (
    getDecks()
        .then(decks => dispatch({
            type: GET_DECKS,
            decks
        }))
);

