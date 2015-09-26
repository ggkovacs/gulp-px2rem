'use strict';

/**
 * Requires
 */
var util = require('gulp-util');
var PluginError = util.PluginError;
var through = require('through2');
var px2rem = require('node-px2rem');

/**
 * PLUGIN_NAME
 * @type {String}
 */
var PLUGIN_NAME = 'gulp-px2rem';

/**
 * Gulp px2rem
 * @param  {Object} options
 * @param  {Object} postCssOptions
 * @return {Object}
 */
function gulpPx2Rem(options, postCssOptions) {
    return through.obj(function(file, enc, cb) {
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return cb();
        }

        try {
            file.contents = new Buffer(px2rem.process(file.contents.toString(), options, postCssOptions));
        } catch (err) {
            this.emit('error', new PluginError(PLUGIN_NAME, err));
        }

        this.push(file);

        cb();
    });
}

module.exports = gulpPx2Rem;
