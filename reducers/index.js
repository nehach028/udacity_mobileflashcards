import { ADD_DECK, GET_DECKS, ADD_CARD_TO_DECK } from '../actions';
import { getData } from '../utils/api';
const initialData = getData();
export default function decks(state = initialData, action) {
  switch (action.type) {
    case ADD_DECK: {
      const { title } = action;
      return {
        ...state,
        [title]: {
          title,
          questions: [],
        },
      };
    }
    case GET_DECKS: {
      const { decks } = action;
      return {
        ...state,
        ...decks,
      };
    }
    case ADD_CARD_TO_DECK: {
      const { question, answer, title } = action.card;
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions, { question, answer }],
        },
      };
    }
    default:
      return state;
  }
}
