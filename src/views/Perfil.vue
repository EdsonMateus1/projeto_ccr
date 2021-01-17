<template>
  <div class="perfil">
    <Header />

    <div class="perfil-container">
      <div class="img-container">
        <img class="img-home" src="../assets/homem.png" />
      </div>

      <div class="center-text">
        <div class="title2-home title2-home-margin-perfil">
          <h2>Meu perfil</h2>
        </div>
      </div>
    </div>

    <div class="container-form">
      <div class="item-form">
        <label class="label">Nome:</label>
        <span class="input flex-span">Edson</span>
      </div>

      <div class="item-form espaco-container">
        <label class="label" for="telefone">Telefone:</label>
        <span class="input flex-span">(31) 9999-9999</span>
      </div>

      <div class="item-form espaco-container">
        <label class="label" for="area-interesse"> Área de interesse </label>
        <span class="input flex-span">Tecnologia</span>
      </div>

      <div class="item-form espaco-container">
        <label class="label" for="msg">Sobre você:</label>
        <span class="span-text"
          >Estudante de Ciência da Computação, já com experiência no mercado de trabalho
          atuando em projetos da Drogaria Araújo, busco cada vez mais o conhecimento nessa
          área que tanto amo. Sempre me atualizando, estou atrás de novas tecnologias e
          formas de resolver problemas aplicando todas as minhas habilidades adquiridas em
          experiência de trabalho, cursos e faculdade. Fascinado no universo da
          tecnologia, me sinto bastante satisfeito toda vez em que finalizo um novo
          projeto, aprendendo conteúdos novos que me auxiliam no meu crescimento
          profissional e pessoal!</span
        >
      </div>
    </div>

    <Footer />
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
};
</script>

<style>
.center-text {
  display: flex;
  justify-content: center;
}

.flex-span {
  display: flex;
  align-items: center;
}

.esconder {
  animation: esconder 1s steps(40) 0.3s normal;
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
  height: 500px;
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

.title1-margin {
  position: relative;
  top: 40px;
  margin-left: 30px;
}

.title1-home {
  font-size: 40px;
  line-height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  opacity: 1;
}

.title2-home-margin-perfil {
  margin: 80px 0px;
  text-align: center;
  width: 50%;
  display: flex;
  flex-direction: column;
}

.title2-home {
  text-align: center;
  font-size: 40px;
  line-height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  opacity: 1;
}

.title2-home:last-child::after {
  content: "";
  display: block;
  width: 100%;
  height: 10px;
  margin-top: 20px;
  margin-right: 10px;
  background-color: #fe1243;
}

.img-home {
  /* width: ; */
}
.container-motivational-text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 30px;
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

.container-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  padding-bottom: 50px;
}

.item-form {
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 0.8em;
  color: #545454;
}

.msg {
  border: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.input {
  border: none;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  height: 3.5em;
}
.espaco-container {
  margin: 1.2em 0px;
}

.label {
  font-size: 22px;
  line-height: 19.2px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #707070;
}
.span-text {
  min-height: 200px;
  border: none;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
}

@media only screen and (min-width: 1240px) {
  .container-form {
    width: 700px;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 480px) {
  /* .img-container {
    display: none;
  } */
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
  /* .img-container {
    display: none;
  } */
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
