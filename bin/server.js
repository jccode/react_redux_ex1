import Express from 'express';

const fs = require('fs');
const path = require('path');
const app = new Express();

const root = path.join(__dirname, "/..")
const config = require(path.join(root, "config"));

(function init_webpack () {

    const webpack = require('webpack');
    const webpackConfig = require(path.join(root, "/webpack/dev.config.js"));
    const devMiddleware = require('webpack-dev-middleware');
    const hotMiddleware = require('webpack-hot-middleware');
    const compiler = webpack(webpackConfig);
    
    const serverOptions = {
        contentBase: 'http://' + config.host + ':' + config.port,
        quiet: true,
        noInfo: true,
        hot: true,
        inline: true,
        lazy: false,
        publicPath: webpackConfig.output.publicPath,
        headers: {'Access-Control-Allow-Origin': '*'},
        stats: {colors: true}
    };
    
    app.use(devMiddleware(compiler, serverOptions));
    

})();