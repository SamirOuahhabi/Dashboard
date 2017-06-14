<template>
  <div ref="termDiv"></div>
</template>

<script>
  const Terminal = require('xterm')
  // Terminal.loadAddon('fit')
  const shellServer = require('electron').ipcRenderer

  export default {
    name: 'terminal',
    mounted: function () {
      shellServer.send('shell-start', true)

      let term = new Terminal({
        'cursorBlink': true
      })

      term.on('data', function (data) {
        console.log('term: ' + data)
        shellServer.send('shell-input', data)
      })

      shellServer.on('shell', function (event, message) {
        console.log('shellServer: ' + message)
        term.write(message)
      })

      term.open(this.$refs.termDiv)
      // term.fit()
    },
    beforeDestroy: function () {
      shellServer.send('shell-stop', true)
    }
  }
</script>

<style>
	@import '~xterm/dist/xterm.css'
</style>
