<template>
  <div class="home">
    <Header />

    <div class="img-container">
      <img
        class="img-home slide-up"
        v-animate.repeat.fade="'slide-up'"
        src="../assets/Group_7.png"
      />
    </div>

    <div class="container-logo">
      <img src="../assets/ccrlogo.png" />
      <div class="divider"></div>
      <h2 class="title2-home-margin title2-home">Viva seu caminho.</h2>
    </div>

    <div class="container-motivational-text">
      <div>
        <h2 class="esconder name title2-home">conhecimento é poder</h2>
        <h2 class="esconder name title2-home">Torne-se um investidor de ponta,</h2>
        <h2 class="esconder name title2-home">invista em você mesmo</h2>
      </div>
    </div>

    <div class="container-card">
      <div class="container-card-flex box slide-up" v-animate.repeat.fade="'slide-up'">
        <div style="background-color: #a40022" class="card">
          <div style="background-color: #7e2033" class="card-header">
            <div class="container-img-card">
              <img class="img-card" src="../assets/Group_1.png" />
            </div>
          </div>
          <div class="card-conted">
            <h3 class="title-card">Estudos</h3>
            <span class="description-card">Descubra cursos essenciais </span>
            <span class="description-card">para inserção ao mercado!</span>
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
            <span class="description-card">Descubra vagas de emprego e de acordo</span>
            <span class="description-card"> com seu desempenho, você terá mais</span>
            <span class="description-card"> chances de ser entrevistado!</span>
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
            <span class="description-card"
              >Pratique atividade fisicas,apoie causas e,</span
            >
            <span class="description-card">esteja em constante evolucao!</span>
          </div>
        </div>
      </div>
    </div>

    <section class="estudantes">
      <div class="container">
        <div class="grid-16 img-estudantes"></div>
      </div>
      <div class="subtitulo-curriculo">
        <router-link class="subtitulo-curriculo" :to="{ name: 'Curriculo' }"
          >Clique aqui
        </router-link>
        <h2>e publique suas notas!</h2>
      </div>
      <p>
        "Daqui 20 ou 30 anos, as coisas que você não fez irão te decepcionar muito mais do
        que aquelas que fez. <br />Portanto, corte as suas amarras e explore o universo de
        possibilidades que lhe cercam."
      </p>
    </section>

    <div class="quebra">
      <blockquote class="quote-externo container">
        <p>
          "Cada sonho que você deixa para trás é um pedaço do seu futuro que deixa de
          existir."
        </p>
        <cite>STEVE JOBS</cite>
      </blockquote>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      hide: true,
    };
  },
  methods: {
    handleScroll: function (evt, el) {
      if (window.scrollY > 100) {
        el.setAttribute("style", "opacity: 1;  transform: translateX(0);");
      }
      return window.scrollY > 200;
    },
    handleScrollSub: function (evt, el) {
      if (window.scrollY > 120) {
        el.setAttribute("style", "opacity: 1;  transform: translateX(0);");
      }
      return window.scrollY > 200;
    },
  },
};
</script>

<style scoped>
.animate {
  transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1);
}

.slide-up {
  transform: translateX(200%);
}

.slide-up.animate-active {
  transform: translateX(0);
}
.esconder-up {
  width: 0;
}

.box {
  /* opacity: 0; */
  /* transform: translateX(200%); */
  perspective: 1000px;
  backface-visibility: hidden;
}

.esconder {
  animation: esconder 2s steps(40) 0.3s normal;
}

@keyframes esconder {
  from {
    width: 0;
  }

  to {
    width: 500px;
  }
}
.name {
  font-size: 50px;
  color: darkgray;
  overflow: hidden;
  white-space: nowrap;
}

.container-img-central {
  background-image: url("../assets/Group_7.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 450px;
  width: 79%;
}
.img-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divider {
  width: 3px;
  height: 70%;
  background-color: #000;
  margin: 0 20px;
}
.title2-home-margin {
  position: relative;
  top: 40px;
  margin-left: 30px;
}

.title2-home {
  font-size: 40px;
  line-height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  opacity: 1;
}
.img-home {
  width: 80%;
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
  margin-top: 8%;
}
.container-card-flex {
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
}
.card {
  width: 300px;
  border-radius: 10px;
  height: 300px;
  transition: all 0.3s ease-in;
}

.card:hover {
  transform: scale(1.2);
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

@media only screen and (max-width: 480px) {
  .img-container {
    display: none;
  }
}

@media only screen and (max-width: 1100px) {
  .home {
    padding: 0px;
  }
  .container-logo {
    flex-direction: column;
  }
  .divider {
    display: none;
  }
  .title2-home {
    position: static;
    font-size: 20px;
    line-height: 1;
    margin-left: 20px;
  }
  .container-motivational-text {
    margin: 0px;
  }
  .img-container {
    display: none;
  }
  .container-card-flex {
    gap: 20px;
  }
  .card {
    width: 30%;
  }
}

@media only screen and (max-width: 880px) {
  .container-card-flex {
    flex-direction: column;
    height: auto;
    gap: 30px;
    margin-bottom: 40px;
  }
  .container-card {
    height: auto;
  }
  .card {
    width: 70%;
  }
  .card:hover {
    transform: scale(1.1);
  }
}

@media only screen and (max-width: 600px) {
  .container-card-flex {
    flex-direction: column;
    height: auto;
    gap: 30px;
    margin-bottom: 40px;
  }
  .container-card {
    height: auto;
  }
  .card {
    width: 90%;
  }
  .card:hover {
    transform: scale(1.1);
  }
}

.estudantes {
  padding: 40px 0;
}

.estudantes {
  background-image: url("../assets/estudantes.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  width: 100%;
}

.subtitulo-curriculo {
  z-index: 1;
  color: #fe1243;
  font-weight: bold;
  font-size: 1.8em;
  margin-top: 10.8%;
  margin-left: 5%;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.subtitulo-curriculo h2 {
  z-index: 1;
  color: white;
  font-weight: bold;
  font-size: 1.8em;
  margin-top: 10.8%;
  margin-left: 0.8%;
}

.estudantes p {
  color: white;
  font-size: 0.5;
  margin-top: 1%;
  margin-left: 10%;
  font-style: italic;
}

.quebra {
  background-color: #fe1243;
  width: 100%;
  height: 225px;
  background-size: cover;
  text-align: center;
  font-size: 20px;
  font-style: italic;
}

.quebra .quote-externo {
  max-width: 400px;
  padding-top: 60px;
}

.quebra cite {
  font-size: 40px;
  font-weight: bold;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.container {
  width: 960px;
  margin: 0 auto;
  padding: 0px;
  position: relative;
}

.container:after,
.container:before {
  content: " ";
  display: table;
}

.container:after {
  clear: both;
}
</style>
