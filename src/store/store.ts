import { configureStore } from '@reduxjs/toolkit'
import world from './slices/world/worldSlice'
import participants from './slices/player/playerSlice'
import locations from './slices/location/locationsSlice'
import game from './slices/game/gameSlice'

export const store = configureStore({
    reducer: {
        world,
        locations,
        game,
        ...participants,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch