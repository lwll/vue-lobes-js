<template>
  <div class="side-bar">
    <div class="home-logo">
      <svgicon name="logo" width="150" height="60" />
    </div>
    <div class="brief-person-msg">
      <div class="avatar-box">
        <img :src="avatar || `http://localhost:88/image/lobes/icon-boy.png`" />
      </div>
      <span class="user-name">{{ nickname || `叶瓣酱` }}</span>
      <span class="signature">{{ signature || `也无风雨也无晴` }}</span>
    </div>
    <div class="person-behaviour">
      <div class="behaviour-title">
        <span>想读</span>
        <span>在读</span>
        <span>已读</span>
      </div>
      <div class="behavior-data">
        <span>{{ wantBehaviorNum }}</span>
        <span>{{ ingBehaviorNum }}</span>
        <span>{{ doneBehaviorNum }}</span>
      </div>
    </div>
    <div class="border" />
    <el-menu active-name="1">
      <el-menu-item name="1">
        <div class="menu-icon">
          <svgicon name="home" />首页
        </div>
      </el-menu-item>
      <el-menu-item name="2">
        <div class="menu-icon">
          <svgicon name="movie" />电影
        </div>
      </el-menu-item>
      <el-menu-item name="3">
        <div class="menu-icon">
          <svgicon name="read" />读书
        </div>
      </el-menu-item>
      <el-menu-item name="4">
        <div class="menu-icon">
          <svgicon name="tv" />电视
        </div>
      </el-menu-item>
      <el-menu-item name="5">
        <div class="menu-icon">
          <svgicon name="file" />档案
        </div>
      </el-menu-item>
      <el-menu-item name="6">
        <div class="menu-icon">
          <svgicon name="settings" />设置
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',

  computed: {
    ...mapGetters([
      'avatar',
      'nickname',
      'signature',
      'wantBehaviorNum',
      'ingBehaviorNum',
      'doneBehaviorNum'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .side-bar {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 342px;
    height: 100%;
    box-shadow: 0 8px 16px 0 rgba(238,238,238,1);
    background: url("../assets/image/sidebar_cover.png"), #e2e2e2;
    background-size: 100% 100%;
    background-blend-mode: overlay;

    .home-logo {
      opacity: 0.99;
      margin: 20px 0;
    }
    .brief-person-msg {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      align-items: center;
      .avatar-box {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        img {
          max-height: 100%;
          max-width: 100%;
        }
      }
      .user-name {
        font-size:16px;
        color: #141D0E;
      }
      .signature {
        font-size: 12px;
        color: #7A7D77;
      }
    }
    .person-behaviour {
      display: flex;
      flex-direction: column;
      .behaviour-title {
        color: #BABEB7;
        font-size: 14px;
      }
      .behavior-data {
        font-size: 18px;
        color: #616663;
      }
      span {
        display: inline-block;
        margin: 0 10px;
        width: 50px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .border {
      width: 290px;
      height:1px;
      margin: 30px 0;
      border:1px solid #DFE0D5;
    }
    .el-menu {
      width: 290px;
      background: transparent;
      .el-menu-item {
        font-size: 16px;
        vertical-align: middle;
        color: #7A7D77;
        font-weight: bold;
        .menu-icon {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>
