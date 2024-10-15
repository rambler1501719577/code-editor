<template>
    <div>this seems to be the component</div>
</template>

<script>
import markdown from './lib/mixins/markdown.js'

export default {
    name: 'CodeEditor',
    mixins: [markdown],
    props: {},
    data() {
        return {}
    },
    created() {},
    mounted() {},
    beforeDestroy() {},
    getMarkdownIt() {
        let mdIt = this.mixins[0].data().markdownIt
        if (!mdIt) {
            mdIt = initMarkdown()
        }
        return mdIt
    },
    methods: {},
    watch: {},
    components: {}
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>

