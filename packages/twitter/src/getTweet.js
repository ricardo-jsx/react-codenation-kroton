import getTweetPicture from './getTweetPicture';
import getTweetUser from './getTweetUser';
import getTweetMessage from './getTweetMessage';

export default function getTweet(tweet) {
  const tweetElem = document.createElement('li');
  tweetElem.classList.add('tweet');

  const tweetPicture = getTweetPicture(tweet);
  const tweetUser = getTweetUser(tweet);
  const tweetMessage = getTweetMessage(tweet);

  const div = document.createElement('div');
  div.classList.add('d-flex', 'flex-column');
  div.appendChild(tweetUser);
  div.appendChild(tweetMessage);

  tweetElem.appendChild(tweetPicture);
  tweetElem.appendChild(div);

  return tweetElem;
}
