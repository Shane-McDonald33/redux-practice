// import { createSlice, configureStore } from '@reduxjs/toolkit';

// const counterInitialState = { counter: 0, showCounter: true};

// const counterSlice = createSlice({
//     name: 'counter',
//     initialState: counterInitialState,
//     reducers: {
//         increment(state) {
//             state.counter++
//         },
//         decrement(state) {
//             state.counter--
//         },
//         increase(state, action) {
//             state.counter = state.counter + action.payload
//         },
//         toggle(state) {
//             state.showCounter = !state.showCounter
//         }
//     }
// });

// const authInitialState = { isAuthed: false};

// const authSlice = createSlice({
//     name: 'auth',
//     initialState: authInitialState,
//     reducers: {
//         login(state) {
//             state.isAuthed = true
//         },
//         logout(state) {
//             state.isAuthed = false
//         }
//     }
// });

// const store = configureStore({
//     reducer: { counter: counterSlice.reducer, auth: authSlice.reducer}
// });

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
// export default store;

import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterInitialState = { counter: 0, showCounter: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
});

const authInitialState = { isAuthed: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.login = true
        },
        logout(state) {
            state.logout = false
        }
    }
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;