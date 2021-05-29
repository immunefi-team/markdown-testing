/* eslint-disable  */
// Instead of grabbing all of remark-gfm, we only want to the autolink feature.
// Code based on https://github.com/remarkjs/remark-gfm/blob/main/index.js
"use strict";

var syntax = require("micromark-extension-gfm-autolink-literal");
var fromMarkdown = require("mdast-util-gfm/from-markdown");
var toMarkdown = require("mdast-util-gfm/to-markdown");

var warningIssued;

module.exports = autolink;

function autolink(options) {
    var data = this.data();

    /* istanbul ignore next - old remark. */
    if (
        !warningIssued &&
        ((this.Parser && this.Parser.prototype && this.Parser.prototype.blockTokenizers) ||
            (this.Compiler && this.Compiler.prototype && this.Compiler.prototype.visitors))
    ) {
        warningIssued = true;
        console.warn("[remark-gfm] Warning: please upgrade to remark 13 to use this plugin");
    }

    add("micromarkExtensions", syntax);
    add("fromMarkdownExtensions", fromMarkdown);
    add("toMarkdownExtensions", toMarkdown(options));

    function add(field, value) {
        /* istanbul ignore if - other extensions. */
        if (data[field]) data[field].push(value);
        else data[field] = [value];
    }
}
