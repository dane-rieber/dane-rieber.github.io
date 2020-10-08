var nextTweetId = 1;

function appendTweet(interestId) {
    var tweet = $(`<div class="card m-2" id="tweet${nextTweetId}"><button type="button" class="btn btn-danger add-tweet-button ml-auto mr-2 mt-2" onclick="deleteTweet('tweet${nextTweetId}')">-</button><img class="card-img-top p-2 m-auto" style="width: 100px;" src="twitter-logo.jpg" alt="Twitter logo"><div class="card-body"><h5 class="card-title">Tweet</h5><p class="card-text">Sample tweet will go here!</p></div></div>`);
    nextTweetId++;
    tweet.appendTo(interestId);
}

function deleteTweet(tweetId) {
    document.getElementById(tweetId).remove();
}