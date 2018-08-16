const path = require('path');
 
module.exports = {
    mode: "development",
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'App.js',
        path: path.resolve(__dirname, './app/temp/scripts')
    } 
};