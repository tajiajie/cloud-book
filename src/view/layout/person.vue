<template>
    <div class="box">
      <div class="content">
        <div>
          <img class="pic" :src="userInfo.avatar">
        </div>
        <div class="right">
          <div class="item">我的账号：{{userInfo.username}}</div>
          <div class="item">我的邮箱：{{userInfo.email}}</div>
          <div class="item">昵称：{{userInfo.nickname}}</div>
          <div class="item">描述：{{userInfo.desc}}</div>
          <el-button type="primary" style="width: 280px;" @click="handlePassword">
            修改密码
          </el-button>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['userInfo']),
    },
    data() {
      return {}
    },
    methods: {
      handlePassword () {
        this.$router.push('/index/password')
      }
    },
  }
</script>

<style scoped>
  .box{
    margin: 10px;
  }
  .pic{
    width: 200px;
    height: 200px;

  }
  .content{
    display: flex;
    justify-content: flex-start;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-150px, -100px);
  }
  .right{
    border-left: 1px solid #000;
    padding: 10px;
  }
  .item{
    margin-bottom: 10px;
  }
</style>
