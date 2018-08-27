<template>
    <div class="box">
      <h2>{{msg.title}}</h2>
      <div class="content">
        <img :src="msg.img" alt="">
        <div class="right-box">
          <div class="item">
            作者：{{msg.author}}
          </div>
          <div class="item sup">
            <div style="width: 50px;">描述：</div><div style="width: 850px;">{{msg.desc}}</div>
          </div>
          <div class="item">
            阅读人数：{{msg.looknums}}
          </div>
          <div class="item">
            更新时间：{{msg.updateTime}}
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        data () {
          return {
            msg: ''
          }
        },
        methods: {
          gatData () {
            let id = this.$route.query.id
            this.$axios.get(`/book/${id}`).then(res => {
              console.log(res);
              this.msg = res.data
            })
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
  .content{
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
  }
  .content img{
    width: 150px;
    height: 200px;
    margin-right: 20px;
  }
  .right-box{

  }
  .item{
    margin-top: 10px;
  }
  .sup{
    display: flex;
    justify-content: flex-start;
  }
</style>
