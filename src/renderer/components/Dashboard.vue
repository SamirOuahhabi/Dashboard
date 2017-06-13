<template>
  <div class="window">
   <window-bar title="Dashboard"></window-bar>
   <div class="window-content">
     <div class="pane-group">
       <div class="pane-sm sidebar">
         <nav class="nav-group">
          <h5 class="nav-group-title">Favorites</h5>
          <a class="nav-group-item">
            <span class="icon icon-home"></span>
            <router-link to="terminal">Terminal</router-link>
          </a>
          <span class="nav-group-item">
            <span class="icon icon-download"></span>
            Downloads
          </span>
          <span class="nav-group-item">
            <span class="icon icon-folder"></span>
            Documents
          </span>
          <span class="nav-group-item">
            <span class="icon icon-signal"></span>
            AirPlay
          </span>
          <span class="nav-group-item">
            <span class="icon icon-print"></span>
            Applications
          </span>
          <span class="nav-group-item">
            <span class="icon icon-cloud"></span>
            Desktop
          </span>
        </nav>
       </div>
       <div class="pane">
        <router-view></router-view>
       </div>
     </div>
   </div>
   <footer class="toolbar toolbar-footer">
     <h1 class="title">Made by: Samir Ouahhabi</h1>
   </footer>
 </div>
</template>

<script>
  import WindowBar from './Dashboard/WindowBar.vue'

  export default {
    name: 'dashboard',
    components: { WindowBar },
    methods: {}
  }
</script>

<style>
</style>
