import { createSlice } from '@reduxjs/toolkit'
import { localizationCards } from '../../../mocks/card.mock'
import { GameState, SetCardDraggingPayload } from './gameSlice.interface'
import * as reducers from './gameSlice.reducers'

const initialState: GameState = {
    cardDragging: null,
    selectedCard: null,
}

export const counterSlice = createSlice({
    name: 'game',
    initialState,
    reducers,
})

// Action creators are generated for each case reducer function
export const { setCardDragging, setSelectedCard } = counterSlice.actions

export default counterSlice.reducer