<template>
  <el-upload
    class="avatar-uploader"
    :data="uploadData"
    action="https://upload-z1.qiniup.com"
    :show-file-list="false"
    :on-success="uploadSuccess">
    <img :src="currentValue" class="upload-icon" v-show="currentValue">
    <i class="el-icon-plus my-upload-icon" v-show="!currentValue"></i>
  </el-upload>
</template>

<script>
  import axios from 'axios'
    export default {
    props: {
      value: {
        type: String
      }
    },
      data () {
        return {
          uploadData: {
            token: ''
          },
          currentValue: this.value
        }
      },
      methods: {
        uploadSuccess (file) {
          this.$emit('input', file.url)
        },
        getToken () { // 获取上传凭证
          axios.get('http://upload.yaojunrong.com/getToken').then(res => {
            // console.log(res.data.data)
            this.uploadData.token = res.data.data
          })
        }
      },
      watch: {
        value (val) {
          this.currentValue = val
        }
      },
      created () {
        this.getToken()
      }
    }
</script>

<style>
  .avatar-uploader{
    position: relative;
    float: left;
    display: block;
    border: 1px solid #eee;
    margin-top: 20px;
    width: 60px;
    height: 60px;
    border-radius: 6px;
  }
  .avatar-uploader .upload-icon{
    display: block;
    width: 100%;
  }
  .my-upload-icon{
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: lightgray;
    font-size: 24px;
  }
</style>
