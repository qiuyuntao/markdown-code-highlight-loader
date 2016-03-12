"use strict";

var marked = require("marked");
var loaderUtils = require("loader-utils");
var assign = require("object-assign");

var cheerio = require('cheerio');
var hl = require('highlight.js');
var highlightAuto = hl.highlightAuto;

// default option
var options = {
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
};

module.exports = function(markdown) {
  var query = loaderUtils.parseQuery(this.query);
  var configKey = query.config || "markdownLoader";
  var options = assign({}, options, query, this.options[configKey]);

  this.cacheable();

  marked.setOptions(options);

  var markdownTpl = marked(markdown);

  this && this.cacheable && this.cacheable();

  var $ = cheerio.load(markdownTpl);

  $('pre code').replaceWith(function(i, block) {
    var $e = $(block);
    var text = $e.text();

    var klass = $e.attr('class') || '';
    var languageType = klass.split('lang-').filter(id);
    if (languageType.length) {
      return highlightAuto(text, languageType).value;
    } else {
      return highlightAuto(text).value;
    }

  });

  $('pre').addClass('hljs');

  return $.html();
};

function id(type) {
  return type;
}
