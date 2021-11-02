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
                    <el-input placeholder="请输入内容" v-model="queryinfo"  @input="handleInputChange">
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

        <!-- 对话框 -->
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { getUsers } from "@/api/user.js"

export default {
    name: 'userslist',
    data() {
        return {
            queryinfo:'',
            list:[],
            showList: [],
            pageSizes: [5, 10],
            pageSize: 5,
            currentPage: 1,
            handleInputChange: this.debounce(this.getUserList, 2000),
            dialogVisible: true
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
        // 通过封装接口，发送请求，获取指定条件的数据
        getUserList(){
            const params = {
                params:{username: this.queryinfo}
            }
            getUsers(params).then( res => {
                // 处理数据
                let list = [];
                res.data.forEach( el => {
                    el.isAdmin = parseInt(el.isAdmin) ? true : false;
                    list.push(el);
                });
                this.list = list;
                console.log(this.list);
                // 渲染分页数据
                this.toShowList(this.currentPage, this.pageSize, this.list)
            });
        },
        // 对后端获取的数据进行处理，并按业务需求渲染
        toShowList(currentPage, pageSize){
            currentPage = parseInt(currentPage);
            let start = (currentPage - 1) * pageSize;
            let end = currentPage * pageSize;
            this.showList = this.list.slice(start, end)
        },
        debounce(fn, delay){
            let timer;
            return (...args) => {
                console.log(timer);
                // 判断定时器是否存在，清除定时器
                if(timer) {
                    clearTimeout(timer);
                }

                // 重新调用setTimeout
                timer = setTimeout(()=>{
                    fn.apply(this, args);
                }, delay);
            }
        }
    },
    mounted(){
        this.getUserList();
    },
    beforeDestory(){
        this.handleInputChange = null;
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