<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    const api = `${process.env.APIPATH}/signin`;
    //"https://vue-course-api.hexschool.io/api/order/products"
    console.log(process.env.APIPATH, process.env.CUSTOMPATH);
    this.axios.post(api).then((response) => {
      console.log(response.data);
    });
  },
};
</script>

<style lang="scss">
@import "./assets/all";
</style>
