<template>
    <div class="viewFramework">
      <topbar></topbar>
      <div class="viewFrame-content">
        <sidebar></sidebar>
        <div class="section-content">
          <breadcrumb></breadcrumb>
          <main class="section-main">
            <router-view></router-view>
          </main>
          <footerbar></footerbar>
        </div>
      </div>
    </div>
</template>

<script>
  import topbar from "../components/nav/topbar/topbar";
  import sidebar from "../components/nav/siderbar/sidebar";
  import breadcrumb from "../components/nav/breadcrumb";
  import footerbar from "../components/footer/footerbar";
    export default {
        components:{
          topbar,
          sidebar,
          breadcrumb,
          footerbar
        }
    }
</script>

<style scoped>
  .viewFramework .viewFrame-content {
    display: -ms-flexbox;
    display: flex;
    height: calc(100% - 72px);
  }
  .viewFramework .viewFrame-content .section-content{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .viewFramework .viewFrame-content .section-content .section-main{
    flex: 1;
    overflow-y: auto;
  }
</style>
