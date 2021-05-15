<template>
  <div class="General">
    <!--Header-->
    <HeaderMain3 />
    <!--Main-->
    <Internet2 />
    <!--Footer-->
    <Footer />
  </div>
</template>
<script>
import HeaderMain3 from "@/components/HeaderMain3.vue";
import Internet2 from "@/components/Internet2.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "General",
  components: {
    Internet2,
    HeaderMain3,
    Footer,
  },
};
</script>
<style scoped></style>
