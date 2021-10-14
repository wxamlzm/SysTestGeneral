<template>
    <div class="users-list">
        <!-- 导航区域开始 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 导航区域结束 -->
       
        <!-- 卡片视图开始 -->
        <el-card>
            <!-- 搜索区域开始 -->
            <el-row :gutter="20">
                <el-col :span="7">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>

            <!-- 搜索区域结束 -->
        </el-card>
        <!-- 卡片视图结束 -->
    </div>
</template>

<script>
import { getUsers } from "@/api/user.js"

export default {
    name: 'userslist',
    mounted(){
        console.log('hi,userlist')
        getUsers().then( res => console.log(res))
    }
}
</script>

<style lang="scss">
.users-list {
    .el-breadcrumb {
        margin-bottom: 15px;
        font-size: 12px;
    }
    .el-card {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    }
}
</style>