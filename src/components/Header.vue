<template>
  <div class="header">
    <h1 class="title">Ready to work</h1>
    <Menu class="menu" />
    <div class="container-links">
      <a class="header-links" href="/home">Home </a>
      <router-link class="header-links" :to="{ name: 'Curriculo' }"
        >Curriculo
      </router-link>
      <router-link class="header-links" :to="{ name: 'Oportunidades' }"
        >Oportunidades
      </router-link>
      <router-link class="header-links" :to="{ name: 'Perfil' }">Meu perfil</router-link>
      <span @click.stop="logout" class="header-links">Sair</span>
    </div>
  </div>
</template>
<script>
import Menu from "../components/Menu";
export default {
  components: {
    Menu,
  },
  methods: {
    async logout() {
      try {
        await this.$firebase.auth().signOut();
        localStorage.removeItem("toke-login");
        this.$router.push({ name: "Login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 30px;
  position: sticky;
  top: 0px;
  background-color: #f8f8ff;
  z-index: 99;
}
.container-links {
  display: flex;
  gap: 20px;
}
.title {
  font-size: 30px;
  margin: 0px;
}
.header-links {
  text-decoration: none;
  color: #545454;
  font-size: 20px;
  line-height: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.header-links:hover {
  cursor: pointer;
}
a {
  display: block;
}
.menu {
  display: none;
}
@media only screen and (max-width: 800px) {
  .header {
    padding: 10px 10px;
    height: 60px;
  }
  .title {
    font-size: 25px;
    line-height: 1;
  }

  .container-links {
    flex-direction: column;
    height: 0px;
    overflow: hidden;
  }
  .menu {
    display: block;
    position: absolute;
    right: 90px;
    top: -22px;
  }
}
</style>
