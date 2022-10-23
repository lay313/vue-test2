<template>
  <el-container class="home-container">
    <el-header>xxx管理系统</el-header>
    <el-container>
      <el-aside width="200px">
        <el-row>
          <el-col>
            <el-menu :unique-opened="true" :router="true">
              <el-submenu index="1">
                <span slot="title">
                  <i class="el-icon-setting"></i>商品管理
                </span>
                <el-menu-item-group>
                  <el-menu-item @click="getMenuList">aaa</el-menu-item>
                  <!-- <el-menu-item>bbb</el-menu-item> -->
                </el-menu-item-group>
              </el-submenu>
              <!-- <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-setting"></i>订单管理
                </template>
                <el-menu-item-group>
                  <el-menu-item>选项2</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-setting"></i>用户管理
                </template>
                <el-menu-item-group>
                  <el-menu-item>选项3</el-menu-item>
                </el-menu-item-group>
              </el-submenu> -->
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from "axios";
import AppVue from "../App.vue";
import router from '@/router';
export default {
  name: "getMenuList",
  data() {
    return {
      menuList: [],
    };
  },
  created() {
    this.getMenuList;
  },
  methods: {
    async getMenuList() {
      //this.$axios.get("/api/bos/goods").then((res) => {console.log(res);}).catch(err) => {console.log(err);}
      /* const { data: res } = await axios.get('/api/bos/goods')
      console.log(data);
      if (res.meta.status !== true) return this.$message.error(res.meta.msg);
      this.menuList = res.data;
      console.log(res); */
      /* this.$router.push({path: "/guanli"}); */
    },
  },
};
</script>
<style lang="less" scoped>
.home-container {
  height: 100%;
}
/* .el-header {
  font-size: 30px;
  background-color: #cceeff;
  display: flex;
}
.el-menu {
  background-color: #bbffee;
}
.el-aside {
  background-color: #bbffee;
} */
</style>
