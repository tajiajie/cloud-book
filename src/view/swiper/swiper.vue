<template>
    <div class="box">
      <el-table :data="swiper">
        <el-table-column prop="title"
                         label="书名"
        >
        </el-table-column>
        <el-table-column prop="img"
                         label="轮播图标"
        >
          <template slot-scope="data">
            <img :src="data.row.img" class="pic1">
          </template>
        </el-table-column>
        <el-table-column prop="index"
                         label="轮播图排序"
        >
        </el-table-column>
        <el-table-column prop="book.img"
                         label="图书图标"
        >
          <template slot-scope="data">
            <img :src="data.row.book.img" class="pic2">
          </template>
        </el-table-column>
        <el-table-column prop="book.author"
                         label="图书作者"
        >
        </el-table-column>
        <el-table-column  label="操作" width="300px">
          <template slot-scope="scope" class="btn">
            <el-button type="primary" plain size="small" @click="handleEdit(scope.row._id)">
              编辑
            </el-button>
            <el-button type="info" plain size="small" @click="handleDetail(scope.row._id)">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          swiper: []
        }
      },
      methods: {
        gatData () {
          this.$axios.get('/swiper').then(res => {
            // console.log(res.data)
            this.swiper = res.data
          })
        },
        handleEdit(id) {
          this.$router.push({name: 'swiper-edit', query: {id}})
        },
        handleDetail (id) {
          this.$router.push({name: 'swiperid', query: {id}})
        }
      },
      created () {
        this.gatData()
      }
    }
</script>

<style scoped>
  .box{
    margin: 10px;
  }
  .pic1{
    width: 100px;
    height: 70px;
    box-shadow: 0 0 2px;
  }
  .pic2{
    width: 60px;
    height: 70px;
    box-shadow: 0 0 2px;
  }
</style>
