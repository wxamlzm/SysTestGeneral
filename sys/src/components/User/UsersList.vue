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
                    <el-input placeholder="请输入内容" v-model="query"  @input="debounce(getUserList, 2000)()">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>
            <el-table :data="showList" style="width: 100%" border>
                <el-table-column type="index" label="序号" width="120" align="center"></el-table-column>
                <el-table-column prop="username" label="账号" width="100" align="center"></el-table-column>
                <el-table-column prop="name" label="用户名" align="center"></el-table-column>
                <el-table-column prop="role" label="是否管理员" align="center">
                    <template slot-scope="scope">
                        <el-switch
                            v-model="scope.row.isAdmin"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="center">
                    <template>
                        <!-- 修改 -->
                        <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
                        <!-- 分配角色 -->
                        <el-tooltip effect="dark" content="分配角色" placement="top-start" :enterable="false">
                            <el-button type="warning" icon="el-icon-star-off" size="mini"></el-button>
                        </el-tooltip>
                        
                        <!-- 删除 -->
                        <el-button type="danger" icon="el-icon-delete" size="mini"></el-button>

                    </template>
                </el-table-column>
            </el-table>
            <!-- 搜索区域结束 -->
            <!-- 分页区域开始 -->
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="list.length">
            </el-pagination>
        </el-card>
        <!-- 卡片视图结束 -->
    </div>
</template>

<script>
import { getUsers, searchUser } from "@/api/user.js"

export default {
    name: 'userslist',
    data() {
        return {
            query:'',
            list: [],
            showList: [],
            pageSizes: [5, 10],
            pageSize: 5,
            currentPage: 1
        }
    },
    methods:{
        handleSizeChange(newSize){
            this.pageSize = newSize;
            this.toShowList(this.currentPage, this.pageSize);
        },
        handleCurrentChange(newPage){
            this.currentPage = newPage;
            this.toShowList(this.currentPage, this.pageSize);
        },
        toShowList(currentPage, pageSize){
            currentPage = parseInt(currentPage);
            let start = (currentPage - 1) * pageSize;
            let end = currentPage * pageSize;
            this.showList = this.list.slice(start, end)
        },
        debounce(fn, delay){
            console.log('debounce')
            // 注册定时器
            let timer;
            // 抛出带有定时器的回调
            return () => {
            // 如果检测到定时器存在，则清除
                if(timer){
                    clearTimeout(timer);
                }

                // 重新包裹定时器
                timer = setTimeout( () => {
                    fn();
                }, delay)
            }
        },
        getUserList(){
            const params = {
                params: {username: this.query}
            };
            searchUser(params).then( res => {
                let list = [];
                console.log(res);
                res.data.forEach(el => {
                    el.isAdmin = parseInt(el.isAdmin) ? true : false;
                    list.push(el);
                })
                console.log(list)
                this.showList = list;
            })
        },

    },
    mounted(){
        getUsers().then( res => {
            // // 调整接收的数据结构以用于渲染
            let data = res.data;
            data.forEach((element, n) => {
                element.isAdmin = parseInt(element.isAdmin) ? true : false;
                element._id = n + 1;
                this.list.push(element);
            });
            this.list = res.data;
            this.currentPage =  1;
            this.toShowList(this.currentPage, this.pageSize);
        })
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
    .el-table {
        margin-top: 20px;
    }
    .el-pagination {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>