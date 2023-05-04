import {AppStateType} from "bll/store";
import {CommentsResponseType, StoryResponseType} from "api/types/types";

export const selectNewsId = (state:AppStateType):number[] => state.newsReducer.storiesId
export const selectStory = (state:AppStateType):StoryResponseType[] => state.newsReducer.story
export const selectSpinner = (state:AppStateType):boolean => state.appReducer.isOpenSpinner
export const selectComment = (state:AppStateType):CommentsResponseType[] => state.newsReducer.comments
