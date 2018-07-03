<template>
  <nav class="wq-sidebar" v-bind:class="foldobj">
    <div class="sidebar-fold" @click="toggleFold">
        <icon-svg :iconClass="iconObj" class="fold-svg"></icon-svg>
    </div>
    <div class="sidebar-menu">
        <el-menu :default-active="$route.path" :unique-opened="true" router @open="handleOpen" @close="handleClose" :collapse="isCollapse"
        v-for="(item,index) in menuItem" :key="index">
            <el-menu-item v-if="typeof item.child ==='undefined'" :index="item.path">
              <i class="icon" :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
            <el-submenu v-else :index="item.path">
                <template slot="title">
                  <i class="icon" :class="item.icon"></i>
                  <span slot="title">{{ item.title }}</span>
                </template>
                <el-menu-item v-for="(child_item,child_index) in item.child" :index="child_item.path" :key="child_index">
                  <i class="icon" :class="child_item.icon"></i>
                  <span slot="title">{{ child_item.title }}</span>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
  </nav>
</template>

<script>
  import iconSvg from "@/components/icon-svg";
  export default {
    data(){
      return{
        menuItem: [
          {
            title: "首页",
            path: "/home",
            icon: "el-icon-menu"
          },
          {
            title: "表格管理",
            path: "/tables",
            icon: "el-icon-setting",
            child: [
              {
                title: "基础表格",
                path: "/tables/basic"
              },
              {
                title: "固定标头表格",
                path: "/tables/fixedheader"
              }
            ]
          },
          {
            title: "表单管理",
            path: "/forms",
            icon: "el-icon-setting",
            child: [
              {
                title: "基础表单",
                path: "/forms/basicneed"
              }
            ]
          }
        ],
          isCollapse: false
      };
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
      handleOpen(key,keyPath){
          console.log(key,keyPath);
      },
      handleClose(key,keyPath){
          console.log(key,keyPath);
      },
      toggleFold(){
          this.isCollapse = this.$store.state.app.siderbar.opened;
          this.$store.dispath("toggle_siderbar");
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
