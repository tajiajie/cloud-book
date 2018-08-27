<template>
  <div class="box">
    <el-form :data="formData" class="form">
      <el-form-item label="分类名">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="分类图片">
        <!--<el-button type="danger">-->
        <!--点击更换-->
        <!--</el-button>-->
          <imgUpload v-model="formData.icon"></imgUpload>
      </el-form-item>

      <el-form-item label="分类排序">
        <el-input-number v-model="formData.index" :min="1" :max="998" label="数字越大越靠前"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleAddcate" type="waring">
          提交修改
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
      data () {
        return {
          formData: {
            title: '',
            icon: '',
            index: ''
          }
        }
      },
      methods: {
        handleAddcate () {
          this.$axios.post('/category', this.formData).then(res => {
            if(res.code == 200) {
              this.$message.success('修改成功')
              setTimeout(() => {
                this.$router.push('/category')
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
