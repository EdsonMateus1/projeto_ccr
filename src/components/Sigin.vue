<template>
  <div class="container-page-login">
    <div class="img-intro">
      <img src="../assets/img-tablet.png" alt="img-intro" />
    </div>
    <h1 class="title">Ready to Work</h1>
    <h1 class="title2">Ready to Work</h1>

    <h2 class="sub-title">Cadastre-se.</h2>
    <h2 class="sub-title">Mostre os seus conhecimentos &</h2>
    <h2 class="sub-title">Receba diversas oportunidades</h2>

    <form @submit.prevent="createUser" class="container-form">
      <div class="item-form email-container">
        <label class="label" for="email">E-mail</label>
        <input
          v-model="email"
          class="input"
          name="email"
          type="email"
          required
        />
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
        />
      </div>

      <button class="button-login" type="submit">Criar conta</button>
    </form>

    <div class="container-access">
      <button class="button-access">
        <svg
          style="margin-right: 0px"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#fe1243"
          class="bi bi-google"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
          />
        </svg>
        <span class="span-access">Entre com a conta Google</span>
      </button>
      <button class="button-access">
        <svg
          style="margin-left: 30px"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#fe1243"
          class="bi bi-facebook"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
          />
        </svg>
        <span class="span-access">Entre com o Facebook</span>
      </button>
    </div>
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
    };
  },
  methods: {
    async createUser() {
      try {
        const res = await this.$firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        const id = res.user?.uid ?? "";
        localStorage.setItem("toke-login", id);
       // this.$router.push({ name: "Home" });
       alert("criado")
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    console.log(this.$firebase);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-page-login {
  min-height: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.img-intro {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 90%;
  margin-top: 20px;
  margin-bottom: 40px;
}

.title {
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
  width: 100%;
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
  width: 90%;
  margin-top: 30px;
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
  width: 70%;
  font-size: 20px;
  padding: 10px;
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
.button-access:last-child {
  margin-bottom: 70px;
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
</style>
