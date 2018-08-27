<template>
    <div class="box">
      <div class="top">
        <h2>{{msg.title}}</h2>
        <img :src="msg.icon" alt="">
      </div>

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
        <el-table-column prop="looknums"
                         label="阅读人数"
                         width="100px"
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
            tableData: [],
            msg: ''
          }
        },
      methods: {
          getData () {
            let id = this.$route.query.id
            this.$axios.get(`/category/${id}/books`).then(res => {
              console.log(res)
              this.msg = res.data
              this.tableData = res.data.books
            })
          },
        handleDetail (id) {
          this.$router.push({name: 'book-detail', query: {id}})
        },
        handleEdit (id) {
          this.$router.push({name: 'book-edit', query: {id}})
        },
        handleDelete (bookid) {
          this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let id = this.$route.query.id
            this.$axios.delete(`/category/${id}/book/${bookid}`).then(res => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              if (res.code == 200) {
                this.getData()
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
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
  .top {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }
  h2{
    margin-right: 10px;
  }
  .top img{
    width: 60px;
    height: 60px;
  }
  .pic{
    width: 60px;
    height: 60px;
  }
  .btn{
    display: flex;
    justify-content: space-between;
  }
</style>
