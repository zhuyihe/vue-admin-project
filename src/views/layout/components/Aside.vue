<template>
  <div class="aside">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#ffd04b"
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
        // {
        //   icon: "el-icon-edit-outline",
        //   index: "table",
        //   title: "基础表格"
        // },
        // {
        //   icon: "el-icon-edit-outline",
        //   index: "tabs",
        //   title: "tab选项卡"
        // },
        // {
        //   icon: "el-icon-edit-outline",
        //   index: "3",
        //   title: "表单相关",
        //   subs: [
        //     {
        //       index: "form",
        //       title: "基本表单"
        //     },
        //     {
        //       index: "3-2",
        //       title: "三级菜单",
        //       subs: [
        //         {
        //           index: "editor",
        //           title: "富文本编辑器"
        //         },
        //         {
        //           index: "markdown",
        //           title: "markdown编辑器"
        //         }
        //       ]
        //     },
        //     {
        //       index: "upload",
        //       title: "文件上传"
        //     }
        //   ]
        // },
        {
          icon: "el-icon-edit-outline",
          index: "icon",
          title: "自定义图标"
        },
        // {
        //   icon: "el-icon-edit-outline",
        //   index: "charts",
        //   title: "schart图表"
        // },
        // {
        //   icon: "el-icon-edit-outline",
        //   index: "6",
        //   title: "拖拽组件",
        //   subs: [
        //     {
        //       index: "drag",
        //       title: "拖拽列表"
        //     },
        //     {
        //       index: "dialog",
        //       title: "拖拽弹框"
        //     }
        //   ]
        // },
        {
          icon: "el-icon-edit-outline",
          index: "7",
          title: "错误处理",
          subs: [
            {
              index: "permission",
              title: "权限测试"
            },
            {
              index: "404",
              title: "404页面"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
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
  .el-menu{
    background: linear-gradient(top,#8c6bc7,#3b3266);
  }
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
