<template>
  <component :is="componentType" :model="model"></component>
</template>

<script>
import mSection from './mSection'
import mNavbar from './mNavbar'

export default {
  name: 'mComponent',
  props: {
    model: Object
  },
  components: {
    mSection,
    mNavbar
  },
  computed: {
    componentType () {
      console.log('m' + this.model.type)
      return 'm' + this.model.type;
    }
  }
}
</script>

<style>

</style>
