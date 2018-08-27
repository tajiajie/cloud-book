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
    data() {
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
      getData () {
        let id = this.$route.query.id
        this.$axios.get(`/swiper/${id}`).then(res => {
          console.log(res.data);
          this.formData = res.data
        })
      },
      getBook () {
        this.$axios.get('/book').then(res => {
          console.log(res);
          this.tableData = res.data
        })
      },
      handleSubmit () {
        let id = this.$route.query.id
        this.$axios.put(`/swiper/${id}`, this.formData).then(res => {
          if(res.code == 200) {
            this.$message.success('修改成功')
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
      this.getData()
      this.getBook()
    }
  }
</script>

<style scoped>
  .box{
    margin: 10px 0 0 20px;
  }
</style>
