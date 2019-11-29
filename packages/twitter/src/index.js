import getTweet from './getTweet';
import tweets from './tweets';
import { addListener, handleSubmit, handleChange } from './search';

function addTweetsTo(selector) {
  for (let tweet of tweets) {
    document.querySelector(selector).appendChild(getTweet(tweet));
  }
}

addTweetsTo('#tweets');

document.querySelector('#search-form').addEventListener('submit', handleSubmit);
document.querySelector('#search-input').addEventListener('change', handleChange);

addListener('onsubmit', function (search) {
  console.log(search);
});
