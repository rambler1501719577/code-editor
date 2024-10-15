import Vue from 'vue'
var demo = require('./demo.vue')
var CodeEditor = require('../index.js')

Vue.use(CodeEditor)
new Vue({
    el: '#main',
    render: h => h(demo)
})

