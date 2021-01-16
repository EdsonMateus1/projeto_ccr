<template>
  <div class="container-page-login">
    <h1 class="title">Ready to Work</h1>
    <h1 class="title2">Ready to Work</h1>

    <h2 class="sub-title">Cadastre-se.</h2>
    <h2 class="sub-title">Mostre os seus conhecimentos &</h2>
    <h2 class="sub-title">Receba diversas oportunidades</h2>

    <form class="container-form">
      <div class="item-form email-container">
        <label class="label" for="email">E-mail</label>
        <input class="input" name="email" type="email" />
      </div>

      <div class="item-form">
        <label class="label" for="password">Senha</label>
        <input class="input" name="password" type="password" />
      </div>

      <div class="item-form item-form2">
        <label class="label" for="password">Confirmar senha</label>
        <input class="input" name="password" type="password" />
      </div>

      <button class="button-login" type="submit">Criar conta</button>
    </form>

    <div class="container-access">
      <button class="button-access">Continuar com google</button>
      <button class="button-access">Continuar com Facebook</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-page-login {
  height: 100%;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  align-items: center;
  margin-top: 30px;
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
  height: 4em;
}
.email-container {
  margin: 1.2em 0px;
}

.label {
  font-size: 24px;
  line-height: 19.2px;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #707070;
}
.button-login {
  padding: 15px;
  border: none;

  margin-top: 1.4em;
  border-radius: 4px;
  background-color: #0d81f5;

  width: 70%;
  margin-top: 30px;
  border-radius: 10px;
  background-color: #fe1243;
  color: #f5f5f5;
  font-size: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  font-weight: bold;
}

.button-access {
  align-items: center;
  border: 1px solid gray;
  border-radius: 20px;
  width: 95%;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.6);
  color: black;
}
.container-access {
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2em;
  margin-top: 2em;
}

@media only screen and (min-width: 700px) and (max-width: 1200px) {
  .container-page-login {
    height: 100%;
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

  .button-access {
    width: 50%;
  }
}
</style>
