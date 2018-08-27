<template>
    <div class="box">
      <div class="content">
        <el-form label-width="80px" :model="formData" class="form">
          <el-form-item label="原密码">
            <el-input v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="formData.new_password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" style="width: 520px" @click="handleGai">
              提交修改
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          formData: {
            password: '',
            new_password: ''
          }
        }
      },
      methods: {
        getData () {
          this.$axios.put('/user/password', this.formData).then(res => {
            console.log(res)
          })
        },
        handleGai() {
          this.getData()
        }
      },
    }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
  }
  .content{

  }
  .form{
    width: 600px;
    margin: 0 auto;
    padding-top: 120px;
  }
</style>
