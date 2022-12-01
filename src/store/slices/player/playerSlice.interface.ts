import type { PayloadAction } from '@reduxjs/toolkit'
import { Card } from "../../../interfaces";

export interface PlayerState {
    id: string;
    name: string;
    mana: number;
    hand: Card[];
    deck: Card[];
}

export interface SetName {
    name: string
}

export interface SetDeck {
    deck: Card[]
}

export interface SetHand {
    hand: Card[]
}

export interface SetMana {
    mana: number
}

export interface RemoveCardFromHand {
    card: Card;
}

export interface RemoveCardFromDeck {
    card: Card;
}

export interface AddCardToHand {
    card: Card;
}

export type SetNamePayload = PayloadAction<SetName>
export type SetDeckPayload = PayloadAction<SetDeck>
export type SetHandPayload = PayloadAction<SetHand>
export type SetManaPayload = PayloadAction<SetMana>
export type RemoveCardFromHandPayload = PayloadAction<RemoveCardFromHand>
export type RemoveCardFromDeckPayload = PayloadAction<RemoveCardFromDeck>
export type AddCardToHandPayload = PayloadAction<AddCardToHand>