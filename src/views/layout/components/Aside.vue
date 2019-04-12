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
import { menu } from "@/menu";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log();
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
    ...mapState(["isCollapse"]),
    items() {
      let items = this.filterAsyncRouter(menu, this.$store.state.roles);
      return items;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    /**
     * 通过meta.role判断是否与当前用户权限匹配
     * @param roles
     * @param menu
     */
    hasPermission(roles, menu) {
      if (menu.meta && menu.meta.roles) {
        return roles.some(role => menu.meta.roles.includes(role));
      } else {
        return true;
      }
    },
    /**
     * 递归过滤异步路由表，返回符合用户角色权限的路由表
     * @param menus asyncRouterMap
     * @param roles
     */
    filterAsyncRouter(menus, roles) {
      const res = [];
      menus.forEach(route => {
        const tmp = { ...route };
        // console.log(this.hasPermission(roles, tmp));
        if (this.hasPermission(roles, tmp)) {
          // console.log(tmp.subs);
          if (tmp.subs) {
            tmp.subs = this.filterAsyncRouter(tmp.subs, roles);
          }
          res.push(tmp);
        }
      });
      return res;
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
