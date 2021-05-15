<template>
  <div class="home">
    <HeaderHome />
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import HeaderHome from "@/components/HeaderHome.vue";
export default {
  name: "Home",
  components: {
    //HelloWorld,
    HeaderHome,
  },
};
</script>
