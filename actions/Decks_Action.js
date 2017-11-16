export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'

export function getDecks (decks) {
  return {
    type: GET_DECKS,
    decks
  }
};

export function addDeck (deckName) {
  return {
    type: ADD_DECK,
    deckData: deckName
  }
};
