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
                  <li>
                    <countTo :startVal="user.startVal" :endVal="user.endVal" :duration="1000"></countTo>
                  </li>
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
                <div class="icons icons1">
                  <i class="iconfont icon-xiaoxi"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">消息</li>
                  <li>
                    <countTo :startVal="user.startVal" :endVal="user.endVal" :duration="1000"></countTo>
                  </li>
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
                <div class="icons icons2">
                  <i class="iconfont icon-liuliang"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">今日访问量</li>
                  <li>
                    <countTo :startVal="user.startVal" :endVal="user.endVal" :duration="1000"></countTo>
                  </li>
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
                <div class="icons icons3">
                  <i class="iconfont icon-yanjing"></i>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <ul class="icons-right">
                  <li class="chain">总访问量</li>
                  <li>
                    <countTo :startVal="user.startVal" :endVal="user.endVal" :duration="1000"></countTo>
                  </li>
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
import countTo from "vue-count-to";
export default {
  name: "home",
  components: { countTo },
  data() {
    return {
      user: {
        startVal: 0,
        endVal: 10951
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
  padding: 20px;
  background: $base-gray1;
  .bg-white {
    background: $base-white;
    cursor: pointer;
    .icons {
      text-align: left;
      width: 86px;
      height: 86px;
      margin: 10px;
      padding: 13px;
      transition: 0.3s ease-in-out;
      border-radius: 3px;
      &:hover {
        background: $base-bule1;
        .icon-yonghu {
          color: $base-white;
        }
      }
      .iconfont {
        font-size: 60px;
      }
      .icon-yonghu {
        font-size: 60px;
        color: $base-bule1;
      }
    }
    .icons1 {
      &:hover {
        background: $base-ye;
        .icon-xiaoxi {
          color: $base-white;
        }
      }
      .icon-xiaoxi {
          color: $base-ye;
      }
    }
    .icons2 {
      &:hover {
        background: $base-green;
        .icon-liuliang {
          color: $base-white;
        }
      }
      .icon-liuliang {
          color: $base-green;
      }
    }
    .icons3 {
      &:hover {
        background: $base-pink;
        .icon-yanjing {
          color: $base-white;
        }
      }
      .icon-yanjing {
          color: $base-pink;
      }
    }
    .icons-right {
      font-size: 24px;
      margin-top:16px;
      margin-right: 16px; 
      li {
        margin: 10px 0;
      }
    }
    .chain {
      color: rgba(0, 0, 0, 0.45);
      font-size: 18px;
    }
  }
}
</style>

