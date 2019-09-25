<template>
  <div class="two-rows-book ani">
    <swiper :options="swiperOption" class="container">
      <swiper-slide v-for="(book, index) in bookData" :key="index">
        <single-book-detail
          :book-cover="book.cover"
          :book-name="book.name"
          :author-name="book.authorName"
          :introduction="book.introduction"
        ></single-book-detail>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import SingleBookDetail from '@/components/SingleBookDetail'
export default {
  name: 'TwoRowsBook',
  components: { SingleBookDetail },
  props: {
    bookData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        // slidesPerGroup: 2,
        // loop: true,
        // autoplay: {
        //   delay: 10000
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.two-rows-book {
  width: 100%;
  .container {
    padding-bottom: 20px;
  }
}
</style>
