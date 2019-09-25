<template>
  <div class="book-nav">
    <div v-for="(bookTagGroup, index) in bookTagGroups" :key="index" class="book-nav-one">
      <div class="tag-group">{{ bookTagGroup.tagGroup }}</div>
      <div class="tag-content">
        <el-tag
          v-for="bookTag in bookTagGroup.bookTags"
          :key="bookTag.id"
        >{{ bookTag.tagName }}
        </el-tag>
      </div>
      <i />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookTag',
  props: {
    bookTagGroups: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.book-nav-one {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-bottom: 10px;
  i {
    width: 100%;
    height:1px;
    border:1px solid #F4F4F4;
  }
  .tag-content {
    text-align: left;
    margin: 6px 0;
    >span {
      margin: 5px;
    }
  }
}
</style>
