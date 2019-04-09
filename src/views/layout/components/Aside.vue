<template>
  <div class="aside">
    <el-menu
      :default-active="onRoutes"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      active-text-color="#bdb7ff"
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      items: [
        {
          icon: "el-icon-edit-outline",
          index: "home",
          title: "系统首页"
        },
        {
          icon: "el-icon-edit-outline",
          index: "icon",
          title: "自定义图标"
        },
        {
          icon: "el-icon-edit-outline",
          index: "component",
          title: "组件",
          subs: [
            {
              index: "editor",
              title: "富文本编译器"
            },
            {
              index: "countTo",
              title: "数字滚动"
            },
            {
              index: "trees",
              title: "树形控件",
              subs: [
                {
                  index: "tree",
                  title: "自定义树"
                },
                {
                  index: "treeSelect",
                  title: "下拉树"
                }
                // ,{
                //   index:'treeTable',
                //   title:'表格树',
                // }
              ]
            },
          ]
        },
        {
          icon: "el-icon-edit-outline",
          index: "draggable",
          title: "拖拽",
          subs: [
            {
              index: "draglist",
              title: "拖拽列表"
            },
            {
              index: "dragtable",
              title: "拖拽表格"
            }
          ]
        },
        {
          icon: "el-icon-edit-outline",
          index: "charts",
          title: "图表",
          subs: [
            {
              index: "cricle",
              title: "饼图"
            },
          ]
        },
        // {
        //   icon: "el-icon-edit-outline",
        //   index: "7",
        //   title: "错误处理",
        //   subs: [
        //     {
        //       index: "permission",
        //       title: "权限测试"
        //     },
        //     {
        //       index: "404",
        //       title: "404页面"
        //     }
        //   ]
        // },
      ]
    };
  },
  computed: {
    onRoutes() {
      console.log(this.$route.path.replace("/", ""))
      return this.$route.path.replace("/", "");
    },
    ...mapState(["isCollapse"])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.aside {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    height: 100%;
    text-align: left;
  }
  .el-menu--collapse {
    height: 100%;
  }
}
</style>
