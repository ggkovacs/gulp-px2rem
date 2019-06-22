'use strict';

const PluginError = require('plugin-error');
const through = require('through2');
const px2rem = require('node-px2rem');

const PLUGIN_NAME = 'gulp-px2rem';

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
      file.contents = Buffer.from(px2rem.process(file.contents.toString(), options, postCssOptions));
    } catch (err) {
      this.emit('error', new PluginError(PLUGIN_NAME, err));
    }

    this.push(file);

    return cb();
  });
}

module.exports = gulpPx2Rem;
