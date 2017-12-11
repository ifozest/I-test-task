const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');


const rp = require('request-promise');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', express.static('dist'));

const createLink = (url) => {
  const options = {
    method: 'POST',
    uri: 'https://impraise-shorty.herokuapp.com/shorten',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url,
    }),
    transform: body => JSON.parse(body),
  };

  return rp(options).then(({ shortcode }) => ({
    shortcode,
    url,
  }));
};

const getStats = (link) => {
  const options = {
    method: 'GET',
    uri: `https://impraise-shorty.herokuapp.com/${link.shortcode}/stats`,
    headers: {
      'Content-Type': 'application/json',
    },
    transform: body => JSON.parse(body),
  };
  return rp(options).then(res => Object.assign({}, res, link));
};


app.post('/api/shorten', (req, res) => {
  const { url } = req.body;
  createLink(url).then(getStats).then((link) => {
    res.json(link);
  }).catch((error) => {
    res.status(500).send(error);
  });
});


app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

app.listen(3000, () => console.log('On port 3000!'));
