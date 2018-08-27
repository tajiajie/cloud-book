<template>
  <div class="box">
    <el-table :data="tableData">
      <el-table-column prop="title"
                       label="书名"
      >
      </el-table-column>
      <el-table-column prop="img"
                       label="图书图标"
      >
        <template slot-scope="data">
          <img :src="data.row.img" class="pic">
        </template>
      </el-table-column>
      <el-table-column prop="author"
                       label="作者"
      >
      </el-table-column>
      <el-table-column prop="index"
                       label="书籍排序"
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
          <el-button  type="danger" size="small" @click="handleDelete(scope.row._id)">
            删除图书
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
            tableData: []
          }
        },
      methods: {
        getData () {
          this.$axios.get('/book').then(res => {
            console.log(res);
            this.tableData = res.data
          })
        },
        handleDetail (id) {
          this.$router.push({name: 'book-detail', query: {id}})
        },
        handleEdit (id) {
          this.$router.push({name: 'book-edit', query: {id}})
        },
        handleDelete () {

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
    width: 60px;
    height: 60px;
  }
</style>
