// storyResponseType
export type StoryResponseType = {
    by: string
    descendants: number
    kids:number[]
    id: number
    score: number
    time: number
    title: string
    type: string
    url: string
}
// commentResponseType
export type CommentsResponseType={
    by : string,
    id : number,
    kids : number,
    parent :number,
    text : string,
    time : number,
    type :string
}

