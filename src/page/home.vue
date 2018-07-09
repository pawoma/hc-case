<template>
    <div class="home-wrap">
        <img :src="require('@/assets/images/home-head.png')" alt="" class="home-head">
        <router-link to="/case/0"><img :src="require('@/assets/images/brand-design.png')" alt="" class="home-link1"></router-link>
        <router-link to="/case/1"><img :src="require('@/assets/images/digital-market.png')" alt="" class="home-link2" ></router-link>
        <img :src="require('@/assets/images/home-foot.png')" alt="" class="home-foot">
    </div>
</template>

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
  widows: 100vw;
  height: 100vh;
  position: relative;
  .home-head {
    .center;
    width: 533px;
    top: 7%;
  }
  .home-link1 {
    .link;
    width: 214px;
    top: 26%;
    margin-left: -107px;
    animation: zoomIn 1s ease both;
    transform-origin: 50% 50%;
  }
  .home-link2 {
    .link;
    width: 220px;
    bottom: 26%;
    margin-left: -110px;
    animation: zoomIn 1s ease both;
    transform-origin: 50% 50%;
  }
  .home-foot {
    .center;
    width: 453px;
    bottom: 5%;
  }
}
</style>
