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
                <el-menu-item index="4-2" @click="handleAddswiper">添加轮播图</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="top">
      <h1>{{title}}</h1>
      <el-dropdown class="user-handle">
        <div class="avatar-wrap">
          <img :src="userInfo.avatar" v-if="userInfo.avatar">
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="handlePerson">个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="handleLoginout">推出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      computed: {
        ...mapState(['userInfo']),
        title() {
          if(this.$route.meta && this.$route.meta.title){
            return this.$route.meta.title
          }
          else {
            return '后台操作系统'
          }
        }
      },
      methods: {
        handleCom () {
          this.$router.push('/index/get')
        },
        handleAdd () {
          this.$router.push('/index/add')
        },
        handleCategory () {
          this.$router.push('/index/category')
        },
        handleAddcate () {
          this.$router.push('/index/category/add')
        },
        handleAddbook () {
          this.$router.push('/index/add-book')
        },
        handlebooks () {
          this.$router.push('/index/books')
        },
        handleSwiper () {
          this.$router.push('/index/swiper')
        },
        handleAddswiper () {
          this.$router.push('/index/swiper/add')
        },
        handlePerson () {
          this.$router.push('/index/person')
        },
        handleLoginout () {
          this.$axios.get('/logout').then(res => {
            if (res.code == 200) {
              this.$message.success('退出登录成功')
              this.$store.commit('SET_USERINFO', {userInfo: '', avatar: '', email: '', desc: ''})
              this.$router.push('/login')
            } else {
              this.$message.error(res.msg)
            }
          }).catch(err => {
            this.$message.error(err)
          })
        }
      },
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
  position: relative;
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
    position: absolute;
    right: 40px;
    top: 20px;
  }
  .avatar-wrap {
    border: 1px solid #f1f1f1;
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
  .avatar-wrap img{
    display: block;
    width: 100%;

  }
</style>
