<template>
  <div class="container-page-login">

    <h1 class="title">Ready to Work</h1>
  
    <h2 class="sub-title">Mostre seus conhecimentos</h2>
    <h2 class="sub-title">e deixe que as empresas te notem!</h2>

    <form class="container-form">
      <div class="item-form email-container">
        <label class="label" for="email">E-mail</label>
        <input class="input" name="email" type="email" />
      </div>

      <div class="item-form">
        <label class="label" for="password">Senha</label>
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
  padding: 20px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Helvetica, sans-serif;
}

.container-form {
  width: 100%;
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

.title {
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fe1243;
}
.sub-title {
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 20px;
  color: #545454;
  font-family: helvetica;
}

.label {
  font-size: 24px;
  line-height: 19.2px;
  font-weight: bold;
}
.button-login {
  padding: 15px;
  border: none;

  margin-top: 1.4em;
  border-radius: 4px;
  background-color: #0d81f5;

  width: 80%;
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
</style>
