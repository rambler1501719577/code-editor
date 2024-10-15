'use strict'
const codeEditor = require('./code-editor.vue')
const VueCodeEditor = {
    CodeEditor: codeEditor,
    ExtraComponent: require('./components/extra-component'),
    install: function (Vue) {
        Vue.component('code-editor', codeEditor)
    }
}

module.exports = VueCodeEditor
