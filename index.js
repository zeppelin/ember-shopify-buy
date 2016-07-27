/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-shopify-buy',

  init: function() {
    this._super.init && this._super.init.apply(this, arguments);

    this.treePaths['vendor'] = 'node_modules';
  },

  included: function(app) {
    app.import('vendor/shopify-buy/dist/shopify-buy.polyfilled.amd.js');
  }
};
