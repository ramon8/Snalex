import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IWorld } from '../../interfaces/World.interface'
import { LocationsState } from './locationSlice.interface'
import * as reducers from './locationSlice.reducers'

const initialState: LocationsState = {
    locations: [
        {
            id: 'l_1',
            name: 'Location 1',
            oponentPoints: 0,
            playerPoints: 0
        }, {
            id: 'l_2',
            name: 'Location 2',
            oponentPoints: 0,
            playerPoints: 0
        }, {
            id: 'l_2',
            name: 'Location 2',
            oponentPoints: 0,
            playerPoints: 0
        }
    ]
}

export const counterSlice = createSlice({
    name: 'world',
    initialState,
    reducers,
})

// Action creators are generated for each case reducer function
export const { setOponentPoints, setPlayerPoints } = counterSlice.actions

export default counterSlice.reducer