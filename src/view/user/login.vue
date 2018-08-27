<template>
  <div class="body">
    <div class="content">
      <h1>请登录后台操作系统</h1>
      <!--<div>-->
        <!--<div>-->
          <!--用户名：<input type="text">-->
        <!--</div>-->
        <!--<div>-->
          <!--密码：<input type="password">-->
        <!--</div>-->
        <!--<button>登录</button>-->
      <!--</div>-->
      <el-radio-group v-model="labelPosition" size="small">
      </el-radio-group>
      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="管理员：">
          <el-input v-model="formLabelAlign.name" style="width: 400px;"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input v-model="formLabelAlign.region" type="password" style="width: 400px;"></el-input>
        </el-form-item>
        <el-row>
          <el-button type="primary" plain style="width: 400px; margin-top: 10px" @click="handleLogin" :loading="isLogining">登录</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      data() {
        return {
          labelPosition: 'right',
          formLabelAlign: {
            name: 'admin',
            region: 'admin'
          },
          isLogining: false
        }
      },
      methods: {
        handleLogin () {
          let params = {
            username: this.formLabelAlign.name,
            password: this.formLabelAlign.region
          }
          this.$axios.post('login',params).then(res=>{
            console.log(res);
            if(res.code == 200){
              this.$store.commit('SET_USERINFO',res.data)
              alert(`欢迎${res.data.username}进入后台操作系统`)
              this.$router.push('/index/get')
            }
            else {
              alert(`${res.msg},请输入正确的信息`)
            }
          })
        },
        // handleLogin () {
        //   this.isLogining = true
        //   this.$store.dispatch('login', this.formLabelAlign).then((isLogin) => {
        //     this.isLogining = false
        //     if(isLogin) {
        //       this.$router.push('/get')
        //     }
        //   }).catch(err => {
        //     this.isLogining = false
        //     this.$message.error('连接超时，请检查您的网络')
        //   })
          // this.login(this.formLabelAlign).then(isLogin => {
          //   console.log(isLogin);
          //   this.isLogining = false
          //   if(isLogin) {
          //     this.$router.push('/get')
          //   }
          // }) .catch(err => {
          //   this.isLogining = false
          //   this.$message.error('连接超时，请检查您的网络')
          // })
      },
      computed:{
        ...mapState(['userInfo'])
      },
      created(){
        console.log(this.userInfo);
      }
    }
</script>

<style scoped>
  .body{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
  }
  .content{
    width: 500px;
    height: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -250px;
    border-radius: 4px;
    background: #fff;
    text-align: center;
  }
  h1{
    margin-top: 10px;
  }
</style>
