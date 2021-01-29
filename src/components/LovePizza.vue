<template>
  <div class="hello">
    <h2>We would like to know how much you love Pizza!!!</h2>

    <h3>
      Fill free and press as mush as you want to show us your love degree
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </h3>
    <div class="d-flex justify-content-center bd-highlight mb-3">
      <div
        style="margin: 1%; width: 40%"
        class="centerE border border-dark p-2"
      >
        <p class="bigText">
          Please Register & Login to have the permission to Vote! &#128516;
        </p>
        <button
          @click.prevent="likePizza()"
          :disabled="isDisabled"
          type="button"
          class="btn btn-success"
        >
          <b> I love Pizza</b>
          <img style="width: 30px" src="../assets/love-pizza-logo.png" alt="" />
        </button>
      </div>
      <div style="margin: 1%; width: 40%" class="border border-dark p-2">
        <Top10 :label="labels" :chart-data="confirmed" />
      </div>
    </div>
    <button
      @click.prevent="logout()"
      :disabled="isDisabled"
      type="button"
      class="btn btn-danger"
    >
      LogOut
    </button>
  </div>
</template>

<script>
import axios from "axios";
import Top10 from "../components/Top10.vue";

export default {
  name: "LovePizza",

  data: () => {
    return {
      labels: [],
      confirmed: [],
    };
  },
  components: {
    Top10,
  },
  //Get Top 10 user liked PIZZA
  async created() {
    try {
      const users = await axios.get('user/UsersLike');
      users.data.forEach((e) => {
        this.labels.push(e.name);
        this.confirmed.push(e.numberOfLike);
      });
    } catch (e) {
      console.error(e);
    }
  },
  computed: {
    //Check if the user is login or not
    isDisabled() {
      const login = sessionStorage.getItem("token");
      return login == null;
    },
  },
  methods: {
    //LikePizza()
    async likePizza() {
      await axios.post("user/likePizza").then().catch();
    },
    //Logout & redirect to Login Page
    logout() {
      sessionStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.centerE {
  margin-top: auto !important;
  margin-bottom: auto !important;
}
.bigText {
  font-size: 16px;
  text-align: center;
  font-weight: 700;
}
</style>
