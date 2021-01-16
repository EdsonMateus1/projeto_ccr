<template>
  <div class="container-page-login">
    <h1 class="title">Ready to Work</h1>
    <h1 class="title2">Ready to Work</h1>

    <h2 class="sub-title">Cadastre seu currículo</h2>

    <form class="container-form">

      <div class="item-form">
        <label class="label" for="name">Nome completo:</label>
        <input v-model="text" class="input" name="name" type="text" placeholder="Digite seu nome completo" required />
      </div>

      <div class="item-form espaco-container">
        <label class="label" for="telefone">Telefone:</label>
        <input v-model="tel" class="input" name="name" type="tel" placeholder="Ex: (00) 0000-0000" required />
      </div>

      <div class="item-form espaco-container">
        <label class="label" for="area-interesse">Área de interesse:</label>
        <input v-model="text" class="input" name="name" type="text" required />
      </div>

      <div class="item-form espaco-container">
        <label class="label" for="msg">Sobre você:</label>
        <textarea style="resize: none" v-model="text" class="msg" name="mensagem" id="msg"  rows="5" required></textarea>
      </div>

      <div class="item-form espaco-container">
        <label class="label" for="anexar-curriculo">Anexar currículo:</label>
        <input  class="input" name="name" type="file" required/>
      </div>

      <button class="button-login" type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>
<style>
.container-page-login {
  min-height: 100%;
  padding: 10px 0px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
.button-login {
  padding: 15px;
  border: none;
  margin-top: 1.4em;
  width: 75%;
  margin-top: 40px;
  border-radius: 10px;
  background-color: #fe1243;
  color: #f5f5f5;
  font-size: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);
  font-weight: bold;
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
    margin-top: 10%;
    margin-right: 50%;
    align-items: center;
    padding: 0px;
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
}
</style>
