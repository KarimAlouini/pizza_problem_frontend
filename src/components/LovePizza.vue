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
      <div style="margin: 1%; width: 40%" class="border border-dark p-2">
        <div class="">
          <button
            @click.prevent="likePizza()"
            type="button"
            class="btn btn-success"
          >
            <b> I love Pizza</b>
            <img
              style="width: 30px"
              src="../assets/love-pizza-logo.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div style="margin: 1%; width: 40%" class="border border-dark p-2">
        <Top10 />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Top10 from "../components/Top10.vue";

export default {
  name: "LovePizza",
  components: {
    Top10,
    //LovePizza,
  },
  methods: {
    async likePizza() {
      await axios
        .post("user/likePizza")
        .then()
        .catch(this.$router.push("login"));
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
</style>
