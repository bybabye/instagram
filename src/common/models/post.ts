import { UserStory } from "../data/list_stories";


export interface Post {
    id : string,
    user : UserStory,
    isLiked : boolean,
    description : string,
    totalLike : number,
    totalCmt : number,
    image: string,
}