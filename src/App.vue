<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  div {
    box-sizing: border-box;
  }
  .icon {
    width: 3em;
    height: 3em;
    cursor: pointer;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    width: 6px
  }
  /*::-webkit-scrollbar-track {*/
  /*  -webkit-box-shadow: inset 0 0 4px ;*/
  /*  border-radius: 0.5rem;*/
  /*}*/
  ::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background: #c7fed0 !important;
    -webkit-box-shadow: inset 0 0 6px ;
  }
}

</style>
