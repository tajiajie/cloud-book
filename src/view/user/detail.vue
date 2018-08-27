<template>
    <div class="box">
      <div class="content">
        <div>
          <img class="pic" :src="formData.avatar">
        </div>
        <div class="right">
          <div class="item">管理员账号：{{formData.username}}</div>
          <div class="item">管理员邮箱：{{formData.email}}</div>
          <div class="item">管理员昵称：{{formData.nickname}}</div>
          <div class="item">描述：{{formData.desc}}</div>
          <div class="item">更新时间：{{formData.updatedTime}}</div>
          <el-button type="primary" style="width: 280px;" @click="handlePassword">
            修改密码
          </el-button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          formData: {}
        }
      },
      methods: {
        getData () {
          this.$axios.get('user').then(res => {
            // console.log(res.data);
            const getData = res.data.filter(item => {
              return item._id == this.$route.query.id
            })
            console.log(getData)
            this.formData = getData[0]
          })
        },
        handlePassword () {
          this.$router.push('/password')
        }
      },
      created () {
        this.getData()
      }
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
