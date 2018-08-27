<template>
    <div class="box">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="form">
        <el-form-item label="添加账号">
          <el-input v-model="formLabelAlign.username"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="formLabelAlign.nickname"></el-input>
        </el-form-item>
        <el-form-item label="email">
          <el-input v-model="formLabelAlign.email"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>

        <el-form-item label="描述">
          <el-input v-model="formLabelAlign.desc"></el-input>
        </el-form-item>
        <el-form-item label="头像上传">
          <imgUpload v-model="formLabelAlign.avatar"></imgUpload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 520px" @click="handleAdduser">
            添加
          </el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  import imgUpload from '@/components/img-upload'
  export default {
    components: {
      imgUpload
    },
      data() {
        return {
          labelPosition: 'right',
          formLabelAlign: {
            username: '',
            email: '',
            desc: '',
            avatar: '',
            nickname: '',
            password: ''
          }
        }
      },
    methods: {
      handleAdduser () {
        this.$axios.post('/user', this.formLabelAlign).then(res => {
          if(res.code == 200) {
            this.$message.success('添加成功')
            setTimeout(() => {
              this.$router.push('/get')
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
    margin: 20px;
  }
  .form{
    width: 600px;
  }
</style>
