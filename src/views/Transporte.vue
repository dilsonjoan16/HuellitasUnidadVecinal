<template>
  <div class="General">
    <!--Header-->
    <HeaderMain4 />
    <!--Main-->
    <Transporte2 />
    <!--Footer-->
    <Footer />
  </div>
</template>
<script>
import HeaderMain4 from "@/components/HeaderMain4.vue";
import Transporte2 from "@/components/Transporte2.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "General",
  components: {
    Transporte2,
    HeaderMain4,
    Footer,
  },
};
</script>
<style scoped></style>
