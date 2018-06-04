//defining YoutubeVideo class
var YoutubeVideo = /** @class */ (function () {
    //constructor
    function YoutubeVideo(videoTitle, description, views, likes, dislikes, comments) {
        var _this = this;
        //methods
        this.getVideoLikes = function () {
            return " this video has " + _this.likes + " Likes.";
        };
        this.getNumberofViews = function () {
            return " this video has " + _this.views + " Views.";
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.videoTitle = videoTitle;
        this.description = description;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
    }
    return YoutubeVideo;
}());
//object is created of above class
var firstVideo = new YoutubeVideo("Diet video", "Full day diet video", 45, 35, 5, "Nice video");
var secondVideo = new YoutubeVideo("Dhoom Song", "This is the description of dhoom video", 1021, 455, 123, "Excellent song");
console.log(firstVideo.getVideoLikes());
console.log(firstVideo.getNumberofViews());
console.log(firstVideo.getComments());
console.log(secondVideo.getNumberofViews());
