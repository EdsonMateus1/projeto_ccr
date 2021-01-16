<template>
  <div class="container-page-login">

    <h1 class="title">Vai trabalhar</h1>

    <h2 class="sub-title">Mostre seus conhecimentos</h2>
    <h2 class="sub-title">e as empresas te descubrirão!</h2>

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
      <button class="button-access">Contiunar com google</button>
      <button class="button-access">Contiunar com Facebook</button>
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
}

.item-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: .8em;
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
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 0.8px;
  margin-bottom: 20px;
  color: #545454;
}
.sub-title {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 25px;
  color: #545454;
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
  color: #f5f5f5;
  font-size: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
}
.button-access {
  border: 1px solid gray;
  border-radius: 20px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.6);
  color: #1160af;
}
.container-access {
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2em;
  margin-top:  2em;
}
</style>
