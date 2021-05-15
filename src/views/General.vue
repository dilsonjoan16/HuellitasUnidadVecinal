<template>
  <div class="General">
    <!--Header-->
    <HeaderMain />
    <!--Main-->
    <General2 />
    <!--Footer-->
    <Footer />
  </div>
</template>
<script>
import HeaderMain from "@/components/HeaderMain.vue";
import General2 from "@/components/General2.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "General",
  components: {
    General2,
    HeaderMain,
    Footer,
  },
};
</script>
<style scoped></style>
