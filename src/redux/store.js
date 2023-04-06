import {configureStore} from '@reduxjs/toolkit'
import {userReducer} from './reducers/userReducer.js'
const store  = configureStore({
    reducer:{
        user:userReducer
    }
})

export const server = "https://coursey-backend.vercel.app"
export default store