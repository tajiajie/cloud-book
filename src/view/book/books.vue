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
    <el-button-group class="btn">
      <el-button type="primary" icon="el-icon-arrow-left" @click="handleReduce">上一页</el-button>
      <el-button type="primary" @click="handleAdd">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
  </div>
</template>

<script>
    export default {
        data () {
          return {
            tableData: [],
            params: {
              pn: 1,
              size: 5
            }
          }
        },
      methods: {
        getData () {
          this.$axios.get('/book', this.params).then(res => {
            // console.log(res);
            this.tableData = res.data
          })
        },
        handleDetail (id) {
          this.$router.push({name: 'book-detail', query: {id}})
        },
        handleEdit (id) {
          this.$router.push({name: 'book-edit', query: {id}})
        },
        handleDelete (id) {
          // console.log(id);
          this.$confirm('此操作将永久删除该图书, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$axios.delete(`/book/${id}`).then(res => {
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
        },
        handleReduce () {
          this.params.pn -= 1
          this.getData()
          if (this.params.pn < 1) {
            this.params.pn = 1
            this.$message({
              type: 'warning',
              message: '已是第一页!'
            });
          }
        },
        handleAdd () {
          this.params.pn += 1
          this.$axios.get('/book', this.params).then(res => {
            if (res.data.length == 0) {
              this.params.pn -= 1
              this.$message({
                type: 'warning',
                message: '不要点了，没有更多书了!'
              });
            } else {
              this.tableData = res.data
            }
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
  .pic{
    width: 60px;
    height: 60px;
  }
  .btn{
    margin: 10px;
    display: flex;
    justify-content: center;
  }
</style>
