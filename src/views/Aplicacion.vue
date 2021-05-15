<template>
  <div class="General">
    <!--Header-->
    <HeaderMain5 />
    <!--Main-->
    <Aplicacion2 />
    <!--Footer-->
    <Footer />
  </div>
</template>
<script>
import HeaderMain5 from "@/components/HeaderMain5.vue";
import Aplicacion2 from "@/components/Aplicacion2.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "General",
  components: {
    Aplicacion2,
    HeaderMain5,
    Footer,
  },
};
</script>
<style scoped></style>
