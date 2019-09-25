<template>
  <div class="one-row-book">
    <swiper :options="swiperOption" class="container">
      <swiper-slide v-for="(book, index) in bookData" :key="index">
        <single-book
          :author-name="book.authorName"
          :book-name="book.name"
          :book-cover="book.cover"
        ></single-book>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper>
  </div>
</template>

<script>
import SingleBook from '@/components/SingleBook'
export default {
  name: 'OneRowBook',
  components: { SingleBook },
  props: {
    bookData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        // spaceBetween: 20,
        slidesPerGroup: 1,
        // loop: true,
        // centeredSlides: true,
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
.one-row-book {
  width: 100%;
  .container {
    padding-bottom: 10px;
  }
}
</style>
