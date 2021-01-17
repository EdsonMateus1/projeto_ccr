<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
html,
body,
#app {
  min-height: 100%;
}

.title {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  color: #fe1243;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 0.5em;
}

.title2 {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: black;
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
}
</style>
