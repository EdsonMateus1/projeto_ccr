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
      <div style="background-color: #a40022" class="card">
        <div style="background-color: #7e2033" class="card-header">
          <div class="container-img-card">
            <img class="img-card" src="../assets/Group_1.png" />
          </div>
        </div>
        <div class="card-conted">
          <h3 class="title-card">Grupos de estudos</h3>
          <span class="description-card">Descubra bibliotecas para estudo,</span>
          <span class="description-card">grupos para te incentivar a ir mais longe!</span>
        </div>
      </div>

      <div style="background-color: #670015" class="card">
        <div style="background-color: #800a21" class="card-header">
          <div class="container-img-card">
            <img class="img-card" src="../assets/portfolio.png" />
          </div>
        </div>
        <div class="card-conted">
          <h3 class="title-card">Vagas</h3>
          <span class="description-card">Descubra vagas de emprego de acordo,</span>
          <span class="description-card">com sue desempenho,você tera mais</span>
          <span class="description-card">chances de ser entrevistado!</span>
        </div>
      </div>

      <div style="background-color: rgba(204, 204, 204, 0.897)" class="card">
        <div style="background-color: #ccc" class="card-header">
          <div class="container-img-card">
            <img class="img-card" src="../assets/place.png" />
          </div>
        </div>
        <div class="card-conted">
          <h3 class="title-card">Projetos sociais</h3>
          <span class="description-card">Pratique atividade fisicas,apoie causas e,</span>
          <span class="description-card">esteja em constante evolucao!</span>
        </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container-img-central {
  background-image: url("../assets/Group_7.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 500px;
  width: 90%;
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
  height: 400px;
  margin-top: 40px;
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
}
.card {
  width: 300px;
  border-radius: 10px;
  height: 300px;
}
.card-conted {
  padding: 0px 20px;
}
.title-card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-size: 25px;
  letter-spacing: 0.8px;
}
.description-card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-size: 15px;
  letter-spacing: 0.8px;
}
.img-card {
  opacity: 0.8;
}
.container-img-card {
  background-color: #f5f5f554;
  width: 70px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-header {
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 10px 10px 15px 20px;
  padding-bottom: 50px;
}

@media only screen and (max-width: 1240px) {
  .home {
    padding: 0px;
  }
}
</style>
