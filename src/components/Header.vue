<template>
  <div class="header">
    <h1 class="title">Ready to work</h1>
    <div class="container-links">
      <router-link class="header-links" :to="{ name: 'Home' }">
        Home |
      </router-link>
      <router-link class="header-links" :to="{ name: 'Home' }">
        Curriculo |
      </router-link>
      <router-link class="header-links" :to="{ name: 'Home' }">
        Oportunidades |</router-link
      >
      <router-link class="header-links" :to="{ name: 'Home' }">
        Sobre |
      </router-link>
      <router-link class="header-links" :to="{ name: 'Home' }">
        Sair</router-link
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 30px;
}
.container-links {
  display: flex;
  gap: 20px;
}
.header-links {
  text-decoration: none;
  color: #545454;
  font-size: 20px;
  line-height: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
