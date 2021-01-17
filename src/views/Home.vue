<template>
  <div class="home">
    <Header />

    <div class="img-container">
      <img class="img-home" src="../assets/Group_7.png" />
    </div>

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
          <span class="description-card">Descubra bibliotexas para estudo,</span>
          <span class="description-card">grupos para te incentivar a ir mais longe!</span>
        </div>
      </div>

      <div style="background-color: #670015" class="card">
        <div style="background-color: #800a21" class="card-header">
          <div class="container-img-card">
            <img class="img-card" src="../assets/Group_1.png" />
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

    <footer>
      <div class="footer">
        <div class="container">
          <div class="grid-8 footer_historia">
            <h3>Nossa História</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab ea, tempora
              itaque laboriosam impedit tenetur.
            </p>
          </div>

          <div class="grid-4 footer_contato">
            <h3>Contato</h3>
            <ul>
              <li>- +55 (31) 90000-0000</li>
              <li>- contato@readytw.com.br</li>
              <li>- Belo Horizonte - MG</li>
            </ul>
          </div>

          <div class="grid-4 footer_redes">
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <a href="http://www.facebook.com" target="_blank"
                  ><img src="../assets/facebook.png" alt="Facebook"
                /></a>
              </li>
              <li>
                <a href="http://www.linkedin.com" target="_blank"
                  ><img src="../assets/linkedin.png" alt="LinkedIn"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--div container-->

      <div class="copy">
        <div class="container">
          <p class="copy-text grid-16">READY TO WORK - 2021 ©</p>
        </div>
      </div>
    </footer>
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
.title2 {
  position: relative;
  top: 40px;
  margin-left: 30px;
}
.title2-home {
  font-size: 40px;
  line-height: 45px;
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
  .title2 {
    position: static;
    font-size: 20px;
    line-height: 1;
  }
  .container-motivational-text {
    margin: 0px;
  }
  .img-container {
    display: none;
  }
  .container-card {
    gap: 20px;
  }
  .card {
    width: 30%;
  }
}

@media only screen and (max-width: 880px) {
  .container-card {
    flex-direction: column;
    height: auto;
    gap: 30px;
    margin-bottom: 40px;
  }
  .card {
    width: 90%;
  }
}

@media only screen and (max-width: 900px) {
  .card {
  }
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

.footer {
  display: grid;
  grid-template-columns: 4;
  align-items: right;
  width: 100%;
  background: #171717;
  color: #fff;
  padding: 20px 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.footer h3 {
  font-size: 18px;
  line-height: 25px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.footer h3:after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background-color: #fe1243;
  margin: 6px 0 12px 0;
}

.footer_historia {
  padding-right: 40px;
}

.footer_contato li {
  line-height: 22px;
  font-size: 14px;
  list-style: none;
}

.footer_redes ul li {
  display: inline-block;
  margin: 10px;
}

.footer_redes img:hover {
  background: rgba(255, 255, 255, 0.3);
}

.copy {
  width: 100%;
  background-color: #171717;
  padding: 20px 0;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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

/**************************** GRID COLUMNS **************** */

.grid-1,
.grid-2,
.grid-3,
.grid-4,
.grid-5,
.grid-6,
.grid-7,
.grid-8,
.grid-9,
.grid-10,
.grid-11,
.grid-12,
.grid-13,
.grid-14,
.grid-15,
.grid-16,
.grid-1-3 {
  float: left;
  margin-left: 10px;
  margin-right: 10px;
}

.grid-1 {
  width: 40px;
}
.grid-2 {
  width: 100px;
}
.grid-3 {
  width: 160px;
}
.grid-4 {
  width: 220px;
}
.grid-5 {
  width: 280px;
}
.grid-6 {
  width: 340px;
}
.grid-7 {
  width: 400px;
}
.grid-8 {
  width: 460px;
}
.grid-9 {
  width: 520px;
}
.grid-10 {
  width: 580px;
}
.grid-11 {
  width: 640px;
}
.grid-12 {
  width: 700px;
}
.grid-13 {
  width: 760px;
}
.grid-14 {
  width: 820px;
}
.grid-15 {
  width: 880px;
}
.grid-16 {
  width: 940px;
}
.grid-1-3 {
  width: 300px;
}

@media only screen and (min-width: 788px) and (max-width: 979px) {
  .container {
    width: 768px;
  }

  .produtos_lista li {
    height: 316px;
  }

  .grid-1 {
    width: 28px;
  }
  .grid-2 {
    width: 76px;
  }
  .grid-3 {
    width: 124px;
  }
  .grid-4 {
    width: 172px;
  }
  .grid-5 {
    width: 220px;
  }
  .grid-6 {
    width: 268px;
  }
  .grid-7 {
    width: 316px;
  }
  .grid-8 {
    width: 364px;
  }
  .grid-9 {
    width: 412px;
  }
  .grid-10 {
    width: 460px;
  }
  .grid-11 {
    width: 508px;
  }
  .grid-12 {
    width: 556px;
  }
  .grid-13 {
    width: 604px;
  }
  .grid-14 {
    width: 652px;
  }
  .grid-15 {
    width: 700px;
  }
  .grid-16 {
    width: 748px;
  }
  .grid-1-3 {
    width: 236px;
  }
}

@media only screen and (max-width: 787px) {
  .container {
    width: 300px;
  }

  .grid-1,
  .grid-2,
  .grid-3,
  .grid-4,
  .grid-5,
  .grid-6,
  .grid-7,
  .grid-8,
  .grid-9,
  .grid-10,
  .grid-11,
  .grid-12,
  .grid-13,
  .grid-14,
  .grid-15,
  .grid-16,
  .grid-1-3 {
    width: 300px;
    margin: 0 0 20px 0;
    float: none;
  }
}
</style>
