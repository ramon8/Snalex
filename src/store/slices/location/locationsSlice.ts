import { createSlice } from '@reduxjs/toolkit'
import { localizationCards } from '../../../mocks/card.mock'
import { LocationsState } from './locationSlice.interface'
import * as reducers from './locationSlice.reducers'

const initialState: LocationsState = {
    locations: [
        {
            id: 'l_1',
            name: 'Location 1',
            oponentPoints: 0,
            playerPoints: 0,
            oponentCards: [],
            playerCards: [],
        }, {
            id: 'l_2',
            name: 'Location 2',
            oponentPoints: 0,
            playerPoints: 0,
            oponentCards: [],
            playerCards: [],
        }, {
            id: 'l_3',
            name: 'Location 3',
            oponentPoints: 0,
            playerPoints: 0,
            oponentCards: [],
            playerCards: [],
        }
    ]
}

export const counterSlice = createSlice({
    name: 'world',
    initialState,
    reducers,
})

// Action creators are generated for each case reducer function
export const { setOponentPoints, setPlayerPoints, pushInOponentCards, pushInPlayerCards } = counterSlice.actions

export default counterSlice.reducer