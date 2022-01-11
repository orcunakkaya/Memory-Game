import { createSlice } from '@reduxjs/toolkit';
import data from '../data/CardDescription';

export const CardSlice = createSlice({
    name: "card",
    initialState: {
        cards: [],
        choises: [],
        gameStart: false,
        score: 0,
        matchCounter: 0
    },
    reducers: {
        setCardsDescription: (state) => {
            state.cards = [...data, ...data].sort(() => Math.random() - 0.5)
            
        },
        changeChoise: (state, action) => {
            state.cards[action.payload].choise = true
            state.choises = [...state.choises, action.payload]
        },
        checkMatch: (state) => {
            if (state.cards[state.choises[0]].name === state.cards[state.choises[1]].name) {
                state.cards[state.choises[0]].equal = true;
                state.cards[state.choises[1]].equal = true;
                state.score = state.score + 50;
                state.matchCounter = state.matchCounter + 1;
            } else {
                state.cards[state.choises[0]].choise = false;
                state.cards[state.choises[1]].choise = false;
                state.score = state.score - 10;
            }
            state.choises = [];
        },
        startGame: (state) => {
            state.gameStart = !state.gameStart;
            state.cards.forEach(card => {      
                    card.choise = false;
                    card.equal = false;
            })
            state.score = 0;
            state.matchCounter = 0;
        },
        startGameTurnCard: (state) => {
            state.cards.map(card => (
                card.choise = !card.choise
            ))
        },
        closeModal: (state) => {
            state.matchCounter = 0
        },
        newGame: (state) => {
            state.matchCounter = 0
            state.gameStart = true
            state.score = 0

        }
    }
})

export const { setCardsDescription, changeChoise, checkMatch, startGame, startGameTurnCard, closeModal, newGame } = CardSlice.actions;
export default CardSlice.reducer;