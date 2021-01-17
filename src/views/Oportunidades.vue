<template>
  <div class="home">
    <Header />

    <div class="img-container js-scroll">
      <img class="img-home" src="../assets/img-oportunidades.png" />
    </div>

    <div class="container-logo">
      <img src="../assets/ccrlogo.png" />
      <div class="divider"></div>
      <h2 class="title1-home title1-margin">Viva seu caminho.</h2>
    </div>

    <div class="container-motivational-text">
      <div>
        <h2 class="esconder name title2-home">Escolha sua área de preferência</h2>
        <h2 class="esconder name title2-home">
          e dê seu primeiro passo para a inserção ao mercado!
        </h2>
      </div>
    </div>

    <CardCarrusel />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardCarrusel from "../components/CarruselCard";
export default {
  components: {
    Header,
    Footer,
    CardCarrusel,
  },
};
</script>

<style scoped>
.box {
  opacity: 1;
  transform: translateX(0);
  perspective: 1000px;
  backface-visibility: hidden;
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
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

.title2-home:last-child::after {
  content: "";
  display: block;
  width: 90%;
  height: 10px;
  margin-top: 20px;
  margin-right: 10px;
  background-color: #fe1243;
}

.img-home {
  width: 80%;
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

.card:hover {
  transform: scale(1.2);
}

.card-conted {
  padding: 0px 20px;
}

.card-arrow {
  color: #fe1243;
}

.area-interesse-title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  letter-spacing: 0.8px;
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
