<template>
  <div class="box">
    <el-form :model="formData">
      <el-form-item label="图书名">
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="formData.author"></el-input>
      </el-form-item>
      <el-form-item label="图书描述">
        <el-input v-model="formData.desc"></el-input>
      </el-form-item>
      <el-form-item label="图书头图">
        <imgUpload v-model="formData.img"></imgUpload>
      </el-form-item>
      <el-form-item label="图书分类">
        <el-select v-model="formData.type">
          <el-option v-for="(item, index) in tableData"
                     :key="index"
                     :value="item._id"
                     :label="item.title"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="图书排序">
        <el-input-number v-model="formData.index" :min="1" :max="998" label="数字越大越靠前"></el-input-number>
      </el-form-item>
    </el-form>
    <el-button @click="handleSubmit" type="warning">
      保存更改
    </el-button>
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
            img: '',
            author: '',
            desc: '',
            type: ''
          },
          tableData: []
        }
      },
      methods: {
        getData () {
          let id = this.$route.query.id
          this.$axios.get(`/book/${id}`).then(res => {
            this.formData = res.data
          })
        },
        getCategory () {
          return new  Promise(resolve => {
            this.$axios.get('category').then(res => {
              // console.log(res);
              this.tableData = res.data
              resolve()
            })
          })
        },
        handleSubmit () {
          let params = {
            ...this.formData,
            book_id: this.$route.query.id
          }
          this.$axios.put('/book', params).then(res => {
            if(res.code == 200) {
              this.$message.success('修改成功')
              setTimeout(() => {
                this.$router.push('/index/books')
              }, 1000)
            } else {
              this.$message.error(data.msg)
            }
          })
        }
      },
      created () {
        this.getCategory().then(() => {
          this.getData()
        })
      }
    }
</script>

<style scoped>
  .box{
    margin: 10px;
  }
</style>
