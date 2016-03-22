import http from 'http';

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const root = __dirname;
const config = require(path.join(root, "config"));
const host = config.host;
const port = config.port;

(function init_webpack () {

    const webpack = require('webpack');
    const webpackConfig = require(path.join(root, "/webpack/dev.config.js"));
    const devMiddleware = require('webpack-dev-middleware');
    const hotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);

    let serverOptions = {
        contentBase: 'http://' + host + ':' + port,
        quiet: true,
        noInfo: true,
        hot: true,
        inline: true,
        lazy: false,
        publicPath: webpackConfig.output.publicPath
    };

    app.use(devMiddleware(compiler, serverOptions));
    app.use(hotMiddleware(compiler));

    app.use(express.static(path.join(root, 'src')));
})();

app.get(/.*/, function root(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

const server = http.createServer(app);
server.listen(port, function onListening(err) {
    if (err) {
        console.error(err);
    } else {
        console.info('==> 💻  Open http://%s:%s in a browser to view the app.', host, port);
    }
});