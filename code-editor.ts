import { Component } from 'vue'
interface VueCodeEditor {
    markdownIt: any
    mavonEditor: Component
    LeftToolbar: Component
    RightToolbar: Component
    install: (Vue: any) => any
}
declare let editor: VueCodeEditor
export default editor

