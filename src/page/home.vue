<template>
    <div class="home-wrap">
        <img :src="require('@/assets/images/case-head.png')" alt="" class="home-head">
        <router-link to="/case/0"><img :src="require('@/assets/images/brand-design.png')" alt="" class="home-link1"></router-link>
        <router-link to="/case/1"><img :src="require('@/assets/images/digital-market.png')" alt="" class="home-link2"></router-link>
        <img :src="require('@/assets/images/home-foot.png')" alt="" class="home-foot">
    </div>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>

<style scoped lang="less">
.center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.link {
  position: absolute;
  left: 50%;
  cursor: pointer;
}
.home-wrap {
  width: 100vw;
  height: 100vh;
  position: relative;
  .home-head {
    width: 70%;
    margin: 0 auto;
    position: absolute;
    left: 15%;
    top: 5%;
  }
  .home-link1 {
    .link;
    width: 40%;
    top: 22%;
    margin-left: -20%;
    animation: zoomIn 1s ease both;
    transform-origin: 50% 50%;
  }
  .home-link2 {
    .link;
    width: 40%;
    bottom: 22%;
    margin-left: -20%;
    animation: zoomIn 1s ease both;
    transform-origin: 50% 50%;
  }
  .home-foot {
    .center;
    width: 80%;
    bottom: 5%;
  }
}
</style>
