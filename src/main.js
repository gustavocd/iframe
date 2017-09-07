// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mounted () {
    this.$on('selectedComponent', this.selected)
    this.$on('addChild', this.addChild)
  },
  methods: {
    selected (model) {
      this.selectedModel = model;
    },
    addChild (model) {
      //var res = this.model.children.findIndex(el => el.id === model.id)
      var children=this.selectedModel.children;
      var newChildren={...this.child};
      children.push(newChildren);
      //this.model.children[res].children.push(this.child)
      Vue.set(this.selectedModel,'children',children);
    }
  },
  data: {
    child: {
      id: 10,
      type: 'Section',
      children: [],
      styles: {
        backgroundColor: 'red',
        width: '500px',
        minHeight: '100px'
      }
    },
    model: {
      id: 0,
      type: 'body',
      children: [
        {
          id: 1,
          type: 'Navbar',
          children: [],
          styles: {
            backgroundColor: 'red',
            width: '500px',
            height: '100px'
          }
        },
        {
          id: 2,
          type: 'Section',
          children: [],
          styles: {
            backgroundColor: 'blue',
            width: '500px',
            height: '100px'
          }
        },
        {
          id: 3,
          type: 'Section',
          children: [],
          styles: {
            backgroundColor: 'green',
            width: '500px',
            height: '100px'
          }
        },
        {
          id: 4,
          type: 'Section',
          children: [],
          styles: {
            backgroundColor: 'yellow',
            width: '500px',
            height: '100px'
          }
        },
        {
          id: 5,
          type: 'Section',
          children: [],
          styles: {
            backgroundColor: 'pink',
            width: '500px',
            height: '100px'
          }
        },
      ]
    },
    selectedModel:undefined
  }
})
