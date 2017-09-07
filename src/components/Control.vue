<template>
<div class="controls">
  <input type="color"
    @input="setStyle('backgroundColor',$event.target.value)"
    :value="currentStyle('backgroundColor')"
    class="form-control"
  >
  <input type="range"
    min="5"
    max="500"
    step="1"
    @input="setStyle('width',$event.target.value)"
    :value="currentStyle('width')"
  >
  <br>
  <button class="btn btn-primary" @click="addChild">Crear Hijo</button>
</div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'c-control',
  props: {
    model: Object
  },
  methods:{
    setStyle(style , value){
      if (style === 'width') {
        value+='px'
      }
      Vue.set(this.model.styles,style,value);
    },
    currentStyle(style){
      return this.model.styles[style];
    },
    addChild () {
      this.$root.$emit('addChild', this.model)
    }
  }
}
</script>


<style>

</style>
