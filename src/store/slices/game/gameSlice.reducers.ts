import { GameState, SetCardDraggingPayload, SetSelectedCardPayload } from './gameSlice.interface'

export const setCardDragging = (state: GameState, { payload: { card } }: SetCardDraggingPayload) => { state.cardDragging = card }
export const setSelectedCard = (state: GameState, { payload: { card } }: SetSelectedCardPayload) => { state.selectedCard = card }
