import { LocationsState, SetPointsPayload } from './locationSlice.interface'

export const setOponentPoints = (state: LocationsState, { payload: { locationIndex, ammount } }: SetPointsPayload) => { state.locations[locationIndex].oponentPoints = ammount }

export const setPlayerPoints = (state: LocationsState, { payload: { locationIndex, ammount } }: SetPointsPayload) => { state.locations[locationIndex].playerPoints = ammount }