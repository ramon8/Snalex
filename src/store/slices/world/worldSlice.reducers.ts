import { WorldState } from "./worldSlice.interface"

export const incrementTurn = (state: WorldState) => { state.turn++ }
export const decrementTurn = (state: WorldState) => { state.turn-- }
export const incrementMaxTurns = (state: WorldState) => { state.maxTurns++ }
export const decrementMaxTurns = (state: WorldState) => { state.maxTurns-- }