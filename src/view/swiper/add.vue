<template>
 <div class="box">
   <el-form :model="formData" style="width: 500px;">
     <el-form-item label="轮播图的标题">
       <el-input v-model="formData.title"></el-input>
     </el-form-item>
     <el-form-item label="轮播对应的图书">
       <el-select v-model="formData.book">
         <el-option v-for="(item, index) in tableData"
                    :key="index"
                    :value="item._id"
                    :label="item.title"
         ></el-option>
       </el-select>
     </el-form-item>
     <el-form-item label="轮播图片">
       <imgUpload v-model="formData.img"></imgUpload>
     </el-form-item>
     <el-form-item label="图书排序">
       <el-input-number v-model="formData.index" :min="1" :max="998" label="数字越大越靠前"></el-input-number>
     </el-form-item>
   </el-form>
   <el-button @click="handleSubmit" type="primary">
     添加轮播图
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
              book: '',
              index: ''
            },
            tableData: []
          }
        },
        methods: {
          getBook () {
            this.$axios.get('/book').then(res => {
              console.log(res);
              this.tableData = res.data
            })
          },
          handleSubmit () {
            this.$axios.post('/swiper', this.formData).then(res => {
              if(res.code == 200) {
                this.$message.success('添加成功')
                setTimeout(() => {
                  this.$router.push('/index/swiper')
                }, 1000)
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        },
      created () {
        this.getBook()
      }
    }
</script>

<style scoped>
  .box{
    margin: 10px 0 0 20px;
  }
</style>
