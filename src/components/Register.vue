<template>
  <div class="container">
    <form @submit.prevent="handleSubmit" class="from-style">
      <h3>Sign up</h3>
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
      <button class="btn btn-primary btn-block">Sign up</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    //Register User() 
    async handleSubmit() {
      await axios.post("auth/register", {
        username: this.username,
        password: this.password,
      });
      //Redirect to Login page
      this.$router.push("login");
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