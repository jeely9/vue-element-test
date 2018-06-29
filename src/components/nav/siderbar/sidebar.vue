<template>
  <nav>
      <div class="wq-sidebar" v-bind:class="foldobj">
          <div class="sidebar-fold" @click="toggleFold">
              <icon-svg :iconClass="iconObj" class="fold-svg"></icon-svg>
          </div>
      </div>
  </nav>
</template>

<script>
  import iconSvg from "@/components/icon-svg";
  export default {
    data(){
      return{

      }

    },
    computed:{
      iconObj(){
        return this.$store.state.app.siderbar.opened ? "fold" : "unfold";
      },
      foldobj(){
          return this.$store.state.app.siderbar.opened
            ? "show-sidebar"
            : "hide-sidebar";
        }
    },
    methods: {
      toggleFold(){

      }
    },
    components:{
        iconSvg
    }
  }
</script>

<style scoped lang="scss">
  @import "../../../assets/css/common";
  .wq-sidebar{
    height: 100%;
  }
  .sidebar-fold{
    cursor: pointer;
    text-align: center;
    height: 28px;
  }
  .fold-svg{
    height: 28px;
  }
  .hide-sidebar {
    width: 64px;
  }
  .show-sidebar {
    min-width: 200px;
  }
  .hide-sidebar {
    min-width: 64px;
  }
</style>
