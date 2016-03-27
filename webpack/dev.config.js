require('babel-polyfill');

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var root = path.join(__dirname, "..")

var babelrc = fs.readFileSync(path.join(root, '/.babelrc'));
var babelrcObj = {};

try {
    babelrcObj = JSON.parse(babelrc);
} catch (err) {
    console.log('==>    ERROR: Error parsing your .babelrc.');
    console.log(err)
}


module.exports = {
    
    context: root,
    
    entry: [
        "webpack-hot-middleware/client",
        "./src/index"
    ],

    output: {
        path: path.join(root, 'src'),
        filename: "bundle.js",
        publicPath: '/'
    },

    resolve: {
        extensions: ['', '.jsx', '.js', '.json', '.scss']
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css?localIdentName=[path][name]--[local]!postcss-loader!sass" },
            { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/, query: {'presets': babelrcObj.presets} }
        ]
    },

    plugins: [
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
