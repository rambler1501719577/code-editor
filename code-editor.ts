import { Component } from 'vue'
interface VueCodeEditor {
    codeEditor: Component
    install: (Vue: any) => any
}
declare let editor: VueCodeEditor
export default editor

