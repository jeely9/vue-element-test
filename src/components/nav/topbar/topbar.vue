<template>
  <div class="wq-topbar">
    <el-menu router default-active="activeIndex" class="el-menu-top" mode="horizontal" @select="handleSelect">
      <img src="../../../assets/images/logo.png" class="logo h60">
      <div class="top-menu-item">
        <el-menu-item index="sousuo">
          <el-input placeholder="搜索"></el-input>
        </el-menu-item>
        <el-menu-item index="huanfu"  @click="skinDialogVisible = true">换肤</el-menu-item>
        <el-submenu index="sysset">
          <template slot="title">weiqinl</template>
          <el-menu-item index="grzx-bky"><a href='http://www.cnblogs.com/weiqinl' target="_blank">博客地址</a></el-menu-item>
          <el-menu-item index="grzx-xmdz"><a href='https://github.com/weiqinl/vue-element-admin' target="_blank">项目地址</a></el-menu-item>
          <el-menu-item index="/login">退出</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
        activeIndex: "1",
      skinDialogVisible: false
    };
  },
  mounted() {

  },
  methods: {
      handleSelect(key,value){
          console.log(key);
          console.log(value);
      }
  }
};
</script>
<style lang="scss">
  .el-menu-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eef1f6;
  }
  .wq-topbar ,.el-menu-top,.logo {
    line-height: 30px;
  }
  .top-menu-item {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
</style>
