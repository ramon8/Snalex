import { createSlice } from '@reduxjs/toolkit'
import { deck } from '../../../mocks/card.mock';
import { PlayerState } from './playerSlice.interface'
import * as reducers from './playerSlice.reducers';

const initialState: PlayerState = {
    id: 'p_1',
    name: 'Ramon',
    deck: deck,
    hand: [deck[deck.length - 1]],
    mana: 1,
}

export const playerSlice = createSlice({
    name: 'world',
    initialState,
    reducers,
})
export const oponentSlice = createSlice({
    name: 'world',
    initialState,
    reducers,
})

// Action creators are generated for each case reducer function
export const playerActions = playerSlice.actions
export const oponentActions = oponentSlice.actions

export default { player: playerSlice.reducer, oponent: oponentSlice.reducer }