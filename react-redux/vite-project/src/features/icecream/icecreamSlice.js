const { cakeActions } = require('../cake/cakeSlice');
import { ordered as cakeOrdered } from '../cake/cakeSlice';

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    numOfIcecreams: 10
}
const icecreamSlice = createSlice({
    name: 'icecream', 
    initialState,
    reducers: {
        ordered: state => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        },
       
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--
        })
    }
})
export default icecreamSlice.reducer
export const {ordered, restocked} = icecreamSlice.actions
