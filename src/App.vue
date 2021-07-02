<template>
    <div id="app">
      <!-- export default {
    name: 'detailsssss' -->
      <keep-alive exclude="detailsssss">
          <router-view></router-view>
      </keep-alive>
      <maintabbar></maintabbar>
    </div>
  </template>
  
  <script>
  import maintabbar from './components/content/maintabbar/maintabbar'
  export default {
    name: 'App',
    
    components: {
      maintabbar
    }
  }
  </script>
   
  <style>
  @import "./assets/css/base.css";
  </style>
  