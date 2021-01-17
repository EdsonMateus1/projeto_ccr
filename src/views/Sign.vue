<template>
  <div class="container-page-login">
    <div class="img-intro"></div>
    <h1 class="title">Ready to Work</h1>
    <h1 class="title2">Ready to Work</h1>

    <h2 class="sub-title">Cadastre-se.</h2>
    <h2 class="sub-title">Mostre os seus conhecimentos &</h2>
    <h2 class="sub-title">Receba diversas oportunidades</h2>
    <div v-if="loader" class="loader"></div>
    <form v-else @submit.prevent="createUser" class="container-form">
      <div class="item-form email-container">
        <label class="label" for="email">E-mail</label>
        <input v-model="email" class="input" name="email" type="email" required />
      </div>

      <div class="item-form">
        <label class="label" for="password">Senha</label>
        <input
          v-model="password"
          class="input"
          name="password"
          type="password"
          required
        />
      </div>

      <div class="item-form item-form2">
        <label class="label" for="confirmPassword">Confirmar senha</label>
        <input
          v-model="confirmPassword"
          class="input"
          name="confirmPassword"
          type="password"
          required
        />
      </div>

      <button class="button-login" type="submit">Criar conta</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Sigin",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      loader: false,
    };
  },

  methods: {
    validations() {
      if (this.password.length <= 6 && this.confirmPassword.length <= 6) {
        alert("Senha inválida! Digite pelo menos 7 caracteres");
        return false;
      }
      if (this.password != this.confirmPassword) {
        alert("Senhas não coincidem");
        return false;
      } else {
        return true;
      }
    },
    async createUser() {
      try {
        if (this.validations()) {
          this.loader = true;
          const res = await this.$firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password);
          const id = res.user?.uid ?? "";
          localStorage.setItem("toke-login", id);
          window.location.href = "/home";
        } else {
          return;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-page-login {
  min-height: 100%;
  padding: 10px 0px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.img-intro {
  background-image: url("../assets/img-tablet.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 95%;
  height: 200px;
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

.item-form2 {
  margin-top: 20px;
}

.input {
  border: none;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 4px;
  height: 3.5em;
}
.email-container {
  margin: 1.2em 0px;
}

.label {
  font-size: 22px;
  line-height: 19.2px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #707070;
}
.button-login {
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
}

.button-access {
  border: 1px solid #545454;
  border-radius: 10px;
  font-size: 20px;
  padding: 1px;
  width: 100%;
  box-shadow: -1px 0px 4px 0px rgba(0, 0, 0, 0.6);
  color: #0d3358;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.container-access {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2em;
  margin-top: 2em;
}

.loader {
  margin: 60px 0px;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #fe1243;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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
  body {
    overflow: hidden;
  }
  .container-page-login {
    margin-top: 10%;
    margin-right: 50%;
    align-items: center;
    padding: 0px;
  }
  .img-intro {
    background-size: contain;
    margin-left: 98%;
    width: 50%;
    height: 500px;
    position: absolute;
    top: 25%;
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
    width: 70%;
  }
  .button-login {
    width: 400px;
  }
}
</style>
