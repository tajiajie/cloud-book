<template>
  <div>
    <div class="tab">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="handleCom">管理员信息</el-menu-item>
                <el-menu-item index="1-2" @click="handleAdd">添加管理员</el-menu-item>
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>分类管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1" @click="handleCategory">分类列表</el-menu-item>
                <el-menu-item index="2-2" @click="handleAddcate">添加分类</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>图书管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1" @click="handlebooks">图书列表</el-menu-item>
                <el-menu-item index="3-2" @click="handleAddbook">添加图书</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>轮播图管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1" @click="handleSwiper">轮播图列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="top">
      <h1>{{title}}</h1>
      <div class="user-handle">

      </div>
      <!--<div class="user-handle">-->
        <!--<el-dropdown>-->
          <!--<div class="avatar-wrap">-->
            <!--<img :src="userInfo.avatar" v-if="userInfo.avatar">-->
          <!--</div>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
            <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
            <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
            <!--<el-dropdown-item>双皮奶</el-dropdown-item>-->
            <!--<el-dropdown-item>蚵仔煎</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
      <!--</div>-->
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  // import {mapState} from 'vuex'
    export default {
      // computed: {
      //   ...mapState(['userInfo'])
      // },
      methods: {
        handleCom () {
          this.$router.push('/get')
        },
        handleAdd () {
          this.$router.push('/add')
        },
        handleCategory () {
          this.$router.push('/category')
        },
        handleAddcate () {
          this.$router.push('/category/add')
        },
        handleAddbook () {
          this.$router.push('/add-book')
        },
        handlebooks () {
          this.$router.push('/books')
        },
        handleSwiper () {
          this.$router.push('/swiper')
        }
      },
      computed: {
        title() {
          if(this.$route.meta && this.$route.meta.title){
            return this.$route.meta.title
          }
          else {
            return '后台操作系统'
          }
        }
      }
    }
</script>

<style scoped>
.el-menu-vertical-demo{
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
}
.top{
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 2px solid #333;
  margin-left: 200px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  margin-bottom: 10px;
 }
  .content{
    position: fixed;
    top: 90px;
    left: 200px;
    bottom: 0;
    right: 0;
    overflow:scroll
  }
  .user-handle{
     float: right;
  }
</style>
