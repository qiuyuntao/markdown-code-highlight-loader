var webpack = require('webpack');

// markdown to html
var marked = require("marked");
var renderer = new marked.Renderer();

module.exports = {
  entry: {
    Test: './index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].js' // Template based on keys in entry above
  },
  module: {
    loaders: [{
      test: /\.md$/,
      loader: "html!markdown-code-highlight"
    }, {
      test: /\.css$/,
      loader: "style!css"
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.md']
  }
};
