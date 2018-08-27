<template>
  <div>
    <div class="content">
      <table>
        <tr border="1">
          <th>管理员</th>
          <th>头像</th>
          <th>描述</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in arr">
          <td>{{item.username}}</td>
          <td>
            <img :src="item.avatar" alt="">
          </td>
          <td>{{item.desc}}</td>
          <td>
            <el-row style="display: flex; justify-content: space-between">
              <el-button type="primary" plain  style="width: 100px; margin: 10px;" @click="handleLook(item._id)">查看详情</el-button>
              <el-button type="danger" style="width: 70px; margin: 10px" @click="handleDelete(item)">删除</el-button>
            </el-row>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: []
      }
    },
    methods: {
      getData () {
        this.$axios.get('user').then(res => {
          // console.log(res);
          if (res.code === 401) {
            alert(res.msg)
            this.$router.push('/login')
          }
          this.arr = res.data
        })
      },
      handleDelete (item) {
        // let other = this
        this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'

        }).then(() => {
          this.$axios.post('user/delete', {userIds: item._id}).then(res => {
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
      handleLook (id) {
        this.$router.push({name: 'detail', query: {id}})
      }
    },
    created () {
      this.getData()
    }
  }
</script>

<style scoped>
  .content{
    margin: 20px;
  }
  table
  {
    border-collapse :collapse;
    margin: 0 auto;
  }
  th,td
  {
    width:100px;
    height:40px;
    border :1px solid #e5e5e5;
    font-size:16px;
    text-align :center;
    color: #333;
  }
  td img{
    width: 70px;
    height: 70px;
  }
</style>
