<template>
  <div class="head-container">
    <showAside :toggle-click="toggleClick"/>
  </div>
</template>
<script>
import showAside from "@/components/showAside.vue";
import { mapState } from "vuex";
export default {
  // name:'header',
  components: {
    showAside
  },
  computed: {
    isCollapse: {
      get: function() {
        return this.$store.state.isCollapse;
      },
      set: function(newValue) {
        console.log(newValue);
        this.$store.commit("IS_COLLAPSE", newValue);
      }
    }
  },
  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse;
    }
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
  border-bottom:1px solid #f0f0f0 
}
</style>


