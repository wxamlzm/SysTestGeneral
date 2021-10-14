<template>
    <div class="users-list">
        <!-- 导航区域开始 -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 导航区域结束 -->
    </div>
</template>

<script>
export default {
    name: 'userslist'
}
</script>