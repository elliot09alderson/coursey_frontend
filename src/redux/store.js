import {configureStore} from '@reduxjs/toolkit'
import {userReducer} from './reducers/userReducer.js'
const store  = configureStore({
    reducer:{
        user:userReducer
    }
})

export const server = "https://sanusolar.onrender.com/api/v1"
export default store