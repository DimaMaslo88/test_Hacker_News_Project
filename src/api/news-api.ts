import {instance} from "api/instance";
import {CommentsResponseType, StoryResponseType} from "api/types/types";

export const NewsApi = {
    getStoryId() {
        return instance.get(`newstories.json`)
    },
    getTopStories(){
        return instance.get('topstories.json')
    },
    getStory(storyId:number){
        return instance.get<StoryResponseType>(`item/${storyId}.json`)
    },
    getComments(id:number){
        return instance.get<CommentsResponseType>(`item/${id}.json`)
    }
}
