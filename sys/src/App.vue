<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$store.state.name);
  }
}
</script>
<style lang="scss">
@import "@/assets/css/reset.scss";

</style>
