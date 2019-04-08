<template>
  <div class="treeSelect">
    <div class="tree1 clearfix">
      <span>输入模糊匹配：</span>
      <treeselect
        v-model="value"
        :multiple="multiple"
        :clearable="clearable"
        :searchable="searchable"
        :disabled="disabled"
        :open-on-click="openOnClick"
        :open-on-focus="openOnFocus"
        :clear-on-select="clearOnSelect"
        :close-on-select="closeOnSelect"
        :always-open="alwaysOpen"
        :append-to-body="appendToBody"
        :options="options"
        :limit="3"
        :max-height="200"
        placeholder="请选择你最喜欢的水果"
        class="treeS1"
      />
      <span class="value">{{value}}</span>
    </div>
   <div class='check'>
      <p>
      <label>
        <el-checkbox v-model="multiple">多选</el-checkbox >
      </label>
      <label>
        <el-checkbox  v-model="clearable">清零</el-checkbox>
      </label>
      <label>
        <el-checkbox  v-model="searchable">检索</el-checkbox>
      </label>
      <label>
        <el-checkbox  v-model="disabled">不可选</el-checkbox>
      </label>
    </p>
    <p>
      <label>
        <el-checkbox  v-model="openOnClick">点击打开</el-checkbox>
      </label>
      <label>
        <el-checkbox  v-model="openOnFocus">开放焦点</el-checkbox>
      </label>
    </p>
    <p>
      <label>
        <el-checkbox  v-model="clearOnSelect">清空选项</el-checkbox>
      </label>
      <label>
        <el-checkbox v-model="closeOnSelect">关闭选项</el-checkbox>
      </label>
    </p>
    <p>
      <label>
        <el-checkbox  v-model="alwaysOpen">一直打开</el-checkbox>
      </label>
      <label>
        <el-checkbox v-model="appendToBody">Append to body</el-checkbox>
      </label>
    </p>
   </div>
  </div>
</template>

<script>
// import the component
import Treeselect from "@riophae/vue-treeselect";
// import the styles
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  // register the component
  components: { Treeselect },
  data() {
    return {
      value: [],
      multiple: true,
      clearable: true,
      searchable: true,
      disabled: false,
      openOnClick: true,
      openOnFocus: false,
      clearOnSelect: true,
      closeOnSelect: false,
      alwaysOpen: false,
      appendToBody: false,
      options: [
        {
          id: "fruits",
          label: "Fruits",
          children: [
            {
              id: "apple",
              label: "Apple 🍎",
              isNew: true
            },
            {
              id: "grapes",
              label: "Grapes 🍇"
            },
            {
              id: "pear",
              label: "Pear 🍐"
            },
            {
              id: "strawberry",
              label: "Strawberry 🍓"
            },
            {
              id: "watermelon",
              label: "Watermelon 🍉"
            }
          ]
        },
        {
          id: "vegetables",
          label: "Vegetables",
          children: [
            {
              id: "corn",
              label: "Corn 🌽"
            },
            {
              id: "carrot",
              label: "Carrot 🥕"
            },
            {
              id: "eggplant",
              label: "Eggplant 🍆"
            },
            {
              id: "tomato",
              label: "Tomato 🍅"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.treeSelect {
  padding: 40px;
}
.tree1 span {
  float: left;
  line-height: 36px;
}
.treeS1 {
  width: 300px;
  float: left;
}
.value {
  margin-left: 10px;
}
.check{
  text-align: left;
  margin-top: 60px
}
</style>
