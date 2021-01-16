<template>
  <div id="app">
    <Login />
  </div>
</template>


<script>

import Login from "./components/Login";

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  border: none;
  box-shadow: none;
  background: none;
}
button:hover{
  cursor: pointer;
}

</style>
