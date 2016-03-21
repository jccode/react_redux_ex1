/**
 * Created by jc on 16-3-21.
 */

require('babel-polyfill');

module.exports = Object.assign({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '3000'
});
