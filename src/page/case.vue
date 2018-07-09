<template>
    <div class="case-wrap">
        <div class="case-head">
            <img :src="require('@/assets/images/case-head.png')" alt="" class="head-img">
            <router-link to="http://baidu.com">
                <img :src="require('@/assets/images/zixun.png')" alt="" class="zixun-img">
            </router-link>
        </div>
        <div class="case-tab">
            <span v-for="item in caseTab" :key="item.id" :class="{active:item.active}" @click="toggleTab(item.id)">{{item.name}}</span>
        </div>
        <div class="case-list">
            <keep-alive>
                <component :is="curTabComp"></component>
            </keep-alive>
        </div>
        <div class="case-foot">
            <img :src="require('@/assets/images/case-foot.png')" alt="">
        </div>
    </div>
</template>

<script>
import BrandDesign from './brandDesign'
import NumberMarket from './numberMarket'
export default {
    components: {
        BrandDesign,
        NumberMarket
    },
    data() {
        return {
            caseTab: [
                {
                    name: '灏臣品牌设计资讯',
                    id: 0,
                    active: true,
                    comp: "BrandDesign"
                },
                {
                    name: 'HC数字营销资讯',
                    id: 1,
                    active: false,
                    comp: "NumberMarket"
                }
            ],
            curTabComp: 'BrandDesign'
        }
    },
    methods: {
        toggleTab(id) {
            this.caseTab.forEach(item => {
                item.active = false
                if (item.id === id) {
                    item.active = true
                    this.curTabComp = item.comp
                }
            })
        }
    },
    created() {
        let type = +this.$route.params.type || 0
        this.toggleTab(type)
    }
}
</script>

<style scoped lang="less">
.case-wrap {
  padding: 40px;
  width: 100vw;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  .case-head {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    .head-img {
      width: 80%;
    }
    .zixun-img {
      width: 70px;
    }
  }
  .case-tab {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 36px;

    span {
      width: 46%;
      height: 54px;
      line-height: 54px;
      font-size: 22px;
      text-align: center;
      border: solid 1px #e04c4e;
    }
    .active {
      background: #e04c4e;
      color: white;
    }
  }
  .case-list {
    margin-top: 60px;
  }
  .case-foot {
    position: absolute;
    bottom: 3%;
    left: 0;
    img {
      width: 100%;
    }
  }
}
</style>
