<template>
    <div class="blcok" @click="onClick(item)">
        <div class="block-title " v-html="item.title"></div>
        <div class="block-foot " v-html="item.foot "></div>
    </div>
</template>

<script>
export default {
    name: 'case-block',
    props: {
        item: Object
    },
    methods: {
        onClick(item) {
            this.$emit('on-click', item)
        }
    }
}
</script>

<style scoped lang="less">
.blcok {
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 30px;
  height: 190px;
  justify-content: space-between;
  border: solid 1px #231815;
  cursor: pointer;
  .block-title {
    font-size: 26px;
    line-height: 1.4;
  }
  .block-foot {
    font-size: 12px;
    white-space: nowrap;
  }
}
</style>
