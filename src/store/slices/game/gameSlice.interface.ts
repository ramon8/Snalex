import { PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../../interfaces";

export interface GameState {
    cardDragging: Card | null
    selectedCard: Card | null
}

export interface SetCardDragging {
    card: Card | null
}

export interface setSelectedCard {
    card: Card | null
}

export type SetCardDraggingPayload = PayloadAction<SetCardDragging>
export type SetSelectedCardPayload = PayloadAction<setSelectedCard>