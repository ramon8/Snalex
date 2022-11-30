import type { PayloadAction } from '@reduxjs/toolkit'
import { ICard } from "../../interfaces";

export interface PlayerState {
    id: string;
    name: string;
    mana: number;
    hand: ICard[];
    deck: ICard[];
}

export interface SetName {
    name: string
}

export interface SetDeck {
    deck: ICard[]
}

export interface SetHand {
    hand: ICard[]
}

export interface SetMana {
    mana: number
}

export type SetNamePayload = PayloadAction<SetName>
export type SetDeckPayload = PayloadAction<SetDeck>
export type SetHandPayload = PayloadAction<SetHand>
export type SetManaPayload = PayloadAction<SetMana>