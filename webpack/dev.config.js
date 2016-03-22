require('babel-polyfill');

var fs = require('fs');
var path = require('path');

var root = path.join(__dirname, "/..")

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
    
    entry: "./src/js/index.js",

    output: {
        path: path.join(root, 'src', 'js'),
        filename: "bundle.js",
        publicPath: '/js/'
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/, query: {'presets': babelrcObj.presets} }
        ]
    }
};
