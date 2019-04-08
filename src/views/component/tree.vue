<template>
  <div class="tree-contaniner">
    <el-tree
      :data="data2"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps"
    ></el-tree>

    <div class="buttons">
      <el-button @click="getCheckedNodes">通过 node 获取</el-button>
      <el-button @click="getCheckedKeys">通过 key 获取</el-button>
      <el-button @click="setCheckedNodes">通过 node 设置</el-button>
      <el-button @click="setCheckedKeys">通过 key 设置</el-button>
      <el-button @click="resetChecked">清空</el-button>
    </div>
    <json-viewer :value="jsonData" :closed="true"></json-viewer>
  </div>
</template>
<script>
//引入json查看器
import JsonViewer from "vue-json-viewer";
export default {
  components: { JsonViewer },
  data() {
    return {
      jsonData: [],
      data2: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1"
                },
                {
                  id: 10,
                  label: "三级 1-1-2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1"
            },
            {
              id: 6,
              label: "二级 2-2"
            }
          ]
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1"
            },
            {
              id: 8,
              label: "二级 3-2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    getCheckedNodes() {
      this.jsonData = this.$refs.tree.getCheckedNodes();
      console.log(this.$refs.tree.getCheckedNodes());
    },
    getCheckedKeys() {
      this.jsonData = this.$refs.tree.getCheckedKeys();
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: "二级 2-1"
        },
        {
          id: 9,
          label: "三级 1-1-1"
        }
      ]);
      this.jsonData = this.$refs.tree.getCheckedNodes();
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);
      this.jsonData = this.$refs.tree.getCheckedKeys();
    },
    resetChecked() {
      this.jsonData = [];
      this.$refs.tree.setCheckedKeys([]);
    }
  }
};
</script>
<style lang="scss" scoped>
.tree-contaniner {
  padding: 40px;
}
.jv-code {
  text-align: left;
}
</style>
