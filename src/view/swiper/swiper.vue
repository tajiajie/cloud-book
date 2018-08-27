<template>
    <div class="box">
      <div class="content" v-for="(item, index) in swiper" :key="index">
        <div class="left">
          <div style="font-weight: 700">{{item.title}}</div>
          <img class="pic" :src="item.img">
        </div>
        <div class="right">
          <div>
            <img class="right-pic" :src="item.book.img">
          </div>
          <div>
            <div>作者：{{item.book.author}}</div>
            <div>描述：{{item.book.desc}}</div>
          </div>
        </div>
      </div>
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
            console.log(res.data)
            this.swiper = res.data
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
  .left{
    margin-right: 16px;
  }
  .pic{
    width: 250px;
    height: 150px;
    margin-top: 10px;
    box-shadow: 0 0 4px #000;
  }
  .content{
    display: flex;
    justify-content: flex-start;
  }
  .right{
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
  }
  .right-pic{
    width: 120px;
    height: 150px;
    margin-right: 15px;
    box-shadow: 0 0 4px #000;
  }
</style>
