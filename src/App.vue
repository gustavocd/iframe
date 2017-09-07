<template>
  <div id="app">
    <div class="container d-flex">
      <div class="row d-flex w-100">
        <div class="col-4">
          <c-control :model="selectedModel" v-if="selectedModel!=null"></c-control>
        </div>
        <div class="col-8">
          <c-iframe ref="iframe" :model="model"></c-iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CIframe from './components/Iframe'
import CControl from './components/Control'

export default {
  name: 'app',
  components: {
    CIframe,
    CControl
  },
  computed: {
    model () {
      return this.$root.model
    },
    selectedModel(){
      return this.$root.selectedModel;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
