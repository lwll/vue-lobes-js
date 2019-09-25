<template>
  <div class="nav-bar">
    <div class="nav-search">
      <el-input size="large" prefix="ios-search" placeholder="Search" />
    </div>
    <div class="nav-menu">
      <el-button size="large" type="primary">+ 创建一个新的书单</el-button>
      <svgicon name="mail" />
      <svgicon name="like" />
      <svgicon name="me" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
  .nav-bar {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px 30px;
    width: 100%;
    .nav-search {
      width: 425px;
      .ivu-input {
        background: #FDFDFD;
      }
    }
    .nav-menu {
      display: flex;
      align-items: center;
      .ivu-btn {
        margin-right: 30px;
        box-shadow:0 20px 50px 0 rgba(194,247,159,0.4);
      }
    }
  }
</style>
