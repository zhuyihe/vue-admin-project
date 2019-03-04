<template>
  <div class="home">
    <el-row :gutter="40">
      <el-col :span="6">
        <div class="grid-content bg-white">
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <div class="icons">
                  <i class="iconfont icon-yonghu"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">用户</li>
                  <li><countTo :startVal='user.startVal' :endVal='user.endVal' :duration='1000'></countTo></li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-white">
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <div class="icons">
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">消息</li>
                  <li><countTo :startVal='user.startVal' :endVal='user.endVal' :duration='1000'></countTo></li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-white">
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <div class="icons">
                  <i class="iconfont icon-yonghu"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">用户</li>
                  <li><countTo :startVal='user.startVal' :endVal='user.endVal' :duration='1000'></countTo></li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-white">
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <div class="icons">
                  <i class="iconfont icon-yonghu"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">用户</li>
                  <li><countTo :startVal='user.startVal' :endVal='user.endVal' :duration='1000'></countTo></li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// 数字滚动插件
import countTo from 'vue-count-to';
export default {
  name: "home",
  components: { countTo },
  data(){
    return{
      user:{
        startVal: 0,
        endVal: 10951
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding: 20px;
  background: #f0f2f5;
  .bg-white {
    background: white;
    cursor: pointer;
    .icons {
      text-align: left;
      width: 86px;
      height: 86px;
      margin: 10px;
      padding: 10px;
      transition: 0.3s ease-in-out;
      border-radius: 3px;
      &:hover {
        background: #4d79f6;
        .icon-yonghu {
          color: white;
        }
      }
      .iconfont{
        font-size: 60px;
      };
      .icon-yonghu {
        font-size: 60px;
        color: #4d79f6;
      }
    }
    .icons-right {
      font-size: 24px;
      margin: 16px;
      li {
        margin: 10px 0;
      }
    }
    .chain{
      color: rgba(0, 0, 0, 0.45);
      font-size: 18px;
    }
  }
}
</style>

