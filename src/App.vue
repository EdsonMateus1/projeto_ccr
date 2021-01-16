<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  min-height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

button {
  border: none;
  box-shadow: none;
  background: none;
}
button:hover {
  cursor: pointer;
}
@media (min-width: 1024px) {
  body {
    overflow: hidden;
  }
}
</style>
