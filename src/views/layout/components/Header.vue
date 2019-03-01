<template>
  <div class="head-container">
      <showAside/>
  </div>
</template>
<script>
import showAside from '@/components/showAside.vue'
export default {
    // name:'header',
    components:{
        showAside
    }
};
</script>
<style lang="scss" scoped>
.head-container {
  height: 50px;
  line-height: 50px;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  background: #f0f0f0;
}
</style>


