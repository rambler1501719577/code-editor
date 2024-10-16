<template>
    <div class="rambler-input-container">
        <div class="codeEditor" id="codeEditor"></div>
    </div>
</template>
<script>
import * as ace from 'ace-builds'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/snippets/json'

export default {
    name: 'JsonEditor',
    model: {
        prop: 'value',
        event: 'change'
    },
    data() {
        return {
            field: '',
            editor: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initEditor()
        })
    },
    props: {
        value: {
            type: Number | Boolean | String | Object
        },
        type: {
            type: String,
            default: 'text'
        },
        fontSize: Number
    },
    watch: {
        // value: function (val) {
        //     if (this.editor) this.editor.session.setValue(val);
        // },
    },
    methods: {
        initEditor: function () {
            //获取控件   id ：codeEditor
            this.editor = ace.edit('codeEditor', {})
            this.editor.setTheme('ace/theme/monokai')
            this.editor.session.setMode('ace/mode/json')
            this.editor.session.setTabSize(4)
            this.editor.session.setUseWorker(false)

            this.editor.session.setValue(this.value)
            this.editor.getSession().on('change', this.toggle)
            this.editor.setOption('fontSize', this.fontSize)
        },
        toggle() {
            this.$emit('change', this.editor.session.getValue())
        },
        setValue(val) {
            this.editor.session.setValue(val)
        },
        getEditor() {
            return this.editor
        }
    }
}
</script>
<style scoped lang="less"></style>

<style lang="stylus" rel="stylesheet/stylus">
.rambler-input-container {
    #codeEditor {
        height: 500px;
    }
}
</style>

