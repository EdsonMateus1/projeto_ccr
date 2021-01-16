<template>
  <div class="container-page-login">
    <h1 class="title">Ready to Work</h1>

    <h2 class="sub-title">Mostre seus conhecimentos</h2>
    <h2 class="sub-title">e deixe que as empresas te notem!</h2>

    <form class="container-form">
      <div class="item-form email-container">
        <label class="label" for="email">E-mail</label>
        <input class="input" name="email" type="email" required />
      </div>

      <div class="item-form">
        <label class="label" for="password">Senha</label>
        <input class="input" name="password" type="password" required />
      </div>

      <button class="button-login" type="submit">Criar conta</button>
    </form>

    <div class="container-access">
      <button class="button-access">
        <svg
          style="margin-right: 10px"
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
        Continuar com google
      </button>
      <button class="button-access">
        <svg
          style="margin-left: 10px"
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
        Continuar com Facebook
      </button>
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
  padding: 1.2em 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  border: 1px solid #545454;
  border-radius: 20px;
  width: 95%;
  font-size: 20px;
  padding: 10px;
  box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 0.6);
  color: #0d3358;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
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
