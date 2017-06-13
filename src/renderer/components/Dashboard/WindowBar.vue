<template>
  <header class="toolbar toolbar-header">
     <div class='window-buttons'>
       <span class="icon icon-minus" v-on:click="minimizeWindow"></span>
       <span class="icon icon-plus" v-on:click="maximizeWindow"></span>
       <span class="icon icon-cancel-circled" v-on:click="closeWindow"></span>
     </div>
     <center>{{ title }}</center> 
   </header>
</template>

<script>
  const remote = require('electron').remote

  export default {
    name: 'window-bar',
    props: ['title'],
    components: {},
    methods: {
      closeWindow: function (event) {
        remote.getCurrentWindow().close()
      },
      minimizeWindow: function (event) {
        remote.getCurrentWindow().minimize()
      },
      maximizeWindow: function (event) {
        if (remote.getCurrentWindow().isMaximized()) {
          remote.getCurrentWindow().unmaximize()
        } else {
          remote.getCurrentWindow().maximize()
        }
      }
    }
  }
</script>

<style>
  .toolbar-header {
    -webkit-app-region: drag;
  }
  .window-buttons {
    float: right;
    -webkit-app-region: no-drag;
  }
  span.icon {
    cursor: pointer;
  }
  span.icon:hover {
    color: grey;
  }
  .window-buttons>.icon-cancel-circled {
    color:red;
  }
</style>
