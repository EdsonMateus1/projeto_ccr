<template>
  <Slide>
    <a id="home" href="/home">
      <span>Home</span>
    </a>
    <a id="curriculo" href="/curriculo">
      <span>Currículo</span>
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
import { Slide } from "vue-burger-menu";

export default {
  components: {
    Slide,
  },
};
</script>
<style>
.bm-menu {
  background-color: #fe1243;
  opacity: 0.8;
}
</style>
