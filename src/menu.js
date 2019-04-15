//全部菜单
export const menu = [{
    icon: "el-icon-edit-outline",
    index: "home",
    title: "系统首页"
},
{
    icon: "el-icon-edit-outline",
    index: "icon",
    title: "图标",
    subs: [{
        index: "elementIcom",
        title: "element"
    }, {
        index: "iconfont",
        title: "iconfont"
    }]
},
{
    icon: "el-icon-edit-outline",
    index: "component",
    title: "组件",
    subs: [{
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
        subs: [{
            index: "tree",
            title: "自定义树"
        },
        {
            index: "treeSelect",
            title: "下拉树"
        }
        ]
    }
    ]
},
{
    icon: "el-icon-edit-outline",
    index: "draggable",
    title: "拖拽",
    subs: [{
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
    subs: [{
        index: "cricle",
        title: "饼图"
    }]
},
{
    icon: "el-icon-edit-outline",
    index: "premission",
    title: "权限测试",
    subs: [{
        index: "permission",
        title: "菜单测试",
        meta: {
            roles: ['admin']
        }
    },
    {
        index: "permissionBtn",
        title: "按钮权限",
    },

    ]
}, {
    icon: "el-icon-edit-outline",
    index: "error",
    title: "错误页面",
    subs: [{
        index: "404",
        title: "404页面"
    }]
}
]