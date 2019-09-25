<template>
  <div class="single-book-detail">
    <div class="img-box">
      <img :src="bookCover" />
    </div>
    <div class="book-msg">
      <div class="book-tag">
        <el-tag color="primary">{{ bookTag }}</el-tag>
      </div>
      <div class="book-star">
        <el-rate v-model="bookStarRate" disabled text-color="#ff9900" show-score :score-template="bookStar">
        </el-rate>
<!--        <span style="color: #f5a623; font-size: 16px;">{{ bookStar }}</span>-->

      </div>
      <div class="book-basic">
        <span>{{ bookName }}</span>
        <a>{{ authorName }}</a>
      </div>
      <div class="book-introduction">{{ introduction }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleBookDetail',
  props: {
    bookCover: {
      type: String,
      required: true
    },
    bookName: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    introduction: {
      type: String,
      default: '暂无评价'
    },
    bookTag: {
      type: String,
      default: '本周上升最快'
    },
    bookStar: {
      type: String,
      default: '7.5'
    }
  },
  computed: {
    bookStarRate() {
      return this.bookStar / 2
    }
  }
}
</script>

<style lang="scss" scoped>
  .single-book-detail {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 6px 5px -3px rgba(0, 0, 0, 0.35);
    margin:  0 20px 20px 0;
    width: 577px;
    height: 260px;
    .img-box {
      height: 260px;
      width: 180px;
      overflow: hidden;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .book-msg {
      display: flex;
      flex-direction: column;
      flex: auto;
      padding: 20px;
      overflow: hidden;
      background: #F5F6F8;
      .book-tag {
        text-align: right;
      }
      .book-star {
        text-align: left;
      }
      .book-basic {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-size: 20px;
          color: #616663;
        }
        a {
          color: #7A7D77;
        }
      }
      .book-introduction {
        height: 126px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        margin-top: 10px;
        color: #7A7D77;
      }
    }
  }
</style>
