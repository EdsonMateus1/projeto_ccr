<template>
  <div class="home">
    <Header />
    <div class="container-img-central"></div>
    <div class="container-logo">
      <img src="../assets/ccrlogo.png" />
      <div class="divider"></div>
      <h2 class="title2">Viva seu caminho.</h2>
    </div>
    <div class="container-motivational-text">
      <div>
        <h2 class="title2 title2-home">conhecimento é poder</h2>
        <h2 class="title2 title2-home">Torne-se um investidor de ponta,</h2>
        <h2 class="title2 title2-home">invista em você mesmo</h2>
      </div>
    </div>

    <div class="container-card">
      <div class="card">
        <div class="card-header">
          <img src="../assets/Group_1.png" />
        </div>
        <h3 class="title-card">Grupos de estudos</h3>
        <span class="description-card">Descubra bibliotexas para estudo,</span>
        <span class="description-card">grupos para te incentivar a ir mais longe!</span>
      </div>
    </div>
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

<style scoped>
.home {
  padding: 20px 25px;
}
.container-img-central {
  background-image: url("../assets/Group_7.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 500px;
  width: 90%;
  margin: 0 auto;
}
.divider {
  width: 3px;
  height: 70%;
  background-color: #000;
  margin: 0 20px;
}
.title2 {
  position: relative;
  top: 40px;
  margin-left: 30px;
}
.title2-home {
  font-size: 25px;
  line-height: 34px;
}
.container-motivational-text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  width: 70%;
  height: 150px;
}

.container-logo {
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
}
.container-card {
  width: 100%;
  height: 200px;
}
.card {
}
.card-header {
}
</style>
