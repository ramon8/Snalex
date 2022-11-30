import type { PayloadAction } from '@reduxjs/toolkit'

export interface Location {
    id: string;
    name: string;
    playerPoints: number;
    oponentPoints: number;
}

export interface LocationsState {
    locations: Location[];
}

export interface SetPoints {
    locationIndex: number;
    ammount: number;
}

export type SetPointsPayload = PayloadAction<SetPoints>
