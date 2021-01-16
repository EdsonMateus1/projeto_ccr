<template>
  <Slide>
    <a id="home" href="/home">
      <span>Home</span>
    </a>
    <a id="curriculo" href="/curriculo">
      <span>curriculo</span>
    </a>
    <a id="Oportunidades" href="/home">
      <span>Oportunidades</span>
    </a>
    <a id="Sobre" href="/home">
      <span>Sobre</span>
    </a>
    <a id="Sair" href="/">
      <span>Sair</span>
    </a>
  </Slide>
</template>
<script>
import { Slide } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  components: {
    Slide, // Register your component
  },
};
</script>
<style>
.bm-menu {
  background-color: #fe1243;
  opacity: 0.8;
}
</style>
