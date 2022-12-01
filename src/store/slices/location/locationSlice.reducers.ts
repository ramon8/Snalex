import { LocationsState, PushInOponentCardsPayload, PushInPlayerCardsPayload, SetPointsPayload } from './locationSlice.interface'

export const setOponentPoints = (state: LocationsState, { payload: { locationIndex, ammount } }: SetPointsPayload) => {
    state.locations[locationIndex].oponentPoints = ammount
}
export const setPlayerPoints = (state: LocationsState, { payload: { locationIndex, ammount } }: SetPointsPayload) => {
    state.locations[locationIndex].playerPoints = ammount
}
export const pushInPlayerCards = (state: LocationsState, { payload: { locationIndex, card } }: PushInPlayerCardsPayload) => {
    state.locations[locationIndex].playerCards.push(card);
}
export const pushInOponentCards = (state: LocationsState, { payload: { locationIndex, card } }: PushInOponentCardsPayload) => {
    state.locations[locationIndex].oponentCards.push(card);
}