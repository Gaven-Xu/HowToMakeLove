<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="nav">
      <router-link to="/index">首页</router-link>
      <router-link to="/joke">段子</router-link>
      <router-link to="/photo">趣图</router-link>
      <router-link to="/chat">留言</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
