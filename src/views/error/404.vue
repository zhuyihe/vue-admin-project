<template>
    <div class="err">
        <img src="../../assets/img/404.png" alt="">
        <p class="errCode">你所访问的页面不存在</p>
        <div class="error-handle">
          <router-link to="/home">
            <el-button type="primary" size="large">返回首页</el-button>
          </router-link>
          <el-button class="error-btn" type="primary" size="large" @click="back">返回上一页</el-button>
      </div>
    </div>    
</template>
<script>
export default {
    methods: {
      back(){
          this.$router.go(-1);
      }
  }
}
</script>
<style lang="scss" scoped>
    .err{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 100px;
    }
    .errCode{
        font-size: 20px
    }
    .error-handle{
        margin-top: 30px;
        padding-bottom: 200px;
    }
    .error-btn{
        margin-left: 100px;
    }
</style>
