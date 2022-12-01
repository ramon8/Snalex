import type { PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../../../interfaces';

export interface Location {
    id: string;
    name: string;
    playerPoints: number;
    oponentPoints: number;
    playerCards: Card[];
    oponentCards: Card[];
}

export interface LocationsState {
    locations: Location[];
}

export interface SetPoints {
    locationIndex: number;
    ammount: number;
}

export interface SetPlayerCards {
    locationIndex: number;
    cards: Card[];
}

export interface SetOponentCards {
    locationIndex: number;
    cards: Card[];
}

export interface PushInPlayerCards {
    locationIndex: number;
    card: Card;
}

export interface PushInOponentCards {
    locationIndex: number;
    card: Card;
}

export type SetPointsPayload = PayloadAction<SetPoints>
export type SetPlayerCardsPayload = PayloadAction<SetPlayerCards>
export type SetOponentCardsPayload = PayloadAction<SetOponentCards>
export type PushInPlayerCardsPayload = PayloadAction<PushInPlayerCards>
export type PushInOponentCardsPayload = PayloadAction<PushInOponentCards>
