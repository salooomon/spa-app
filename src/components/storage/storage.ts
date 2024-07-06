import {
    ActionReducerMapBuilder,
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
    PayloadAction, SliceSelectors
} from "@reduxjs/toolkit";
import {IResponseAuth, IState, IUser} from "../interface/interface";
import axios from "axios";

const baseURL = 'https://test.v5.pryaniky.com';

const dataAdapter = createEntityAdapter();
// Исходный объект состояния
const initialState : IState = dataAdapter.getInitialState({
    loadingStatus: 'loading',
    error: null,
    user: {
        username: '',
        password: ''
    },
    token: ''
})
// Запрос на авторизацию, получение токена
export const postUser = createAsyncThunk(
    'post/user',
    async (user: IUser) => {
        const toJson = JSON.stringify(user)
        const response = await axios.post(`${baseURL}/ru/data/v3/testmethods/docs/login`, toJson, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return await response.data
    }
)



const storageReducer = createSlice<IState,{},"storage",SliceSelectors<IState>,"storage">({
    name: 'storage',
    initialState,
    reducers: {

    },
    extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
        builder
            .addCase(postUser.pending, (state: IState) => {
                state.loadingStatus = 'loading',
                state.error = null
            })
            .addCase(postUser.fulfilled, (state: IState, action: PayloadAction<IResponseAuth>) => {
                console.log(action.payload),
                state.loadingStatus = 'loaded',
                state.token = action.payload.data.token,
                state.error = null
            })
            .addCase(postUser.rejected, (state: IState, action: PayloadAction<IResponseAuth>) => {
                state.loadingStatus = 'failed',
                state.error = action.payload.error_message
            })
    }
})

export default storageReducer.reducer