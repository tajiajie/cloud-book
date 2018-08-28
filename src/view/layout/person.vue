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
          <div class="btn">
            <el-button type="primary" style="width: 120px;" @click="handlePassword">
              修改密码
            </el-button>
            <el-button type="primary" style="width: 120px;" @click="handlePerson">
              修改个人信息
            </el-button>
          </div>
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
      },
      handlePerson () {
        this.$router.push('/index/my/edit')
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
  .btn{
    display: flex;
    justify-content: space-between;
  }
</style>
