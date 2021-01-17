<template>
  <div>
    <Header />
    <div class="perfil">
      <div class="img-container">
        <img class="img-home" src="../assets/homem.png" />
      </div>

      <div class="title2-home">
        <h2>Meu perfil</h2>
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

.title2-home-margin {
  position: relative;
  top: 40px;
  margin-left: 30px;
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
  width: 90%;
  height: 10px;
  margin-top: 20px;
  margin-right: 10px;
  background-color: #fe1243;
}

.img-home {
  width: 15%;
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
