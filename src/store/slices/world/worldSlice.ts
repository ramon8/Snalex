import { createSlice } from '@reduxjs/toolkit'
import { WorldState } from './worldSlice.interface'
import * as reducers from './worldSlice.reducers'


const initialState: WorldState = {
    id: 'w_1',
    maxTurns: 6,
    name: 'World',
    turn: 1,
}

export const counterSlice = createSlice({
    name: 'world',
    initialState,
    reducers,
})

// Action creators are generated for each case reducer function
export const { incrementTurn, decrementMaxTurns, decrementTurn, incrementMaxTurns } = counterSlice.actions

export default counterSlice.reducer