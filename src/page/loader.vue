<template>
    <div class="loader-wrap">
        <transition name="fade">
            <img v-if="visible" :src="require('@/assets/images/cen-logo.png')" class="cen-logo" alt="">
        </transition>
        <transition name="fade">
            <div v-if="!visible" class="red-mask"></div>
        </transition>
        <img :src="require('@/assets/images/foot-logo.png')" class="foot-logo" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    created() {
        setTimeout(() => {
            this.visible = true
            setTimeout(() => {
                this.$router.push('/home')
            }, 2000);
        }, 2000);
    }
}
</script>

<style scoped lang="less">
.loader-wrap {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .cen-logo {
    width: 145px;
    height: 145px;
    position: absolute;
    left: 50%;
    margin-left: -72.5px;
    top: 27%;
  }
  .red-mask {
    .cen-logo;
    background: #d61518;
    animation: red-block 3s ease both;
    transform-origin: 50% 50%;
    z-index: 999;
  }
  .foot-logo {
    width: 20%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 4%;
  }
}
</style>


