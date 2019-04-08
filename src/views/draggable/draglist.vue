<template>
  <div class="treeList">
       <p class="expain">本项目参考vueDraggable详细请参考<a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">文档</a></p>
    <!-- 调用组件  -->
    <draggable element="ul" v-model="list" class="ul">
      <li v-for="item in list">{{item.name}}</li>
    </draggable>
    <pre>
         {{list}}
    </pre>
   
  </div>
</template>

<script>
// 引入拖拽组件
import draggable from 'vuedraggable'
export default {
  name: 'demo',
  components: {
    //调用组件
    draggable,
  },
  data () {
    return {
      list:[
        {
          id: 1,
          name: 'a'
        },
        {
          id: 2,
          name: 'b'
        },
        {
          id: 3,
          name: 'c'
        },
        {
          id: 4,
          name: 'd'
        },
        {
          id: 5,
          name: 'e'
        },
        {
          id: 6,
          name: 'f'
        },
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
.treeList{
    padding: 40px
}
ul li{
    background: #bdb7ff;
    color:white;
    width: 300px;
    line-height: 40px;
    margin-bottom:20px;
}
pre{
    text-align: start;
    color: black;
    background: #e9ecef;
    font-size: 16px;
}
.expain{
    font-size: 16px;
    line-height: 60px;
    background: #F2F6FC;
    margin-bottom: 20px;
}
.expain a{
    color: #bdb7ff
}
</style>
