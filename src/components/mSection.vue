<template>
  <section @click="selected" :style="model.styles">
    <component v-for="child in model.children" :is="currentComponent" :key="child.id" :model="child"></component>
  </section>
</template>

<script>
//import mComponent from './mComponent'

export default {
  name: 'mSection',
  props: {
    model: Object
  },
  methods: {
    selected () {
      this.main.$emit('selectedComponent', this.model)
    }
  },
  computed: {
    isSelected () {
      return (this.main.selectedModel!=null && this.main.selectedModel.id === this.model.id)
    },
    main () {
      return this.$root.main
    },
    currentComponent () {
      return this.model.type
    }
  }
}
</script>

<style scoped>
</style>
