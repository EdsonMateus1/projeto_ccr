<template>
  <Slide>
    <a id="home" href="/home">
      <span>Home</span>
    </a>
    <a id="curriculo" href="/curriculo">
      <span>Currículo</span>
    </a>
    <a id="Oportunidades" href="/oportunidades">
      <span>Oportunidades</span>
    </a>
    <a id="Sobre" href="/home">
      <span>Sobre</span>
    </a>
    <span @click.stop="logout" class="span-link" id="Sair" href="/">
      <span>Sair</span>
    </span>
  </Slide>
</template>
<script>
import { Slide } from "vue-burger-menu";

export default {
  components: {
    Slide,
  },
  methods: {
    async logout() {
      try {
        await this.$firebase.auth().signOut();
        localStorage.removeItem("toke-login");
        // console.log("logou");
        window.location.href = "/";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style>
.bm-menu {
  background-color: #fe1243;
  opacity: 0.8;
}
.span-link:hover {
  cursor: pointer;
}
</style>
