<template>
  <div class="General">
    <!--Header-->
    <HeaderCuestionario />
    <!--Main-->
    <Cuestionario2 />
    <!--Footer-->
    <Footer />
  </div>
</template>
<script>
import HeaderCuestionario from "@/components/HeaderCuestionario.vue";
import Cuestionario2 from "@/components/Cuestionario2.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "General",
  components: {
    Cuestionario2,
    HeaderCuestionario,
    Footer,
  },
};
</script>
<style scoped></style>
