<template>
    <div class="box">
      <el-form :data="formData" class="form">
        <el-form-item label="昵称">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="formData.desc"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="上传头像">
          <imgUpload v-model="formData.avatar"></imgUpload>
        </el-form-item>

        <el-form-item>
          <el-button @click="handleSave" type="danger">
            提交修改
          </el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import imgUpload from '@/components/img-upload'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['userInfo']),
    },
    components: {
      imgUpload
    },
    data () {
      return {
        formData: {
          avatar: '',
          desc: '',
          email: '',
          nickname:''
        }
      }
    },
    methods: {
      handleSave () {
        this.$axios.put('/user/userInfo', this.formData).then(res => {
          if(res.code == 200) {
            this.$message.success('修改成功')
            this.$store.commit('SET_USERINFO', {username: this.userInfo.username, avatar: this.formData.avatar, email: this.formData.email, desc: this.formData.desc, nickname: this.formData.nickname})
            setTimeout(() => {
              this.$router.push('/index/person')
            }, 1000)
          } else {
            this.$message.error(data.msg)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .box{
    margin: 10px;
  }
  .form{
    width: 600px;
  }
</style>
