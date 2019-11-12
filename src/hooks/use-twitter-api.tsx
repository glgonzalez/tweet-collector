import React, {useEffect, useState} from 'react';

export const useTwitterApi = () => {
  const [tweets, setTweets] = useState();

  const getTweets = async() => {
    try {
      const response = await fetch('/tweets');
      const data = await response.json();
      setTweets(data.tweets.statuses);
    } catch (e) {
      setTweets(() => {throw e});
    }
  };

  useEffect(() => {
    getTweets();
  }, []);

  return tweets;
}