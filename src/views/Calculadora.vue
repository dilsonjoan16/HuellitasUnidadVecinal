<template>
  <div class="Calculadora">
    <!--Header-->
    <HeaderMain6 />
    <!--Main-->
    <Prueba />
    <!--Footer-->
    <Footer />
  </div>
</template>
<script>
import Prueba from "@/components/Prueba.vue";
import HeaderMain6 from "@/components/HeaderMain6.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Calculadora",
  components: {
    Prueba,
    HeaderMain6,
    Footer,
  },
};
</script>
<style scoped></style>