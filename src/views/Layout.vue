<template>
  <div class="layout">
    <sidebar />
    <div class="main-container">
      <navbar />
      <div class="content-border" />
      <keep-alive>
        <router-view class="content" />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Layout',
  components: { Sidebar, Navbar },
  mounted() {
    this.$store.dispatch('behavior/getBehaviorCounts')
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100%;
    /*overflow: auto;*/
    .main-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: calc(100% - 342px);
      height: 100%;
      .content-border {
        width: 90%;
        height:1px;
        border:1px solid #F4F4F4;
      }
      .content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        padding: 20px 40px 30px;
        overflow-y: auto;
      }
    }
  }
</style>
