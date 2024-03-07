import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: "root",
    initialState: {
        color: "Color",
        make: "Make",
        model: "Model",
        year: "Year",
    },
    reducers: {
        // action is submitted elsewhere - written to state.color
        chooseColor: (state, action) => { state.color = action.payload }, // All we're doing is setting the input to the state.color
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseColor, chooseMake, chooseModel, chooseYear } = rootSlice.actions