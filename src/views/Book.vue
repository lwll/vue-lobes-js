<template>
  <div class="book">
    <div class="main-container">
      <div v-loading="bookLoading" class="main-content">
        <div class="book-title">
          <h3>新书速递</h3>
          <div class="title-button">
            <svgicon name="display-one" @click="changeToDisplayMode0"></svgicon>
            <svgicon name="display-two" @click="changeToDisplayMode1"></svgicon>
          </div>
        </div>
        <div class="book-content">
          <transition name="component-fade" mode="out-in">
            <keep-alive>
              <component :is="displayMode" :book-data="newBooks"></component>
            </keep-alive>
          </transition>
        </div>
        <div class="book-title">
          <h3>最受关注图书</h3>
        </div>
        <div class="book-content">
          <two-rows-book :book-data="newBooks"></two-rows-book>
        </div>
      </div>
    </div>
    <div class="book-nav">
      <book-tag :book-tag-groups="bookTagGroups"></book-tag>
    </div>
  </div>
</template>

<script>
import SingleBook from '../components/SingleBook.vue'
import SingleBookDetail from '@/components/SingleBookDetail'
import BookTag from '@/components/BookTag'
import TwoRowsBook from '@/components/TwoRowsBook'
import OneRowBook from '@/components/OneRowBook'
import { getSpecificBook } from '@/api/book'
import { getTags } from '@/api/tag'
import { BOOK_TYPE } from '@/utils/constant'
import _ from 'lodash'

export default {
  name: 'Book',
  components: { BookTag, SingleBookDetail, SingleBook, TwoRowsBook, OneRowBook },
  data() {
    return {
      newBooks: [],
      popularBooks: [],
      bookTagGroups: [],
      bookLoading: false,
      displayMode: 'TwoRowsBook'// 书籍展示模式  0--1行展示  1--3行展示
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      this.bookLoading = true
      await Promise.all([this.getNewBooks(), this.getPopularBook(), this.getTags()])
      this.bookLoading = false
    },
    async getNewBooks() {
      this.newBooks = await getSpecificBook(BOOK_TYPE.NEW_BOOK)
    },
    async getPopularBook() {
      this.popularBooks = await getSpecificBook(BOOK_TYPE.POPULAR_BOOK)
    },
    async getTags() {
      const tagsData = _.groupBy(await getTags(), tag => tag.tagGroup)
      this.bookTagGroups = Object.keys(tagsData).map(v => ({
        tagGroup: v,
        bookTags: tagsData[v]
      }))
    },
    changeToDisplayMode0() {
      if (this.displayMode !== 'TwoRowsBook') this.displayMode = 'TwoRowsBook'
    },
    changeToDisplayMode1() {
      if (this.displayMode !== 'OneRowBook') this.displayMode = 'OneRowBook'
    }
  }
}
</script>

<style lang="scss" scoped>
  .book {
    .main-container {
      display: flex;
      width: calc(100% - 290px);
      margin-right: 40px;
      overflow: auto;
      .main-content {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex: auto;

        .book-title {
          display: flex;
          justify-content: space-between;

          .title-button {
            display: flex;
            justify-content: space-around;
          }
        }

        .book-content {
          display: flex;
          flex-wrap: wrap;
          margin: 20px 0;
        }
      }
    }
    .book-nav {
      height: 100%;
      width: 250px;
      flex-shrink: 0;
    }
  }
</style>
