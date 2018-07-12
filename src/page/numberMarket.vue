<template>
    <div class="detail-wrap">

        <div class="detail-con">
            <div class="con-wrap">
                <router-link to="/case/number/detail/dc"><img alt="" :src="require('@/assets/images/case1.png')"></router-link>
                <router-link to="/case/number/detail/px"><img alt="" :src="require('@/assets/images/case2.png')"></router-link>
                <router-link to="/case/number/detail/ds"><img alt="" :src="require('@/assets/images/case3.png')"></router-link>
                <router-link to="/case/number/detail/cy"><img alt="" :src="require('@/assets/images/case4.png')"></router-link>
                <router-link to="/case/number/detail/jy"><img alt="" :src="require('@/assets/images/case5.png')"></router-link>
                <router-link to="/case/number/detail/px2"><img alt="" :src="require('@/assets/images/case6.png')"></router-link>
                <router-link to="/case/number/detail/qc"><img alt="" :src="require('@/assets/images/case7.png')"></router-link>
                <router-link to="/case/number/detail/ppxc"><img alt="" :src="require('@/assets/images/case8.png')"></router-link>
                <router-link to="/case/number/detail/zf"><img alt="" :src="require('@/assets/images/case9.png')"></router-link>
                <router-link to="/case/number/detail/jr2"><img alt="" :src="require('@/assets/images/case10.png')"></router-link>
            </div>
        </div>

        <div class="slider-menu" :class="{'fold':fold}">
            <div class="tag-type tags">
                <span v-for="type in tagTypes" :key="type.value" :class="{active:type.active}" @click.self.stop="selectType(type.value)">{{type.name}}</span>
            </div>
            <div class="line"></div>
            <div class="tag-con tags">
                <span v-for="tag in tags" :key="tag.id" @click.self.stop="selectTag(tag.id)">{{tag.name}}</span>
            </div>
            <div class="menu-button" @click.self.stop="toggleMenu"></div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        this.tagTypes = [
            {
                name: '场景',
                value: 'changjing',
                active: true
            },
            {
                name: '形式',
                value: 'xingshi',
                active: false
            },
            {
                name: '行业',
                value: 'hangye',
                active: false
            },
            {
                name: '标签',
                value: 'all',
                active: false
            }
        ]
        this.allTags = [
            {
                name: '品牌宣传',
                id: 'ppxc',
                type: 'changjing'
            },
            {
                name: '活动宣传',
                id: 'hdxc',
                type: 'changjing'
            },
            {
                name: '招聘',
                id: 'zp',
                type: 'changjing'
            },
            {
                name: '期刊报告',
                id: 'qkbg',
                type: 'changjing'
            },
            {
                name: '邀请函',
                id: 'yqh',
                type: 'changjing'
            },
            {
                name: '节日祝福',
                id: 'jrzf',
                type: 'changjing'
            },
            {
                name: '手机网站',
                id: 'sjwz',
                type: 'changjing'
            },
            {
                name: 'pc网站',
                id: 'pcwz',
                type: 'changjing'
            },
            {
                name: '原型',
                id: 'yx',
                type: 'changjing'
            },
            {
                name: '视频/动画',
                id: 'sp',
                type: 'xingshi'
            },
            {
                name: '时间轴',
                id: 'sjz',
                type: 'xingshi'
            },
            {
                name: '效果模拟',
                id: 'xgmn',
                type: 'xingshi'
            },
            {
                name: '特色',
                id: 'ts',
                type: 'xingshi'
            },
            {
                name: '互动游戏',
                id: 'hdyx',
                type: 'xingshi'
            },
            {
                name: '单一交互',
                id: 'dyjh',
                type: 'xingshi'
            },
            {
                name: '3D世界',
                id: '3dsj',
                type: 'xingshi'
            },
            {
                name: '全景',
                id: 'qj',
                type: 'xingshi'
            },
            {
                name: '一镜到底',
                id: 'yjdd',
                type: 'xingshi'
            },
            {
                name: '调查测试',
                id: 'dccs',
                type: 'xingshi'
            },
            {
                name: '投票抽奖',
                id: 'tpcj',
                type: 'xingshi'
            },
            {
                name: '地产',
                id: 'dc',
                type: 'hangye'
            },
            {
                name: '餐饮',
                id: 'cy',
                type: 'hangye'
            },
            {
                name: '电商',
                id: 'ds',
                type: 'hangye'
            },
            {
                name: '教育',
                id: 'jy',
                type: 'hangye'
            },
            {
                name: '培训',
                id: 'px',
                type: 'hangye'
            },
            {
                name: '汽车',
                id: 'qc',
                type: 'hangye'
            },
            {
                name: '金融',
                id: 'jr',
                type: 'hangye'
            },
            {
                name: '政府',
                id: 'zf',
                type: 'hangye'
            }

        ]
        return {
            curType: 'changjing',
            fold: true,
        }
    },
    watch: {
        fold(val) {
            if (val) {
                document.body.removeEventListener('click', this.toggleMenu)
                return
            }
            document.body.addEventListener('click', this.toggleMenu)
        }
    },
    computed: {
        tags() {
            if (this.curType === 'all') {
                return this.allTags
            }
            return this.allTags.filter(it => it.type === this.curType)
        }
    },
    methods: {
        selectType(type) {
            this.tagTypes.forEach(item => {
                item.active = false
                if (item.value === type) {
                    item.active = true
                }
            })

            this.curType = type
        },
        selectTag(tag) {
            return
            this.$router.push(`/case/number/detail/${tag}`)
        },
        toggleMenu() {
            this.fold = !this.fold
        }
    }
}
</script>

<style scoped lang="less">
.detail-wrap {
  width: 100%;
  position: relative;
  .fold {
    transform: translateX(100%);
  }
  .slider-menu {
    position: fixed;
    transition: transform 0.4s ease;
    right: -4px;
    width: 80%;
    top: 16%;
    background: white;
    z-index: 999;
    border: solid 4px #b01109;
    padding: 26px;
    .menu-button {
      position: absolute;
      height: 36px;
      width: 36px;
      top: 50%;
      margin-top: -18px;
      left: -36px;
      z-index: 9999;
      cursor: pointer;
      &:before {
        content: "";
        position: absolute;
        top: 5px;
        right: 3px;
        border-bottom: 17px double #b0120a;
        border-top: 6px solid #b0120a;
        width: 30px;
        height: 5px;
      }
    }
    .tags {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        padding: 8px 0;
        cursor: pointer;
        // border: solid 1px #e04c4e;
        font-size: 20px;
        color: #000;
        text-align: center;
        flex-basis: 22%;
        margin-bottom: 20px;
      }
      .active {
        // background: #e04c4e;
        color: #e04c4e;
      }
    }

    .tag-type {
      flex-wrap: nowrap;
      span {
        margin: 0;
      }
    }
    .tag-con {
      flex-wrap: wrap;
      span {
        flex-basis: 28%;
      }
    }
  }
  .detail-con {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    height: calc(100vh - 440px);
    box-sizing: border-box;
    padding: 20px 0;
    .con-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      a {
        width: 45%;
        margin-bottom: 40px;
        display: block;
      }
      img {
        width: 100%;
      }
    }
  }
  .detail-foot {
    position: absolute;
    bottom: 3%;
    left: 0;
    img {
      width: 100%;
    }
  }
  .line {
    height: 1px;
    background: #cacaca;
    margin: 26px 0;
  }
}
</style>
