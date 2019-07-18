<template>
  <div class="aside">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="onRoutes"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        @select="select"
        active-text-color="#bdb7ff"
        router
      >
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{$t('route.'+item.title) }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                  <template slot="title">
                    <i :class="subItem.icon"></i>
                    <span slot="title">{{$t('route.'+subItem.title) }}</span>
                  </template>
                  <el-menu-item
                    v-for="(threeItem,i) in subItem.subs"
                    :key="i"
                    :index="threeItem.index"
                  >{{$t('route.'+threeItem.title) }}</el-menu-item>
                </el-submenu>
                <el-menu-item
                  v-else
                  :index="subItem.index"
                  :key="subItem.index"
                >{{$t('route.'+subItem.title) }}</el-menu-item>
              </template>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item
              :index="item.index"
              :key="item.index"
              v-if="item.index.indexOf('http')==-1"
            >
              <i :class="item.icon"></i>
              <span slot="title">{{$t('route.'+item.title) }}</span>
            </el-menu-item>
            <a :href="item.index" target="_blank" v-else :key="item.index">
              <el-menu-item>
                <i :class="item.icon"></i>
                <span slot="title">{{$t('route.'+item.title) }}</span>
              </el-menu-item>
            </a>
          </template>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { menu } from "@/menu";
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
    ...mapState(["isCollapse"]),
    items() {
      let items = this.filterMenus(menu, this.$store.state.roles);
      return items;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
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
     * @param {Arrary} menus 菜单
     * @param {Arrary} roles 角色
     * @return {Arrary} res 过滤后的菜单
     */
    filterMenus(menus, roles) {
      const res = [];
      menus.forEach(route => {
        const tmp = { ...route };
        if (this.hasPermission(roles, tmp)) {
          if (tmp.subs) {
            tmp.subs = this.filterMenus(tmp.subs, roles);
          }
          res.push(tmp);
        }
      });
      return res;
    },
    select(index, indexPath) {
      console.log(index, indexPath);
      if (indexPath.indexOf("home") > -1) return;
      if (index!==null) {
        let breadList = ["home"];
        breadList.push(...indexPath);
        console.log(breadList);
        this.$store.commit("SET_BREAD", breadList);
      }
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
