<template>
  <div class="single-book">
    <div class="img-box">
      <img :src="bookCover" alt="" />
      <div class="svg-container">
        <svgicon name="want" />
      </div>
    </div>
    <div class="bottom-text">
      <span>{{ bookName }}</span>
      <span>{{ authorName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleBook',
  props: {
    bookName: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    bookCover: {
      type: String,
      required: true
    },
    bookStar: {
      type: Number,
      default: 7.5
      // required: true
    }
  },
  computed: {
    bookStarRate() {
      return this.bookStar / 2
    }
  }
}
</script>

<style lang="scss">
  @import "../style/mixin";
  .single-book {
    display: flex;
    flex-direction: column;
    margin: 0 20px 20px 0;
    cursor: pointer;
    //@include pulse;
    .img-box {
      position: relative;
      height: 260px;
      width: 180px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 6px 5px -3px rgba(0, 0, 0, 0.35);
      .svg-container {
        display: flex;
        position: absolute;
        width: 1.3rem;
        top: 0;
        background: #e4f6e7;
        border-top-right-radius: 0.5rem;
        right: 0;
      }
      svg {
        margin-right: 0;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
    .bottom-text {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      margin-top: 5px;
      color: #616663;
    }
  }
</style>
