<template>
  <div class="about">
    <!--Header-->
    <HeaderMain2 />
    <!--Main-->
    <Acceso2 />
    <!--<Footer/>-->
    <Footer />
  </div>
</template>
<script>
import HeaderMain2 from "@/components/HeaderMain2.vue";
import Footer from "@/components/Footer.vue";
//import Footer2 from '@/components/Footer2.vue'
import Acceso2 from "@/components/Acceso2.vue";
export default {
  name: "Acceso",
  components: {
    HeaderMain2,
    Footer,
    Acceso2,
    //Footer2
  },
};
</script>
<style scoped></style>
