import { Card } from "../../../interfaces";
import { AddCardToHandPayload, PlayerState, RemoveCardFromDeckPayload, RemoveCardFromHandPayload, SetDeckPayload, SetHandPayload, SetManaPayload, SetNamePayload } from "./playerSlice.interface";

export const setName = (state: PlayerState, { payload: { name } }: SetNamePayload) => { state.name = name }
export const setDeck = (state: PlayerState, { payload: { deck } }: SetDeckPayload) => { state.deck = deck }
export const setHand = (state: PlayerState, { payload: { hand } }: SetHandPayload) => { state.hand = hand }
export const setMana = (state: PlayerState, { payload: { mana } }: SetManaPayload) => { state.mana = mana }

export const removeCardFromHand = (state: PlayerState, { payload: { card } }: RemoveCardFromHandPayload) => {
    const cardIndex = state.hand.findIndex(({ id }: Card) => card.id === id)
    state.hand.splice(cardIndex, 1);
}
export const addCardToHand = (state: PlayerState, { payload: { card } }: AddCardToHandPayload) => {
    state.hand.push(card);
}
export const removeCardFromDeck = (state: PlayerState, { payload: { card } }: RemoveCardFromDeckPayload) => {
    const cardIndex = state.deck.findIndex(({ id }: Card) => card.id === id);
    state.deck.splice(cardIndex, 1);
}

