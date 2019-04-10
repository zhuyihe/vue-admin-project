//全部菜单
export const menu = [{
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
        index: "7",
        title: "错误处理",
        subs: [{
                index: "permission",
                title: "权限测试",
                meta: {
                    roles: ['admin']
                }
            },
            {
                index: "404",
                title: "404页面"
            }
        ]
    }
]