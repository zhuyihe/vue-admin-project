//全部菜单
export const menu = [
  {
    icon: "el-icon-news",
    index: "home",
    title: "home"
  },
  {
    icon: "el-icon-edit",
    index: "icon",
    title: "icon",
    subs: [
      {
        index: "element",
        title: "element"
      },
      {
        index: "iconfont",
        title: "iconfont"
      }
    ]
  },
  {
    icon: "el-icon-setting",
    index: "component",
    title: "component",
    subs: [
      {
        index: "editor",
        title: "editor"
      },
      {
        index: "countTo",
        title: "countTo"
      },
      {
        index: "trees",
        title: "trees",
        icon: "el-icon-share",
        subs: [
          {
            index: "customTree",
            title: "customTree"
          },
          {
            index: "treeSelect",
            title: "treeSelect"
          }
        ]
      }
    ]
  },
  {
    icon: "el-icon-rank",
    index: "draggable",
    title: "draggable",
    subs: [
      {
        index: "draglist",
        title: "draglist"
      },
      {
        index: "dragtable",
        title: "dragtable"
      }
    ]
  },
  {
    icon: "el-icon-document",
    index: "charts",
    title: "charts",
    subs: [
      {
        index: "cricle",
        title: "cricle"
      }
    ]
  },
  {
    icon: "el-icon-folder",
    index: "formDesign",
    title: "formDesign"
  },
  {
    icon: "el-icon-question",
    index: "permission",
    title: "permission",
    subs: [
      {
        index: "permissionMenu",
        title: "permissionMenu",
        meta: {
          roles: ["admin"]
        }
      },
      {
        index: "permissionBtn",
        title: "permissionBtn"
      }
    ]
  },
  {
    icon: "el-icon-warning",
    index: "error",
    title: "error",
    subs: [
      {
        index: "404",
        title: "404"
      }
    ]
  },
  {
    icon: "el-icon-mobile-phone",
    index: "https://github.com/zhuyihe/vue-admin-project",
    title: "link"
  }
];
