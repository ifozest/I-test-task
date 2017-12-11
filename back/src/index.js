const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const bodyParser = require('body-parser');

const config = require('../../webpack.config');

const rp = require('request-promise');


const compiler = webpack(config);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
});

app.use(webpackHotMiddleware(compiler));
app.use(devMiddleware);


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

/**
 * Send request to create shorten url and then send request to retrieve stats
 */
app.post('/api/shorten', (req, res) => {
  const { url } = req.body;
  createLink(url).then(getStats).then((link) => {
    res.json(link);
  }).catch((error) => {
    res.status(500).send(error);
  });
});


app.get('*', (req, res) => {
  // Get the index.html from the fileSystem
  const htmlBuffer = devMiddleware.fileSystem.readFileSync(`${config.output.path}/index.html`);
  res.send(htmlBuffer.toString());
});

app.listen(3000, () => console.log('On port 3000!'));
