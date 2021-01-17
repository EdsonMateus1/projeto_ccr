<template>
  <div class="oportunidades">
    <div class="container-card-carrosel">
      <div>
        <h2 @click.stop="show = !show" class="area-interesse-title">
          TECNOLOGIA <span class="card-arrow">&#129042;</span>
        </h2>
      </div>
      <transition name="fade-card">
        <carousel v-if="show">
          <slide>
            <div style="background-color: #238053" class="card">
              <div style="background-color: #207249" class="card-header">
                <div class="container-img-card">
                  <img class="img-card" src="../assets/Group_1.png" />
                </div>
              </div>
              <div class="card-conted">
                <h3 class="title-card">EXCEL BÁSICO</h3>
                <span class="description-card"
                  >Aprenda o básico de excel para a sua carreira!</span
                >
              </div>
            </div>
          </slide>

          <slide>
            <div style="background-color: #3f629a" class="card">
              <div style="background-color: #2d5698" class="card-header">
                <div class="container-img-card">
                  <img class="img-card" src="../assets/Group_1.png" />
                </div>
              </div>
              <div class="card-conted">
                <h3 class="title-card">WORD</h3>
                <span class="description-card"
                  >Aprenda o básico de word para a sua carreira!</span
                >
              </div>
            </div>
          </slide>

          <slide>
            <div style="background-color: #d56549" class="card">
              <div style="background-color: #d34d28" class="card-header">
                <div class="container-img-card">
                  <img class="img-card" src="../assets/place.png" />
                </div>
              </div>
              <div class="card-conted">
                <h3 class="title-card">POWERPOINT</h3>
                <span class="description-card"
                  >Aprenda o básico de powerpoint para a sua carreira!</span
                >
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
      </transition>
    </div>

    <div class="container-card-carrosel">
      <div>
        <h2
          @click.stop="showCardBusiness = !showCardBusiness"
          class="area-interesse-title"
        >
          NEGÓCIOS <span class="card-arrow">&#129042;</span>
        </h2>
      </div>
      <transition name="fade-card">
        <carousel v-if="showCardBusiness">
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
      </transition>
    </div>

    <div class="container-card-carrosel">
      <div>
        <h2
          @click.stop="showCardEstudent = !showCardEstudent"
          class="area-interesse-title"
        >
          ESTUDOS GERAIS <span class="card-arrow">&#129042;</span>
        </h2>
      </div>
      <transition name="fade-card">
        <carousel v-if="showCardEstudent">
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
      </transition>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      show: false,
      showCardEstudent: false,
      showCardBusiness: false,
    };
  },
};
</script>
<style scoped>
.fade-card-enter-active,
.fade-card-leave-active {
  transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
.fade-card-enter,
.fade-card-leave-to {
  transform: translateX(200%);
  height: 0px;
  margin: 0px;
  padding: 0px;
}

.area-interesse-title:hover {
  cursor: pointer;
}

.container-card-carrosel {
  width: 100%;
  height: auto;
  padding: 30px 5px;
  transition: 1s all cubic-bezier(0.39, 0.575, 0.565, 1);
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
  width: 105%;
  border-radius: 10px;
  height: 300px;
  transition: all 0.3s ease-in;
}
.VueCarousel-slide {
  margin: 0px 20px;
}

.card-conted {
  padding: 0px 20px;
}
.title-card {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-size: 20px;
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

.area-interesse-title {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  letter-spacing: 0.8px;
  margin-bottom: 20px;
}

.card-arrow {
  color: #fe1243;
  font-size: 30px;
}
.VueCarousel-slide {
}

@media only screen and (min-width: 780px) {
  .card {
    width: 300px;
  }
  .oportunidades {
    padding-left: 150px;
  }
  .VueCarousel-slide {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
  .container-card-carrosel {
    width: 100%;
  }
}

@media only screen and (min-width: 1240px) {
  .container-card-carrosel {
    width: 980px;
  }
}
</style>
