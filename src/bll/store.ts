import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {NewsReducer, NewsReducerActionType} from "bll/reducer/news-reducer";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {useDispatch} from "react-redux";
import {AppReducer, AppReducerActionType} from "bll/reducer/appReducer";

export const rootReducer = combineReducers({
    newsReducer: NewsReducer,
    appReducer:AppReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>
export type ActionStateType = NewsReducerActionType
|AppReducerActionType
export type AppDispatch = ThunkDispatch<AppStateType,
    undefined,
    ActionStateType>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    undefined,
    ActionStateType>;
// @ts-ignore
window.store = store
