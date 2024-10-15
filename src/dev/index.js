import Vue from 'vue';
var demo = require('./demo.vue');
var sMd = require('../index.js');

Vue.use(sMd);
new Vue({
  el: '#main',
  render: (h) => h(demo)
});
