<template>
  <iframe @load="loadChildren" class="iframe"></iframe>
</template>

<script>
import Vue from 'vue'
import mComponent from './mComponent'

export default {
  name: 'c-iframe',
  props: {
    model: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      head: undefined,
      body: undefined,
      vueBody: undefined
    }
  },
  methods: {
    loadChildren () {
      var iframe = this.$el;
      var doc = iframe.contentDocument,
        win = iframe.contentWindow,
        head = doc.head,
        body = doc.body;
        this.head = head;
        this.body = body;
      var model = this.model
      var main = this.$root

      this.vueBody = new Vue({
        data: {
          model,
          main
        },
        render(fn) {
          var children = this.model.children.map((child) => {
            return fn(mComponent, {
              props: {
                model: child
              }
            })
          })
          return fn('body', {}, children)
        }
      })

      this.vueBody.$mount(body)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iframe {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
</style>
