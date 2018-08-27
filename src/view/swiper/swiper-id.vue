<template>
    <div class="box">
      <div class="content">
        <div class="left">
          <div class="nice">{{msg.title}}</div>
          <img class="pic" :src="msg.img">
        </div>
        <div class="right" v-if="msg.book">
          <div>
            <img class="right-pic" :src="msg.book.img">
          </div>
          <div>
            <div>作者：{{msg.book.author}}</div>
            <div>描述：{{msg.book.desc}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          msg: {}
        }
      },
      methods: {
        getData() {
          let id = this.$route.query.id
          this.$axios.get(`/swiper/${id}`).then(res => {
            console.log(res.data);
            this.msg = res.data
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
    margin-top: 36px;
    display: flex;
    justify-content: flex-start;
  }
  .right-pic{
    width: 120px;
    height: 150px;
    margin-right: 15px;
    box-shadow: 0 0 4px #000;
  }
  .nice{
    font-weight: 700;
    font-size: 20px;
  }
</style>
