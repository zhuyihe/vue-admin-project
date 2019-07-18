<template>
  <!-- 打开标签的容器 -->
  <div class="tags">
    <scroll-pane wrap-class="scrollbar-wrapper">
      <ul>
        <li
          class="tags-li"
          v-for="(item,index) in tagsList"
          :key="index"
          :class="{'active': isActive(item.path)}"
        >
          <router-link :to="item.path" class="tags-li-title">{{$t('route.'+item.title)}}</router-link>
          <span class="tags-li-icon" @click="closeTags(index,item.path)">
            <i class="el-icon-close"></i>
          </span>
        </li>
      </ul>
    </scroll-pane>
    <div class="tags-close-box">
      <el-dropdown @command="handleCommand">
        <el-button size="mini" type="primary">
          {{$t('header.labelOptions')}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
          <el-dropdown-item command="closeOther">{{$t('header.closeOthers')}}</el-dropdown-item>
          <!-- <el-dropdown-item command="all">关闭所有</el-dropdown-item> -->
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { messages } from "@assets/js/common.js";
// import { mapState } from "vuex";
import ScrollPane from "./ScrollPane";
export default {
  created() {
    //判断标签里面是否有值 有的话直接加载
    if (this.tagsList.length == 0) {
      this.setTags(this.$route);
    }
  },
  components: {
    ScrollPane
  },
  computed: {
    //computed 方法里面没有set方法因此不能使用mapState,需要重新定义set方法
    tagsList: {
      get: function() {
        return this.$store.state.tagsList;
      },
      set: function(newValue) {
        this.$store.commit("TAGES_LIST", newValue);
        // this.$store.state.tagsList = newValue;
      }
    }
  },
  watch: {
    //监听路由变化
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  },
  methods: {
    //选中的高亮
    isActive(path) {
      return path === this.$route.fullPath;
    },
    handleCommand(command) {
      if (command == "closeOther") {
        // 关闭其他标签
        const curItem = this.tagsList.filter(item => {
          return item.path === this.$route.fullPath;
        });
        this.tagsList = curItem;
      }
    },
    //添加标签
    setTags(route) {
      let isIn = this.tagsList.some(item => {
        //判断标签是否存在
        return item.path === route.fullPath;
      });
      //不存在
      if (!isIn) {
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.name
        });
        //存到vuex
        this.$store.commit("TAGES_LIST", this.tagsList);
      }
    },
    closeTags(index, path) {
      if (this.tagsList.length == 1) {
        messages("warning", "不可全都关闭");
      } else {
        //删除当前
        let tags = this.tagsList.splice(index, 1);
        this.$store.commit("TAGES_LIST", this.tagsList);
      }
      if (path === this.$route.fullPath) {
        //如果关闭当前直接跳到下一个
        this.$router.push(
          this.$store.state.tagsList[this.$store.state.tagsList.length - 1]
        );
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: $base-white;
  padding-right: 100px;
  box-shadow: 0 5px 10px #ddd;
  z-index: 10;
}

.tags ul {
  box-sizing: border-box;
  width: 1000%;
  height: 100%;
}

.tags-li {
  float: left;
  margin: 3px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: $base-white;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: $base-666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: $base-f8;
}

.tags-li.active {
  color: $base-white;
  border: 1px solid $base-color;
  background-color: $base-color;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: $base-666;
}

.tags-li.active .tags-li-title {
  color: $base-white;
}

.tags-close-box {
  position: absolute;
  right: 0;
  top: 0;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  // width: 110px;
  height: 30px;
  background: $base-white;
  box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
<style>
.tags .el-scrollbar .scrollbar-wrapper .el-scrollbar__view {
  overflow: initial !important;
}
</style>

