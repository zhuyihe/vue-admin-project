<template>
  <div class="fm-container">
    <fm-making-form ref="makingForm" upload preview generate-code generate-json clearable>
      <template slot="action"></template>
    </fm-making-form>
  </div>
</template>

<script>
export default {
  mounted() {}
};
</script>
<style lang="scss" scoped>
.fm-container{
    height: calc(100vh - 75px);
    color: #666 !important;
}
</style>
<style lang="scss">
.components-list .form-edit-widget-label > a{
    color: black
}
.widget-config-container .config-content .el-form-item__label{
     color: black
}
.fm-container{
    .el-form-item{
        text-align: left;
    }
    .widget-form-list{
        .el-form-item__label{
            color: black
        }
    }
}
</style>


