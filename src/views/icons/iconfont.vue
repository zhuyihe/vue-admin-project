<template>
  <div class="icon-container">
    <el-row>
      <el-col :span="4" v-for="(item,index) in iconfonts" :key="index">
        <div class="grid-content bg-purple" @dblclick="doCopy(item)">
          <!-- <i :class="`${'iconfont '+item}`"></i> -->
          <svg class="icon-font">
            <use :xlink:href="`${'#'+item}`" />
          </svg>
          <br />
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
  mounted() {
    this.$notify.info({
      title: "消息",
      message: "双击剪切"
    });
  },
  data() {
    return {
      iconfonts: iconfont
    };
  },
  methods: {
    doCopy(item) {
      this.$copyText(item)
        .then(res => {
          this.$message("success", "复制成功");
        })
        .catch(e => {
          this.$message("error", "复制失败");
          console.log(e);
        });
    }
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
.icon-font {
  width: 32px;
  height: 32px;
}
</style>

