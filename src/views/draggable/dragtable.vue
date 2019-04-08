<template>
  <div class="row">
    <div class="col-8">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Sport</th>
          </tr>
        </thead>
        <draggable v-model="list" tag="tbody">
          <tr v-for="item in list" :key="item.name">
            <td scope="row">{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.sport }}</td>
          </tr>
        </draggable>
      </table>
    </div>
    <pre>
         {{list}}
    </pre>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "table-example",
  display: "Table",
  order: 8,
  components: {
    draggable
  },
  data() {
    return {
      list: [
        { id: 1, name: "zyh", sport: "basket" },
        { id: 2, name: "Brooke", sport: "foot" },
        { id: 3, name: "Courtenay", sport: "volley" },
        { id: 4, name: "David", sport: "rugby" }
      ],
      dragging: false
    };
  }
};
</script>
<style scoped>
.row{
    padding: 40px
}
.buttons {
  margin-top: 35px;
}
.table{
    font-size: 14px;
    color: #606266;
    border-top: 1px solid #ebeef5;
     border-left: 1px solid #ebeef5;
    /* background: #ebeef5; */
}
.table th{
   border-right: 1px solid #ebeef5;
   padding: 12px 0;
   width: 150px;
   border-bottom: 1px solid #ebeef5;
}
.table td{
    border-right: 1px solid #ebeef5;
    border-bottom: 1px solid #ebeef5;
    padding: 12px 0;

}
pre{
    text-align: start;
    color: black;
    background: #e9ecef;
    font-size: 16px;
    margin-top: 30px;
}
</style>