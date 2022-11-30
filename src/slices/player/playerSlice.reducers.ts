import { PlayerState, SetDeckPayload, SetHandPayload, SetManaPayload, SetNamePayload } from "./playerSlice.interface";

export const setName = (state: PlayerState, { payload: { name } }: SetNamePayload) => { state.name = name }
export const setDeck = (state: PlayerState, { payload: { deck } }: SetDeckPayload) => { state.deck = deck }
export const setHand = (state: PlayerState, { payload: { hand } }: SetHandPayload) => { state.hand = hand }
export const setMana = (state: PlayerState, { payload: { mana } }: SetManaPayload) => { state.mana = mana }