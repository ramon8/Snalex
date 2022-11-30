import { createSlice } from '@reduxjs/toolkit'
import { PlayerState } from './playerSlice.interface'
import * as reducers from './playerSlice.reducers';

const initialState: PlayerState = {
    id: 'p_1',
    name: 'Ramon',
    deck: [],
    hand: [],
    mana: 0,
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

export default playerSlice.reducer