markdown-code-highlight-loader
--

This is a webpack loader, use [marked](https://github.com/chjj/marked) to translate `*.md` to html, so that you can use in webpage.

And use [highlight.js](https://github.com/isagalaev/highlight.js) to highlight your code when you write in your `*.md`

### [how to use](./example)
  * `npm install markdown-code-highlight-loader --save` in your project

  * in your `webpack.config.js`, write like This

    ```
    module: {
      loaders: [{
        test: /\.md$/,
        loader: "html!markdown-code-highlight"
      }]
    }
    ```

  * or in your js, import like this

  ```
    var html = require('html!markdown-code-highlight!./readme.md')
  ```

  * import css in your webpage

  ```
  require('./index.css');
  ```

### highlight style

If you don't like the style in `index.css`, you can also use [other highlight style](https://github.com/isagalaev/highlight.js/tree/master/src/styles).
