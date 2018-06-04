//defining YoutubeVideo class

class YoutubeVideo {
    videoTitle : string;
    description : string;
    views : number;
    likes : number;
    dislikes : number;

    comments : string;

    //constructor
    constructor(videoTitle:string,description:string,views:number,likes:number,dislikes:number,comments:string){
 
        this.videoTitle = videoTitle;
        this.description = description;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
    }

    //methods

    getVideoLikes = ():string =>  {
        return " this video has " + this.likes + " Likes.";
       
    }

    getNumberofViews = ():string =>  {
        return " this video has " + this.views + " Views.";
       
    }

    getComments = ():string => {
        return this.comments;
    }

}

//object is created of above class

let firstVideo = new YoutubeVideo ("Diet video","Full day diet video",45,35,5,"Nice video");

let secondVideo = new YoutubeVideo ("Dhoom Song","This is the description of dhoom video",1021,455,123,"Excellent song");

console.log(firstVideo.getVideoLikes());
console.log(firstVideo.getNumberofViews());
console.log(firstVideo.getComments());

console.log(secondVideo.getNumberofViews());



