import getTweet from './getTweet';
import tweets from './tweets';

for(let tweet of tweets) {
  document.querySelector('#tweets').appendChild(getTweet(tweet));
}
