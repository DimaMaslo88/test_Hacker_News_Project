import {CommentsResponseType, StoryResponseType} from "api/types/types";

export type SetStoryIdType = ReturnType<typeof setStoryId>
export const setStoryId = (id:number[])=>({
        type:"news/SET-NEWS",
        id
    }as const)

export type SetStoryType = ReturnType<typeof setStory>
export const setStory = (params:StoryResponseType[])=>({
    type:"news/SET-STORY",
   params
}as const)

export type SetCommentType = ReturnType<typeof setComment>
export const setComment = (comments:CommentsResponseType[])=>({
    type:"news/SET-COMMENT",
   comments
}as const)
export type DeleteCommentType = ReturnType<typeof deleteComment>
export const deleteComment = (delComments:[])=>({
    type:"news/DEL-COMMENT",
   delComments
}as const)
export type DeleteStoryType = ReturnType<typeof deleteStory>
export const deleteStory = (delStory:[])=>({
  type:"news/DEL-STORY",
  delStory
}as const)
