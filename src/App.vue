<template>
  <div id="app">
  
    <router-view></router-view>
</template>
<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background : url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZQriE58HK2AShOO8NSw45uhWuZNzLh_IvYMnPuO9D10wXpDtiGmqCXBxOC7ZPCZZM7zc&usqp=CAU);
}
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
