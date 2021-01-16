<template>
  <div class="home">
    <Header />
    <div class="container-img-central"></div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
.home {
  padding: 20px 25px;
}
.container-img-central {
  background-image: url("../assets/Group_7.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 500px;
  width: 100%;
}
</style>
