<template>
  <el-container class="home-container">
    <!-- 头部区域开始 -->
    <el-header>
      <div>
        <img src="@/assets/logo.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info">退出</el-button>
    </el-header>
    <!-- 头部区域结束 -->

    <!--主体区域开始 -->
    <el-container>
      <!-- 侧边栏区域开始 -->
      <home-aside></home-aside>
      <!-- 侧边栏区域结束 -->

      <!-- 内容区域开始 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- 内容区域结束 -->
    </el-container>
    <!-- 主体区域结束 -->
  </el-container>
</template>

<script>
// @ is an alias to /src
import HomeAside from './HomeAside.vue'
export default {
  name: 'Home',
  data(){
    return{
      
    }
  },
  components: {
    HomeAside
  },
  methods: {

  },
  created(){
    
  }

}
</script>

<style lang="scss">
.el-container {
  height: 100%;
  .el-header {
    background-color: #373D41;
    display:  flex;
    justify-content: space-between;
    align-items: center;
    div {
      height: 80%;
      display: flex;
      align-items: center;
      img {
        height: 100%;
      }
      span {
        margin-left: 15px;
        vertical-align: middle;
        color: #FFF;
        font-size: 20px;
      }
    }
    .el-button {
      height: 80%;
    }
  }
  .el-aside {
    background-color: #373D41;
  }
  .el-main {
    background-color: #EAEDF1;
  }
}
</style>
