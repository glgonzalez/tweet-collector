const Twitter = require('twitter');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const client = new Twitter({
  consumer_key: 'K6bAvWVbtN8ezBiGuVFEKN5pP',
  consumer_secret: 'm1NW4rbfTcZ9C1tIGiON9rhyAoX9ckI4Tic6LH6DDwSIhDWFK7',
  access_token_key: '505445096-N8tizz0oov71zMHsn8bJl7d8KAYAYsmy8438HJBv',
  access_token_secret: 'xn4fSFgncHFDJEh9RJi6oBUfZfK8VEPkSDweH5pMIFJoZ'
})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/tweets', async (req, res) => {
  try {
    const tweets = await client.get('search/tweets', {q: '#IoT', count: 100, lang: 'en', result_type: 'recent'});
    res.status(200).send({
      status: 200,
      tweets: tweets
    });
  } catch(e) {
    res.status(500).send({
      status: 500,
      error: e.message
    });
  }
});