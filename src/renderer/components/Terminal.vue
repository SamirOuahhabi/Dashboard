<template>
	<div id="terminal"></div>
</template>

<script>
  const Terminal = require('xterm')
  const io = require('socket.io-client')

  export default {
    name: 'terminal',
    created: function () {
      let socket = io('http://localhost:2001')

      let term = new Terminal({
        'cursorBlink': true
      })

      term.on('data', function (data) {
        socket.emit('data', data)
      })

      socket.on('data', function (data) {
        term.write(data)
      })

      term.open(document.getElementById('terminal'))

      socket.on('disconnect', function () {
        term.destroy()
      })
    }
  }
</script>

<style>
	/*@import '~xterm/dist/xterm.css'*/
  #terminal {
    max-width: 400;
    max-height: 300;
    float: right;
  }
</style>
