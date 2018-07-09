<template>
    <div class="list">
        <case-block v-for="item in list" :key="item.id" :item="item" :class="{active:item.active}" @on-click="onClick" class="list-item" />
    </div>
</template>

<script>
import CaseBLock from '@/components/caseBlock'
export default {
    components: {
        'case-block': CaseBLock
    },
    data() {
        this.list = [
            {
                title: '品牌</br>调研-洞察',
                foot: 'SURVEY',
                id: 'survey',
                active: true,
            },
            {
                title: '品牌</br>标志',
                foot: 'LOGO',
                id: 'logo',
                active: false,
            },
            {
                title: '品牌</br>基因</br>MI',
                foot: 'MIND IDENTITY',
                id: 'mi',
                active: false,
            },
            {
                title: '品牌</br>定位-定义</br>BI',
                foot: 'BEHAVIOR IDENTITY',
                id: 'bi',
                active: false,
            },
            {
                title: '品牌</br>识别应用系统</br>VI',
                foot: 'VISUAL IDENTITY',
                id: 'vi',
                active: false,
            },
            {
                title: '品牌</br>空间规划设计</br>SI',
                foot: 'STORE IDENTITY',
                id: 'si',
                active: false,
            }
        ]
        return {

        }
    },
    methods: {
        onClick(item) {
            this.list.forEach(it => {
                it.active = false
                if (it.id === item.id) {
                    it.active = true
                    this.curTabComp = it.comp
                }
            })
            this.$nextTick(() => {
                this.$router.push(`/case/design/detail/${item.id}`)
            })
        }
    }
}
</script>

<style scoped lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .list-item {
    margin-bottom: 30px;
    flex-basis: 47%;
    box-sizing: border-box;
  }
  .active {
    border-color: #e04c4e;
  }
}
</style>
