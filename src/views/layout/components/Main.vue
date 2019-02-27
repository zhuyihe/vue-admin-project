<template>
    <div class="main-container">
       <transition name="fade-transform" mode="out-in">
        </transition>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.main-container {
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
}
</style>