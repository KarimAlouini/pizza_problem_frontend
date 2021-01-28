<template>
  <button
    @click.prevent="getMostLiked()"
    type="button"
    class="btn btn-success"
  ></button>
</template>
<script>
import axios from "axios";
export default {
  name: "Top10",
  data() {},
  methods: {
    async getMostLiked() {
      const response = await axios.get("user/UsersLike");
      response.data.forEach((e) => {
        console.log(e.name);
        console.log(e.numberOfLike);
      });
    },
  },
};
</script>