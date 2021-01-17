<template>
  <div class="oportunidades">
    <Header />
    <div class="container-card-carrosel">
      <carousel>
        <slide>
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
        </slide>

        <slide>
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
        </slide>

        <slide>
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
        </slide>
        <slide>
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
        </slide>
        <slide>
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
        </slide>
      </carousel>
    </div>

    <div class="container-card-carrosel">
      <carousel>
        <slide>
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
        </slide>

        <slide>
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
        </slide>

        <slide>
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
        </slide>
        <slide>
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
        </slide>
        <slide>
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
        </slide>
      </carousel>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Header,
    Footer,
    Carousel,
    Slide,
  },
};
</script>
<style scoped>
.container-card-carrosel {
  width: 100%;
  height: 400px;
  margin: 100px 0px;
  padding: 20px;
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
  width: 90%;
  border-radius: 10px;
  height: 300px;
  transition: all 0.3s ease-in;
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
</style>
