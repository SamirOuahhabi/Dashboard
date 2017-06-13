<template>
	<div class="window">
   <header class="toolbar toolbar-header">
     <div class='window-buttons'>
       <span class="icon icon-minus" v-on:click="testMethod"></span>
       <span class="icon icon-plus"></span>
       <span class="icon icon-cancel"></span>
     </div>
     <center>Header</center> 
   </header>
   <div class="window-content">
     <div class="pane-group">
       <div class="pane-sm sidebar">...</div>
       <div class="pane">...</div>
     </div>
   </div>
   <footer class="toolbar toolbar-footer">
     <h1 class="title">Footer</h1>
   </footer>
 </div>
</template>

<script>

  export default {
    name: 'photon',
    methods: {
      testMethod: function (event) {
        alert('Test')
      }
    }
  }
</script>

<style>
@import '~font-awesome/css/font-awesome.min.css';
	
</style>
