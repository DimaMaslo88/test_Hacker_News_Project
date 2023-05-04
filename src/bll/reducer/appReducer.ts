import {OpenSpinnerType} from "bll/actions/appActions";


export const initialAppState = {
    isOpenSpinner: false,

    };
export type InitialAppStateType = {
    isOpenSpinner: boolean;

};
export type AppReducerActionType= OpenSpinnerType
export const AppReducer =(state:InitialAppStateType=initialAppState,action:AppReducerActionType):InitialAppStateType=>{
    switch (action.type){
        case "app/OPEN-SPINNER":{
            return {...state,isOpenSpinner:action.open}
        }
        default:{
            return state
        }

    }
}
