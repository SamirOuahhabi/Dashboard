<template>
 <div class='window-buttons'>
  <v-btn icon light @click.native.stop="minimizeWindow">
    <v-icon>remove</v-icon>
  </v-btn>
  <v-btn icon light @click.native.stop="maximizeWindow">
    <v-icon>add</v-icon>
  </v-btn>
  <v-btn icon light @click.native.stop="closeWindow">
    <v-icon>clear</v-icon>
  </v-btn>
</div>
</template>

<script>
  const remote = require('electron').remote

  export default {
    name: 'window-buttons',
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
  .window-buttons {
    -webkit-app-region: no-drag;
  }
</style>
