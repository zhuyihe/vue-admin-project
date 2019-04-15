<template>
  <div class="icon-container">
    <el-row>
      <el-col :span="4" v-for="(item,index) in iconfonts" :key="index">
        <div class="grid-content bg-purple">
          <i :class="`${'iconfont '+item}`"></i>
          <br>
          <el-tooltip :content="item" placement="top">
            <span>{{item}}</span>
          </el-tooltip>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { iconfont } from "@/assets/js/iconfont";
export default {
  data() {
    return {
      iconfonts: iconfont
    };
  }
};
</script>
<style lang="scss" scoped>
.icon-container {
  padding: 40px;
  background: $base-white;
  .el-col {
    border: 1px solid #999;
    border-top: 0;
    border-right: 0;
    height: 88px;
    &:nth-child(6n) {
      border-right: 1px solid #999;
    }
    &:nth-child(-n + 6) {
      border-top: 1px solid #999;
    }
    &:nth-last-child(1) {
      border-right: 1px solid #999;
    }
  }
  .grid-content {
    font-size: 12px;
    // line-height: 30px;
    padding: 15px 0;
    cursor: pointer;
    i {
      font-size: 30px;
      display: block;
    }
    span {
      display: inline-block;
    }
  }
}
</style>

