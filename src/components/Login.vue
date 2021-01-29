<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" class="from-style">
      <h3>Login</h3>
      <div class="form-group">
        <label>UserName</label>
        <input
          type="text"
          class="form-control"
          v-model="username"
          placeholder="UserName"
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <button class="btn btn-primary btn-block">Login</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    //Login User() 
    async handleSubmit() {
      const response = await axios.post("auth/login", {
        username: this.username,
        password: this.password,
      });
      //Redirect to Home page
      this.$router.push("/home");
      //Save token to session storage
      sessionStorage.setItem("token", response.data.token);
    },
  },
};
</script>

<style lang="scss" scoped>
.from-style {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>