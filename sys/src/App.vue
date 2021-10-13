<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(["name"])
  },
  mounted(){
    console.log(this.name);
  }
}
</script>
<style lang="scss">
@import "@/assets/css/reset.scss";

</style>
