<template>
  <div class="app__inner">
    <LNB />
    <div class="app__page">
      <Header />
      <div class="page__container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import LNB from '~/components/LNB';
import Header from '~/components/Header';

export default {
  components : {
    LNB,
    Header
  }  
};
</script>

<style lang="scss" scoped>
.app__inner {
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    font-size: 14px;
    color: $color-font;
    line-height: 1.4;
    height: 100vh;
    .app__page {
      height: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .page__header{
        height: 80px
      }
      .page__container{
        flex-grow: 1;
        overflow-y: auto;
      }
    }
  }
</style>
