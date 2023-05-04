import {
  DeleteCommentType, DeleteStoryType,
  setComment,
  SetCommentType,
  setStory,
  setStoryId,
  SetStoryIdType,
  SetStoryType,
} from 'bll/actions/news-action';
import { AppThunkType } from 'bll/store';
import { NewsApi } from 'api/news-api';
import { openSpinner } from 'bll/actions/appActions';
import { CommentsResponseType, StoryResponseType } from 'api/types/types';


export type NewsReducerActionType = SetStoryIdType
  | SetStoryType
  | SetCommentType
  | DeleteCommentType
  | DeleteStoryType


export const initialState = {
  storiesId: [],
  story: [],
  comments: [],

};

export type InitialStateType = {
  storiesId: number[],
  story: StoryResponseType[],
  comments: CommentsResponseType[]
}


export const NewsReducer = (state: InitialStateType = initialState, action: NewsReducerActionType): InitialStateType => {
  switch (action.type) {
    case 'news/SET-NEWS': {
      return { ...state, storiesId: action.id };
    }
    case 'news/SET-STORY': {
      return { ...state, story: [...state.story, ...action.params] };
    }
    case 'news/SET-COMMENT': {
      return { ...state, comments: [...state.comments, ...action.comments] };
    }
    case 'news/DEL-COMMENT': {
      return { ...state, comments: action.delComments };
    }
    case 'news/DEL-STORY': {
      return { ...state, story: action.delStory };
    }

    default: {
      return state;
    }
  }
};
export const GetStory = (id: number): AppThunkType => async (dispatch) => {
  dispatch(openSpinner(true));
  try {
    const res = await NewsApi.getStory(id);
    dispatch(setStory([res.data]));
    console.log(res.data, 'RESPONSE');
  } catch (error) {
    console.log('Error');
  } finally {
    dispatch(openSpinner(false));
  }
};


export const GetStoryId = (): AppThunkType => async (dispatch) => {
  dispatch(openSpinner(true));
  try {
    const { data } = await NewsApi.getStoryId();
    const res = data.slice(0, 100);
    dispatch(setStoryId(res));
    console.log('Test');
  } catch (error) {
    console.log('Error');
  } finally {
    dispatch(openSpinner(false));
  }


};
export const GetTopStories = (): AppThunkType => async (dispatch) => {
  dispatch(openSpinner(true));
  try {
    const { data } = await NewsApi.getTopStories();
    const res = data.slice(0, 50);
    dispatch(setStoryId(res));

    console.log(res.data);
  } catch (error) {
    console.log('Error');
  } finally {
    dispatch(openSpinner(false));
  }


};


export const GetComments = (id: number): AppThunkType => async (dispatch) => {
  dispatch(openSpinner(true));
  try {
    const res = await NewsApi.getComments(id);
    dispatch(setComment([res.data]));
    console.log(res.data, 'RESDATA');
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(openSpinner(false));
  }
};






