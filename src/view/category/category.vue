<template>
  <div>
    <el-table :data="tableData">
      <el-table-column prop="title"
                       label="分类名"
      >
      </el-table-column>
      <el-table-column prop="icon"
                       label="分类图标"
      >
        <template slot-scope="data">
          <img :src="data.row.icon" class="pic">
        </template>
      </el-table-column>
      <el-table-column prop="index" label="分类排序">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" plain size="small" @click="handleEdit(scope.row._id)">
            编辑
          </el-button>
          <el-button type="info" plain size="small" @click="handleDetail(scope.row._id)">
            查看详情
          </el-button>
          <el-button  type="danger" size="small" @click="handleDelete(scope.row._id)">
            删除分类
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
          this.$axios.get('category').then(res => {
            // console.log(res);
            this.tableData = res.data
          })
        },
        handleEdit (id) {
          this.$router.push({name: 'edit', query: {id}})
        },
        handleDelete (id) {
          this.$confirm('此操作将永久删除该分类,请确认该分类下没有图书。', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'

          }).then(() => {
            this.$axios.delete(`/category/${id}`).then(res => {
              // console.log(res)
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
        handleDetail (id) {
          this.$router.push({name: 'category-book', query: {id}})
        }
      },
      created () {
        this.getData()
      }
    }
</script>

<style scoped>
  .pic{
    width: 60px;
    height: 60px;
  }
</style>
