<template>
    <div class="detail-wrap">
        <div class="detail-head">
            <img :src="require('@/assets/images/case-head.png')" alt="" class="head-img">
            <router-link to="http://baidu.com">
                <img :src="require('@/assets/images/zixun.png')" alt="" class="zixun-img">
            </router-link>
        </div>
        <div class="detail-title">HC数字营销咨询</div>
        <div class="detail-btns">
            <router-link to="/home">首页</router-link>
            <router-link to="/case/1">返回</router-link>
            <router-link to="/case/1">HC数字营销资讯</router-link>
        </div>
        <div class="line"></div>
        <div class="detail-con">
            <img class="con-img" :src="src" alt="">
        </div>
        <div class="detail-foot">
            <img :src="require('@/assets/images/case-foot.png')" alt="">
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    computed: {
        tag() {
            return this.$route.params.id
        },
        src() {
            return require(`@/assets/images/${this.tag}.jpg`)
        }
    }

}
</script>

<style scoped lang="less">
.detail-wrap {
  padding: 40px;
  width: 100vw;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  .detail-head {
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
  .detail-title {
    text-align: center;
    height: 60px;
    line-height: 60px;
    color: white;
    font-size: 28px;
    margin-top: 30px;
    letter-spacing: 4px;
    background: #e04c4e;
  }
  .detail-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 26px;
    a {
      padding: 10px 25px;
      border: solid 1px #e04c4e;
      font-size: 22px;
      color: #000;
    }
  }
  .detail-con {
    height: calc(100vh - 480px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .con-img {
      width: 100%;
    }
  }
  .detail-foot {
    position: absolute;
    bottom: 1%;
    left: 5%;
    width:90%;
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
