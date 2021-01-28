<template>
  <div style="margin-top:2%" class="home">
    <LovePizza msg="Welcome to our LovePizza Test" />
  </div>
</template>

<script>
// @ is an alias to /src
import LovePizza from "@/components/LovePizza.vue";

export default {
  name: "Home",
  components: {
    LovePizza
  }
};
</script>
