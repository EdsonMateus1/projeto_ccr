<template>
  <div class="home">
    <Header />
    <div class="container-page-login">
      <div class="img-curriculo"></div>
      <h1 class="title">Ready to Work</h1>
      <h1 class="title2">Ready to Work</h1>

      <h2 class="sub-title">Cadastre seu currículo</h2>

      <form @submit.prevent="createCurriculum" class="container-form">
        <div class="item-form">
          <label class="label" for="name">Nome completo:</label>
          <input
            v-model="name"
            class="input"
            name="name"
            type="text"
            placeholder="Digite seu nome completo"
            required
          />
        </div>

        <div class="item-form espaco-container">
          <label class="label" for="telefone">Telefone:</label>
          <input
            v-model="tel"
            class="input"
            name="name"
            type="tel"
            placeholder="Ex: (00) 0000-0000"
            required
          />
        </div>

        <div class="item-form espaco-container">
          <label class="label" for="area-interesse"> Área de interesse </label>
          <select v-model="interest" class="input" name="name" type="text" required>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Negocios">Negócios</option>
            <option value="Negocios">Marketing</option>
          </select>
        </div>

        <div class="item-form espaco-container">
          <label class="label" for="msg">Sobre você:</label>
          <textarea
            style="resize: none"
            v-model="about"
            class="msg"
            name="mensagem"
            id="msg"
            rows="5"
            required
          ></textarea>
        </div>

        <div class="item-form espaco-container">
          <label class="label" for="anexar-curriculo">Anexar currículo:</label>
          <input class="input" name="name" type="file" />
        </div>

        <button class="button-curriculo" type="submit">Enviar</button>
      </form>
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
    Footer,
    Header,
  },
  data() {
    return {
      name: "",
      tel: "",
      interest: "",
      about: "",
    };
  },
  methods: {
    async createCurriculum() {
      const id = localStorage.getItem("toke-login");
      console.log(this.$data);
      await this.$firebase.database().ref(`user_table_${id}`).ref.set(this.$data);
      alert("Curriculo cadastrado");
      window.location.href = "/entrada";
    },
  },
};
</script>
<style scoped>
.container-page-login {
  min-height: 100%;
  padding: 10px 0px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.img-curriculo {
  display: none;
}

.title {
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  color: #fe1243;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 0.5em;
}

.title2 {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ccc;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  opacity: 0.3;
}

.sub-title {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 20px;
  color: #000;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.container-form {
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  align-items: center;
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
.button-curriculo {
  padding: 15px;
  border: none;
  margin-top: 1.4em;
  width: 70%;
  margin-top: 40px;
  border-radius: 10px;
  background-color: #fe1243;
  color: #f5f5f5;
  font-size: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  font-weight: bold;
  margin-bottom: 40px;
}

@media only screen and (min-width: 700px) and (max-width: 1200px) {
  .container-page-login {
    padding: 40px 40px;
  }

  .container-form {
    margin-top: 50px;
  }

  .title,
  .title2 {
    font-size: 48px;
  }

  .sub-title {
    font-size: 22px;
  }
}

@media only screen and(min-width: 701px) and (max-width: 1024px) {
  .title {
    margin-top: 40px;
  }

  .button-access:last-child {
    margin-bottom: 20px;
  }
}

@media (min-width: 1024px) {
  .container-page-login {
    margin-right: 50%;
    align-items: center;
    padding: 0px;
    margin-bottom: 70px;
    margin-top: 30px;
  }

  .title,
  .title2 {
    font-size: 50px;
  }
  .sub-title {
    font-size: 25px;
    line-height: 28px;
  }

  .item-form {
    width: 90%;
  }
  .button-login {
    width: 90%;
  }
  .img-curriculo {
    display: block;
    background-image: url("../assets/Scroll_Group_1.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 50%;
    position: absolute;
    top: 30px;
    right: 50px;
  }
}
@media (min-width: 1024px) {
  .container-form {
    width: 70%;
  }
}
</style>
