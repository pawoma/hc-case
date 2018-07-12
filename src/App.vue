<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
  width: 100vw;
  min-height: 100vh;
  /* overflow-y: hidden;
  -webkit-overflow-scrolling: touch; */
  position: relative;
  background: white;
}
</style>
