<template>
  <div class="oportunidades">
    <Header />
    <CarruselCard />
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarruselCard from "../components/CarruselCard";

export default {
  components: {
    Header,
    Footer,
    CarruselCard,
  },
};
</script>
<style scoped></style>
